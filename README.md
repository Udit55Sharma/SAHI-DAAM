# SAHI DAAM - Hyper-local Dynamic Discount Platform

A comprehensive platform that connects vendors and customers through AI-powered dynamic pricing, voice recognition, and location-based deals.

## 🚀 Features

### For Vendors
- **AI Voice Assistant**: Add products using Hindi/English voice commands
- **Dynamic Pricing**: AI automatically adjusts prices based on expiry time
- **Inventory Management**: Track stock and sales in real-time
- **Analytics Dashboard**: Monitor performance and sales trends

### For Customers
- **Location-Based Deals**: Find nearby offers with interactive map
- **Real-time Pricing**: See dynamic discounts based on expiry
- **QR Code Pickup**: Secure purchase and pickup system
- **Sustainability Tracking**: See your contribution to reducing food waste

## 🎤 Voice Assistant Features

### Supported Languages
- **Hindi**: Primary language support
- **English**: Fallback language support
- **Mixed**: Code-switching between Hindi and English

### Voice Commands Examples
```
Hindi:
- "2 kilo aloo kal expiry hai daalo"
- "paneer 500 gram 3 din baad expire hoga"
- "tamatar 1 kilo parso expire"

English:
- "fresh milk 2 liter tomorrow expiry"
- "bread 5 packets 2 days later"
- "potatoes 3 kg expires in 1 week"
```

### Supported Products
- **Vegetables**: Aloo, Tamatar, Pyaaz, Gajar, Kheera, Palak, Gobhi, Matar
- **Dairy**: Paneer, Dahi, Makhan, Doodh
- **Grains**: Chawal, Atta, Chini
- **Beverages**: Chai, Coffee, Cold Drink, Juice
- **Snacks**: Biscuit, Chips, Ice Cream
- **And more...**

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser with microphone access
- Google Maps API key (for map features)

### Backend Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

3. **Verify Installation**
   - Server runs on: `http://localhost:3001`
   - Health check: `http://localhost:3001/api/health`

### Frontend Setup

1. **Open the Application**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

2. **Enable Microphone Access**
   - Allow microphone permissions when prompted
   - Required for voice assistant functionality

## 🎯 Usage Guide

### For Vendors

1. **Switch to Vendor View**
   - Click "Vendor" tab in the header

2. **Add Products via Voice**
   - Click the microphone button
   - Speak your product details in Hindi or English
   - Review the extracted information
   - Click "Confirm & Add" to save

3. **Manual Product Entry**
   - Fill out the form manually
   - Set product name, price, quantity, and expiry
   - Click "Add Product"

4. **Monitor Inventory**
   - Switch to "Inventory" tab
   - View all active listings
   - Track expiry times and discounts

### For Customers

1. **Browse Deals**
   - View all available products with dynamic pricing
   - See real-time discounts based on expiry

2. **Use Map View**
   - Click "Map" tab
   - Click "My Location" to find nearby deals
   - Filter by distance
   - Click markers for product details

3. **Make Purchases**
   - Click "Buy Now" on any product
   - Get QR code for pickup
   - Show QR to vendor for collection

## 🔧 Technical Architecture

### Frontend
- **HTML5**: Structure and semantic markup
- **Tailwind CSS**: Modern, responsive styling
- **Vanilla JavaScript**: Interactive functionality
- **MediaRecorder API**: Voice recording
- **Google Maps API**: Location services

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web framework
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing

### AI Integration
- **Vakyansh STT**: Speech-to-text processing
- **NLP Parsing**: Product detail extraction
- **Dynamic Pricing**: AI-powered discount algorithms

## 🗺️ API Endpoints

### Voice Processing
- `POST /api/voice-to-product`: Process voice input and extract product details

### Products
- `GET /api/products`: Get all products
- `POST /api/products`: Add new product

### Health
- `GET /api/health`: Server health check

## 🎨 UI Components

### Voice Assistant
- Real-time recording indicator
- Transcription display
- Extracted data confirmation
- Error handling and retry

### Dynamic Pricing
- Color-coded urgency indicators
- Real-time price updates
- Discount percentage display
- Expiry countdown timers

### Map Integration
- Interactive Google Maps
- Vendor location markers
- Distance-based filtering
- Route planning capabilities

## 🔒 Security Features

- **CORS Protection**: Secure cross-origin requests
- **File Validation**: Audio file type checking
- **Error Handling**: Graceful failure recovery
- **Data Sanitization**: Input validation and cleaning

## 🚀 Future Enhancements

### Planned Features
- **Real Vakyansh Integration**: Connect to actual Vakyansh models
- **Payment Gateway**: UPI and card payment integration
- **Push Notifications**: Real-time deal alerts
- **Multi-language Support**: More Indian languages
- **Advanced Analytics**: Machine learning insights

### Technical Improvements
- **Database Integration**: PostgreSQL/MongoDB
- **Authentication**: User login and profiles
- **Real-time Updates**: WebSocket integration
- **Mobile App**: React Native version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**SAHI DAAM** - Making fresh food accessible to everyone through smart technology! 🛒🌱
