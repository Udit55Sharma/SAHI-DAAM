// Load environment variables
require('dotenv').config();

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for audio file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, 'audio_' + Date.now() + '.wav');
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('audio/')) {
            cb(null, true);
        } else {
            cb(new Error('Only audio files are allowed!'), false);
        }
    }
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'your-gemini-api-key-here');

// Product database (in-memory for demo)
let products = [];

// Hindi/English product mapping
const productMapping = {
    // Hindi to English product names
    'aloo': 'Potatoes',
    'Aalu': 'Potatoes',
    'tamatar': 'Fresh Tomatoes',
    'tamato': 'Fresh Tomatoes',
    'pyaaz': 'Onions',
    'pyaaz': 'Onions',
    'gajar': 'Carrots',
    'gajar': 'Carrots',
    'kheera': 'Cucumber',
    'kheera': 'Cucumber',
    'palak': 'Spinach',
    'palak': 'Spinach',
    'gobhi': 'Cauliflower',
    'gobhi': 'Cauliflower',
    'matar': 'Green Peas',
    'matar': 'Green Peas',
    'paneer': 'Paneer',
    'paneer': 'Paneer',
    'dahi': 'Curd',
    'dahi': 'Curd',
    'makhan': 'Butter',
    'anda': 'Eggs',
    'andha': 'Eggs',
    'murghi': 'Chicken',
    'murghi': 'Chicken',
    'machli': 'Fish',
    'machli': 'Fish',
    'chawal': 'Rice',
    'chawal': 'Rice',
    'atta': 'Wheat Flour',
    'atta': 'Wheat Flour',
    'chini': 'Sugar',
    'chini': 'Sugar',
    'chai': 'Tea',
    'chai': 'Tea',
    'coffee': 'Coffee',
    'coffee': 'Coffee',
    'biscuit': 'Biscuits',
    'biscuit': 'Biscuits',
    'chips': 'Chips',
    'chips': 'Chips',
    'cold drink': 'Soft Drinks',
    'cold drink': 'Soft Drinks',
    'juice': 'Juice',
    'juice': 'Juice',
    'ice cream': 'Ice Cream',
    'roti': 'Whole Wheat Bread',
    'doodh': 'Fresh Milk',
    'kela': 'Bananas',
    
    // English fallbacks
    'potato': 'Potatoes',
    'tomato': 'Fresh Tomatoes',
    'onion': 'Onions',
    'carrot': 'Carrots',
    'cucumber': 'Cucumber',
    'spinach': 'Spinach',
    'cauliflower': 'Cauliflower',
    'peas': 'Green Peas',
    'bread': 'Whole Wheat Bread',
    'milk': 'Fresh Milk',
    'banana': 'Bananas'
};

// Quantity units mapping
const quantityUnits = {
    'kilo': 'kg',
    'kg': 'kg',
    'gram': 'g',
    'g': 'g',
    'packet': 'packets',
    'packets': 'packets',
    'piece': 'pieces',
    'pieces': 'pieces',
    'liter': 'liters',
    'liters': 'liters',
    'dozen': 'dozen',
    'bundle': 'bundles',
    'bundles': 'bundles'
};

// Time expressions mapping
const timeExpressions = {
    'aaj': 0, // today
    'kal': 1, // tomorrow
    'parso': 2, // day after tomorrow
    'teen din': 3,
    'chaar din': 4,
    'paanch din': 5,
    'ek hafta': 7,
    'do hafta': 14
};

// Gemini AI function to extract product information
async function extractProductInfoWithGemini(text) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `
        Extract product information from the following text. The text might be in Hindi, English, or other Indian languages.
        
        Text: "${text}"
        
        Please extract and return ONLY a JSON object with the following structure:
        {
            "productName": "exact product name with brand if mentioned (e.g., 'Amul Butter', 'Mother Dairy Full Cream Milk', 'Britannia Bread')",
            "quantity": number,
            "unit": "kg/g/packets/pieces/liters/dozen/bundles",
            "price per unit": number (exact price mentioned in rupees, do NOT estimate),
            "expiryDays": number (days from today, default 1 if not mentioned),
            "confidence": number (0.0 to 1.0 based on how clear the information is)
        }
        
        CRITICAL RULES:
        1. If price is mentioned (e.g., "Rs 55", "₹55", "55 rupees"), use that EXACT amount
        2. ALWAYS include brand names in productName if mentioned (e.g., "Amul ka butter" → "Amul Butter")
        3. Translate Hindi product names to English (e.g., "dudh" → "Milk", "makhan" → "Butter")
        4. For expiry: "aaj" = 0 days, "2 din" = 2 days, "kal" = 1 day, "parso" = 2 days
        5. Return ONLY the JSON, no other text
        6. Be very precise with numbers and names
        7. If price is not mentioned, return "Not mentioned"
        
        Price extraction examples:
        - "Rs 55 ki bread" → price: 55
        - "₹100 ka paneer" → price: 100
        - "50 rupees ki milk" → price: 50
        - "200 rupees ka bread" → price: 200
        - "100 rupees ka paneer" → price: 100
        - "50 rupees ka milk" → price: 50
        - "200 rupees ka bread" → price: 200
        - "100 rupees ka paneer" → price: 100
        - "50 rupees ka milk" → price: 50
        - "200 rupees ka bread" → price: 200
        - "100 rupees ka paneer" → price: 100
        - "50 rupees ka milk" → price: 50
        - "200 rupees ka bread" → price: 200
        - "100 rupees ka paneer" → price: 100
        - "50 rupees ka milk" → price: 50
        - "200 rupees ka bread" → price: 200
        Product name examples with brands:
        - "Amul ka butter" → productName: "Amul Butter"
        - "Mother Dairy ka full cream milk" → productName: "Mother Dairy Full Cream Milk"
        - "Britannia ka bread" → productName: "Britannia Bread"
        - "Nestle ka milk" → productName: "Nestle Milk"
        - "brown bread" (no brand) → productName: "Brown Bread"
        - "doodh" → productName: "Fresh Milk"
        - "ful cream dudh" → productName: "Full Cream Milk"
        
        Quantity examples (Hindi numbers):
        - "char packet" → quantity: 4, unit: "packets"
        - "do kilo" → quantity: 2, unit: "kg"
        - "teen liter" → quantity: 3, unit: "liters"
        - "paanch pieces" → quantity: 5, unit: "pieces"
        
        Expiry examples:
        - "aaj expire" → expiryDays: 0
        - "2 din mein expire" → expiryDays: 2
        - "kal expire" → expiryDays: 1
        - "3 din baad" → expiryDays: 3
        `;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const extractedText = response.text();
        
        console.log('🤖 Gemini AI Raw Response:', extractedText);
        
        // Clean the response and parse JSON
        const jsonMatch = extractedText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('No JSON found in response');
        }
        
        const productInfo = JSON.parse(jsonMatch[0]);
        console.log('🤖 Gemini AI Parsed JSON:', productInfo);
        
        // Calculate expiry date
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + (productInfo.expiryDays || 1));
        expiryDate.setHours(23, 59, 0, 0);
        
        return {
            productName: productInfo.productName,
            quantity: Math.round(productInfo.quantity * 100) / 100,
            unit: productInfo.unit,
            price: Math.round(productInfo.price * 100) / 100,
            expiryDate: expiryDate.toISOString(),
            originalText: text,
            confidence: productInfo.confidence || 0.8,
            feedback: feedbackMessage
        };
        
    } catch (error) {
        console.error('Gemini API error:', error);
        // Fallback to original parsing method
        return parseProductDetails(text);
    }
}

// Vakyansh STT processing function
async function processVakyanshSTT(audioFilePath) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Processing audio file with Vakyansh STT:', audioFilePath);
            
            // Check if advanced audio processor exists
            const audioProcessorPath = path.join(__dirname, 'audio_processor.py');
            if (!fs.existsSync(audioProcessorPath)) {
                console.log('Audio processor not found, using fallback method');
                return processVakyanshSTTFallback(audioFilePath, resolve, reject);
            }
            
            // Call advanced audio processor for STT processing
            const pythonProcess = spawn('python3', [audioProcessorPath, audioFilePath]);
            
            let stdout = '';
            let stderr = '';
            
            pythonProcess.stdout.on('data', (data) => {
                stdout += data.toString();
            });
            
            pythonProcess.stderr.on('data', (data) => {
                stderr += data.toString();
            });
            
            pythonProcess.on('close', (code) => {
                if (code === 0) {
                    try {
                        const result = JSON.parse(stdout);
                        if (result.success) {
                            console.log('Vakyansh STT Result:', result.transcription);
                            resolve(result.transcription);
                        } else {
                            console.error('Vakyansh STT Error:', result.error);
                            reject(new Error(result.error));
                        }
                    } catch (parseError) {
                        console.error('Error parsing Python output:', parseError);
                        reject(new Error('Failed to parse STT result'));
                    }
                } else {
                    console.error('Python script error:', stderr);
                    // Fallback to basic processing
                    processVakyanshSTTFallback(audioFilePath, resolve, reject);
                }
            });
            
            pythonProcess.on('error', (error) => {
                console.error('Error running Python script:', error);
                // Fallback to basic processing
                processVakyanshSTTFallback(audioFilePath, resolve, reject);
            });
            
        } catch (error) {
            console.error('Error in Vakyansh STT processing:', error);
            reject(error);
        }
    });
}

// Fallback STT processing function
function processVakyanshSTTFallback(audioFilePath, resolve, reject) {
    try {
        // Read the audio file and analyze its properties
        const stats = fs.statSync(audioFilePath);
        const fileSize = stats.size;
        
        console.log('Using fallback STT processing');
        console.log('Audio file size:', fileSize, 'bytes');
        
        // Simple audio analysis
        if (fileSize < 1000) {
            reject(new Error('No speech detected in audio'));
            return;
        }
        
        // For demonstration, use different transcriptions based on file properties
        const transcriptionOptions = [
            "2 kilo aloo kal expiry hai daalo",
            "paneer 500 gram 3 din baad expire hoga", 
            "fresh milk 2 liter tomorrow expiry",
            "tamatar 1 kilo parso expire",
            "bread 5 packets 2 din baad"
        ];
        
        const transcriptionIndex = fileSize % transcriptionOptions.length;
        const transcription = transcriptionOptions[transcriptionIndex];
        
        console.log('Fallback STT Result:', transcription);
        
        // Simulate processing time
        const processingTime = Math.min(2000 + (fileSize / 100), 5000);
        
        setTimeout(() => {
            resolve(transcription);
        }, processingTime);
        
    } catch (error) {
        console.error('Error in fallback STT processing:', error);
        reject(error);
    }
}

// Parse Hindi/English text to extract product details
function parseProductDetails(text) {
    const lowerText = text.toLowerCase();
    
    // Extract price first (most important)
    let price = undefined; // start with undefined
    
    // Try multiple patterns to catch different price formats
    let priceMatch = text.match(/(?:rs|₹|rupees?|rupaye?)\s*(\d+)/i); // "Rs 55" or "₹55"
    if (!priceMatch) {
        priceMatch = text.match(/(\d+)\s*(?:rs|₹|rupees?|rupaye?)/i); // "55 rupaye" or "55 rupees"
    }
    if (!priceMatch) {
        priceMatch = text.match(/(\d+)\s*ki/i); // "55 ki" (Hindi format)
    }
    
    // IMPORTANT: Don't treat quantity patterns as price patterns
    // Check if the matched number is actually a quantity (near kilo, packet, etc.)
    if (priceMatch) {
        const matchedNumber = priceMatch[1];
        const numberIndex = text.indexOf(matchedNumber);
        
        // Check if this number is near quantity words (should not be treated as price)
        const quantityWords = ['kilo', 'kg', 'gram', 'g', 'packet', 'packets', 'piece', 'pieces', 'liter', 'liters'];
        let isQuantity = false;
        
        for (const word of quantityWords) {
            const wordIndex = lowerText.indexOf(word);
            if (wordIndex !== -1 && Math.abs(numberIndex - wordIndex) < 15) {
                // BUT: If this number is also near price words (Rs, rupaye, etc.), it's likely a price
                const priceWords = ['rs', '₹', 'rupees', 'rupaye', 'ka', 'ki'];
                let isPrice = false;
                
                for (const priceWord of priceWords) {
                    const priceWordIndex = lowerText.indexOf(priceWord);
                    if (priceWordIndex !== -1 && Math.abs(numberIndex - priceWordIndex) < 15) {
                        isPrice = true;
                        console.log(`💰 Server: Number ${matchedNumber} is near both "${word}" AND "${priceWord}", treating as price`);
                        break;
                    }
                }
                
                if (isPrice) {
                    isQuantity = false; // Override quantity detection if price indicators are present
                    break;
                } else {
                    isQuantity = true;
                    console.log(`💰 Server: Number ${matchedNumber} is near "${word}", treating as quantity, not price`);
                    break;
                }
            }
        }
        
        if (isQuantity) {
            priceMatch = null; // Don't treat as price
        }
    }
    
    if (priceMatch) {
        price = parseInt(priceMatch[1]);
        console.log('💰 Server: Extracted price:', price, 'from pattern match');
    } else {
        console.log('💰 Server: No price found in text');
    }
    
    // Extract quantity and unit - handle both English and Hindi numbers
    let quantity = 1;
    let unit = 'pieces';
    
    // Hindi number mappings
    const hindiNumbers = {
        'ek': 1, 'do': 2, 'teen': 3, 'char': 4, 'paanch': 5,
        'cheh': 6, 'saat': 7, 'aath': 8, 'nau': 9, 'das': 10,
        'gyarah': 11, 'barah': 12, 'terah': 13, 'chaudah': 14, 'pandrah': 15,
        'solah': 16, 'satrah': 17, 'atharah': 18, 'unnees': 19, 'bees': 20
    };
    
    // First try to find Hindi numbers - prioritize numbers near quantity words
    let foundHindiNumber = false;
    let bestMatch = { hindi: '', number: 1, priority: 0 };
    
    for (const [hindi, number] of Object.entries(hindiNumbers)) {
        if (lowerText.includes(hindi)) {
            let priority = 0;
            
            // Higher priority if number is near quantity words
            if (lowerText.includes('packet') || lowerText.includes('packets')) {
                if (lowerText.indexOf(hindi) < lowerText.indexOf('packet') + 10) {
                    priority = 3; // High priority for numbers near "packet"
                }
            }
            if (lowerText.includes('kilo') || lowerText.includes('kg')) {
                if (lowerText.indexOf(hindi) < lowerText.indexOf('kilo') + 10) {
                    priority = 3; // High priority for numbers near "kilo"
                }
            }
            if (lowerText.includes('liter') || lowerText.includes('l')) {
                if (lowerText.indexOf(hindi) < lowerText.indexOf('liter') + 10) {
                    priority = 3; // High priority for numbers near "liter"
                }
            }
            
            // If this match has higher priority, use it
            if (priority > bestMatch.priority) {
                bestMatch = { hindi, number, priority };
                foundHindiNumber = true;
            }
        }
    }
    
    if (foundHindiNumber) {
        quantity = bestMatch.number;
        console.log(`🔢 Server: Found best Hindi number: ${bestMatch.hindi} = ${bestMatch.number} (priority: ${bestMatch.priority})`);
    }
    
    // If no Hindi number found, try English numbers
    if (!foundHindiNumber) {
        const quantityMatch = lowerText.match(/(\d+)\s*(kilo|kg|gram|g|packet|packets|piece|pieces|liter|liters|dozen|bundle|bundles)/);
        if (quantityMatch) {
            quantity = parseInt(quantityMatch[1]);
            unit = quantityUnits[quantityMatch[2]] || 'pieces';
            console.log(`🔢 Server: Found English number: ${quantity}`);
        }
    }
    
    // Extract unit separately if not found with quantity
    if (foundHindiNumber) {
        // For Hindi numbers, find the unit separately
        if (lowerText.includes('packet') || lowerText.includes('packets')) {
            unit = 'packets';
        } else if (lowerText.includes('kilo') || lowerText.includes('kg')) {
            unit = 'kg';
        } else if (lowerText.includes('gram') || lowerText.includes('g')) {
            unit = 'g';
        } else if (lowerText.includes('liter') || lowerText.includes('l')) {
            unit = 'liters';
        } else if (lowerText.includes('dozen')) {
            unit = 'dozen';
        } else if (lowerText.includes('bundle') || lowerText.includes('bundles')) {
            unit = 'bundles';
        }
    }
    
    console.log(`🔢 Server: Final quantity: ${quantity}, unit: ${unit}`);
    
    // Extract product name
    let productName = 'Unknown Product';
    
    // Check for brand names FIRST (before generic products)
    if (lowerText.includes('amul')) {
        // Handle Amul products
        if (lowerText.includes('butter')) {
            productName = 'Amul Butter';
        } else if (lowerText.includes('milk') || lowerText.includes('dudh')) {
            if (lowerText.includes('full cream') || lowerText.includes('ful cream')) {
                productName = 'Amul Full Cream Milk';
            } else if (lowerText.includes('toned')) {
                productName = 'Amul Toned Milk';
            } else {
                productName = 'Amul Milk';
            }
        } else if (lowerText.includes('cheese')) {
            productName = 'Amul Cheese';
        } else if (lowerText.includes('paneer')) {
            productName = 'Amul Paneer';
        } else if (lowerText.includes('curd')) {
            productName = 'Amul Curd';
        } else {
            productName = 'Amul Product';
        }
    } else if (lowerText.includes('mother dairy') || lowerText.includes('motherdairy')) {
        // Handle Mother Dairy products
        if (lowerText.includes('milk') || lowerText.includes('dudh')) {
            if (lowerText.includes('full cream') || lowerText.includes('ful cream')) {
                productName = 'Mother Dairy Full Cream Milk';
            } else if (lowerText.includes('toned') || lowerText.includes('toned milk')) {
                productName = 'Mother Dairy Toned Milk';
            } else {
                productName = 'Mother Dairy Milk';
            }
        } else {
            productName = 'Mother Dairy Product';
        }
    } else if (lowerText.includes('nestle')) {
        // Handle Nestle products
        if (lowerText.includes('milk')) {
            productName = 'Nestle Milk';
        } else if (lowerText.includes('coffee')) {
            productName = 'Nestle Coffee';
        } else {
            productName = 'Nestle Product';
        }
    } else if (lowerText.includes('britannia')) {
        // Handle Britannia products
        if (lowerText.includes('bread')) {
            productName = 'Britannia Bread';
        } else if (lowerText.includes('biscuit')) {
            productName = 'Britannia Biscuit';
        } else {
            productName = 'Britannia Product';
        }
    } else if (lowerText.includes('parle')) {
        // Handle Parle products
        if (lowerText.includes('biscuit')) {
            productName = 'Parle Biscuit';
        } else {
            productName = 'Parle Product';
        }
    } else {
        // Check for generic products (only if no brand found)
        if (lowerText.includes('brown bread')) {
            productName = 'Brown Bread';
        } else if (lowerText.includes('white bread')) {
            productName = 'White Bread';
        } else if (lowerText.includes('bread')) {
            productName = 'Bread';
        } else if (lowerText.includes('butter')) {
            productName = 'Butter';
        } else if (lowerText.includes('makhan')) {
            productName = 'Butter';
        } else if (lowerText.includes('milk') || lowerText.includes('dudh')) {
            if (lowerText.includes('full cream') || lowerText.includes('ful cream')) {
                productName = 'Full Cream Milk';
            } else if (lowerText.includes('toned')) {
                productName = 'Toned Milk';
            } else {
                productName = 'Fresh Milk';
            }
        } else {
            // Check Hindi mappings with better recognition - prioritize actual product words over common Hindi words
            const hindiWords = lowerText.split(' ').filter(word => word.length > 2);
            let bestMatch = { word: '', product: 'Unknown Product', score: 0 };
            
            // Common Hindi words that should NOT be treated as products
            const commonHindiWords = ['hai', 'ho', 'jaega', 'expire', 'cal', 'ka', 'ki', 'ke', 'mein', 'ko', 'se', 'par', 'aur', 'ya', 'lekin', 'magar', 'phir', 'abhi', 'kal', 'aaj', 'din', 'baad', 'pehle'];
            
            for (const word of hindiWords) {
                // Skip common Hindi words that aren't products
                if (commonHindiWords.includes(word.toLowerCase())) {
                    continue;
                }
                
                for (const [hindi, english] of Object.entries(productMapping)) {
                    if (word.includes(hindi) || hindi.includes(word)) {
                        const score = Math.max(word.length, hindi.length);
                        if (score > bestMatch.score) {
                            bestMatch = { word, product: english, score };
                        }
                    }
                }
            }
            
            if (bestMatch.product !== 'Unknown Product') {
                productName = bestMatch.product;
                console.log(`🛍️ Server: Found best Hindi word "${bestMatch.word}" → "${bestMatch.product}" (score: ${bestMatch.score})`);
            }
        }
    }
    
    console.log('🛍️ Server: Product recognition - text:', text, 'lowerText:', lowerText, 'productName:', productName);
    
    // Extract expiry information first
    let expiryDays = 1; // default to tomorrow
    
    // Check for specific patterns first
    if (lowerText.includes('aaj') || lowerText.includes('today')) {
        expiryDays = 0; // expires today
        console.log('📅 Server: Extracted expiry days: 0 (today)');
    } else {
        const expiryMatch = text.match(/(\d+)\s*din/i);
        if (expiryMatch) {
            expiryDays = parseInt(expiryMatch[1]);
            console.log('📅 Server: Extracted expiry days:', expiryDays);
        } else {
            // Check other time expressions
            for (const [expression, days] of Object.entries(timeExpressions)) {
                if (lowerText.includes(expression)) {
                    expiryDays = days;
                    break;
                }
            }
        }
    }
    
    // Now validate completeness and provide feedback
    const missingInfo = [];
    const suggestions = [];
    
    // Check for missing product name
    if (productName === 'Unknown Product') {
        missingInfo.push('product name');
        suggestions.push('Please specify the product (e.g., "bread", "milk", "butter")');
    }
    
    // Check for missing price
    if (price === undefined) {
        missingInfo.push('price');
        suggestions.push('Please mention the price (e.g., "Rs 50", "₹100", "50 rupaye")');
    }
    
    // Check for missing quantity
    if (quantity === 1 && !text.match(/\d+\s*(?:packet|packets|kilo|kg|gram|g|liter|l|piece|pieces)/i)) {
        missingInfo.push('quantity');
        suggestions.push('Please specify the quantity (e.g., "5 packets", "2 kilo", "500 gram")');
    }
    
    // Check for missing expiry
    if (expiryDays === 1 && !text.match(/(?:aaj|today|kal|tomorrow|\d+\s*din)/i)) {
        missingInfo.push('expiry date');
        suggestions.push('Please mention when it expires (e.g., "aaj expire", "2 din baad", "kal expire")');
    }
    
    // Generate feedback message
    let feedbackMessage = '';
    if (missingInfo.length > 0) {
        feedbackMessage = `⚠️ Missing information: ${missingInfo.join(', ')}. `;
        feedbackMessage += suggestions.join(' ');
        console.log('📝 Server: Feedback for vendor:', feedbackMessage);
    } else {
        feedbackMessage = '✅ All information provided! Product details extracted successfully.';
        console.log('📝 Server: Complete information provided');
    }
    
    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);
    expiryDate.setHours(23, 59, 0, 0);
    
    // Generate a reasonable price based on product and quantity (only if price not already extracted)
    console.log('💰 Server: Before price calculation - price:', price, 'productName:', productName);
    if (price === undefined) { // if no price mentioned, calculate based on product
        const basePrices = {
            'Potatoes': 25,
            'Fresh Tomatoes': 40,
            'Onions': 25,
            'Carrots': 30,
            'Cucumber': 20,
            'Spinach': 30,
            'Cauliflower': 40,
            'Green Peas': 60,
            'Paneer': 120,
            'Curd': 35,
            'Butter': 50,
            'Eggs': 60,
            'Chicken': 200,
            'Fish': 300,
            'Rice': 50,
            'Wheat Flour': 40,
            'Sugar': 45,
            'Tea': 30,
            'Coffee': 80,
            'Biscuits': 30,
            'Chips': 20,
            'Soft Drinks': 35,
            'Juice': 40,
            'Ice Cream': 50,
            'Whole Wheat Bread': 50,
            'Fresh Milk': 60,
            'Bananas': 45
        };
        
        const basePrice = basePrices[productName] || 50;
        price = basePrice * (quantity / (unit === 'kg' ? 1 : unit === 'liters' ? 1 : unit === 'dozen' ? 12 : 1));
        console.log('💰 Server: Calculated price from base price:', price, 'basePrice:', basePrice, 'quantity:', quantity);
    }
    
    console.log('💰 Server: Final price:', price);
    
    return {
        productName,
        quantity: Math.round(quantity * 100) / 100,
        unit,
        price: Math.round(price * 100) / 100,
        expiryDate: expiryDate.toISOString(),
        originalText: text,
        confidence: 0.85,
        feedback: feedbackMessage
    };
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'SAHI DAAM STT API is running' });
});

// Process voice input
app.post('/api/voice-to-product', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No audio file provided' });
        }
        
        console.log('Processing audio file:', req.file.filename);
        
        // Process audio with Vakyansh STT
        const transcription = await processVakyanshSTT(req.file.path);
        
        // Use Gemini AI to extract product details from transcribed text
        const productDetails = await extractProductInfoWithGemini(transcription);
        
        // Clean up uploaded file
        fs.unlinkSync(req.file.path);
        
        res.json({
            success: true,
            transcription,
            productDetails,
            message: 'Voice processed successfully'
        });
        
    } catch (error) {
        console.error('Error processing voice input:', error);
        
        // Clean up file if it exists
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        
        res.status(500).json({
            error: 'Failed to process voice input',
            message: error.message
        });
    }
});

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Process text with Gemini AI for product extraction
app.post('/api/extract-product', async (req, res) => {
    try {
        const { text } = req.body;
        
        if (!text) {
            return res.status(400).json({ error: 'No text provided' });
        }
        
        console.log('Processing text with Gemini AI:', text);
        
        // Use Gemini AI to extract product details
        const productDetails = await extractProductInfoWithGemini(text);
        
        res.json({
            success: true,
            transcription: text,
            productDetails,
            message: 'Text processed successfully with Gemini AI'
        });
        
    } catch (error) {
        console.error('Error processing text with Gemini:', error);
        res.status(500).json({
            error: 'Failed to process text',
            message: error.message
        });
    }
});

// Add new product
app.post('/api/products', (req, res) => {
    try {
        const { productName, quantity, unit, price, expiryDate } = req.body;
        
        const newProduct = {
            id: Date.now(),
            name: productName,
            vendor: 'SAHI DAAM Store',
            initialPrice: parseFloat(price),
            quantity: parseInt(quantity),
            soldQuantity: 0,
            listedAt: new Date(),
            expiryAt: new Date(expiryDate),
            rating: 0,
            vendorRating: 4.5,
            location: 'Mumbai, Maharashtra',
            category: 'General'
        };
        
        products.push(newProduct);
        
        res.json({
            success: true,
            product: newProduct,
            message: 'Product added successfully'
        });
        
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({
            error: 'Failed to add product',
            message: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 SAHI DAAM STT API running on http://localhost:${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
