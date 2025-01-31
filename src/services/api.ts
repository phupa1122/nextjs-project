// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API, // ตั้งค่า baseURL ไว้เลย จะได้ไม่ต้องพิมพ์ทุกครั้ง
  // ถ้ามี header หรือ options อื่น ๆ ก็ใส่เพิ่มได้
});

console.log(process.env.NEXT_PUBLIC_API);

export default api;