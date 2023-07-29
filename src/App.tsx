import { useState } from "react";

function App() {
  const [file, setFile] = useState([]);

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
