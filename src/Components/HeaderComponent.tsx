import { Button, Modal } from "react-bootstrap"
import "../Css/Header.css"
import NavBarComponent from "./NavbarComponent"
import { useState } from "react";

export const HeaderComponent = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <>
    <div className="header">
        <div className="nav">
        <NavBarComponent />  
        </div>
        <div className="text">
            <div className="h3">
            <h3>Jo Pessoa Agência de viagem digital</h3>
            </div>
            <div className="buttons">
            <a href="#destiny">
            <button className="buttons_pers">
            Destinos
            </button>
                </a>
                <a href="#mission">
            <button className="buttons_pers">
                    Missão e valores
            </button>
                </a>
      <Button className="buttons_pers"  onClick={handleShow}>
        Teste
      </Button>

      <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Dont even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        </div>
    </div>
    </>
    )
}