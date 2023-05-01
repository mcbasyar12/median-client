import React from 'react';
import { AuthModal } from '../Modals/AuthModal';
import './css/MainPage.css';

// gt-super, Georgia, Cambria, "Times New Roman", Times, serif

const MainPage = ({ signInPopup }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <h3>
            Median. tempat berkarya, <br /> membaca, menulis, <br />
            dan terhubung satu sama lain.
          </h3>
          <h6>
            Kemudahan kini ada di hadapan anda untuk berkespresi juga memiliki
            penghasilan.
          </h6>
          <button onClick={() => setModal(true)}>TULISLAH</button>
        </div>
      </div>
      <div>
        <AuthModal signInPopup={signInPopup} open={modal} setOpen={setModal} />
      </div>
    </div>
  );
};

export default MainPage;
