import Card from '../Card';

function Products(props) {
  const { results } = props.articles;

  return (
    <section>
      {results === undefined ? (
        <p>Busque un producto en el buscador :)</p>
      ) : (
        Object.keys(results).map((item, key) => {
          const { title, thumbnail, price, permalink } = results[item];
          return (
            <Card
              title={title}
              thumbnail={thumbnail}
              price={price}
              permalink={permalink}
              key={key}
            />
          );
        })
      )}
    </section>
  );
}

export default Products;
