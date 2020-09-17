import { useLayoutEffect, useState } from 'react';
import Footer from '../components/shared/footer/footer';
import Header from '../components/shared/header/header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [photos, setPhotos] = useState([]);

  useLayoutEffect(()=>{
    fetch('/mocks/items.json')
      .then(response => response.json())
      .then(formatted=>setPhotos(formatted));
  },[]);
  
  return (
    <>
      <Header/>
      <div className=" menu-padding bg-dark container-md">
        <Component data={photos} {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}

export default MyApp;
