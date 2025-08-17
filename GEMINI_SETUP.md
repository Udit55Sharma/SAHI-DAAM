# Gemini AI Integration Setup

## 🚀 Getting Started with Gemini AI

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Set Up Environment Variable

Create a `.env` file in the project root:

```bash
# Gemini API Configuration
GEMINI_API_KEY=your-actual-api-key-here

# Server Configuration
PORT=3001
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

## 🎯 How It Works

### Voice-to-Text Flow:
1. **User speaks** → Web Speech API transcribes
2. **Transcription** → Sent to Gemini AI
3. **Gemini AI** → Extracts product details
4. **Product details** → Auto-fills form
5. **Vendor confirms** → Product added to inventory

### Supported Languages:
- ✅ Hindi
- ✅ English
- ✅ Tamil
- ✅ Telugu
- ✅ Kannada
- ✅ Malayalam
- ✅ Gujarati
- ✅ Punjabi
- ✅ Bengali
- ✅ Marathi

### Example Commands:
```
Hindi: "2 kilo aloo kal expiry hai daalo"
English: "fresh milk 2 liter tomorrow expiry"
Tamil: "உருளைக்கிழங்கு 2 கிலோ நாளை"
```

## 🔧 Features

- **🤖 AI-Powered Extraction**: Gemini AI understands context
- **🌍 Multi-Language Support**: Works in 10+ Indian languages
- **💰 Smart Pricing**: Estimates prices if not mentioned
- **📅 Expiry Detection**: Understands time expressions
- **🔄 Fallback System**: Works even if Gemini API fails
- **✨ Real-time Processing**: Instant results

## 🛠️ Troubleshooting

### If Gemini API fails:
- Check your API key is correct
- Ensure you have sufficient quota
- Check internet connection
- System will fallback to local parsing

### If voice recognition fails:
- Use Chrome browser (best support)
- Allow microphone permissions
- Speak clearly and slowly
- Check console for error messages
