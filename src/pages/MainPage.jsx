// src/pages/MainPage.jsx
import styled from "styled-components";
import HeroSection from "../mainsection/HeroSection";
import ProblemSection from "../mainsection/ProblemSection";
import SolutionSection from "../mainsection/SolutionSection";

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7f4;
`;

const MainPage = () => {
  return (
    <Page>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </Page>
  );
};

export default MainPage;
