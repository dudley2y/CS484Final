import ReCAPTCHA from "react-google-recaptcha";
 
const Captcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="Captcha">
      <ReCAPTCHA
        sitekey="6LfUBakcAAAAAGhxM1OFfCIatnj5EO9WlOYCklq0"
        onChange={onChange}
      />
    </div>
  );
};