// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/', // ตั้งค่า baseURL ไว้เลย จะได้ไม่ต้องพิมพ์ทุกครั้ง
  // ถ้ามี header หรือ options อื่น ๆ ก็ใส่เพิ่มได้
});

export default api;