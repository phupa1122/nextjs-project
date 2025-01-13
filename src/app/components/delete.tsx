import Swal from 'sweetalert2';

function Delete() {
  const handleDelete = () => {
    Swal.fire({
      title: 'คุณแน่ใจหรือไม่?',
      text: 'หากลบรายการแล้วจะไม่สามารถกู้คืนได้!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ลบรายการ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('ลบสำเร็จ!', 'รายการถูกลบเรียบร้อยแล้ว', 'success');
        // ที่นี่สามารถเพิ่มโค้ดสำหรับการลบข้อมูลได้
      }
    });
  };

  return (
    <div
      className="cursor-pointer text-red-500 hover:text-red-700"
      onClick={handleDelete}
    >
      ลบรายการ
    </div>
  );
}

export default Delete;