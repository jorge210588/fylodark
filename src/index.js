import React from 'react';
import ReactDOM from 'react-dom/client';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import { FiloDarkTheme } from './components/FiloDarkTheme';
import FooterSection from './components/FooterSection/FooterSection';
import GetAccessSection from './components/GetAccessSection/GetAccessSection';
import ProductSection from './components/ProductSection/ProductSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import TitleSection from './components/TitleSection/TitleSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FiloDarkTheme />
    <TitleSection/>
    <FeaturesSection/>
    <ProductSection/>
    <TestimonialSection/>
    <GetAccessSection/>
    <FooterSection/>
  </React.StrictMode>
);

