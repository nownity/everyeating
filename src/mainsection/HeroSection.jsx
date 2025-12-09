import styled from "styled-components";
import { RiArrowDownWideFill } from "react-icons/ri";

const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/images/hero-forest.jpg");
  background-size: cover;
  background-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.1) 100%
  );

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1120px;
  width: 100%;
  color: #dfe7e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 46px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  max-width: 640px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
    max-width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 35px;
    max-width: 100%;
  }
`;

const HeroHighlight = styled.span`
  color: #57c764;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled(RiArrowDownWideFill)`
  font-size: 64px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ArrowButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }

  /* 여기서 아이콘을 살짝 아래로 이동 */
  &:hover ${ArrowIcon} {
    transform: translateY(10px);
  }
`;

const HeroSection = () => {
  const handleScrollDown = () => {
    const target = document.getElementById("problem-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HeroSectionWrapper>
      <HeroBackground />
      <HeroOverlay />
      <HeroInner>
        <HeroTitle>
          <HeroHighlight>Everything</HeroHighlight> eco,{" "}
          <HeroHighlight>every</HeroHighlight>eating.
        </HeroTitle>
      </HeroInner>

      <ArrowWrapper>
        <ArrowButton type="button" onClick={handleScrollDown}>
          <ArrowIcon />
        </ArrowButton>
      </ArrowWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
