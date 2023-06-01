import { Button, Modal } from "react-bootstrap"
import "../Css/Header.css"
import NavBarComponent from "./NavbarComponent"
import { useState } from "react";
import { ImArrowRight } from "react-icons/im"
import { ImArrowDownRight } from "react-icons/im"

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
            <h3>Jo Pessoa - Agência de viagem digital</h3>
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
      <button className="buttons_pers"  onClick={handleShow}>
        Mentorias
      </button>

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
          <Modal.Title>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <ImArrowRight /> 
            <h1 className="modal_infos" style={{marginLeft: '10px'}}>Como funciona nossas mentorias ?</h1>
            </div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div >
            <ImArrowDownRight /> 
            <p className="p_modal">Mentoria em milhas aéreas - individual
              De acordo com a disponibilidade do cliente (em torno de 6 a 10 aulas)</p>
            </div>
            <div >
            <ImArrowDownRight /> 
            <p className="p_modal" >
              Assesorias em cartões de créditos</p>
            </div>
            <div >
            <ImArrowDownRight /> 
            <p className="p_modal" >{`Gestor em milhas - para aqueles que não querem "por a mão na massa"`}</p>
            </div>
            <div >
            <ImArrowDownRight /> 
            <p className="p_modal" >Close friends - grupo de alerta das melhores oportunidades do mercado</p>
            </div>
    
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