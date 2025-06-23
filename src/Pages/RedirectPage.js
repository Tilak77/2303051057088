import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy redirect logic
    const mapping = {
      abcd1: 'https://example.com',
      xy12: 'https://example.org'
    };

    const longUrl = mapping[shortcode];
    if (longUrl) {
      window.location.href = longUrl;
    } else {
      navigate('/');
    }
  }, [shortcode, navigate]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
