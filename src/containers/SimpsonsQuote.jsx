import React, { useState } from 'react';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';
import { getQuote } from '../services/simpsonsAPI';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    const quote = await getQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={clickHandler} />
      {loading ? (
        <h1>Loading. Doh!</h1>
      ) : (
        quote && (
          <Quote
            name={quote.character}
            image={quote.image}
            quote={quote.quote}
          />
        )
      )}
    </>
  );
};

export default SimpsonsQuote;
