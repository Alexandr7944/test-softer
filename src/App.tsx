/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';

// const clientId = '4328707535ec4bdb8c03dea1d9c53bcc';
// const url = `https://oauth.yandex.ru/authorize?response_token=token&client_id=${clientId}`;
// const token = 'y0_AgAAAAA7HFEDAApCIgAAAADo7SRcMyJKUvA7RdiR1I9Ag_5w8nXIBbA';

function App() {
  const [file, setFile] = useState([]);
  // fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': `OAuth ${token}`
  //   }
  // })
  //   .then(data => data.json())
  //   .then(data => console.log(data));

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = (event.target as HTMLInputElement).files;

    if (files) {
      setFile((prevState) => ({
        ...prevState,
        images: files,
      }));
    }
    console.log(file);
  }


  window.onload = function() {
    window.YaAuthSuggest.init({
      client_id: '4328707535ec4bdb8c03dea1d9c53bcc',
        response_type: 'token',
        redirect_uri: 'https://alexandr7944.github.io/test-softer/'
      },
      'https://alexandr7944.github.io', {
        view: 'button',
        parentId: 'container',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonSize: 'm',
        buttonBorderRadius: 0
      }
      )
      .then((result: { handler: () => any; }) => result.handler())
      .then((data: any) => {
          console.log('Сообщение с токеном: ', data);
          document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
      })
      .catch((error: any) => {
          console.log('Что-то пошло не так: ', error);
          document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
      });
    };

  return (
    <div>
      <input
        type="file"
        onChange={handlerChange}
      />
    </div>
  )
}

export default App
