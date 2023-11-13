import { useRef } from "react";
import PopUp, { ModalRef } from "../components/PopUp";

const About = () => {
  const modalRef = useRef<ModalRef | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };
  return (
    <>
      <button onClick={handleOpenModal} className="btn btn-primary">
        My Button
      </button>
      <button onClick={handleCloseModal} className="btn btn-primary">
        My Button
      </button>
      <PopUp title1="Alert" ref={modalRef} />
      About
    </>
  );
};

export default About;
