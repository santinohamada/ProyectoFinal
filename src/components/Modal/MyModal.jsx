import Modal from "react-bootstrap/Modal";
import useModal from "../CustomsHooks/useModal.jsx";
import ReservationForm from "../ReservationForm/ReservationForm.jsx";
ReservationForm;

const MyModal = ({ children }) => {
  const { show, fullscreen, handleShow, handleClose } = useModal();

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        className="me-2 mb-2"
        onClick={() => handleShow()}
      >
        {children}
      </div>

      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <div className="d-flex justify-content-between p-3">
          <h2 className="text-center w-100">HOTEL</h2>
          <button onClick={handleClose} className="btn-close"></button>
        </div>

        <div className="container" style={{ position: "relative", top: "20%" }}>
          <ReservationForm handleClose={handleClose} />
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
