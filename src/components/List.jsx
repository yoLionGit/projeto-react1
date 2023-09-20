import Item from './Item';

function List() {
  return (
    <>
      <h1>Meus Carros:</h1>
      <url>
        <Item marca="Toyota" ano_lancamento={1949} />
        <Item marca="Mazda" ano_lancamento={1997} />
        <Item />
      </url>
    </>
  );
}

export default List;
