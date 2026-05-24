import { Outlet, Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import './nav-bar.component.css';
import { useState } from 'react';

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="container-nav-bar">
        <div className="image-nav-bar">
          <h1>Icon</h1>
        </div>
        <div className="links-nav-bar">
          <FiAlignJustify onClick={() => setOpenModal(!openModal)} />
        </div>
      </div>

      {openModal && (
        <div className="container-nav-bar-in-mobile">
          <div className="container-nav-bar-mobile">
            <div className="container-button-links-mobile">
              <AiOutlineClose
                AlignJustify
                onClick={() => setOpenModal(!openModal)}
              />
            </div>
            <div className="container-links-mobile">
              <Link to={'/#'}>Home</Link>
              <Link to={'/#'}>About Me</Link>
              <Link to={'/#'}>My Works</Link>
              <Link to={'/#'}>Contact</Link>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default NavBar;
