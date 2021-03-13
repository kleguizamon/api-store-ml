import './style.scss';
import { Link } from 'react-router-dom';

function Country(props) {
  const { country, code, flag } = props.value;

  return (
    <Link to={`/carousel/${code}`}>
      <img
        src={`https://raw.githubusercontent.com/kleguizamon/api-store-ml/main/src/image/${flag}.png`}
        alt='flag'
        className='img-flag'
      />
      {` ${country}`}
    </Link>
  );
}

export default Country;
