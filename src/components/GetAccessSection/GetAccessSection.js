import React from "react";
import "./GetAccessSection.scss";

const GetAccessSection = () => {
  const title = "Get early access today";
  const description =
    "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.";
  
  const [isEmail, setIsEmail] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  
  const onValidateEmail = (e) => {
    e.preventDefault();
    /\S+@\S+\.\S+/.test(email) ? setError('') : setError('Please enter a valid email address');
  }

  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

    return (
    <section className="ga-grid-container">
      <div className="ga-column-11"></div>
      <div className="ga-column-12"></div>
      <div className="ga-content">
        <h2 className="ga-title">{title}</h2>
        <p className="ga-description">{description}</p>
        <div className="ga-form">
          <div>
            <input type="text" className="ga-input" value={email} onChange={onChangeEmail}/>
            <span className="email-error-msg">{error}</span>
          </div>
          <div className="ga-get-started-btn">
            <a href="" onClick={onValidateEmail} className="ga-get-started-link">
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
      <div className="ga-column-21"></div>
      <div className="ga-column-22"></div>
    </section>
  );
};

export default GetAccessSection;
