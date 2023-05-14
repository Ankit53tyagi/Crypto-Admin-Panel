import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdNotifications } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from 'react-router-dom';
const UserImg = require('../../assets/image/user-i.jpg') 

const Header = () => {
    const headerTitle = useLocation();
    const{ pathname } = headerTitle;
    console.log(pathname.split('/')[1])
    let title = pathname.split('/')[1].replace("-"," ");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="main-content-header sticky-top">
                <div className="mch-heading-wrapper mb-0">
                    <h2 className="mch-heading mb-0" style={{textTransform:'capitalize'}}>{title}</h2>
                </div>
                <div className="mch-right-items">
                    <Link className="notifictaion-bar active" to='/notification'>
                        <MdNotifications style={{ width:'25px', height:'25px' }}/>
                    </Link>
                    <Dropdown className='user-menu'>
                    <Dropdown.Toggle variant="success" className='user-btn' id="dropdown-basic">
                        User123 <img src={UserImg} alt="user" className="img-fluid" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='user-dropmenu '>
                        <Dropdown.Item onClick={handleShow}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
            <Modal dialogClassName="modal-custom-sm" centered show={show} onHide={handleClose}>
                <Modal.Body className='p-0'>
                        <div className="card logout-card common_box">
                            <div className="card-body common_box_body py-4 px-3">
                                <p className="modalTitle text-center mb-2 fw-bold">Are you sure you want to<br/>Logout</p>
                                <form className="custom_form">            
                                    <div className="btn-wrapper text-center">
                                        <Link className="btn btn-form btn-cancel" onClick={handleClose}>No</Link>
                                        <Link className="btn btn-form btn-add" onClick={handleClose} to='/'>Yes</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;
