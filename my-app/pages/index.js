import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';

export default function Home({data}) {

  const [url, setUrl] = useState("");

  console.log(JSON.stringify(data))
  const something = data[0].q

  const myfunc = () => {
    window.location.reload(false);
  }

useEffect(() => {
  const second = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const data2 = await response.json()
    const data3 = data2[0].url
    setUrl(data3)
  }
  second()
}, [])



  return (
    <div>
      <div className="title">
        <h2>Quotes To Help Taryn Get Through The Day</h2>
      </div>
      <div className="quote">
        <h1>{something}</h1>
      </div>
      <div className="cat">
        <img src={url} />
      </div>
      <div className="button">
        <button onClick={myfunc}>New Quote</button>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const response = await fetch("https://zenquotes.io/api/quotes/")
    const data = await response.json()
    console.log(data)
  return {
    props: {
      data
    }
  }
}
