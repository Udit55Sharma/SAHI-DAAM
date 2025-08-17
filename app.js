// Enhanced mock database with more features - Delhi NCR locations
let products = [
    {
        id: 1,
        name: 'Fresh Tomatoes',
        vendor: 'Sharma Vegetables',
        initialPrice: 40.00,
        quantity: 10,
        soldQuantity: 3,
        listedAt: new Date(new Date().getTime() - 24 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 48 * 3600 * 1000),
        rating: 4.5,
        vendorRating: 4.8,
        location: 'Greater Noida, Uttar Pradesh',
        category: 'Vegetables',
        coordinates: { lat: 28.4744, lng: 77.5040 },
        address: 'Sector Alpha, Greater Noida, UP'
    },
    {
        id: 2,
        name: 'Whole Wheat Bread',
        vendor: 'Gupta Bakery',
        initialPrice: 50.00,
        quantity: 15,
        soldQuantity: 8,
        listedAt: new Date(),
        expiryAt: new Date(new Date().getTime() + 24 * 3600 * 1000),
        rating: 4.2,
        vendorRating: 4.6,
        location: 'Greater Noida, Uttar Pradesh',
        category: 'Bakery',
        coordinates: { lat: 28.4844, lng: 77.5140 },
        address: 'Sector Beta, Greater Noida, UP'
    },
    {
        id: 3,
        name: 'Fresh Milk',
        vendor: 'Daily Dairy Co.',
        initialPrice: 60.00,
        quantity: 20,
        soldQuantity: 15,
        listedAt: new Date(new Date().getTime() - 12 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 12 * 3600 * 1000),
        rating: 4.7,
        vendorRating: 4.9,
        location: 'Noida, Uttar Pradesh',
        category: 'Dairy',
        coordinates: { lat: 28.5355, lng: 77.3910 },
        address: 'Sector 62, Noida, UP'
    },
    {
        id: 4,
        name: 'Paneer',
        vendor: 'Fresh Dairy',
        initialPrice: 120.00,
        quantity: 8,
        soldQuantity: 2,
        listedAt: new Date(new Date().getTime() - 6 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 18 * 3600 * 1000),
        rating: 4.4,
        vendorRating: 4.7,
        location: 'Ghaziabad, Uttar Pradesh',
        category: 'Dairy',
        coordinates: { lat: 28.6692, lng: 77.4538 },
        address: 'Raj Nagar, Ghaziabad, UP'
    },
    {
        id: 5,
        name: 'Spinach',
        vendor: 'Green Grocers',
        initialPrice: 30.00,
        quantity: 12,
        soldQuantity: 9,
        listedAt: new Date(new Date().getTime() - 18 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 6 * 3600 * 1000),
        rating: 4.1,
        vendorRating: 4.3,
        location: 'Greater Noida, Uttar Pradesh',
        category: 'Vegetables',
        coordinates: { lat: 28.4644, lng: 77.4940 },
        address: 'Sector Gamma, Greater Noida, UP'
    },
    {
        id: 6,
        name: 'Brown Bread',
        vendor: 'Britannia Store',
        initialPrice: 45.00,
        quantity: 25,
        soldQuantity: 12,
        listedAt: new Date(new Date().getTime() - 8 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 16 * 3600 * 1000),
        rating: 4.3,
        vendorRating: 4.5,
        location: 'Noida, Uttar Pradesh',
        category: 'Bakery',
        coordinates: { lat: 28.5455, lng: 77.4010 },
        address: 'Sector 51, Noida, UP'
    },
    {
        id: 7,
        name: 'Amul Butter',
        vendor: 'Amul Corner',
        initialPrice: 55.00,
        quantity: 18,
        soldQuantity: 7,
        listedAt: new Date(new Date().getTime() - 4 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 20 * 3600 * 1000),
        rating: 4.6,
        vendorRating: 4.8,
        location: 'Delhi',
        category: 'Dairy',
        coordinates: { lat: 28.7041, lng: 77.1025 },
        address: 'Dwarka, New Delhi'
    },
    {
        id: 8,
        name: 'Fresh Onions',
        vendor: 'City Market',
        initialPrice: 35.00,
        quantity: 30,
        soldQuantity: 18,
        listedAt: new Date(new Date().getTime() - 16 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 8 * 3600 * 1000),
        rating: 4.0,
        vendorRating: 4.2,
        location: 'Faridabad, Haryana',
        category: 'Vegetables',
        coordinates: { lat: 28.4089, lng: 77.3178 },
        address: 'Sector 15, Faridabad, HR'
    },
    {
        id: 9,
        name: 'Fresh Potatoes',
        vendor: 'Kumar Grocers',
        initialPrice: 25.00,
        quantity: 40,
        soldQuantity: 22,
        listedAt: new Date(new Date().getTime() - 20 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 4 * 3600 * 1000),
        rating: 4.2,
        vendorRating: 4.4,
        location: 'Greater Noida, Uttar Pradesh',
        category: 'Vegetables',
        coordinates: { lat: 28.4944, lng: 77.5240 },
        address: 'Sector Delta, Greater Noida, UP'
    },
    {
        id: 10,
        name: 'Curd (Dahi)',
        vendor: 'Village Dairy',
        initialPrice: 80.00,
        quantity: 15,
        soldQuantity: 8,
        listedAt: new Date(new Date().getTime() - 10 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 14 * 3600 * 1000),
        rating: 4.5,
        vendorRating: 4.7,
        location: 'Noida, Uttar Pradesh',
        category: 'Dairy',
        coordinates: { lat: 28.5555, lng: 77.4110 },
        address: 'Sector 76, Noida, UP'
    },
    {
        id: 11,
        name: 'Multigrain Bread',
        vendor: 'Health Bakery',
        initialPrice: 65.00,
        quantity: 12,
        soldQuantity: 5,
        listedAt: new Date(new Date().getTime() - 6 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 18 * 3600 * 1000),
        rating: 4.4,
        vendorRating: 4.6,
        location: 'Gurugram, Haryana',
        category: 'Bakery',
        coordinates: { lat: 28.4595, lng: 77.0266 },
        address: 'Sector 56, Gurugram, HR'
    },
    {
        id: 12,
        name: 'Fresh Carrots',
        vendor: 'Organic Farm',
        initialPrice: 35.00,
        quantity: 20,
        soldQuantity: 12,
        listedAt: new Date(new Date().getTime() - 14 * 3600 * 1000),
        expiryAt: new Date(new Date().getTime() + 10 * 3600 * 1000),
        rating: 4.6,
        vendorRating: 4.8,
        location: 'Greater Noida, Uttar Pradesh',
        category: 'Vegetables',
        coordinates: { lat: 28.5044, lng: 77.5340 },
        address: 'Sector Eta, Greater Noida, UP'
    }
];

let orders = [
    {
        id: 'SD123456',
        customerName: 'Rahul Kumar',
        items: [
            { productId: 1, quantity: 2, price: 32.00 }
        ],
        total: 64.00,
        status: 'pending',
        orderTime: new Date(new Date().getTime() - 30 * 60 * 1000),
        pickupTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
    },
    {
        id: 'SD123457',
        customerName: 'Priya Sharma',
        items: [
            { productId: 3, quantity: 1, price: 45.00 }
        ],
        total: 45.00,
        status: 'completed',
        orderTime: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
        pickupTime: new Date(new Date().getTime() - 1 * 60 * 60 * 1000)
    }
];

let nextId = 13;
let nextOrderId = 'SD123458';

// Map functionality
let map;
let userLocation = null;
let markers = [];
let userMarker = null;
let routeLayer = null;

// Enhanced AI dynamic pricing with multiple factors
function calculateDynamicPrice(product) {
    const now = new Date();
    const timeUntilExpiry = product.expiryAt.getTime() - now.getTime();
    const totalLifetime = product.expiryAt.getTime() - product.listedAt.getTime();
    
    if (timeUntilExpiry <= 0) {
        return 0;
    }
    
    const timeRemainingRatio = timeUntilExpiry / totalLifetime;
    const stockRatio = (product.quantity - product.soldQuantity) / product.quantity;
    const timeOfDay = now.getHours();
    
    // Base discount from expiry
    let discountPercentage = 0;
    
    if (timeRemainingRatio > 0.5) {
        discountPercentage = (1 - timeRemainingRatio) * 0.15;
    } else if (timeRemainingRatio > 0.25) {
        discountPercentage = 0.15 + (0.5 - timeRemainingRatio) * 0.5;
    } else {
        discountPercentage = 0.35 + (0.25 - timeRemainingRatio) * 2.6;
    }
    
    // Stock-based discount
    if (stockRatio > 0.7) {
        discountPercentage += 0.1;
    }
    
    // Time of day discount (evening rush)
    if (timeOfDay >= 17 && timeOfDay <= 21) {
        discountPercentage += 0.05;
    }
    
    // Demand-based discount (low rating = low demand)
    if (product.rating < 4.0) {
        discountPercentage += 0.1;
    }
    
    discountPercentage = Math.min(discountPercentage, 0.85);
    const discountedPrice = product.initialPrice * (1 - discountPercentage);
    
    return Math.round(discountedPrice * 100) / 100;
}

// Voice assistant with Vakyansh STT integration
let mediaRecorder;
let audioChunks = [];
let isRecording = false;

function simulateVoiceAssistant() {
    const voiceBtn = document.getElementById('voice-record-btn');
    const voiceStatus = document.getElementById('voice-status');
    const voiceResult = document.getElementById('voice-result');
    const extractedData = document.getElementById('extracted-data');
    
    voiceBtn.addEventListener('click', async function() {
        if (isRecording) {
            // Stop recording
            stopRecording();
        } else {
            // Start recording
            await startRecording();
        }
    });
    
    // Confirm voice data
    document.getElementById('confirm-voice').addEventListener('click', async function() {
        const productDetails = JSON.parse(extractedData.dataset.productDetails || '{}');
        
        if (productDetails.productName) {
            try {
                // Add product to backend
                const response = await fetch('http://localhost:3001/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productName: productDetails.productName,
                        quantity: productDetails.quantity,
                        unit: productDetails.unit,
                        price: productDetails.price,
                        expiryDate: productDetails.expiryDate
                    })
                });
                
                if (response.ok) {
                    const result = await response.json();
                    
                    // Add to local products array
                    products.push(result.product);
                    renderVendorView();
                    voiceResult.classList.add('hidden');
                    
                    // Show success message
                    voiceStatus.textContent = 'Product added successfully!';
                    setTimeout(() => {
                        voiceStatus.textContent = 'Tap to start recording';
                    }, 3000);
                } else {
                    throw new Error('Failed to add product');
                }
            } catch (error) {
                console.error('Error adding product:', error);
                voiceStatus.textContent = 'Error adding product. Please try again.';
                setTimeout(() => {
                    voiceStatus.textContent = 'Tap to start recording';
                }, 3000);
            }
        }
    });
}

async function startRecording() {
    try {
        // Use Web Speech API directly for real-time transcription
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            console.log('Web Speech API is available');
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            
            // Try English first for better English recognition
            recognition.lang = 'en-US'; // Use US English for better English recognition
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            const voiceBtn = document.getElementById('voice-record-btn');
            const voiceStatus = document.getElementById('voice-status');
            
            voiceBtn.classList.add('recording', 'voice-recording');
            voiceStatus.textContent = 'Listening... Speak now';
            document.getElementById('voice-result').classList.add('hidden');
            
            recognition.onstart = () => {
                isRecording = true;
                voiceStatus.textContent = 'Listening... Speak now';
            };
            
            recognition.onresult = async (event) => {
                const transcript = event.results[0][0].transcript;
                console.log('🎤 Web Speech API Result:', transcript);
                console.log('Original transcript:', transcript);
                
                // Use Gemini API to extract product details
                try {
                    const response = await fetch('http://localhost:3001/api/extract-product', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ text: transcript })
                    });
                    
                    if (response.ok) {
                        const result = await response.json();
                        const productDetails = result.productDetails;
                        
                        console.log('🤖 Gemini AI extracted:', productDetails);
                        
                        // Display transcription and extracted data
                        const extractedData = document.getElementById('extracted-data');
                        extractedData.innerHTML = `
                            <div class="mb-3 p-2 bg-gray-50 rounded">
                                <p class="text-xs text-gray-600 mb-1">Transcription:</p>
                                <p class="text-sm font-medium">"${transcript}"</p>
                            </div>
                            <div class="space-y-2">
                                <p><strong>Product:</strong> ${productDetails.productName}</p>
                                <p><strong>Quantity:</strong> ${productDetails.quantity} ${productDetails.unit}</p>
                                <p><strong>Price:</strong> ${productDetails.price !== undefined ? `₹${productDetails.price}` : 'Not specified'}</p>
                                <p><strong>Expiry:</strong> ${new Date(productDetails.expiryDate).toLocaleDateString()}</p>
                                <p class="text-xs text-gray-500">Confidence: ${(productDetails.confidence * 100).toFixed(1)}%</p>
                                <p class="text-xs text-green-600">✨ Powered by Gemini AI</p>
                                ${productDetails.feedback ? `
                                    <div class="mt-3 p-3 rounded-lg ${productDetails.feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                        <p class="text-sm font-medium">${productDetails.feedback}</p>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                        
                        // Store product details for confirmation
                        extractedData.dataset.productDetails = JSON.stringify(productDetails);
                        
                        document.getElementById('voice-result').classList.remove('hidden');
                        voiceStatus.textContent = 'Tap to start recording';
                        isRecording = false;
                        voiceBtn.classList.remove('recording', 'voice-recording');
                        
                    } else {
                        throw new Error('Failed to process with Gemini AI');
                    }
                    
                } catch (error) {
                    console.error('Gemini API error:', error);
                    // Fallback to local parsing
                    const productDetails = parseRealTranscription(transcript);
                    
                    // Display transcription and extracted data
                    const extractedData = document.getElementById('extracted-data');
                    extractedData.innerHTML = `
                        <div class="mb-3 p-2 bg-gray-50 rounded">
                            <p class="text-xs text-gray-600 mb-1">Transcription:</p>
                            <p class="text-sm font-medium">"${transcript}"</p>
                        </div>
                        <div class="space-y-2">
                            <p><strong>Product:</strong> ${productDetails.productName}</p>
                            <p><strong>Quantity:</strong> ${productDetails.quantity} ${productDetails.unit}</p>
                            <p><strong>Price:</strong> ${productDetails.price !== undefined ? `₹${productDetails.price}` : 'Not specified'}</p>
                            <p><strong>Expiry:</strong> ${new Date(productDetails.expiryDate).toLocaleDateString()}</p>
                            <p class="text-xs text-gray-500">Confidence: ${(productDetails.confidence * 100).toFixed(1)}%</p>
                            <p class="text-xs text-orange-600">⚠️ Using fallback parsing</p>
                            ${productDetails.feedback ? `
                                <div class="mt-3 p-3 rounded-lg ${productDetails.feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                    <p class="text-sm font-medium">${productDetails.feedback}</p>
                                </div>
                            ` : ''}
                        </div>
                    `;
                    
                    // Store product details for confirmation
                    extractedData.dataset.productDetails = JSON.stringify(productDetails);
                    
                    document.getElementById('voice-result').classList.remove('hidden');
                    voiceStatus.textContent = 'Tap to start recording';
                    isRecording = false;
                    voiceBtn.classList.remove('recording', 'voice-recording');
                }
            };
            
            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                voiceStatus.textContent = 'Error: ' + event.error + '. Please try again.';
                setTimeout(() => {
                    voiceStatus.textContent = 'Tap to start recording';
                }, 3000);
                isRecording = false;
                voiceBtn.classList.remove('recording', 'voice-recording');
            };
            
            recognition.onend = () => {
                isRecording = false;
                voiceBtn.classList.remove('recording', 'voice-recording');
            };
            
            // Start recognition
            recognition.start();
            
        } else {
            console.log('❌ Web Speech API not available, using fallback audio recording');
            // Fallback to audio recording
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            
            audioChunks = [];
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = async () => {
                await processAudio();
            };
            
            mediaRecorder.start();
            isRecording = true;
            
            const voiceBtn = document.getElementById('voice-record-btn');
            const voiceStatus = document.getElementById('voice-status');
            
            voiceBtn.classList.add('recording', 'voice-recording');
            voiceStatus.textContent = 'Recording... Speak now';
            document.getElementById('voice-result').classList.add('hidden');
        }
        
    } catch (error) {
        console.error('Error starting recording:', error);
        alert('Unable to access microphone. Please check permissions.');
    }
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        
        const voiceBtn = document.getElementById('voice-record-btn');
        const voiceStatus = document.getElementById('voice-status');
        
        voiceBtn.classList.remove('recording', 'voice-recording');
        voiceStatus.textContent = 'Processing with Vakyansh STT...';
        
        // Stop all tracks
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}

async function processAudio() {
    try {
        const voiceStatus = document.getElementById('voice-status');
        const voiceResult = document.getElementById('voice-result');
        const extractedData = document.getElementById('extracted-data');
        
        // Use Web Speech API for real-time transcription
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            
            // Support multiple Indian languages for better recognition
            recognition.lang = 'en-US,hi-IN,ta-IN,te-IN,kn-IN,ml-IN,gu-IN,pa-IN,bn-IN,mr-IN'; // US English first, then Hindi, then other Indian languages
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            recognition.onstart = () => {
                voiceStatus.textContent = 'Listening... Speak now';
            };
            
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log('🎤 Web Speech API Result (processAudio):', transcript);
                console.log('Original transcript:', transcript);
                
                // Parse the real transcription
                const productDetails = parseRealTranscription(transcript);
                
                // Display transcription and extracted data
                extractedData.innerHTML = `
                    <div class="mb-3 p-2 bg-gray-50 rounded">
                        <p class="text-xs text-gray-600 mb-1">Transcription:</p>
                        <p class="text-sm font-medium">"${transcript}"</p>
                    </div>
                    <div class="space-y-2">
                        <p><strong>Product:</strong> ${productDetails.productName}</p>
                        <p><strong>Quantity:</strong> ${productDetails.quantity} ${productDetails.unit}</p>
                        <p><strong>Price:</strong> ${productDetails.price !== undefined ? `₹${productDetails.price}` : 'Not specified'}</p>
                        <p><strong>Expiry:</strong> ${new Date(productDetails.expiryDate).toLocaleDateString()}</p>
                        <p class="text-xs text-gray-500">Confidence: ${(productDetails.confidence * 100).toFixed(1)}%</p>
                        ${productDetails.feedback ? `
                            <div class="mt-3 p-3 rounded-lg ${productDetails.feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                <p class="text-sm font-medium">${productDetails.feedback}</p>
                            </div>
                        ` : ''}
                    </div>
                `;
                
                // Store product details for confirmation
                extractedData.dataset.productDetails = JSON.stringify(productDetails);
                
                voiceResult.classList.remove('hidden');
                voiceStatus.textContent = 'Tap to start recording';
            };
            
            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                voiceStatus.textContent = 'Error: ' + event.error + '. Please try again.';
                setTimeout(() => {
                    voiceStatus.textContent = 'Tap to start recording';
                }, 3000);
            };
            
            recognition.onend = () => {
                // Recognition ended
            };
            
            // Start recognition
            recognition.start();
            
        } else {
            console.log('❌ Web Speech API not available, using fallback audio processing');
            // Fallback to audio file processing
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');
            
            const response = await fetch('http://localhost:3001/api/voice-to-product', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                const result = await response.json();
                
                extractedData.innerHTML = `
                    <div class="mb-3 p-2 bg-gray-50 rounded">
                        <p class="text-xs text-gray-600 mb-1">Transcription:</p>
                        <p class="text-sm font-medium">"${result.transcription}"</p>
                    </div>
                    <div class="space-y-2">
                        <p><strong>Product:</strong> ${result.productDetails.productName}</p>
                        <p><strong>Quantity:</strong> ${result.productDetails.quantity} ${result.productDetails.unit}</p>
                        <p><strong>Price:</strong> ${result.productDetails.price !== undefined ? `₹${result.productDetails.price}` : 'Not specified'}</p>
                        <p><strong>Expiry:</strong> ${new Date(result.productDetails.expiryDate).toLocaleDateString()}</p>
                        <p class="text-xs text-gray-500">Confidence: ${(result.productDetails.confidence * 100).toFixed(1)}%</p>
                        ${result.productDetails.feedback ? `
                            <div class="mt-3 p-3 rounded-lg ${result.productDetails.feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                <p class="text-sm font-medium">${result.productDetails.feedback}</p>
                            </div>
                        ` : ''}
                    </div>
                `;
                
                extractedData.dataset.productDetails = JSON.stringify(result.productDetails);
                voiceResult.classList.remove('hidden');
                voiceStatus.textContent = 'Tap to start recording';
            } else {
                throw new Error('Failed to process audio');
            }
        }
        
    } catch (error) {
        console.error('Error processing audio:', error);
        const voiceStatus = document.getElementById('voice-status');
        voiceStatus.textContent = 'Error processing audio. Please try again.';
        setTimeout(() => {
            voiceStatus.textContent = 'Tap to start recording';
        }, 3000);
    }
}

// Parse real transcription from Web Speech API
function parseRealTranscription(transcript) {
    const lowerText = transcript.toLowerCase();
    
    // Extract price first (most important)
    let price = undefined; // start with undefined
    const priceMatch = transcript.match(/(?:rs|₹|rupees?|rupaye?)\s*(\d+)/i);
    if (priceMatch) {
        price = parseInt(priceMatch[1]);
        console.log('💰 Extracted price:', price);
    } else {
        console.log('💰 No price found in transcript');
    }
    
    // Quantity units mapping - Multi-language support
    const quantityUnits = {
        // Hindi
        'kilo': 'kg', 'kg': 'kg', 'gram': 'g', 'g': 'g', 'packet': 'packets', 'packets': 'packets',
        'piece': 'pieces', 'pieces': 'pieces', 'liter': 'liters', 'liters': 'liters', 'dozen': 'dozen',
        'bundle': 'bundles', 'bundles': 'bundles',
        // English
        'kilogram': 'kg', 'kilograms': 'kg', 'grams': 'g', 'pieces': 'pieces', 'bottles': 'bottles',
        'packets': 'packets', 'boxes': 'boxes', 'bags': 'bags', 'cans': 'cans',
        // Tamil
        'கிலோ': 'kg', 'கிராம்': 'g', 'பாக்கெட்': 'packets', 'துண்டு': 'pieces',
        // Telugu
        'కిలో': 'kg', 'గ్రామ్': 'g', 'ప్యాకెట్': 'packets', 'ముక్క': 'pieces',
        // Kannada
        'ಕಿಲೋ': 'kg', 'ಗ್ರಾಂ': 'g', 'ಪ್ಯಾಕೆಟ್': 'packets', 'ತುಂಡು': 'pieces',
        // Malayalam
        'കിലോ': 'kg', 'ഗ്രാം': 'g', 'പാക്കറ്റ്': 'packets', 'കഷണം': 'pieces',
        // Gujarati
        'કિલો': 'kg', 'ગ્રામ': 'g', 'પેકેટ': 'packets', 'ટુકડો': 'pieces',
        // Punjabi
        'ਕਿਲੋ': 'kg', 'ਗ੍ਰਾਮ': 'g', 'ਪੈਕੇਟ': 'packets', 'ਟੁਕੜਾ': 'pieces',
        // Bengali
        'কিলো': 'kg', 'গ্রাম': 'g', 'প্যাকেট': 'packets', 'টুকরা': 'pieces',
        // Marathi
        'किलो': 'kg', 'ग्रॅम': 'g', 'पॅकेट': 'packets', 'तुकडा': 'pieces'
    };
    
    // Product mapping - Multi-language support
    const productMapping = {
        // Hindi
        'aloo': 'Potatoes', 'Aalu' : 'Potatoes', 'tamatar': 'Fresh Tomatoes', 'pyaaz': 'Onions', 'gajar': 'Carrots',
        'kheera': 'Cucumber', 'palak': 'Spinach', 'gobhi': 'Cauliflower', 'matar': 'Green Peas',
        'paneer': 'Paneer', 'dahi': 'Curd', 'makhan': 'Butter', 'anda': 'Eggs',
        'murghi': 'Chicken', 'machli': 'Fish', 'chawal': 'Rice', 'atta': 'Wheat Flour',
        'chini': 'Sugar', 'chai': 'Tea', 'coffee': 'Coffee', 'biscuit': 'Biscuits',
        'chips': 'Chips', 'cold drink': 'Soft Drinks', 'juice': 'Juice', 'ice cream': 'Ice Cream',
        'roti': 'Whole Wheat Bread', 'doodh': 'Fresh Milk', 'kela': 'Bananas',
        // English
        'bread': 'Whole Wheat Bread', 'milk': 'Fresh Milk', 'banana': 'Bananas', 'potato': 'Potatoes',
        'tomato': 'Fresh Tomatoes', 'onion': 'Onions', 'carrot': 'Carrots', 'cucumber': 'Cucumber',
        'spinach': 'Spinach', 'cauliflower': 'Cauliflower', 'peas': 'Green Peas', 'cheese': 'Paneer',
        'yogurt': 'Curd', 'butter': 'Butter', 'egg': 'Eggs', 'chicken': 'Chicken', 'fish': 'Fish',
        'rice': 'Rice', 'flour': 'Wheat Flour', 'sugar': 'Sugar', 'tea': 'Tea', 'biscuits': 'Biscuits',
        'soft drink': 'Soft Drinks', 'ice cream': 'Ice Cream',
        // Tamil
        'உருளைக்கிழங்கு': 'Potatoes', 'தக்காளி': 'Fresh Tomatoes', 'வெங்காயம்': 'Onions',
        'கேரட்': 'Carrots', 'வெள்ளரி': 'Cucumber', 'பாலக்': 'Spinach', 'காலிஃபிளவர்': 'Cauliflower',
        'பட்டாணி': 'Green Peas', 'பாலாடை': 'Paneer', 'தயிர்': 'Curd', 'வெண்ணெய்': 'Butter',
        'முட்டை': 'Eggs', 'கோழி': 'Chicken', 'மீன்': 'Fish', 'அரிசி': 'Rice',
        // Telugu
        'ఉర్లగడ్డ': 'Potatoes', 'టమాట': 'Fresh Tomatoes', 'ఉల్లిపాయ': 'Onions',
        'క్యారెట్': 'Carrots', 'దోసకాయ': 'Cucumber', 'పాలకూర': 'Spinach', 'కాలీఫ్లవర్': 'Cauliflower',
        'బటానీ': 'Green Peas', 'పనీర్': 'Paneer', 'పెరుగు': 'Curd', 'వెన్న': 'Butter',
        'గుడ్డు': 'Eggs', 'కోడిమాంసం': 'Chicken', 'చేప': 'Fish', 'బియ్యం': 'Rice',
        // Kannada
        'ಆಲೂಗಡ್ಡೆ': 'Potatoes', 'ಟೊಮೇಟೊ': 'Fresh Tomatoes', 'ಈರುಳ್ಳಿ': 'Onions',
        'ಕ್ಯಾರೆಟ್': 'Carrots', 'ಸೌತೆಕಾಯಿ': 'Cucumber', 'ಪಾಲಕ್': 'Spinach', 'ಕೋಸು': 'Cauliflower',
        'ಬಟಾಣಿ': 'Green Peas', 'ಪನೀರ್': 'Paneer', 'ಮೊಸರು': 'Curd', 'ಬೆಣ್ಣೆ': 'Butter',
        'ಮೊಟ್ಟೆ': 'Eggs', 'ಕೋಳಿಮಾಂಸ': 'Chicken', 'ಮೀನು': 'Fish', 'ಅಕ್ಕಿ': 'Rice',
        // Malayalam
        'ഉരുളക്കിഴങ്ങ്': 'Potatoes', 'തക്കാളി': 'Fresh Tomatoes', 'ഉള്ളി': 'Onions',
        'കാരറ്റ്': 'Carrots', 'വെള്ളരി': 'Cucumber', 'ചീര': 'Spinach', 'കോളിഫ്ലവർ': 'Cauliflower',
        'പട്ടാണി': 'Green Peas', 'പനീർ': 'Paneer', 'തൈർ': 'Curd', 'വെണ്ണ': 'Butter',
        'മുട്ട': 'Eggs', 'കോഴിമാംസം': 'Chicken', 'മത്സ്യം': 'Fish', 'അരി': 'Rice',
        // Gujarati
        'બટાટા': 'Potatoes', 'ટામેટા': 'Fresh Tomatoes', 'ડુંગળી': 'Onions',
        'ગાજર': 'Carrots', 'કાકડી': 'Cucumber', 'પાલક': 'Spinach', 'ફૂલકોબી': 'Cauliflower',
        'વટાણા': 'Green Peas', 'પનીર': 'Paneer', 'દહીં': 'Curd', 'લોણી': 'Butter',
        'ઈંડું': 'Eggs', 'કૂકડાનું માંસ': 'Chicken', 'માછલી': 'Fish', 'ચોખા': 'Rice',
        // Punjabi
        'ਆਲੂ': 'Potatoes', 'ਟਮਾਟਰ': 'Fresh Tomatoes', 'ਪਿਆਜ਼': 'Onions',
        'ਗਾਜਰ': 'Carrots', 'ਖੀਰਾ': 'Cucumber', 'ਪਾਲਕ': 'Spinach', 'ਫੁੱਲ ਗੋਭੀ': 'Cauliflower',
        'ਮਟਰ': 'Green Peas', 'ਪਨੀਰ': 'Paneer', 'ਦਹੀਂ': 'Curd', 'ਮੱਖਣ': 'Butter',
        'ਅੰਡਾ': 'Eggs', 'ਮੁਰਗੀ': 'Chicken', 'ਮੱਛੀ': 'Fish', 'ਚਾਵਲ': 'Rice',
        // Bengali
        'আলু': 'Potatoes', 'টমেটো': 'Fresh Tomatoes', 'পেঁয়াজ': 'Onions',
        'গাজর': 'Carrots', 'শসা': 'Cucumber', 'পালং শাক': 'Spinach', 'ফুলকপি': 'Cauliflower',
        'মটরশুঁটি': 'Green Peas', 'পনির': 'Paneer', 'দই': 'Curd', 'মাখন': 'Butter',
        'ডিম': 'Eggs', 'মুরগির মাংস': 'Chicken', 'মাছ': 'Fish', 'ভাত': 'Rice',
        // Marathi
        'बटाटा': 'Potatoes', 'टोमॅटो': 'Fresh Tomatoes', 'कांदा': 'Onions',
        'गाजर': 'Carrots', 'काकडी': 'Cucumber', 'पालक': 'Spinach', 'फुलकोबी': 'Cauliflower',
        'वाटाणा': 'Green Peas', 'पनीर': 'Paneer', 'दही': 'Curd', 'लोणी': 'Butter',
        'अंडी': 'Eggs', 'कोंबडीचे मांस': 'Chicken', 'मासा': 'Fish', 'भात': 'Rice'
    };
    
    // Time expressions mapping - Multi-language support
    const timeExpressions = {
        // Hindi
        'aaj': 0, 'kal': 1, 'parso': 2, 'teen din': 3, 'chaar din': 4, 'paanch din': 5,
        'ek hafta': 7, 'do hafta': 14, 'ek din': 1, 'do din': 2, 'teen din': 3,
        // English
        'today': 0, 'tomorrow': 1, 'day after tomorrow': 2, 'three days': 3, 'four days': 4,
        'five days': 5, 'one week': 7, 'two weeks': 14, 'one day': 1, 'two days': 2,
        // Tamil
        'இன்று': 0, 'நாளை': 1, 'நாளைக்கு': 1, 'மூன்று நாட்கள்': 3, 'ஒரு வாரம்': 7,
        // Telugu
        'ఈరోజు': 0, 'రేపు': 1, 'మూడు రోజులు': 3, 'ఒక వారం': 7,
        // Kannada
        'ಇಂದು': 0, 'ನಾಳೆ': 1, 'ಮೂರು ದಿನಗಳು': 3, 'ಒಂದು ವಾರ': 7,
        // Malayalam
        'ഇന്ന്': 0, 'നാളെ': 1, 'മൂന്ന് ദിവസം': 3, 'ഒരു ആഴ്ച': 7,
        // Gujarati
        'આજે': 0, 'કાલે': 1, 'ત્રણ દિવસ': 3, 'એક અઠવાડિયું': 7,
        // Punjabi
        'ਅੱਜ': 0, 'ਕੱਲ੍ਹ': 1, 'ਤਿੰਨ ਦਿਨ': 3, 'ਇੱਕ ਹਫ਼ਤਾ': 7,
        // Bengali
        'আজ': 0, 'কাল': 1, 'তিন দিন': 3, 'এক সপ্তাহ': 7,
        // Marathi
        'आज': 0, 'उद्या': 1, 'तीन दिवस': 3, 'एक आठवडा': 7
    };
    
    // Extract quantity and unit - Support for numbers in different languages
    const quantityMatch = lowerText.match(/(\d+)\s*(kilo|kg|gram|g|packet|packets|piece|pieces|liter|liters|dozen|bundle|bundles|kilogram|kilograms|grams|bottles|boxes|bags|cans|கிலோ|கிராம்|பாக்கெட்|துண்டு|కిలో|గ్రామ్|ప్యాకెట్|ముక్క|ಕಿಲೋ|ಗ್ರಾಂ|ಪ್ಯಾಕೆಟ್|ತುಂಡು|കിലോ|ഗ്രാം|പാക്കറ്റ്|കഷണം|કિલો|ગ્રામ|પેકેટ|ટુકડો|ਕਿਲੋ|ਗ੍ਰਾਮ|ਪੈਕੇਟ|ਟੁਕੜਾ|কিলো|গ্রাম|প্যাকেট|টুকরা|किलो|ग्रॅम|पॅकेट|तुकडा)/);
    let quantity = 1;
    let unit = 'pieces';
    
    if (quantityMatch) {
        quantity = parseInt(quantityMatch[1]);
        unit = quantityUnits[quantityMatch[2]] || 'pieces';
    }
    
    // Extract product name from real transcription
    let productName = 'Unknown Product';
    
    // Check for specific bread types first
    if (lowerText.includes('brown bread')) {
        productName = 'Brown Bread';
    } else if (lowerText.includes('white bread')) {
        productName = 'White Bread';
    } else if (lowerText.includes('bread')) {
        productName = 'Bread';
    } else {
        // Check Hindi mappings
        for (const [hindi, english] of Object.entries(productMapping)) {
            if (lowerText.includes(hindi)) {
                productName = english;
                break;
            }
        }
    }
    
    // Extract expiry information
    let expiryDays = 1; // default to tomorrow
    
    // Check for specific patterns first
    const expiryMatch = transcript.match(/(\d+)\s*din/i);
    if (expiryMatch) {
        expiryDays = parseInt(expiryMatch[1]);
        console.log('📅 Extracted expiry days:', expiryDays);
    } else {
        // Check other time expressions
        for (const [expression, days] of Object.entries(timeExpressions)) {
            if (lowerText.includes(expression)) {
                expiryDays = days;
                break;
            }
        }
    }
    
    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);
    expiryDate.setHours(23, 59, 0, 0);
    
    // Generate a reasonable price based on product and quantity (only if price not already extracted)
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
    }
    
    return {
        productName,
        quantity: Math.round(quantity * 100) / 100,
        unit,
        price: Math.round(price * 100) / 100,
        expiryDate: expiryDate.toISOString(),
        originalText: transcript,
        confidence: 0.9
    };
}

// Enhanced rendering functions
function renderCustomerView() {
    const container = document.getElementById('customer-products');
    container.innerHTML = '';
    
    const activeProducts = products.filter(product => calculateDynamicPrice(product) > 0);
    
    if (activeProducts.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">😔</div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">No deals available right now</h3>
                <p class="text-gray-500">Check back later for fresh deals!</p>
            </div>
        `;
        return;
    }
    
    activeProducts.forEach(product => {
        const currentPrice = calculateDynamicPrice(product);
        const discountPercentage = getDiscountPercentage(product.initialPrice, currentPrice);
        const timeRemaining = formatTimeRemaining(product.expiryAt);
        const emoji = getProductEmoji(product.name);
        const availableQuantity = product.quantity - product.soldQuantity;
        
        const productCard = `
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 card-hover overflow-hidden">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="text-3xl">${emoji}</div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">${product.name}</h3>
                                <p class="text-sm text-gray-500">${product.vendor}</p>
                                <div class="flex items-center space-x-2 mt-1">
                                    <div class="flex text-yellow-400">
                                        ${generateStars(product.rating)}
                                    </div>
                                    <span class="text-xs text-gray-500">(${product.rating})</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${timeRemaining.includes('m') ? 'bg-red-100 text-red-800 pulse-animation' : 'bg-orange-100 text-orange-800'}">
                                <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                                ${timeRemaining}
                            </span>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <div class="flex items-baseline space-x-2 mb-2">
                            <span class="text-3xl font-extrabold text-emerald-600">₹${currentPrice}</span>
                            <span class="text-lg text-gray-400 line-through">₹${product.initialPrice}</span>
                            <span class="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-${discountPercentage}%</span>
                        </div>
                        <p class="text-sm text-gray-600">${availableQuantity} units available</p>
                        <p class="text-xs text-gray-500">${product.location}</p>
                    </div>
                    
                    <button onclick="purchaseProduct(${product.id})" class="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
                        <i data-lucide="shopping-cart" class="w-4 h-4 inline mr-2"></i>
                        Buy Now
                    </button>
                </div>
            </div>
        `;
        
        container.innerHTML += productCard;
    });
    
    lucide.createIcons();
}

// Purchase function
function purchaseProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const currentPrice = calculateDynamicPrice(product);
    const order = {
        id: nextOrderId++,
        customerName: 'Customer',
        items: [
            { productId: productId, quantity: 1, price: currentPrice }
        ],
        total: currentPrice,
        status: 'pending',
        orderTime: new Date(),
        pickupTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
    };
    
    orders.push(order);
    product.soldQuantity += 1;
    
    // Show QR code
    document.getElementById('qr-modal').classList.remove('hidden');
}

// Vendor view rendering
function renderVendorView() {
    renderInventory();
    renderOrders();
}

function renderInventory() {
    const container = document.getElementById('inventory-list');
    const totalProducts = document.getElementById('total-products');
    const expiringSoon = document.getElementById('expiring-soon');
    
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8">
                <div class="text-4xl mb-3">📦</div>
                <p class="text-gray-500">No products listed yet. Add your first product above!</p>
            </div>
        `;
        totalProducts.textContent = '0 products';
        expiringSoon.textContent = '0 expiring';
        return;
    }
    
    let expiringCount = 0;
    
    products.forEach(product => {
        const currentPrice = calculateDynamicPrice(product);
        const discountPercentage = getDiscountPercentage(product.initialPrice, currentPrice);
        const timeRemaining = formatTimeRemaining(product.expiryAt);
        const emoji = getProductEmoji(product.name);
        const availableQuantity = product.quantity - product.soldQuantity;
        
        // Count expiring soon (less than 6 hours)
        const timeUntilExpiry = product.expiryAt.getTime() - new Date().getTime();
        if (timeUntilExpiry > 0 && timeUntilExpiry < 6 * 60 * 60 * 1000) {
            expiringCount++;
        }
        
        const productItem = `
            <div class="border border-gray-200 rounded-xl p-4 ${currentPrice === 0 ? 'bg-gray-50' : 'bg-white'} hover:shadow-md transition-all duration-200">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="text-xl">${emoji}</span>
                            <h3 class="font-semibold text-gray-900">${product.name}</h3>
                        </div>
                        <p class="text-sm text-gray-500 mb-2">Available: ${availableQuantity}/${product.quantity}</p>
                        <div class="flex items-center space-x-3">
                            <span class="text-lg font-bold text-gray-900">₹${currentPrice}</span>
                            <span class="text-sm text-gray-400 line-through">₹${product.initialPrice}</span>
                            ${discountPercentage > 0 ? `<span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-${discountPercentage}%</span>` : ''}
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${currentPrice === 0 ? 'bg-gray-100 text-gray-600' : timeRemaining.includes('m') ? 'bg-red-100 text-red-800 pulse-animation' : 'bg-orange-100 text-orange-800'}">
                            <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                            ${timeRemaining}
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += productItem;
    });
    
    totalProducts.textContent = `${products.length} products`;
    expiringSoon.textContent = `${expiringCount} expiring`;
    
    lucide.createIcons();
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    container.innerHTML = '';
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8">
                <div class="text-4xl mb-3">🛒</div>
                <p class="text-gray-500">No orders yet. Customers will see your products in the customer view!</p>
            </div>
        `;
        return;
    }
    
    orders.forEach(order => {
        const orderItem = `
            <div class="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-200">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="font-semibold text-gray-900">Order #${order.id}</h3>
                        <p class="text-sm text-gray-500">${order.customerName}</p>
                    </div>
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                        ${order.status}
                    </span>
                </div>
                <div class="space-y-2">
                    ${order.items.map(item => {
                        const product = products.find(p => p.id === item.productId);
                        return `<div class="flex justify-between text-sm">
                            <span>${product ? product.name : 'Unknown Product'} x${item.quantity}</span>
                            <span>₹${item.price}</span>
                        </div>`;
                    }).join('')}
                </div>
                <div class="border-t pt-3 mt-3">
                    <div class="flex justify-between items-center">
                        <span class="font-semibold">Total: ₹${order.total}</span>
                        <span class="text-xs text-gray-500">${formatTimeRemaining(order.pickupTime)}</span>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += orderItem;
    });
}

// Analytics rendering
function renderAnalytics() {
    const topProductsContainer = document.getElementById('top-products');
    
    // Calculate top products by sales
    const productSales = products.map(product => ({
        name: product.name,
        sales: product.soldQuantity,
        revenue: product.soldQuantity * product.initialPrice
    })).sort((a, b) => b.sales - a.sales).slice(0, 5);
    
    topProductsContainer.innerHTML = '';
    
    productSales.forEach((product, index) => {
        const productItem = `
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-3">
                    <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">${index + 1}</span>
                    <span class="font-medium text-gray-900">${product.name}</span>
                </div>
                <div class="text-right">
                    <p class="text-sm font-semibold text-gray-900">${product.sales} sold</p>
                    <p class="text-xs text-gray-500">₹${product.revenue}</p>
                </div>
            </div>
        `;
        topProductsContainer.innerHTML += productItem;
    });
    
    // Initialize sales chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales (₹)',
                data: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Utility functions
function formatTimeRemaining(expiryAt) {
    const now = new Date();
    const timeRemaining = expiryAt.getTime() - now.getTime();
    
    if (timeRemaining <= 0) {
        return 'Expired';
    }
    
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
        const days = Math.floor(hours / 24);
        return `${days}d ${hours % 24}h`;
    } else if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else {
        return `${minutes}m`;
    }
}

function getDiscountPercentage(initialPrice, currentPrice) {
    const discount = ((initialPrice - currentPrice) / initialPrice) * 100;
    return Math.round(discount);
}

function getProductEmoji(name) {
    const emojiMap = {
        'Fresh Tomatoes': '🍅',
        'Whole Wheat Bread': '🍞',
        'Fresh Milk': '🥛',
        'Bananas': '🍌',
        'Onions': '🧅',
        'Potatoes': '🥔',
        'Carrots': '🥕',
        'Cucumber': '🥒',
        'Spinach': '🥬',
        'Cauliflower': '🥦',
        'Green Peas': '🫛',
        'Paneer': '🧀',
        'Curd': '🥛',
        'Butter': '🧈',
        'Eggs': '🥚',
        'Chicken': '🍗',
        'Fish': '🐟',
        'Rice': '🍚',
        'Wheat Flour': '🌾',
        'Sugar': '🍯',
        'Tea': '🫖',
        'Coffee': '☕',
        'Biscuits': '🍪',
        'Chips': '🥔',
        'Soft Drinks': '🥤',
        'Juice': '🧃',
        'Ice Cream': '🍦',
        'Fresh Apples': '🍎'
    };
    return emojiMap[name] || '📦';
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '★';
        } else if (i - 0.5 <= rating) {
            stars += '☆';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// Event handlers setup
function setupEventListeners() {
    // View toggle handlers
    const customerToggle = document.getElementById('customer-toggle');
    const vendorToggle = document.getElementById('vendor-toggle');
    const analyticsToggle = document.getElementById('analytics-toggle');
    const mapToggle = document.getElementById('map-toggle');
    const customerView = document.getElementById('customer-view');
    const vendorView = document.getElementById('vendor-view');
    const analyticsView = document.getElementById('analytics-view');
    const mapView = document.getElementById('map-view');
    
    customerToggle.addEventListener('click', function() {
        showView('customer');
    });
    
    vendorToggle.addEventListener('click', function() {
        showView('vendor');
    });
    
    analyticsToggle.addEventListener('click', function() {
        showView('analytics');
    });
    
    mapToggle.addEventListener('click', function() {
        showView('map');
    });
    
    // Vendor tab handlers
    const addProductTab = document.getElementById('add-product-tab');
    const inventoryTab = document.getElementById('inventory-tab');
    const ordersTab = document.getElementById('orders-tab');
    const addProductSection = document.getElementById('add-product-section');
    const inventorySection = document.getElementById('inventory-section');
    const ordersSection = document.getElementById('orders-section');
    
    addProductTab.addEventListener('click', function() {
        showVendorTab('add-product');
    });
    
    inventoryTab.addEventListener('click', function() {
        showVendorTab('inventory');
    });
    
    ordersTab.addEventListener('click', function() {
        showVendorTab('orders');
    });
    
    // Add product form handler
    const addProductForm = document.getElementById('add-product-form');
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productName = document.getElementById('product-name').value;
        const initialPrice = parseFloat(document.getElementById('initial-price').value);
        const quantity = parseInt(document.getElementById('quantity').value);
        const expiryDate = new Date(document.getElementById('expiry-date').value);
        
        const newProduct = {
            id: nextId++,
            name: productName,
            vendor: 'SAHI DAAM Store',
            initialPrice: initialPrice,
            quantity: quantity,
            soldQuantity: 0,
            listedAt: new Date(),
            expiryAt: expiryDate,
            rating: 0,
            vendorRating: 4.5,
            location: 'Mumbai, Maharashtra',
            category: 'General'
        };
        
        products.push(newProduct);
        renderVendorView();
        addProductForm.reset();
        
        // Set default expiry date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(23, 59, 0, 0);
        document.getElementById('expiry-date').value = tomorrow.toISOString().slice(0, 16);
        
        // Show success message
        const button = addProductForm.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<i data-lucide="check" class="w-5 h-5 inline mr-2"></i>Product Added!';
        button.classList.add('from-green-600', 'to-emerald-600');
        button.classList.remove('from-blue-600', 'to-purple-600');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('from-green-600', 'to-emerald-600');
            button.classList.add('from-blue-600', 'to-purple-600');
            lucide.createIcons();
        }, 2000);
    });
    
    // Map functionality
    document.getElementById('get-location').addEventListener('click', function() {
        getUserLocation();
    });
    
    document.getElementById('refresh-map').addEventListener('click', function() {
        if (userLocation) {
            renderNearbyDeals();
        }
    });
    
    document.getElementById('distance-filter').addEventListener('change', function() {
        if (userLocation) {
            renderNearbyDeals();
        }
    });
    
    // QR modal close
    document.getElementById('close-qr').addEventListener('click', function() {
        document.getElementById('qr-modal').classList.add('hidden');
    });
    
    // Set default expiry date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 0, 0);
    document.getElementById('expiry-date').value = tomorrow.toISOString().slice(0, 16);
}

function showView(view) {
    const customerView = document.getElementById('customer-view');
    const vendorView = document.getElementById('vendor-view');
    const analyticsView = document.getElementById('analytics-view');
    const mapView = document.getElementById('map-view');
    const customerToggle = document.getElementById('customer-toggle');
    const vendorToggle = document.getElementById('vendor-toggle');
    const analyticsToggle = document.getElementById('analytics-toggle');
    const mapToggle = document.getElementById('map-toggle');
    
    // Hide all views
    customerView.classList.add('hidden');
    vendorView.classList.add('hidden');
    analyticsView.classList.add('hidden');
    mapView.classList.add('hidden');
    
    // Remove active states
    customerToggle.classList.remove('bg-white/90', 'shadow-sm', 'text-gray-800');
    vendorToggle.classList.remove('bg-white/90', 'shadow-sm', 'text-gray-800');
    analyticsToggle.classList.remove('bg-white/90', 'shadow-sm', 'text-gray-800');
    mapToggle.classList.remove('bg-white/90', 'shadow-sm', 'text-gray-800');
    
    customerToggle.classList.add('text-white/90');
    vendorToggle.classList.add('text-white/90');
    analyticsToggle.classList.add('text-white/90');
    mapToggle.classList.add('text-white/90');
    
    // Show selected view
    if (view === 'customer') {
        customerView.classList.remove('hidden');
        customerToggle.classList.add('bg-white/90', 'shadow-sm', 'text-gray-800');
        customerToggle.classList.remove('text-white/90');
        renderCustomerView();
    } else if (view === 'vendor') {
        vendorView.classList.remove('hidden');
        vendorToggle.classList.add('bg-white/90', 'shadow-sm', 'text-gray-800');
        vendorToggle.classList.remove('text-white/90');
        renderVendorView();
    } else if (view === 'analytics') {
        analyticsView.classList.remove('hidden');
        analyticsToggle.classList.add('bg-white/90', 'shadow-sm', 'text-gray-800');
        analyticsToggle.classList.remove('text-white/90');
        renderAnalytics();
    } else if (view === 'map') {
        mapView.classList.remove('hidden');
        mapToggle.classList.add('bg-white/90', 'shadow-sm', 'text-gray-800');
        mapToggle.classList.remove('text-white/90');
        // Trigger resize event to ensure map renders properly
        setTimeout(() => {
            if (map) {
                google.maps.event.trigger(map, 'resize');
            }
        }, 100);
    }
}

function showVendorTab(tab) {
    const addProductTab = document.getElementById('add-product-tab');
    const inventoryTab = document.getElementById('inventory-tab');
    const ordersTab = document.getElementById('orders-tab');
    const addProductSection = document.getElementById('add-product-section');
    const inventorySection = document.getElementById('inventory-section');
    const ordersSection = document.getElementById('orders-section');
    
    // Hide all sections
    addProductSection.classList.add('hidden');
    inventorySection.classList.add('hidden');
    ordersSection.classList.add('hidden');
    
    // Remove active states
    addProductTab.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
    inventoryTab.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
    ordersTab.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
    
    addProductTab.classList.add('text-gray-600');
    inventoryTab.classList.add('text-gray-600');
    ordersTab.classList.add('text-gray-600');
    
    // Show selected tab
    if (tab === 'add-product') {
        addProductSection.classList.remove('hidden');
        addProductTab.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
        addProductTab.classList.remove('text-gray-600');
    } else if (tab === 'inventory') {
        inventorySection.classList.remove('hidden');
        inventoryTab.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
        inventoryTab.classList.remove('text-gray-600');
    } else if (tab === 'orders') {
        ordersSection.classList.remove('hidden');
        ordersTab.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
        ordersTab.classList.remove('text-gray-600');
    }
}

// Map functions
function initMap() {
    console.log('🗺️ Initializing Leaflet map...');
    
    // Wait for DOM to be fully ready
    setTimeout(() => {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.error('❌ Map container not found');
            return;
        }
        
        // Check if Leaflet is loaded
        if (typeof L === 'undefined') {
            console.error('❌ Leaflet.js not loaded');
            mapContainer.innerHTML = `
                <div class="text-center p-8">
                    <div class="text-4xl mb-4">⚠️</div>
                    <p class="text-red-600 font-semibold mb-2">Leaflet.js Error</p>
                    <p class="text-sm text-gray-600">Please check your internet connection</p>
                </div>
            `;
            return;
        }
        
        console.log('✅ Leaflet.js available');
        
        try {
            // Clear any existing content
            mapContainer.innerHTML = '';
            
            // Default configuration
            const mapConfig = {
                MAP_DEFAULT_ZOOM: 12,
                MAP_DEFAULT_CENTER: [28.4744, 77.5040], // Greater Noida coordinates [lat, lng]
                MARKER_COLORS: {
                    HIGH_DISCOUNT: '#EF4444',
                    MEDIUM_DISCOUNT: '#F97316',
                    LOW_DISCOUNT: '#22C55E'
                }
            };
            
            // Initialize Leaflet map
            map = L.map('map', {
                center: mapConfig.MAP_DEFAULT_CENTER,
                zoom: mapConfig.MAP_DEFAULT_ZOOM,
                zoomControl: true,
                attributionControl: true
            });
            
            // Add OpenStreetMap tiles with error handling
            const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
                subdomains: ['a', 'b', 'c'],
                updateWhenIdle: false,
                updateWhenZooming: false
            });
            
            tileLayer.addTo(map);
            
            // Add fallback tile provider (CartoDB) if OpenStreetMap is slow
            const fallbackTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19,
                updateWhenIdle: false,
                updateWhenZooming: false
            });
            
            // Handle tile loading events
            tileLayer.on('loading', () => {
                console.log('🗺️ Tiles loading...');
            });
            
            tileLayer.on('load', () => {
                console.log('🗺️ Tiles loaded successfully');
                if (map) {
                    map.invalidateSize();
                }
            });
            
            tileLayer.on('tileerror', (e) => {
                console.log('🗺️ Tile error, switching to fallback');
                map.removeLayer(tileLayer);
                fallbackTiles.addTo(map);
            });
            
            // Try to load fallback tiles after a delay if main tiles fail
            setTimeout(() => {
                if (map && !map.hasLayer(tileLayer)) {
                    fallbackTiles.addTo(map);
                    console.log('🗺️ Using fallback tile provider');
                }
            }, 5000);
            
            // Add map click listener to close popups
            map.on('click', () => {
                map.closePopup();
            });
            
            // Force map refresh and ensure proper sizing
            setTimeout(() => {
                if (map) {
                    map.invalidateSize();
                    map.setView(mapConfig.MAP_DEFAULT_CENTER, mapConfig.MAP_DEFAULT_ZOOM);
                    console.log('🗺️ Map size invalidated and view reset');
                }
            }, 100);
            
            // Additional refresh after a longer delay
            setTimeout(() => {
                if (map) {
                    map.invalidateSize();
                    console.log('🗺️ Final map refresh');
                }
            }, 1000);
            
            console.log('🗺️ Leaflet map initialized successfully');
            
        } catch (error) {
            console.error('❌ Error initializing map:', error);
            mapContainer.innerHTML = `
                <div class="text-center p-8">
                    <div class="text-4xl mb-4">⚠️</div>
                    <p class="text-red-600 font-semibold mb-2">Map Initialization Error</p>
                    <p class="text-sm text-gray-600">${error.message}</p>
                    <button onclick="initMap()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Retry
                    </button>
                </div>
            `;
        }
    }, 500); // Wait 500ms for everything to load
}

function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        return;
    }
    
    // Show loading state
    const locationBtn = document.getElementById('get-location');
    const originalText = locationBtn.innerHTML;
    locationBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 inline mr-1 animate-spin"></i> Getting Location...';
    locationBtn.disabled = true;
    
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    };
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            console.log('📍 User location obtained:', userLocation);
            
            // Center map on user location
            map.setView([userLocation.lat, userLocation.lng], 14);
            
            // Remove existing user marker if any
            if (userMarker) {
                map.removeLayer(userMarker);
            }
            
            // Add user location marker with custom icon
            const userIcon = L.divIcon({
                className: 'user-location-marker',
                html: `
                    <div style="
                        width: 24px; 
                        height: 24px; 
                        background: #4285F4; 
                        border: 3px solid white; 
                        border-radius: 50%; 
                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                        display: flex; 
                        align-items: center; 
                        justify-content: center;
                    ">
                        <div style="
                            width: 8px; 
                            height: 8px; 
                            background: white; 
                            border-radius: 50%;
                        "></div>
                    </div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            userMarker = L.marker([userLocation.lat, userLocation.lng], {
                icon: userIcon,
                title: 'Your Location'
            }).addTo(map);
            
            // Add accuracy circle
            const accuracyCircle = L.circle([userLocation.lat, userLocation.lng], {
                radius: position.coords.accuracy,
                color: '#4285F4',
                fillColor: '#4285F4',
                fillOpacity: 0.1,
                weight: 1
            }).addTo(map);
            
            // Remove accuracy circle after 5 seconds
            setTimeout(() => {
                map.removeLayer(accuracyCircle);
            }, 5000);
            
            // Render nearby deals
            renderNearbyDeals();
            
            // Reset button
            locationBtn.innerHTML = originalText;
            locationBtn.disabled = false;
            
            // Show success message
            showNotification('Location obtained successfully!', 'success');
        },
        (error) => {
            console.error('Error getting location:', error);
            let errorMessage = 'Unable to get your location.';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location access denied. Please enable location services in your browser.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information unavailable. Please try again.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out. Please try again.';
                    break;
            }
            
            alert(errorMessage);
            
            // Reset button
            locationBtn.innerHTML = originalText;
            locationBtn.disabled = false;
        },
        options
    );
}

function addVendorMarkers() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    products.forEach(product => {
        const currentPrice = calculateDynamicPrice(product);
        if (currentPrice === 0) return; // Skip expired products
        
        // Use real coordinates from product data
        if (!product.coordinates) return;
        
        const discountPercentage = getDiscountPercentage(product.initialPrice, currentPrice);
        
        // Choose marker color based on discount
        let markerColor;
        if (discountPercentage > 50) {
            markerColor = '#EF4444'; // Red for high discount
        } else if (discountPercentage > 25) {
            markerColor = '#F97316'; // Orange for moderate discount
        } else {
            markerColor = '#22C55E'; // Green for fresh deals
        }
        
        // Create custom marker icon
        const markerIcon = L.divIcon({
            className: 'vendor-marker',
            html: `
                <div style="
                    width: 24px; 
                    height: 24px; 
                    background: ${markerColor}; 
                    border: 2px solid white; 
                    border-radius: 50%; 
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                    display: flex; 
                    align-items: center; 
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                    font-size: 10px;
                ">
                    ₹
                </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
        
        const marker = L.marker([product.coordinates.lat, product.coordinates.lng], {
            icon: markerIcon,
            title: `${product.name} - ₹${currentPrice} (${product.vendor})`
        });
        
        // Calculate distance from user if available
        let distanceText = '';
        if (userLocation) {
            const distance = calculateDistance(userLocation, product.coordinates);
            distanceText = `<p class="text-xs text-blue-600 mb-2">📍 ${distance.toFixed(1)} km away</p>`;
        }
        
        // Add popup with enhanced content
        const popupContent = `
            <div class="p-4 max-w-xs">
                <div class="flex items-center space-x-3 mb-3">
                    <div class="text-2xl">${getProductEmoji(product.name)}</div>
                    <div>
                        <h3 class="font-bold text-gray-900 text-lg">${product.name}</h3>
                        <p class="text-sm text-gray-600">${product.vendor}</p>
                    </div>
                </div>
                
                ${distanceText}
                
                <div class="bg-gray-50 rounded-lg p-3 mb-3">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-gray-600">Current Price:</span>
                        <span class="text-lg font-bold text-emerald-600">₹${currentPrice}</span>
                    </div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-gray-600">Original Price:</span>
                        <span class="text-sm text-gray-500 line-through">₹${product.initialPrice}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-600">Discount:</span>
                        <span class="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">-${discountPercentage}%</span>
                    </div>
                </div>
                
                <div class="flex space-x-2">
                    <button onclick="purchaseProduct(${product.id})" class="flex-1 bg-emerald-600 text-white px-3 py-2 rounded text-sm hover:bg-emerald-700 transition-colors duration-200">
                        Buy Now
                    </button>
                    <button onclick="getDirections(${product.coordinates.lat}, ${product.coordinates.lng})" class="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                        <i data-lucide="navigation" class="w-4 h-4 inline mr-1"></i>
                        Route
                    </button>
                </div>
                
                <div class="mt-3 text-xs text-gray-500">
                    <p>📍 ${product.address}</p>
                    <p>⏰ Expires: ${formatDate(product.expiryAt)}</p>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.addTo(map);
        
        markers.push(marker);
    });
    
    console.log(`🗺️ Added ${markers.length} vendor markers to map`);
}

function renderNearbyDeals() {
    const container = document.getElementById('nearby-deals');
    const distanceFilter = document.getElementById('distance-filter').value;
    
    container.innerHTML = '';
    
    if (!userLocation) {
        container.innerHTML = '<p class="text-gray-500 text-center">Click "My Location" to see nearby deals</p>';
        return;
    }
    
    const activeProducts = products.filter(product => calculateDynamicPrice(product) > 0);
    
    if (activeProducts.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center">No deals available nearby</p>';
        return;
    }
    
    activeProducts.forEach(product => {
        const currentPrice = calculateDynamicPrice(product);
        const discountPercentage = getDiscountPercentage(product.initialPrice, currentPrice);
        const emoji = getProductEmoji(product.name);
        
        // Calculate distance (simulated)
        const distance = (Math.random() * 5).toFixed(1);
        
        if (distance > distanceFilter) return; // Filter by distance
        
        const dealItem = `
            <div class="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all duration-200">
                <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="text-2xl">${emoji}</div>
                        <div>
                            <h4 class="font-semibold text-gray-900">${product.name}</h4>
                            <p class="text-sm text-gray-500">${product.vendor}</p>
                            <p class="text-xs text-gray-400">${distance} km away</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-bold text-emerald-600">₹${currentPrice}</p>
                        <p class="text-sm text-gray-400 line-through">₹${product.initialPrice}</p>
                        <span class="text-xs font-bold text-red-600">-${discountPercentage}%</span>
                    </div>
                </div>
                <button onclick="purchaseProduct(${product.id})" class="w-full mt-2 bg-emerald-600 text-white py-1 px-3 rounded text-sm hover:bg-emerald-700 transition-colors duration-200">
                    Buy Now
                </button>
            </div>
        `;
        
        container.innerHTML += dealItem;
    });
    
    // Add vendor markers to map
    addVendorMarkers();
}

// Helper functions for map functionality
function calculateDistance(point1, point2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (point2.lat - point1.lat) * Math.PI / 180;
    const dLng = (point2.lng - point1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function getDirections(lat, lng) {
    if (!userLocation) {
        showNotification('Please get your location first', 'error');
        return;
    }
    
    const destination = { lat: parseFloat(lat), lng: parseFloat(lng) };
    
    // Clear existing route
    if (routeLayer) {
        map.removeLayer(routeLayer);
    }
    
    // Create a simple straight-line route (for demo purposes)
    // In a real app, you'd use a routing service like OSRM or Mapbox
    const routeCoordinates = [
        [userLocation.lat, userLocation.lng],
        [destination.lat, destination.lng]
    ];
    
    // Create route line
    routeLayer = L.polyline(routeCoordinates, {
        color: '#3B82F6',
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10'
    }).addTo(map);
    
    // Fit map to show both points
    const bounds = L.latLngBounds([userLocation.lat, userLocation.lng], [destination.lat, destination.lng]);
    map.fitBounds(bounds, { padding: [20, 20] });
    
    // Calculate distance
    const distance = calculateDistance(userLocation, destination);
    
    showNotification(`Route created! Distance: ${distance.toFixed(1)} km`, 'success');
    
    // Add route info to sidebar
    showRouteInfo({
        distance: { text: `${distance.toFixed(1)} km` },
        duration: { text: `${Math.round(distance * 2)} min` }, // Rough estimate
        start_address: 'Your Location',
        end_address: `${destination.lat.toFixed(4)}, ${destination.lng.toFixed(4)}`
    });
}

function showRouteInfo(leg) {
    const routeInfo = document.getElementById('route-info');
    if (routeInfo) {
        routeInfo.innerHTML = `
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <h4 class="font-semibold text-blue-900 mb-2">Route Information</h4>
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                        <span class="text-blue-700">Distance:</span>
                        <span class="font-medium">${leg.distance.text}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-blue-700">Duration:</span>
                        <span class="font-medium">${leg.duration.text}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-blue-700">Start:</span>
                        <span class="font-medium">${leg.start_address}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-blue-700">End:</span>
                        <span class="font-medium">${leg.end_address}</span>
                    </div>
                </div>
                <button onclick="clearRoute()" class="w-full mt-3 bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                    Clear Route
                </button>
            </div>
        `;
        routeInfo.classList.remove('hidden');
    }
}

function clearRoute() {
    if (routeLayer) {
        map.removeLayer(routeLayer);
        routeLayer = null;
    }
    const routeInfo = document.getElementById('route-info');
    if (routeInfo) {
        routeInfo.classList.add('hidden');
    }
    showNotification('Route cleared', 'info');
}

function refreshMap() {
    if (!map) return;
    
    try {
        // Force complete map refresh
        const currentCenter = map.getCenter();
        const currentZoom = map.getZoom();
        
        // Remove and re-add the map
        map.remove();
        
        // Reinitialize map
        initMap();
        
        // Wait for map to initialize, then restore view
        setTimeout(() => {
            if (map) {
                map.setView(currentCenter, currentZoom);
                addVendorMarkers();
                if (userLocation) {
                    getUserLocation();
                }
                showNotification('Map refreshed successfully', 'success');
            }
        }, 1000);
        
    } catch (error) {
        console.error('Error refreshing map:', error);
        showNotification('Error refreshing map', 'error');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set colors based on type
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                <i data-lucide="icons" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

function getProductEmoji(productName) {
    const name = productName.toLowerCase();
    if (name.includes('tomato')) return '🍅';
    if (name.includes('bread')) return '🍞';
    if (name.includes('milk')) return '🥛';
    if (name.includes('paneer')) return '🧀';
    if (name.includes('spinach')) return '🥬';
    if (name.includes('onion')) return '🧅';
    if (name.includes('butter')) return '🧈';
    if (name.includes('vegetable')) return '🥬';
    if (name.includes('dairy')) return '🥛';
    if (name.includes('bakery')) return '🍞';
    return '🛍️';
}

function formatDate(date) {
    if (!date) return 'Unknown';
    const d = new Date(date);
    const now = new Date();
    const diffTime = d - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    
    return d.toLocaleDateString('en-IN', { 
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize voice assistant
    simulateVoiceAssistant();
    
    // Initialize map
    initMap();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial render
    renderCustomerView();
    
    // Auto-refresh
    setInterval(() => {
        renderCustomerView();
        renderVendorView();
    }, 30000);
    
    // Handle map view changes
    document.addEventListener('click', function(e) {
        if (e.target && e.target.textContent === 'Map') {
            // Wait for view to change, then refresh map
            setTimeout(() => {
                if (map) {
                    map.invalidateSize();
                    // Force a complete map refresh
                    const currentCenter = map.getCenter();
                    const currentZoom = map.getZoom();
                    map.setView(currentCenter, currentZoom);
                    console.log('🗺️ Map refreshed after view change');
                }
            }, 500);
        }
    });
});
