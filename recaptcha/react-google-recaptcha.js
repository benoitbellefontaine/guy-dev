import React, { useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
 
function onChange(value) {
  console.log("Captcha value:", value);
}

const RecaptchaComponent = ( {hl, sitekey} ) => {
  
  return (
    <ReCAPTCHA
        sitekey={sitekey}
        onChange={onChange}
        hl={hl}
    />
  );

};
 
export default RecaptchaComponent;