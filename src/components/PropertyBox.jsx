import React, { useRef } from 'react';
import './css/propertybox.css';

const options = [
  {
    "house-name": "Semi detached house",
    "address": "Southfield Road, Oxford OX4",
    "price": "4250",
    "beds": 3,
    "baths": 2,
    "furnish-condition": "Semi-Furnished",
    "status": "1",
    "img": "/static/house1.png",
  },
  {
    "house-name": "Bungalow for rent",
    "address": "Leeds city center",
    "price": "6250",
    "beds": 4,
    "baths": 4,
    "furnish-condition": "Furnished",
    "status": "2",
    "img": "/static/house2.png",
  },
  {
    "house-name": "Penthouse for rent",
    "address": "Manchester city",
    "price": "2250",
    "beds": 1,
    "baths": 1,
    "furnish-condition": "Un-Furnished",
    "status": "3",
    "img": "/static/house3.png",
  },
  {
    "house-name": "Semi detached house",
    "address": "Southfield Road, Oxford OX4",
    "price": "4250",
    "beds": 3,
    "baths": 2,
    "furnish-condition": "Semi-Furnished",
    "status": "1",
    "img": "/static/house1.png",
  },
  {
    "house-name": "Bungalow for rent",
    "address": "Leeds city center",
    "price": "6250",
    "beds": 4,
    "baths": 4,
    "furnish-condition": "Furnished",
    "status": "2",
    "img": "/static/house2.png",
  },
  {
    "house-name": "Penthouse for rent",
    "address": "Manchester city",
    "price": "2250",
    "beds": 1,
    "baths": 1,
    "furnish-condition": "Un-Furnished",
    "status": "3",
    "img": "/static/house3.png",
  },
];

const PropertyBox = () => {
  const propertyBoxRef = useRef(null);

  const handleShiftLeft = () => {
    if (propertyBoxRef.current) {
      propertyBoxRef.current.style.transform = `translateX(0)`;
    }
  };

  const handleShiftRight = () => {
    if (propertyBoxRef.current) {
      const boxWidth = propertyBoxRef.current.clientWidth;
      propertyBoxRef.current.style.transform = `translateX(-${boxWidth}px)`;
    }
  };

  return (
    <div className="">
      <div className='property-box' ref={propertyBoxRef}>
        {options.map((property, index) => (
          <div key={index} className='property'>
            <img src={property.img} alt={property["house-name"]} />
            <div className="p-16">
              <p className='font-price'>£{property.price}</p>
              <p className='house-name'>{property["house-name"]}</p>
              <p className='address'>{property.address}</p>
              <div className='property-stat-box'>
                <div className='bed d-flex'><img src="/static/bed.svg"/><p>{property.beds} Beds</p></div>
                <div className='baths d-flex'><img src="/static/bathtub.svg"/><p>{property.baths} Baths</p></div>
                <div className='furnish d-flex'><img src="/static/chairs.svg"/><p>{property["furnish-condition"]}</p></div>
              </div>
              
            </div>
            <div className='tag-status'>
                {property.status === "1" && <div className="tag1">
                  <img src='/static/tag1.svg'/><p>For Sale</p>
                </div>}
                {property.status === "2" && <div className="tag2">
                  <img src='/static/tag2.svg'/><p>For Rent</p>
                </div>}
                {property.status === "3" && <div className="tag3">
                  <img src='/static/tag3.svg'/><p>For Investment</p>
                </div>}
            </div>
            <img src="/static/BubbleIcon.svg" alt="" srcset=""  className='like-prop'/>
          </div>
        ))}
      </div>
      <div className='left-right-buttons'>
        <button onClick={handleShiftLeft}><img src='/static/angle-left.svg'/></button>
        <button onClick={handleShiftRight}><img src='/static/angle-right.svg'/></button>
      </div>
    </div>
  );
};

export default PropertyBox;
