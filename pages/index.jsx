import Head from 'next/head';
import { useEffect } from 'react';
import Card from '../components/home/card/card';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {props.data.map(photo=>(
          <Card photo={photo}/>
        ))}
      </div>
    </div>
  );
}
