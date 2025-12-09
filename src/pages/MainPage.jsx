// src/pages/MainPage.jsx
import styled from "styled-components";
import HeroSection from "../mainsection/HeroSection";
import ProblemSection from "../mainsection/ProblemSection";
import SolutionSection from "../mainsection/SolutionSection";
import TargetMarketSection from "../mainsection/TargetMarketSection";
import TechRoadmapSection from "../mainsection/TechRoadmapSection";
import ImpactSection from "../mainsection/ImpactSection";

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
      <TargetMarketSection />
      <TechRoadmapSection />
      <ImpactSection />
    </Page>
  );
};

export default MainPage;
