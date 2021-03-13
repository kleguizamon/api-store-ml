import './style.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products';
import Search from '../Search';

function Shop() {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  async function fetchApi(product) {
    const getProduct = await fetch(
      `https://api.mercadolibre.com/sites/${id}/search?q=${product}`
    );
    const getProductToJson = await getProduct.json();
    setProducts(getProductToJson);
  }

  return (
    <section className='main-shop'>
      <Search callback={fetchApi} />
      <Products articles={products} />
    </section>
  );
}

export default Shop;
