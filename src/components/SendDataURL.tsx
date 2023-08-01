import { useState } from 'react'

export const SendDataURL = ({ token }: {token: string}) => {
  const [url, setUrl] = useState({ name: '', url: '' });
  const [tooltip, setTooltip] = useState<string>('');

  const handlerSubmit = async () => {
    !url.name && setTooltip(`Введите имя`);
    !(/^(ftp|http|https):\/\/[^ "]+$/.test(url.url)) && setTooltip(`URL невалидный`);
    if (tooltip) return;

    try {
      const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=/${url.name}&url=${url.url}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `OAuth ${token}`
        }
      });
      if (!response.ok) throw new Error('Произошла ошибка');
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setUrl({ name: '', url: '' });
    }
  }

  return (
    <div className='url'>
      <h3>Отправка данных по URL</h3>
      <div className="url__container">
        <input
          className='url__input'
          type="text"
          value={url.url}
          onFocus={() => setTooltip('')}
          onChange={(e) => setUrl({ ...url, url: e.target.value })}
          placeholder='Введите URL-адрес'
        />
        <input
          className='url__input'
          type="text"
          value={url.name}
          onFocus={() => setTooltip('')}
          onChange={(e) => setUrl({ ...url, name: e.target.value })}
          placeholder='Введите имя файла'
        />
        <button className='url__submit'
          onClick={handlerSubmit}
        >Отправить</button>
        { tooltip && <div className='tooltip'>{tooltip}</div> }
      </div>
    </div>
  )
}
