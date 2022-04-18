import "../styles/cards.css";
import React from "react";

class Cards extends React.Component {
    render() {
      return(
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 p-3">
              <div className={`card ${this.props.type}`}  >
            {/* <img src={this.props.img} /> */}
            <div className="card-body">
              <h2>{this.props.author}</h2>
              <h5>{this.props.title}</h5>
            </div>
          </div>
          </div>
      )
    }
  }
  
  
  
export default Cards;
   
  