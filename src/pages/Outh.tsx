/* eslint-disable @typescript-eslint/no-explicit-any */
// import Loader from "../components/Loader/Loader";
import useOuth from "../hooks/useOuth";
import GetData from "../components/GetData";
import SendData from "../components/SendData";
import { SendDataURL } from "../components/SendDataURL";

export const Outh = () => {
  const token = localStorage.getItem('access_token');
  const [data, error] = useOuth(token);

  return (
    <div className="container">
      {/* { !token && !data && !error &&
        <Loader title="В течении 30 секунд начнется процедура авторизации"/>
      } */}
      { error && <h3>Произошла ошибка</h3> }
      { data &&
        <>
          <GetData token={data}/>
          <SendData token={data} />
          <SendDataURL token={data} />
        </> 
      }
    </div>
  )
}

declare global {
  interface Window {
    YaAuthSuggest: any,
    YaSendSuggestToken: any,
  }
}