import React, { useEffect, useState } from 'react';

function JokeGenerator() {
  const [joke, setJoke] = useState('');

  // Joke fetch karne wali function
  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  // useEffect: Component load hone par joke fetch kare
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>😂 Random Joke Generator</h2>
      <p>{joke || 'Loading joke...'}</p>
      <button onClick={fetchJoke} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Next Joke
      </button>
    </div>
  );
}

export default JokeGenerator;
