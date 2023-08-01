import 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';

const PageTest = () => {
  window.YaSendSuggestToken("https://alexandr7944.github.io", {
    "kek": true
  });

  return (
    <h3>Успешная авторизация!</h3>
  )
}

export default PageTest