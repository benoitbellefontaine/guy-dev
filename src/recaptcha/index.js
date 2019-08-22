import React, { useState, useEffect, useRef } from 'react';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-google';

import ReactCaptchaHook from 'react-recaptcha-hook';
import ReactGoogleCaptcha from './react-google-recaptcha';

function Recaptcha() {
  const [count, setCount] = useState(0);
  const refCaptcha = useRef(null);

  useEffect(() => {
    loadReCaptcha();
    document.title = `Vous avez cliqué ${count} fois`;
  });

  const onHandleToken = () => {
    console.log("onHandleToken");
  }

  return (
    <div>
      <h1>react-recaptcha-google</h1>
      <ReCaptcha
          ref={refCaptcha}
          size="invisible"
          size="compact"
          size="normal"
          render="explicit"
          sitekey="6LeNUkAUAAAAAC8ld7Jc9NwWMWpdK6HnB8AL6u5r"
          onloadCallback={loadReCaptcha}
          //verifyCallback={this.verifyCallback}
          hl="fr"
      />
      <h1>react-recaptcha-hook</h1>
      <ReactCaptchaHook action="fr" sitekey="6LeNUkAUAAAAAC8ld7Jc9NwWMWpdK6HnB8AL6u5r" onToken={onHandleToken} />
      <h1>react-google-recaptcha</h1>
      <ReactGoogleCaptcha hl="fr" sitekey="6LeNUkAUAAAAAC8ld7Jc9NwWMWpdK6HnB8AL6u5r" />
    </div>
  );
}
export default Recaptcha;