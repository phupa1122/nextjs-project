import React from "react";
import { PiTrashFill } from "react-icons/pi";
import ModalDetail from "./modalDetail";
import ModalEdit from "./modalEdit";
import { useRouter } from "next/navigation";
import { dataBook } from "./dataBook.js";
import Swal from "sweetalert2";
import Noitems from "@/app/components/noitems";

const TableComponent = () => {
    const router = useRouter();

    const navigateToPayment = () => {
        router.push("/payment");
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "ลบการจองคิวหรือไม่?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "ลบการจองคิว",
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData(id);
            }
        });
    };

    const deleteData = async (id: number) => {
        try {
            const response = await fetch(`/api/delete/${id}`, { method: "DELETE" });
            if (response.ok) {
                Swal.fire("ลบสำเร็จ!", "ข้อมูลของคุณถูกลบแล้ว.", "success");
                // เพิ่มโค้ดเพื่ออัปเดตข้อมูลในตาราง
            } else {
                Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้.", "error");
            }
        } catch (error) {
            Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์.", "error");
        }
    };

    return dataBook.length > 0 ? (
        <div className="overflow-x-auto mx-5 py-2">
          <table className="table w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-gray1 text-sm opacity-50 bg-gray-100 border-b-2 border-gray-300">
                <th className="py-2 px-4 text-left">บริการ</th>
                <th className="py-2 px-4 text-left">ราคา</th>
                <th className="py-2 px-4 text-left">สถานะ</th>
                <th className="py-2 px-4 text-left">จัดการ</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
    
            <tbody>
              {dataBook.map((book, index) => (
                <tr
                  key={book.id || index + 1}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={book.image} alt={book.title} />
                        </div>
                      </div>
                      <div className="text-black1">
                        <div className="text-base font-bold">{book.title}</div>
                        <ModalDetail
                          id={book.id || index + 1}
                          title={book.title || "-"}
                          price={book.price || index}
                          name={book.name || "-"}
                          phone={book.phone || "-"}
                          date={book.date || "-"}
                          emp={book.emp || "-"}
                          time={book.time || "-"}
                        />
                        <button
                          className="text-gray1 text-xs border-b-2"
                          onClick={() => {
                            const modal = document.getElementById(
                              `book${book.id}`
                            ) as HTMLDialogElement;
                            if (modal) modal.showModal();
                          }}
                        >
                          รายละเอียด
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray1 text-sm">{book.price} บาท</td>
                  <td className="py-3 px-4 text-gray1 text-sm">รออนุมัติ</td>
                  <td className="py-3 px-4 flex-row space-x-5 items-center">
                    <button
                      className="text-sm text-pink1 hover:text-blue1 transition-colors duration-200"
                      onClick={navigateToPayment}
                    >
                      ชำระเงิน
                    </button>
                    <button
                      className="text-sm text-pink1 hover:text-blue1 transition-colors duration-200"
                      onClick={() => {
                        const modal = document.getElementById(
                          `edit${book.id}`
                        ) as HTMLDialogElement;
                        if (modal) modal.showModal();
                      }}
                    >
                      แก้ไขการจอง
                    </button>
                    <ModalEdit
                          id={book.id || index + 1}
                          title={book.title || "-"}
                          price={book.price || index}
                          name={book.name || "-"}
                          phone={book.phone || "-"}
                          date={book.date || "-"}
                          emp={book.emp || "-"}
                          time={book.time || "-"}
                        />
                  </td>
                  <th className="py-3 px-4 group">
                    <PiTrashFill
                      size={24}
                      className="text-[#7A7772] group-hover:text-[#FF2D47] transition-colors duration-200"
                      onClick={() => handleDelete(book.id)}
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Noitems />
      );
};

export default TableComponent;
