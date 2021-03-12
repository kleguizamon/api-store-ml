import { useParams } from 'react-router-dom';
import Shop from '../../components/Shop';

function Carousel() {
  const { id } = useParams();
  return <Shop zoneValue={id} />;
}

export default Carousel;
