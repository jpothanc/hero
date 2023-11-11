import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  title1: string;
}
type FormState = {
  title: string;
  content: string;
  show: boolean;
};

export interface ModalRef {
  open: () => void;
  close: () => void;
  setDetails: (title: string, content: string) => void;
}

const PopUp = forwardRef(({}: Props, ref: Ref<ModalRef>) => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    content: "",
    show: false,
  });

  const handleDetails = (arg0: string, arg1: string) => {
    setFormState({
      ...formState,
      title: arg0,
      content: arg1,
    });
  };

  const handleClose = () => {
    setFormState((prev) => ({
      ...prev,
      show: false,
    }));
  };
  const handleShow = () => {
    setFormState((prev) => ({
      ...prev,
      show: true,
    }));
    console.log(formState.content);
  };

  // Expose functions via the ref for external use
  useImperativeHandle(ref, () => ({
    open: handleShow,
    close: handleClose,
    setDetails: handleDetails,
  }));

  return (
    <>
      <div>
        <Modal
          show={formState.show}
          onHide={handleClose}
       
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "10px",
              }}
            >
              {formState.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={4} md={8}>
                  <p>{formState.content}</p>
                </Col>
                <Col xs={4} md={4}>
                  <p>{formState.content}</p>
                </Col>
              </Row>

              <Row>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
});

export default PopUp;
