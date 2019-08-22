import React, { useEffect } from 'react';
import useRecaptcha, { Badge } from 'react-recaptcha-hook';
 
const RecaptchaComponent = ({ action, sitekey, onToken }) => {
  const execute = useRecaptcha({ sitekey, hideDefaultBadge: false });
 
  useEffect(() => {
    const getToken = async () => {
      const token = await execute(action);
      onToken(token);
    };
 
    getToken();
  }, []);
 
  return <Badge />;
};
 
export default RecaptchaComponent;