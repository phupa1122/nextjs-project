import React from 'react'

export default function Modal() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    modal?.showModal();
  }

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">Close</button>
        </form>
      </dialog>
    </>
  )
}
