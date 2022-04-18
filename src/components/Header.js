import React from "react";
import "../styles/Header.css";

class Header extends React.Component{
    render(){
        return(
            <header className="header-section container-fluid p-0">
        <div className="logo-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 align-start">
                        <div className="logo-text">
                        <p>Logo</p>
                        </div>
                         
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
        )
    }
}

export default Header;