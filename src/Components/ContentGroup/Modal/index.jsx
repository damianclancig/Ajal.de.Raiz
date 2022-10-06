import React from 'react'
import Button from '../Button';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Modal.css';

const Modal = ({ handleAccept, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modalText">
                    {children}
                </div>
                <div className="modalButtons">
                    {handleAccept ?
                        <Button buttonClass="button-modal-accept" buttonIcon={faCheck} handleClick={handleAccept} >Aceptar</Button>
                        : ''
                    }
                    {handleClose ?
                        <Button buttonClass="button-modal-cancel" buttonIcon={faXmark} handleClick={handleClose} >Cancelar</Button>
                        : ''
                    }
                </div>
            </section>
        </div>
    );
};

export default Modal;