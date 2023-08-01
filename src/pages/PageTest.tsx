import 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';

const PageTest = () => {
  window.YaSendSuggestToken("http://localhost:5173", {
    "kek": true
  });

  return (
    <h3>Успешная авторизация!</h3>
  )
}

export default PageTest