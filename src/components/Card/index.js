import './style.scss';

function Card(props) {
  const { title, thumbnail, price, permalink } = props;
  return (
    <div className='card'>
      <a href={permalink} alt={title}>
        <img src={thumbnail} alt={title} />
        <div>
          <label>$ {price}</label>
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
}

export default Card;
