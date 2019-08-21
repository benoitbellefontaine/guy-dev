import React, { useState, useEffect } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google';

function Recaptcha() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    loadReCaptcha();
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
        <h2>Code for Invisible ReCaptcha</h2> 
        <code>
{/*
// https://medium.com/codeep-io/how-to-use-google-recaptcha-with-react-38a5cd535e0d
import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("started, just a second...")
        this.captchaDemo.reset();
        this.captchaDemo.execute();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          this.captchaDemo.execute();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  render() {
    return (
      <div>
        // You can replace captchaDemo with any ref word
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="invisible"
            render="explicit"
            sitekey="your_site_key"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  };
};
export default ExampleComponent;
*/}
        </code>
        <button onClick={() => setCount(count + 1)}>
            Cliquez ici
        </button>
    </div>
  );
}
export default Recaptcha;
