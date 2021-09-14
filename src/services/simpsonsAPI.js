export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await res.json();

  return {
    name: quote.character,
    image: quote.image,
    quote: quote.quote,
    characterDirection: quote.characterDirection,
  };
};
