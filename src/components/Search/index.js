import './style.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';

let article = '';

function Search(props) {
  const receiveInput = (articleInput) => (article = articleInput);

  const receiveClick = () => sendArticle(article);

  const sendArticle = () => props.callback(article);

  return (
    <section className='main-search'>
      <Link to='/'>
        <img
          src='https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png'
          alt='logo'
        />
      </Link>
      <div>
        <Input inputCallback={receiveInput} />
        <Button clickCallback={receiveClick} />
      </div>
    </section>
  );
}

export default Search;
