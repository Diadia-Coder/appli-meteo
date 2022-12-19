import React from 'react';
import  Formulaire from '../components/Formulaire'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='home bg-primary'>
      <h1 className="text-white m-45 fs-1">Application Meteo</h1>
      <Formulaire />
    </div>
  )
}
export default Home;  