import ReCAPTCHA from "react-google-recaptcha";

 
const Captcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="Captcha">
      <ReCAPTCHA
        sitekey={process.env.NEXT_SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
};
export default Captcha;