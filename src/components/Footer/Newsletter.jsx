import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 3000);
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss the latest updates!</p>
      </div>
      {!subscribed ?
      <div className="app__newsletter-input flex__center">
        <form name='newsletter' netlify>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
          disabled={loading || subscribed}
        />
        <button
          type="button"
          className="custom__button"
          onClick={handleSubscribe}
          disabled={loading || subscribed}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        </form>
      </div>
      : subscribed && (
        <div className="app__newsletter-heading">
        <p className="p__opensans" style={{ marginTop: "1rem"}} >Thank you for subscribing! Check your email for further instructions.</p>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
