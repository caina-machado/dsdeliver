import "./styles.css";
import { ReactComponent as YouTubeIcon } from "../../assets/youtube-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/caina-machado" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
