import { useState } from 'react';

function Input(props) {
  const [article, setArticle] = useState('');

  function handleChange(e) {
    const { value } = e.tarjet;
    setArticle(value);
    sendChange();
  }

  const sendChange = () => props.inputCallback(article);

  return (
    <input
      type='text'
      placeholder='Buscar producto...'
      onChange={handleChange}
    />
  );
}

export default Input;
