import { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7241/HelloWorld');
        if (response.ok) {
          const data = await response.text();
          setMessage(data);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Page</h1>
      <p>Message from API: {message}</p>
    </div>
  );
};

export default HelloWorld;
