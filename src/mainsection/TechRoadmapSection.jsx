// src/components/tech/TechRoadmapSection.jsx
import React, { useState } from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 100%;
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 70px 16px;
  }
`;

const SectionInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  overflow: hidden;
  align-items: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: -240px -120px auto;
    border-radius: 50%;
    border: 1px dashed rgba(0, 0, 0, 0.05);
    transform: translateX(-10%);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -140px -260px auto;
    border-radius: 50%;
    border: 1px dashed rgba(0, 0, 0, 0.04);
    transform: translateX(10%);
  }
`;

const SectionHeader = styled.div`
  position: relative;
  word-break: keep-all;
  max-width: 720px;
`;

const Eyebrow = styled.p`
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #7b8b7d;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  max-width: 620px;
  margin: 0 auto;
`;

const RoadmapWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1250px;
`;

/* 상단 원들 */

const CircleRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 24px;

  @media (max-width: 1200px) {
    gap: 10px;
  }

  @media (max-width: 880px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 0px;
    justify-items: center;
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #dfdfdf;

  @media (max-width: 880px) {
    display: none;
  }
`;

const CircleWrapper = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid ${({ $active }) => ($active ? "#2f7c4a" : "#d3d3d3")};
  background: ${({ $active }) => ($active ? "#2f7c4a" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ $active }) =>
    $active ? "0 18px 36px rgba(0,0,0,0.2)" : "0 8px 20px rgba(0,0,0,0.05)"};
  transition: all 0.2s ease;

  ${CircleWrapper}:hover & {
    transform: translateY(-8px);
  }

  @media (max-width: 1200px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 520px) {
    width: 170px;
    height: 170px;
  }
`;

const CircleIndex = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  opacity: 0.7;
`;

const CircleMonth = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const CircleTitle = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: ${({ $active }) => ($active ? "#4be479" : "#2f7c4a")};
  text-align: center;
`;

const CircleSub = styled.span`
  margin-top: 4px;
  font-size: 13px;
  opacity: 0.8;
`;

const DetailPanel = styled.div`
  position: relative;
  width: 100%;
  min-height: 140px;
  padding-top: 8px;
  border-top: 1px solid #e3e3e3;
`;

const DetailInner = styled.div`
  max-width: 720px;
  padding-top: 18px;
  margin: 0 auto;
  text-align: center;
`;

const DetailMonth = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7b8b7d;
  margin-bottom: 6px;
`;

const DetailTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111;
  word-break: keep-all;
`;

const DetailDesc = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 10px;
  word-break: keep-all;
`;

const DetailList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 13px;
  color: #555;
  line-height: 1.7;
`;

const DetailItem = styled.li`
  & + & {
    margin-top: 4px;
  }

  &::before {
    content: "· ";
  }
`;

const PriceNote = styled.p`
  margin-top: 16px;
  font-size: 12px;
  color: #777;
  word-break: keep-all;
`;

const Highlight = styled.span`
  color: #00bfa5;
  font-weight: 600;
`;

const steps = [
  {
    id: 1,
    indexLabel: "01",
    month: "1~2개월차",
    shortTitle: "레시피 고도화",
    shortSub: "식품안전 테스트",
    detailTitle: "레시피 고도화 & 식품안전 테스트",
    detailDesc:
      "식감·내구성을 동시에 확보할 수 있는 레시피를 다각도로 실험하고, 식품위생 기준에 맞는 안전성 테스트를 반복적으로 진행합니다.",
    bullets: [
      "원재료 조합 및 배합비 최적화",
      "알레르기·위생 이슈 후보군 사전 검토",
      "실제 음료(산도·온도)를 활용한 초기 테스트",
    ],
  },
  {
    id: 2,
    indexLabel: "02",
    month: "3~4개월차",
    shortTitle: "프로토타입 제작",
    shortSub: "내구성 검증",
    detailTitle: "프로토타입 제작 & 내구성 검증",
    detailDesc:
      "실제 카페 운영 환경을 가정해 다양한 음료·잔 사이즈·사용 시간에 따른 내구성을 검증하고, 모양이 무너지지 않는 한계를 찾습니다.",
    bullets: [
      "온도(얼음/따뜻한 음료)별 내구성 실험",
      "사용 시간에 따른 형태 유지 테스트",
      "흡수·불림 정도, 잔여감 검토",
    ],
  },
  {
    id: 3,
    indexLabel: "03",
    month: "5~6개월차",
    shortTitle: "소규모 생산라인",
    shortSub: "샘플 공급",
    detailTitle: "소규모 생산라인 구축 & 샘플 공급",
    detailDesc:
      "테스트를 통과한 레시피를 기준으로 소규모 생산 설비를 구축하고, 카페·행사 파트너에게 샘플을 공급해 실제 운영 환경 피드백을 수집합니다.",
    bullets: [
      "공정별 생산 속도·불량률 모니터링",
      "카페/행사 파트너 대상 파일럿 공급",
      "피드백을 레시피·공정에 재반영",
    ],
  },
  {
    id: 4,
    indexLabel: "04",
    month: "7개월차 이후",
    shortTitle: "본격 양산",
    shortSub: "시장 런칭",
    detailTitle: "본격 생산 및 시장 런칭",
    detailDesc:
      "품질과 생산성이 안정화되면 정규 라인에서 양산을 진행하고, 카페·프랜차이즈·행사 채널을 중심으로 단계적으로 시장에 론칭합니다.",
    bullets: [
      "유통 구조·가격 정책 확정",
      "카페·프랜차이즈·행사 채널별 런칭 플랜",
      "ESG·브랜딩 관점의 캠페인 기획",
    ],
  },
];

const TechRoadmapSection = () => {
  const [activeId, setActiveId] = useState(1); // 기본 번째

  const activeStep = steps.find((step) => step.id === activeId) ?? steps[0];

  return (
    <SectionWrapper id="tech-roadmap">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Tech &amp; Roadmap</Eyebrow>
          <Title>먹을 수 있는 빨대, 개발 일정</Title>
          <Subtitle>
            레시피 연구부터 내구성 검증, 생산라인 구축, 시장 런칭까지 단계별로
            개발 일정을 설계했습니다. 각 단계는 실제 카페·행사 환경에서 사용
            가능한 수준을 목표로 합니다.
          </Subtitle>
        </SectionHeader>

        <RoadmapWrapper>
          <CircleRow>
            <HorizontalLine />
            {steps.map((step) => {
              const isActive = step.id === activeId;
              return (
                <CircleWrapper
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActiveId(step.id)}
                  onFocus={() => setActiveId(step.id)}
                  onClick={() => setActiveId(step.id)}
                >
                  <Circle $active={isActive}>
                    <CircleIndex>{step.indexLabel}</CircleIndex>
                    <CircleMonth>{step.month}</CircleMonth>
                    <CircleTitle $active={isActive}>
                      {step.shortTitle}
                    </CircleTitle>
                    <CircleSub>{step.shortSub}</CircleSub>
                  </Circle>
                </CircleWrapper>
              );
            })}
          </CircleRow>

          <DetailPanel>
            <DetailInner>
              <DetailMonth>{activeStep.month}</DetailMonth>
              <DetailTitle>{activeStep.detailTitle}</DetailTitle>
              <DetailDesc>{activeStep.detailDesc}</DetailDesc>
              <DetailList>
                {activeStep.bullets.map((b, i) => (
                  <DetailItem key={i}>{b}</DetailItem>
                ))}
              </DetailList>

              <PriceNote>
                <Highlight>가격 전략</Highlight> — 종이 빨대 대비{" "}
                <strong>10~30% 높은 가격</strong>으로 시작해 프리미엄·친환경
                이미지를 강조하고, 대량 생산 단계에서 점진적으로 단가를 낮추는
                구조로 설계합니다.
              </PriceNote>
            </DetailInner>
          </DetailPanel>
        </RoadmapWrapper>
      </SectionInner>
    </SectionWrapper>
  );
};

export default TechRoadmapSection;
