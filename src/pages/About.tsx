import { useRef } from "react";
import HeroNavBar from "../components/HeroNavBar";
import HeroOverlay from "../components/HeroOverlay";
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
      <HeroNavBar />
      <HeroOverlay />
      <button onClick={handleOpenModal} className="btn btn-primary">
        My Button
      </button>
      <button onClick={handleCloseModal} className="btn btn-primary">
        My Button
      </button>
      <PopUp title="Alert" content="This is a alert." ref={modalRef} />
      About
    </>
  );};

export default About;
