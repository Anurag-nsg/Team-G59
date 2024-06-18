import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, ModalHeader } from 'react-bootstrap'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
    setCollapseOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige fixed-top" >
      <div className="container-fluid" style={{backgroundColor:'gray'}}>
        <a className="navbar-brand" onClick={() => handleNavLinkClick('/')} style={{cursor: 'pointer'}}>
          <img src="./image.png" style={{ maxHeight: '70px', width: '50px', maxWidth: '100%', height: 'auto', marginLeft: '5px' ,background:'transparent',borderRadius:'10px',padding:'4px',boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',}} alt="Navbar Logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={() => setCollapseOpen(!collapseOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mr-auto">

          <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'}}>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',paddingLeft:'0px',marginRight:'10px',color:'#F5F5DC'}}>
               1
              </Dropdown.Toggle>

              <Dropdown.Menu style={{width:'100%',minWidth:'200px' ,backgroundColor:'#5D54A4'}}>
                <Dropdown.Item onClick={() => handleNavLinkClick('/silver')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/silverstock')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'} }>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',paddingLeft:'0px',marginRight:'10px',color:'#F5F5DC'}}>
                2
              </Dropdown.Toggle>
              <Dropdown.Menu style={{width:'100%',minWidth:'200px',backgroundColor:'#5D54A4',}}>
                <Dropdown.Item onClick={() => handleNavLinkClick('/gold')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/goldstock')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>            
          
            

            <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'}}>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',color:'#F5F5DC',paddingLeft:'0px',marginRight:'10px'}}>
              3
              </Dropdown.Toggle>

              <Dropdown.Menu style={{width:'100%',minWidth:'200px',backgroundColor:'#5D54A4'}}>
                <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-1')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-2')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>3</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>5</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li className="nav-item" style={{marginRight:'10px'}}>
              <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/orders')}>4</button>
            </li>

            <li className="nav-item" style={{marginRight:'10px'}}>
              <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/price')}>5</button>
            </li>

            <li className="nav-item" style={{marginRight:'10px'}}>
              <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/report')}>6</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/invoice')}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;