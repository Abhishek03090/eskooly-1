

import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBell } from '@fortawesome/free-solid-svg-icons';
import Apple from '../../Assests/apple.png';
import Google from '../../Assests/google.png';
import NoImage from '../../Assests/no-image.png';

function HamburgerMenu({ handleNotificationClick, notifications }) {
  return (
    <Nav className="me-2">
      {/* <Nav.Link href="https://apps.apple.com/pk/app/eskooly/id6448073356">
        <img src={Apple} style={{ width: '120px' }} alt="Apple Store" />
      </Nav.Link>
      <Nav.Link href="https://play.google.com/store/apps/details?id=com.eskooly.app">
        <img src={Google} style={{ width: '120px' }} alt="Google Play Store" />
      </Nav.Link> */}

      <Nav.Link href="#" onClick={() => handleNotificationClick('bell')}>
        <FontAwesomeIcon
          icon={faBell}
          className={notifications.bell > 0 ? 'icon-with-notification' : ''}
        />
        <span id="msgaya" className="badge bg-c-green f-10">
          {notifications.bell}
        </span>
      </Nav.Link>

      <Nav.Link href="#" onClick={() => handleNotificationClick('comment')}>
        <FontAwesomeIcon
          icon={faComment}
          className={notifications.comment > 0 ? 'icon-with-notification' : ''}
        />
        <span className="badge bg-c-yellow f-10">{notifications.comment}</span>
      </Nav.Link>

      {/* <Nav.Link href="#">
        <img
          src={NoImage}
          style={{ width: '40px', height: '40px' }}
          className="img-radius"
          alt="User"
        />
      </Nav.Link> */}

      <NavDropdown title={<img
          src={NoImage}
          style={{ width: '40px', height: '40px' }}
          className="img-radius"
          alt="User"
        />} id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Account Settings</NavDropdown.Item>
        <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default HamburgerMenu;
