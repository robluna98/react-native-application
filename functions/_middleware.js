// env.js
const getEnvVars = () => ({
  emailjsPublicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  emailjsTemplateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  emailjsServiceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
});

export default getEnvVars;
