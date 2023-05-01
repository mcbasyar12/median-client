import React from 'react';
import HomeHeader from '../HomePage/HomeHeader';
import './css/index.css';

const Index = () => {
  return (
    <>
      <HomeHeader backgroundColor={'#dd0000'} />

      <div className="member">
        <div className="member-top-content">
          <p>
            <strong>Cogito Ergo Sum.</strong>
          </p>
          <p>
            Dapatkan akses tak terbatas ke setiap tulisan Median. <br />
            Serta support dari penulis yang kamu sukai.
          </p>
          <button
            onClick={() =>
              window.open('https://unlimited.median.fun', '_blank')
            }
          >
            Akses Tak Terbatas (Segera Hadir)
          </button>
        </div>

        <div className="member-grid">
          <div className="member-grid-content">
            <div className="grid-left">
              <p>
                <strong>Rasakan kepuasan akses yang tak terbatas.</strong>
              </p>

              <img
                alt="fallback"
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
              ></img>

              <p>
                Baca setiap artikel di seluruh perpustakaan kami di semua
                perangkat Anda - tanpa tembok pembayaran, batasan cerita, atau
                iklan.
              </p>
            </div>
            <div className="grid-left">
              <p>
                <strong>
                  Dukung suara yang ingin Anda dengar lebih banyak.
                </strong>
              </p>

              <img
                alt="fallback"
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
              ></img>

              <p>
                Sebagian dari keanggotaan Anda akan langsung mendukung penulis
                dan pemikir yang paling sering Anda baca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
