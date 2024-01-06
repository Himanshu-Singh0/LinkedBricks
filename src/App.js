import React, { useState } from 'react';
import MySelect from './components/MySelect';
import PropertyBox from "./components/PropertyBox";
import './App.css';

function App() {
  const [currentBox, setCurrentBox] = useState(1);

  const handleButtonClick = (boxNumber) => {
    setCurrentBox(boxNumber);
    const boxes = document.querySelectorAll('.sliding-box');
    boxes.forEach((box, index) => {
      if (index + 1 === boxNumber) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  };
  return (
    <div className='main'>
      <div className="header ">
        <img src="/static/logo.svg" alt="Description of the image" className='logo-navbar'/>
        <div className='menu-bar-desktop '>
          <div className='nav-bar-button clicked d-flex'> <img src="/static/home.svg"/> <p className='ps-10 p-3'>Home</p></div>
          <div className='nav-bar-button d-flex'> <img src="/static/store.svg"/> <p className='ps-10 p-3'>For Sale</p></div>
          <div className='nav-bar-button d-flex'> <img src="/static/home.svg"/> <p className='ps-10 p-3'>For Rent</p></div>
          <div className='nav-bar-button d-flex'> <img src="/static/home-activity.svg"/> <p className='ps-10 p-3'>For Investment</p></div>
          <div className='nav-bar-button d-flex'> <img src="/static/building-coins.svg"/> <p className='ps-10 p-3'>For Blog</p></div>
          <div className='nav-bar-button d-flex'> <img src="/static/vector.svg"/> <p className='ps-10 p-3'>Sign in</p></div>
        </div>
        <div className='nav-bar-button yellow d-flex ps-10 yellow add-listing ps-20'> <img src="/static/Subtract.svg" className=' w-24'/> <p className='ps-10 ps-10'>Add Listing</p></div>
        
        
      </div>
      <div className='body '>
        
        <div className='d-flex sliding-container'>
          <div className={`sliding-box ${currentBox === 1 ? 'active' : ''}`}>
            <img src="/static/Rectangle34624572.png" className='w-100' alt="Box 1" />
            <p className='big-text'>Discover Your Dream Home </p>
            <p className='small-text'>Your one-stop real estate destination for buying, renting, and selling properties.</p>
          </div>
          <div className={`sliding-box ${currentBox === 2 ? 'active' : ''}`}>
            <img src="/static/Rectangle34624572.png" className='w-100' alt="Box 2"/>
            <p className='big-text'>Discover Your Dream Home </p>
            <p className='small-text'>Your one-stop real estate destination for buying,renting, and selling properties.</p>
          </div>
          <div className={`sliding-box ${currentBox === 3 ? 'active' : ''}`}>
            <img src="/static/Rectangle34624572.png" className='w-100' alt="Box 3"/>
            <p className='big-text'>Discover Your Dream Home </p>
            <p className='small-text'>Your one-stop real estate destination for buying,renting, and selling properties.</p>
          </div>
        </div>   

        <div className='button-container'>
          <button onClick={() => handleButtonClick(1)}>
            <img src="/static/round.svg" alt="Button 1" />
          </button>
          <button onClick={() => handleButtonClick(2)}>
            <img src="/static/round.svg" alt="Button 2" />
          </button>
          <button onClick={() => handleButtonClick(3)}>
            <img src="/static/round.svg" alt="Button 3" />
          </button>
        </div> 

        <div className='menu-bar-desktop mid-search'>
          <div className='bar-button d-flex l-yellow bg-l-yellow'> <img src="/static/store.svg"/> <p className='ps-10 p-3'>For Sale</p></div>
          <div className='bar-button d-flex bg-l-yellow'> <img src="/static/home.svg"/> <p className='ps-10 p-3'>For Rent</p></div>
          <div className='bar-button d-flex bg-l-yellow'> <img src="/static/home-activity.svg"/> <p className='ps-10 p-3'>For Investment</p></div>
          <MySelect/>
          <div className='nav-bar-button yellow d-flex ps-10 yellow p-10 ms-10'> <img src="/static/search.svg" className=' w-24'/> <p className='ps-10 ps-10'>Search</p></div>
        </div>

        <div className='spacer-mid'></div>

        <div className='featured-properties'>
          <p className='big-title'>Featured Properties</p>
          <PropertyBox/>
        </div>
        <div className='why-choose-us'>
          <div className='title'>Why Choose Us</div>
          <div className='d-flex main-box'>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/hassle-free.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>Hassle-Free Searching</div>
                  <div className='desc'>Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results.</div>
                </div>
              </div>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/direct-com.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>Direct Communication</div>
                  <div className='desc'>Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences.</div>
                </div>
              </div>
          </div>
          <div className='d-flex main-box'>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/verified.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>Verified Listings</div>
                  <div className='desc'>Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance.</div>
                </div>
              </div>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/local-market.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>Local Market Insights</div>
                  <div className='desc'>Get informed with local market insights on property trends, prices, and neighborhoods for confident decisions.</div>
                </div>
              </div>
          </div>
          <div className='d-flex main-box'>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/middlemen.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>No Middlemen</div>
                  <div className='desc'>Linked Bricks eliminates intermediaries, granting you more control for faster, direct real estate interactions and decisions.</div>
                </div>
              </div>
              <div className='box'>
                <div className='black-box'>
                  <img src="/static/dedicated.svg"/>
                </div>
                <div className='d-flex-column box-text'>
                  <div className='title'>Dedicated Customer Support:</div>
                  <div className='desc'>Our dedicated customer support team is ready to assist you at every step of your property search journey.</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
