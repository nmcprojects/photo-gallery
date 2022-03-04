import React, { useEffect, useState } from 'react';

import './title.css'
import Navbar from './../nav/Navbar';

import { title } from '../../constants/Constants'

const quotes = title.quotes;

const Title = ({user, ...props}) => {

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    setQuoteIndex(pre => randomQuote(pre));
  }, [])

  const randomQuote = (currentIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * (quotes.length))
    } while (currentIndex === randomIndex)

    return randomIndex;
  }

  const bigTitle = props.type === 'home' ? title.homeTitle : title.yourTitle;

  return (
    <div className="title">
      <Navbar 
        user={user} 
        handleLogin={props.handleLogin} 
        handleLogout={props.handleLogout} 
        getDocsOfUser={props.getDocsOfUser}
        clickLogo={props.clickLogo}
      />
      <h2>{bigTitle}</h2>
      <div className="quote-wrap">
        <p className="quote">{quotes[quoteIndex].quote}</p>
        <p className="author">-- {quotes[quoteIndex].author}</p>
      </div>
    </div>
  )
}

export default Title;