// Production Configuration
module.exports = {
  NODE_ENV: 'production',
  PORT: process.env.PORT || 3001,
  FRONTEND_URL: process.env.FRONTEND_URL || 'https://your-frontend-domain.vercel.app',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || 'your_gemini_api_key_here',
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  LOG_LEVEL: 'info'
};
