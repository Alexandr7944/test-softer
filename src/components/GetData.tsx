import Disk from '../interfaces/Disk';
import useFetching from '../hooks/useFetching';
import Loader from './Loader/Loader';
import ItemsDisk from '../interfaces/ItemsDisk';

const GetData = ({ token }: {token: string}) => {
  const [disk, loading] = useFetching<ItemsDisk>(
    'https://cloud-api.yandex.net/v1/disk/resources/files',
    'GET',
    token
  );
  
  return (
    <div>
      {
        disk && typeof disk !== 'string' && typeof disk !== 'boolean' &&
        <div className="disk">
          <h3 className='disk__title'>Список имеющихся файлов диска</h3>
          <ul className='disk__list'>
            {disk.items.map((i: Disk) => 
              <li
                key={i.resource_id}
                className='disk__item'
              >{i.name}</li>
            )}
          </ul>
        </div>
      }
      {loading && <Loader />}
    </div>
  )
}

export default GetData