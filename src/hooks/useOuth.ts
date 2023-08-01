/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';

const useOuth = (token: string | null) => {
  const [data, setData] = useState<string>();
  const [error, setError] = useState<string>('');

  if (token) return [token, ''];

  const clientId = '8de9386ddd9941f999584b3036c32d2a';

  const oauthQueryParams = {
    client_id: clientId,
    response_type: 'token',
    redirect_uri: 'http://localhost:5173/test-softer/test'
  };

  const tokenPageOrigin = "http://localhost:5173";

  const suggestParams = {
    view: 'button',
    buttonBorderRadius: 15
  };  

  (async () => {
    try {
      const response = await window.YaAuthSuggest.init(oauthQueryParams, tokenPageOrigin, suggestParams);
      if (response.ok) console.log(response);
      const result = await response.handler();
      result?.access_token && localStorage.setItem('access_token', result.access_token);
      setData(result.access_token);
    } catch (err: any) {
      setError(err);
    }
  })();
  
  return [data, error]
}

export default useOuth;