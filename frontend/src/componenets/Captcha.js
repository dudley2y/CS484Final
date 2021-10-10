import ReCAPTCHA from "react-google-recaptcha";
// import React, {useState, useRef} from 'react';


 
const Captcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="Captcha">
      <ReCAPTCHA
        sitekey={"6LfUBakcAAAAAGhxM1OFfCIatnj5EO9WlOYCklq0"}
        // ref={reRef}
        onChange={onChange}
      />
    </div>
  );
};
export default Captcha;