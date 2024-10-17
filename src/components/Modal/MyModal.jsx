import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useModal from "./useModal.jsx";
import ReservationForm from "../ReservationForm/ReservationForm.jsx"
ReservationForm // Importamos el componente del formulario

const MyModal = () => {
  const { show, fullscreen, setShow, handleShow, handleClose } = useModal();

  return (
    <>
      <p style={{cursor:"pointer"}} className="me-2 mb-2" onClick={() => handleShow()}>
        Reservar
      </p>

      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <div className="d-flex justify-content-between p-3">
          <h2 className="text-center w-100">HOTEL</h2>
          <button onClick={handleClose} className="btn-close"></button>
        </div>

        <div className="container" style={{ position: "relative", top: "20%" }}>
          <ReservationForm /> {/* Usamos el componente que maneja el formulario */}
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
