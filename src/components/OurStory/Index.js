import React from 'react';
import HomeHeader from '../HomePage/HomeHeader';
import './css/index.css';
import { AuthModal } from '../Modals/AuthModal';
import { signInWithGoogle } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate('/your-desired-path-after-login');
    }
  };

  return (
    <>
      <HomeHeader backgroundColor={'#ffffff'} />
      <div className="our-story-head">
        <div className="our-story-content">
          <p>
            Setiap ide membutuhkan<span> Median.</span>
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="our-story-content-main">
        <div className="our-story-content-main-left">
          <div className="our-story-main-content">
            <p>
              "Ide terbaik adalah yang dapat dimengerti oleh penerimanya".
              Median. adalah tempat di mana ide-ide tersebut terbentuk,
              berkembang, dan memicu percakapan yang kuat hingga memunculkan
              suatu pengertian yang dalam. Seperti median secara guna dan
              fungsinya pada jurnalisme dan juga ilmu sosial; Median. dapat
              membantu membentuk pemahaman yang lebih akurat dan objektif
              tentang suatu topik atau isu. (DISCLAIMER: JUJUR KAMI TERINSPIRASI
              PADA MEDIUM.COM, PERKENANKAN KAMI SEPERTI MELAKUKAN FORK DARI
              MEDIUM.) Namun kami pastikan satu hal bahwa kami adalah platform
              terbuka di mana lebih dari ratusan juta pembaca akan datang untuk
              menemukan pemikiran yang mendalam dan dinamis. Di sini, suara para
              ahli dan yang belum (seperti kami ini) akan sama-sama menyelam ke
              inti dari setiap topik dan membawa ide-ide baru ke permukaan.
              Tujuan kami adalah menyebarkan ide-ide dan membudayakan membaca
              dan menulis untuk Indonesia.
            </p>
            <br />
            <p>
              Kami mendorong model baru publikasi digital di Indonesia. Satu
              model yang mendukung nuansa, kompleksitas, dan penceritaan penting
              tanpa dikalahkan oleh iklan seperti kebanyakan website blog
              lainnya. Tanpa itu semua, membaca pasti akan sangat "FUN". Karena
              membaca dan menulis adalah sesuatu yang seharusnya membahagiakan
              siapapun, sama seperti pemilihan domain kami "median.fun". Di sini
              adalah lingkungan yang terbuka untuk semua orang namun kami
              mendorong substansi. Di sinilah hubungan yang lebih dalam antara
              pembaca dan penulis dapat membawa penemuan dan pertumbuhan.
              Bersama dengan jutaan kolaborator, kami membangun ekosistem yang
              tepercaya dan dinamis yang didorong oleh ide-ide penting dan
              orang-orang yang memikirkan tentang masa depan Manusia.
            </p>
          </div>
        </div>
        <div className="anime">
          <iframe
            title="anime"
            src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1"
            width="100%"
            height="100%"
            positioning="relative"
            frameBorder="0"
            allow="autoplay; fullScreen"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      {/* Membership */}
      <div className="membership">
        <div className="memership-content-left">
          <iframe
            title="cube"
            src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1"
            width="100%"
            height="100%"
            positioning="relative"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen=""
          />
        </div>
        <div className="membership-content-right">
          <div className="membership-content-right-content">
            <h2>BACA LALU TULISLAH</h2>
            <br />
            <h2>DAN PERLUAS</h2>
            <br />
            <h2>CAKRAWALAMU.</h2>
            <button onClick={() => setModal(true)}>Ayo Mulai</button>
          </div>
        </div>
      </div>
      <AuthModal
        signInPopup={handleGoogleSignIn}
        open={modal}
        setOpen={setModal}
      />
    </>
  );
};

export default Index;
