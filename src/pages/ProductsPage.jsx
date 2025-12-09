// src/pages/ProductsPage.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 20px 48px;

  @media (min-width: 768px) {
    padding: 48px 20px 72px;
  }
`;

const ProductsPage = () => {
  return <Wrapper></Wrapper>;
};

export default ProductsPage;
