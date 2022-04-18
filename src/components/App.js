
import '../styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cards from './cards';
import HomeSlide from './HomeSlide';
import { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import studentimg from '../images/student.jpg';
import employeeimg from '../images/employee.jpg';
import travelerimg from '../images/traveler.jpg';

function App() {
  return (
    <div className="h-100 w-100">
       
    <BrowserRouter>
     <Header/>
      <Routes>
      
      <Route path="/" element={ 
      <Fragment>
          <HomeSlide
          autoPlay={true}
          activeSlideDuration={3000}
          interactionMode="swipe"
          alignCaption="center"
          alignIndicators="center"
          indicatorsColor="#fff"
          useRightLeftTriangles={true}
          rightTriangleColor="#fff"
          leftTriangleColor="#fff"
          rightIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
            </svg>
          }
          leftIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
            </svg>
          }
        >
          <div>
            <img src="https://picsum.photos/id/1/1280/500" className="img-fluid h-100 w-100 crlimg"/>
            <div className="carousel-caption">
              <h3 className="carousel-caption-title">Student</h3>
              <p className="carousel-caption-subtitle">First subtitle</p>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/id/234/1280/500" className="img-fluid h-100 w-100 crlimg"/>
            <div className="carousel-caption">
              <h3 className="carousel-caption-title">Employee</h3>
              <p className="carousel-caption-subtitle">Second subtitle</p>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/id/790/1280/500" className="img-fluid h-100 w-100 crlimg"/>
            <div className="carousel-caption">
              <h3 className="carousel-caption-title">Traveler</h3>
              <p className="carousel-caption-subtitle">Third subtitle</p>
            </div>
          </div>
        </HomeSlide>
        <div className='row container-fluid'>
        <Cards type="studentBg"  title='What I learned from my visit to The Upside Down' author='Student'/>
        <Cards type="employeeBg"  title='What I learned from my visit to The Upside Down' author='Employee'/>
        <Cards type="travelerBg"  title='What I learned from my visit to The Upside Down' author='Traveler'/>
        
        </div>
      </Fragment>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;
