import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
  return (
    <div>
      
      <div className='text-center uppercase text-[#bb693a] text-xl font-bold'>

<TypeAnimation
sequence={[
'About',
500,
' Me', //  Continuing previous Text
500,
'About me',
500,
'About me',
500,
'me',
500,
'',
500,
]}
style={{ fontSize: '2em' }}
repeat={Infinity}
/>

</div>
     

      <div>
<h1>Hi! I am Piash. I live in Feni, Bangladesh. I have achieved Secondary School Certificate in 2018. Now I Study in Computer Science at Diploma Engineering Institute. I have experienced at Web Design, Web Development and Graphic Design. But, now I am practice WP Theme Development for developed my skill and gain better ecperince.</h1>
</div>
    </div>
  );
};

export default AboutMe;