import styled from "styled-components";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  const productList = JSON.parse(data);
  return (
    <Container>
      {productList?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 500px);
  gap: 80px 46px;
`;

export default ProductList;
