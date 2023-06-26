import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../AboutMe/AboutMe';
import logo from '../../../assets/banner.png'


const Home = () => {
  return (
   <div className='pt-20'>
     <div className='grid grid-cols-1 md:grid-cols-2'>

<article>
  <h1 className='text-xl text-[#176B87] uppercase font-bold'>
  <TypeAnimation
  sequence={[
    'Hi',
    500,
    'I am asadur jaman nur', //  Continuing previous Text
    500,
   
    '',
    500,
  ]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
  </h1>

<h1 className='text-2xl font-semibold text-[#176B87]'>
<TypeAnimation
sequence={[
// Same substring at the start will only be typed once, initially
'I am web developer',
1000,
'I am A frontend developer',
1000,
]}
speed={50}
style={{ fontSize: '2em' }}
repeat={Infinity}
/>
</h1>
</article>
<article>
  <img  src={logo} alt="" />
</article>
</div>

<div>
  
</div>
<AboutMe></AboutMe>
   </div>
  );
};

export default Home;