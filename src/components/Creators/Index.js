import React from 'react';
import HomeHeader from '../HomePage/HomeHeader';
import './css/index.css';

const Index = () => {
  return (
    <>
      <HomeHeader backgroundColor={'#008000'} />
      <div className="creators">
        <div className="creators-main">
          <small>MULAI BLOG KAMU SECARA GRATIS</small>
          <p>
            <strong>
              Publikasikan, berkembang, dan dapatkan penghasilan, hanya dalam
              satu genggaman.
            </strong>
          </p>
          <p>
            "Jika kamu memiliki suatu cerita yang ingin diungkapkan, jangan
            diamkan dalam hatimu. Biarkan kata-kata mengalir melalui jari-jarimu
            dan warnai dunia dengan kisahmu. Ayo mulai menulis, dan izinkan
            dunia untuk terpesona oleh imajinasimu yang mengalir bebas." —
            MENULIS ADS. DILARANG DI SINI!!
          </p>
          <button>TULISLAH</button>
        </div>
      </div>
      <div className="creator-learn">
        <p>
          <strong>Mulailah menghasilkan uang melalui menulis.</strong>
        </p>
        <p>
          Pelajari bagaimana cara mendapatkan bayaran untuk konten yang kamu
          publikasikan dengan program KEMITRAAN.
        </p>
        <button>PELAJARI</button>
      </div>
    </>
  );
};

export default Index;
