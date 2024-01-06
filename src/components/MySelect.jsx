import React from 'react';
import Select from 'react-select';
import './css/select.css'

const options = [
  { value: 'Oxford, Oxfordshire', label: 'Oxford, Oxfordshire' },
  { value: 'Oxford Circus, London', label: 'Oxford Circus, London' },
  { value: 'Oxford Circus Station, London', label: 'Oxford Circus Station, London' },
  { value: 'Oxford City Center, Oxforshire', label: 'Oxford City Center, Oxforshire' },
];

const MySelect = () => {
  const handleChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      isSearchable
      placeholder="Search for Property"
      className='select bg-l-yellow'
    />
  );
};

export default MySelect;
