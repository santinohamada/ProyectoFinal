import { useState } from "react";
const useModal = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  return { fullscreen, setShow, handleShow, show, handleClose };
};
export default useModal;
