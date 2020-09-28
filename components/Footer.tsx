import { FiGithub, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="startproject-container">
        <h2>Start a Project</h2>
        <div className="disc">
          Interested in working together? We should queue up a chat. I’ll buy
          the coffee.
        </div>
        <div className="lets">Let's do this</div>
      </div>
      <div className="foot-main">
        Living, learning, & leveling up one day at a time.
        <div className="icons">
           <div className="fb">
              <FiFacebook />
           </div>
           <div className="tw">
              <FiTwitter />
           </div>
           <div className="in">
              <FiLinkedin />
           </div>
           <div className="git">
              <FiGithub />
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
