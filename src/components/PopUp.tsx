import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  title: string;
  content: string;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const PopUp = forwardRef(({ title, content }: Props, ref: Ref<ModalRef>) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Expose functions via the ref for external use
  useImperativeHandle(ref, () => ({
    open: handleShow,
    close: handleClose,
  }));

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
});

export default PopUp;
