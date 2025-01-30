// services/productService.ts
import api from './api';

/** ประกาศ interface สำหรับโครงสร้างข้อมูลในแต่ละ service */
export interface ServiceItem {
  service_id: number;
  service_name: string;
  service_type_id: number;
  service_price: number;
  service_time: number;
  service_detail: string;
  service_type_name: string;
  service_image: string;
}

/** ประกาศ interface สำหรับโครงสร้าง JSON ที่ API ตอบกลับ */
// interface ServiceResponse {
//   status: boolean;
//   data: ServiceItem[];
// }

/** ฟังก์ชันเรียก API เพื่อดึงข้อมูล service */
export async function fetchServices(): Promise<ServiceItem[]> {
  const response = await api.get('service');
  // สมมติ endpoint เป็น /service ถ้าฐานคือ http://localhost:3001/api/
  // ฟูล URL ที่เรียก คือ http://localhost:3001/api/service

  if (response.data && response.data.status) {
    return response.data.data; // คืนอาเรย์ของ service กลับไป
  }
  return []; // หรือจะ throw error ก็ได้แล้วแต่กรณี
}
