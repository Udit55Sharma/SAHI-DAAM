#!/bin/bash

echo "🚀 SAHI DAAM Deployment Script"
echo "================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create production build directory
echo "📁 Creating production build..."
mkdir -p public

# Copy frontend files to public directory
echo "📋 Copying frontend files..."
cp index.html public/
cp app.js public/
cp -r assets public/ 2>/dev/null || echo "⚠️ No assets directory found"

# Install production dependencies
echo "📦 Installing production dependencies..."
npm install --production

echo ""
echo "🎯 Deployment Options:"
echo "1. Deploy to Vercel (Frontend) + Railway (Backend)"
echo "2. Deploy to Vercel (Frontend) + Render (Backend)"
echo "3. Deploy to Netlify (Frontend) + Railway (Backend)"
echo "4. Manual deployment instructions"
echo ""

read -p "Choose deployment option (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel + Railway..."
        deploy_vercel_railway
        ;;
    2)
        echo "🚀 Deploying to Vercel + Render..."
        deploy_vercel_render
        ;;
    3)
        echo "🚀 Deploying to Netlify + Railway..."
        deploy_netlify_railway
        ;;
    4)
        echo "📚 Manual deployment instructions..."
        show_manual_instructions
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

deploy_vercel_railway() {
    echo ""
    echo "🌐 Vercel + Railway Deployment Steps:"
    echo "====================================="
    echo ""
    echo "📱 FRONTEND (Vercel):"
    echo "1. Go to https://vercel.com and sign up/login"
    echo "2. Click 'New Project'"
    echo "3. Import your GitHub repository"
    echo "4. Set build command: (leave empty for static site)"
    echo "5. Set output directory: public"
    echo "6. Deploy!"
    echo ""
    echo "🔧 BACKEND (Railway):"
    echo "1. Go to https://railway.app and sign up/login"
    echo "2. Click 'New Project' → 'Deploy from GitHub repo'"
    echo "3. Select your repository"
    echo "4. Set environment variables:"
    echo "   - NODE_ENV=production"
    echo "   - FRONTEND_URL=https://your-vercel-domain.vercel.app"
    echo "   - GEMINI_API_KEY=your_api_key"
    echo "5. Deploy!"
    echo ""
    echo "🔗 Update frontend API URL:"
    echo "   - Replace 'http://localhost:3001' with your Railway URL"
    echo "   - Update in app.js and index.html"
}

deploy_vercel_render() {
    echo ""
    echo "🌐 Vercel + Render Deployment Steps:"
    echo "===================================="
    echo ""
    echo "📱 FRONTEND (Vercel):"
    echo "1. Go to https://vercel.com and sign up/login"
    echo "2. Click 'New Project'"
    echo "3. Import your GitHub repository"
    echo "4. Set build command: (leave empty for static site)"
    echo "5. Set output directory: public"
    echo "6. Deploy!"
    echo ""
    echo "🔧 BACKEND (Render):"
    echo "1. Go to https://render.com and sign up/login"
    echo "2. Click 'New' → 'Web Service'"
    echo "3. Connect your GitHub repository"
    echo "4. Set environment variables:"
    echo "   - NODE_ENV=production"
    echo "   - FRONTEND_URL=https://your-vercel-domain.vercel.app"
    echo "   - GEMINI_API_KEY=your_api_key"
    echo "5. Deploy!"
    echo ""
    echo "🔗 Update frontend API URL:"
    echo "   - Replace 'http://localhost:3001' with your Render URL"
    echo "   - Update in app.js and index.html"
}

deploy_netlify_railway() {
    echo ""
    echo "🌐 Netlify + Railway Deployment Steps:"
    echo "======================================"
    echo ""
    echo "📱 FRONTEND (Netlify):"
    echo "1. Go to https://netlify.com and sign up/login"
    echo "2. Click 'New site from Git'"
    echo "3. Connect your GitHub repository"
    echo "4. Set build command: (leave empty for static site)"
    echo "5. Set publish directory: public"
    echo "6. Deploy!"
    echo ""
    echo "🔧 BACKEND (Railway):"
    echo "1. Go to https://railway.app and sign up/login"
    echo "2. Click 'New Project' → 'Deploy from GitHub repo'"
    echo "3. Select your repository"
    echo "4. Set environment variables:"
    echo "   - NODE_ENV=production"
    echo "   - FRONTEND_URL=https://your-netlify-domain.netlify.app"
    echo "   - GEMINI_API_KEY=your_api_key"
    echo "5. Deploy!"
    echo ""
    echo "🔗 Update frontend API URL:"
    echo "   - Replace 'http://localhost:3001' with your Railway URL"
    echo "   - Update in app.js and index.html"
}

show_manual_instructions() {
    echo ""
    echo "📚 Manual Deployment Instructions:"
    echo "=================================="
    echo ""
    echo "1. 📁 Prepare Files:"
    echo "   - Copy index.html, app.js to a web server"
    echo "   - Upload backend files to your hosting provider"
    echo ""
    echo "2. 🔧 Backend Setup:"
    echo "   - Install Node.js on your server"
    echo "   - Run: npm install"
    echo "   - Set environment variables"
    echo "   - Start with: node server.prod.js"
    echo ""
    echo "3. 🌐 Domain Setup:"
    echo "   - Point your domain to your hosting provider"
    echo "   - Set up SSL certificates"
    echo "   - Configure CORS settings"
}

echo ""
echo "✅ Deployment script completed!"
echo "📖 Follow the instructions above to deploy your application."
