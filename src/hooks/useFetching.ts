import { useState, useEffect } from 'react';

const useFetching = <T>(url: string, method: string, token: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fething = async() => {
    setLoading(true);
    const opts = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `OAuth ${token}`
      }
    }

    try {
      const response = await fetch(url, opts);
      if (!response.ok) {
        throw new Error('Response status: ' + response.status);
      }
      const result = await response.json();
      result && setData(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fething();
    return () => {
      setError('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [data, error, loading];
};

export default useFetching;

