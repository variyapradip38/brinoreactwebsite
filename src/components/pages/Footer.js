import React from 'react';
import {NavLink} from "react-router-dom";
const Footer = () => {


return(

	<>

              <div className="footer-bottom overlay-wraper bg-dark">
                <div className="overlay-main"></div>
                <div className="container">
                    <div className="row">
                        <div className="sx-footer-bot-left">
                            <span className="copyrights-text text-white">©© 2020 All Right Reserved by React-app.com | <a href="privacy-policy" className="text-Dark">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>
            </div>

	</>

	);
};
export default Footer;