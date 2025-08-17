# 🚀 SAHI DAAM Deployment Guide

## 📋 **Prerequisites**

Before deploying, ensure you have:
- ✅ **Git** installed and configured
- ✅ **Node.js** (v16 or higher) installed
- ✅ **npm** or **yarn** package manager
- ✅ **GitHub account** for repository hosting
- ✅ **Vercel account** (free tier available)
- ✅ **Railway/Render account** (free tier available)

## 🎯 **Recommended Deployment Strategy**

**Frontend**: Vercel (Static hosting, CDN, SSL)
**Backend**: Railway or Render (Node.js hosting, auto-scaling)

---

## 🌐 **Step 1: Prepare Your Repository**

### **1.1 Initialize Git (if not already done)**
```bash
git init
git add .
git commit -m "Initial commit - SAHI DAAM project"
```

### **1.2 Create GitHub Repository**
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name: `sahi-daam`
4. Make it **Public** (for free hosting)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### **1.3 Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/sahi-daam.git
git branch -M main
git push -u origin main
```

---

## 📱 **Step 2: Deploy Frontend to Vercel**

### **2.1 Vercel Setup**
1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"

### **2.2 Import Repository**
1. Select your `sahi-daam` repository
2. Click "Import"

### **2.3 Configure Build Settings**
- **Framework Preset**: Other
- **Build Command**: (leave empty)
- **Output Directory**: `public`
- **Install Command**: `npm install`
- **Root Directory**: `./`

### **2.4 Environment Variables**
Add these if needed:
```
NODE_ENV=production
```

### **2.5 Deploy**
1. Click "Deploy"
2. Wait for build to complete
3. Note your domain: `https://your-project.vercel.app`

---

## 🔧 **Step 3: Deploy Backend to Railway**

### **3.1 Railway Setup**
1. Go to [Railway](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"

### **3.2 Deploy from GitHub**
1. Select "Deploy from GitHub repo"
2. Choose your `sahi-daam` repository
3. Click "Deploy Now"

### **3.3 Configure Service**
1. **Service Type**: Web Service
2. **Start Command**: `node server.prod.js`
3. **Health Check Path**: `/api/health`

### **3.4 Environment Variables**
Add these in Railway dashboard:
```
NODE_ENV=production
FRONTEND_URL=https://your-project.vercel.app
GEMINI_API_KEY=your_actual_gemini_api_key
PORT=3001
```

### **3.5 Deploy**
1. Railway will auto-deploy
2. Note your backend URL: `https://your-project.railway.app`

---

## 🔧 **Step 3 Alternative: Deploy Backend to Render**

### **3.1 Render Setup**
1. Go to [Render](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +"

### **3.2 Create Web Service**
1. Select "Web Service"
2. Connect your GitHub repository
3. Click "Connect"

### **3.3 Configure Service**
- **Name**: `sahi-daam-backend`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `node server.prod.js`
- **Plan**: Free

### **3.4 Environment Variables**
Add these in Render dashboard:
```
NODE_ENV=production
FRONTEND_URL=https://your-project.vercel.app
GEMINI_API_KEY=your_actual_gemini_api_key
```

### **3.5 Deploy**
1. Click "Create Web Service"
2. Wait for deployment
3. Note your backend URL: `https://your-project.onrender.com`

---

## 🔗 **Step 4: Update Frontend API URLs**

### **4.1 Update API Endpoints**
In your `app.js`, replace all instances of:
```javascript
// OLD (Local)
'http://localhost:3001'

// NEW (Production)
'https://your-backend-url.railway.app'  // or .onrender.com
```

### **4.2 Update CORS Settings**
In your backend, ensure CORS allows your frontend domain:
```javascript
const corsOptions = {
  origin: ['https://your-project.vercel.app'],
  credentials: true
};
```

### **4.3 Redeploy Frontend**
1. Commit and push changes to GitHub
2. Vercel will auto-deploy
3. Test the connection

---

## 🧪 **Step 5: Testing & Verification**

### **5.1 Health Check**
Visit: `https://your-backend-url.railway.app/api/health`
Should return: `{"status":"OK","message":"SAHI DAAM API is running"}`

### **5.2 Frontend Test**
1. Visit your Vercel URL
2. Test all features:
   - ✅ Customer view loads
   - ✅ Vendor view loads
   - ✅ Map loads with Delhi NCR locations
   - ✅ Voice assistant works
   - ✅ Product management works

### **5.3 API Test**
Test these endpoints:
- `GET /api/products` - Should return product list
- `POST /api/process-voice` - Should process voice data
- `POST /api/products` - Should add new products

---

## 🔒 **Step 6: Security & Production Settings**

### **6.1 Environment Variables**
Ensure these are set in production:
```
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.vercel.app
GEMINI_API_KEY=your_actual_api_key
```

### **6.2 CORS Configuration**
Update CORS to only allow your frontend domain:
```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
};
```

### **6.3 Rate Limiting (Optional)**
Add rate limiting to prevent abuse:
```bash
npm install express-rate-limit
```

---

## 📊 **Step 7: Monitoring & Maintenance**

### **7.1 Vercel Analytics**
- Enable Vercel Analytics for frontend monitoring
- Track page views, performance, and errors

### **7.2 Railway/Render Monitoring**
- Monitor API response times
- Check error logs
- Set up alerts for downtime

### **7.3 Health Checks**
- Regular health check monitoring
- Automated testing of critical endpoints

---

## 🚨 **Troubleshooting Common Issues**

### **Issue: CORS Errors**
**Solution**: Update CORS origin in backend to match your frontend domain exactly

### **Issue: API Not Responding**
**Solution**: Check Railway/Render logs, verify environment variables

### **Issue: Map Not Loading**
**Solution**: Ensure Leaflet.js CDN is accessible, check browser console

### **Issue: Voice Assistant Not Working**
**Solution**: Verify Gemini API key is set correctly in production

---

## 🌟 **Advanced Deployment Options**

### **Custom Domain Setup**
1. **Vercel**: Add custom domain in project settings
2. **Railway/Render**: Configure custom domain in service settings
3. **DNS**: Point your domain to hosting providers

### **SSL Certificates**
- Vercel: Automatic SSL
- Railway: Automatic SSL
- Render: Automatic SSL

### **CDN & Performance**
- Vercel: Global CDN included
- Enable compression and caching
- Optimize images and assets

---

## 📈 **Post-Deployment Checklist**

- [ ] ✅ Frontend loads without errors
- [ ] ✅ Backend API responds to health checks
- [ ] ✅ All features work in production
- [ ] ✅ Map loads with Delhi NCR locations
- [ ] ✅ Voice assistant processes requests
- [ ] ✅ Product management functions
- [ ] ✅ CORS errors resolved
- [ ] ✅ Environment variables configured
- [ ] ✅ Monitoring enabled
- [ ] ✅ Custom domain configured (if applicable)

---

## 🎉 **Congratulations!**

Your SAHI DAAM application is now live and accessible worldwide! 

**Frontend**: `https://your-project.vercel.app`
**Backend**: `https://your-project.railway.app` (or .onrender.com)

### **Next Steps:**
1. **Share your app** with users
2. **Monitor performance** and usage
3. **Collect feedback** and iterate
4. **Scale up** as needed

### **Support:**
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Railway: [docs.railway.app](https://docs.railway.app)
- Render: [render.com/docs](https://render.com/docs)

---

**Happy Deploying! 🚀✨**
