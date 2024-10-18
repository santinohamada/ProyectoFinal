import { useState } from "react";
const useModal = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    console.log("hi");
    setShow(true);
  }
  function handleClose() {
    console.log("bye");
    setShow(false);
  }
  return { fullscreen, setShow, handleShow, show, handleClose };
};
export default useModal;
