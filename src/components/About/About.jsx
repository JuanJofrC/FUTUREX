import './About.css';
import Juane from '../Img/Juane.webp';
import Snuk from '../Img/Snuk.webp';

function About() {
  return (
    <div className="about-container">
      <h1>Fundadores</h1>
      <div className="about-content">
        <div className="student-card">
          <div className="profile-image-container">
            <img 
              src={Juane} 
              alt="Juan José Fajardo" 
              className="profile-image" 
            />
          </div>
          <h2>Juan José Fajardo "Ing. Multimedia"</h2>
          <p>Ingeniero en pavimentación aérea</p>
          <p>Batman por las noches</p>
          <p>Contacto: +57 301 5729847</p>
        </div>
        <div className="student-card">
          <div className="profile-image-container">
            <img 
              src={Snuk} 
              alt="Juan Diego Dueñas" 
              className="profile-image" 
            />
          </div>
          <h2>Juan Diego Dueñas "Ing.Multimedia"</h2>
          <p>Ingeniero en maternidad de gallinas</p>
          <p>Catador de agua</p>
          <p>Contacto: +57 318 8278290</p>
        </div>
      </div>
    </div>
  );
}

export default About;