import React from 'react';
import logo from '../../../assets/error.jpg'

const Error = () => {
  return (
    <div>
      <img className='pt-18' src={logo} alt="" />
      <button className='text-center'>Go Back to home page</button>
    </div>
  );
};

export default Error;