// src/pages/CompanyPage.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 20px 48px;

  @media (min-width: 768px) {
    padding: 48px 20px 72px;
  }
`;

const CompanyPage = () => {
  return <Wrapper></Wrapper>;
};

export default CompanyPage;
