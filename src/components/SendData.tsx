import { useState } from 'react';

const SendData = ({ token }: {token: string}) => {
  const [files, setFiles] = useState<FileList | null>();
  const [tooltip, setTooltip] = useState<string>('');

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    tooltip && setTooltip('');
    const fileList = (event.target as HTMLInputElement).files;
    fileList && fileList.length < 100
      ? setFiles(fileList)
      : setTooltip('Максимальное количество файлов не должно превышать 100')
  }

  const handlerSubmit = async () => {
    if (!files || tooltip) return;

    try {
      const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=/test${Date.now()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `OAuth ${token}`
        }
      });
      if (!response.ok) throw new Error('Произошла ошибка');
      const result = await response.json();

      const formData = new FormData();
  
      [...files].forEach((file) => formData.append(file.name, file))
      
      fetch(result.href, {
        method: 'PUT',
        body: formData
      })
    } catch (err) {
      console.log(err);
    } finally {
      setFiles(null);
    }
  }

  return (
    <>
    <h3>Отправка данных (не работает)</h3>
    <div className='container__form'>
      <div className="container__files">
        <input
          className='input'
          type="file"
          multiple
          onFocus={() => setTooltip('')}
          onChange={handlerChange}
        />
        <span className='text'>Выберете файлы</span>
      </div>
      <button className='submit'
        onClick={handlerSubmit}
      >Отправить</button>
    { tooltip && <div className='tooltip'>{tooltip}</div> }
    </div>
    { files && !tooltip &&
      <div className="selection container">
        <h3 className='selection__title'>Выбранные файлы</h3>
        <ul className='selection__list'>
          {
            [...files].map((file) => 
              <li
                key={file.name}
                className='selection__item'
              >{file.name}</li>
            )
          }
        </ul>
      </div>
    }
    </>
  )
}

export default SendData