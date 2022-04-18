import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-section container-fluid p-0 d-block mr-0 ml-0">
        <div className="copyright-area">
            <div className=" ">
                <div className="row container-fluid" style={{justifyContent:'center'}}>
                    <div className="col-12 text-center">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}

export default Footer;