import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthModal } from '../Modals/AuthModal';
import logo from './11.svg';
import './css/HomeHeader.css';

function HomeHeader({ signInPopup, backgroundColor }) {
  const [modal, setModal] = React.useState(false);
  const location = useLocation();
  return (
    <header>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="header"
      >
        <div className="header-left">
          <Link to={'/'}>
            <img src={logo} width={161} height={100} alt="Logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-right-options-button">
            <div className="header-right-option">
              <Link to="/our-story">
                <span
                  style={{
                    fontWeight: location.pathname === '/our-story' && 'bold',
                    textDecoration:
                      location.pathname === '/our-story' && 'underline',
                  }}
                >
                  Publikasi
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <Link to="/membership">
                <span
                  style={{
                    fontWeight: location.pathname === '/membership' && 'bold',
                    textDecoration:
                      location.pathname === '/membership' && 'underline',
                  }}
                >
                  Kemitraan
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <Link to="/creators">
                <span
                  style={{
                    fontWeight: location.pathname === '/creators' && 'bold',
                    textDecoration:
                      location.pathname === '/creators' && 'underline',
                  }}
                >
                  Tulislah
                </span>
              </Link>
            </div>
            <div className="header-right-option">
              <span onClick={() => setModal(true)}>Sign In</span>
            </div>
            <div className="header-right-started">
              <span>
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setModal(true)}
                >
                  Ayo mulai
                </button>
              </span>
            </div>
            <AuthModal
              signInPopup={signInPopup}
              open={modal}
              setOpen={setModal}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
