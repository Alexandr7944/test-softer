import './loader-style.css';

type LoaderProps = {
  title?: string
};

const Loader: React.FC<LoaderProps> = ({title}) => {
  return(
    <div className="loader-container">
      <h3>
        {title ? title: 'Идет загрузка...'}
      </h3>
      <div className="ldsSpinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    
  )
};

export default Loader;