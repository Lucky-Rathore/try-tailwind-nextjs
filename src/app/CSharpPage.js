import { useEffect, useState } from 'react';

const CSharpPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/sample')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Next.js Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default CSharpPage;
