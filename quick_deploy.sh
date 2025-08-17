#!/bin/bash

echo "🚀 SAHI DAAM Quick Deployment"
echo "=============================="

# Create production build
echo "📁 Creating production build..."
mkdir -p public
cp index.html public/
cp app.js public/

# Check if assets directory exists
if [ -d "assets" ]; then
    cp -r assets public/
    echo "✅ Assets copied"
else
    echo "⚠️ No assets directory found"
fi

echo ""
echo "🎯 Quick Deployment Steps:"
echo "=========================="
echo ""
echo "1. 🌐 Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for deployment'"
echo "   git push origin main"
echo ""
echo "2. 📱 Deploy Frontend (Vercel):"
echo "   - Go to https://vercel.com"
echo "   - New Project → Import GitHub repo"
echo "   - Output Directory: public"
echo "   - Deploy!"
echo ""
echo "3. 🔧 Deploy Backend (Railway):"
echo "   - Go to https://railway.app"
echo "   - New Project → Deploy from GitHub"
echo "   - Start Command: node server.prod.js"
echo "   - Add environment variables"
echo "   - Deploy!"
echo ""
echo "4. 🔗 Update API URLs:"
echo "   - Replace 'localhost:3001' with your Railway URL"
echo "   - Push changes to GitHub"
echo "   - Vercel auto-deploys"
echo ""
echo "✅ Production build ready in 'public' folder!"
echo "📖 See DEPLOYMENT_GUIDE.md for detailed steps"
