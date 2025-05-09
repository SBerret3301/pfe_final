// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // تأكد أنها فيها /api إذا عندك API Routes
  withCredentials: true,  // خاصك تحددها باش تتعامل مع cookies
});



// ➕ كيضيف التوكن أوتوماتيكياً فـ كل الطلبات المحمية
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // إذا كان الطلب يتطلب CSRF cookie، أرسل طلب CSRF أولاً
  if (config.method === 'post' || config.method === 'put') {
    // طلب CSRF أولاً
    axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
      .then(() => console.log('✅ CSRF Cookie reçu'))
      .catch(error => console.error('❌ Erreur CSRF', error));
  }
  
  return config;
});

export default api;
