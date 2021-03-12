import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';

let article = '';

function Search(props) {
  const receiveInput = (articleInput) => (article = articleInput);

  const receiveClick = () => sendArticle(article);

  const sendArticle = () => props.callback(article);

  return (
    <section>
      <Link to='/'>
        <img
          src='https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png'
          alt='logo'
        />
      </Link>
      <>
        <Input inputCallback={receiveInput} />
        <Button clickCallback={receiveClick} />
      </>
    </section>
  );
}

export default Search;
