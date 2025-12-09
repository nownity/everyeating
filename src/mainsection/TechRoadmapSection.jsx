// src/components/tech/TechRoadmapSection.jsx
import styled from "styled-components";
import tech1 from "../images/tech1.jpg";

const SectionWrapper = styled.section`
  width: 100%;
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #fbfcf8;

  @media (max-width: 768px) {
    padding: 96px 20px;
  }
`;

const SectionInner = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const SectionHeader = styled.div`
  word-break: keep-all;
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
  font-weight: 700;
  color: #111;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  max-width: 560px;
  word-break: keep-all;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const RoadmapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const RoadmapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02);
  padding: 26px 24px 22px;
  position: relative;
  overflow: hidden;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 22px;
  top: 32px;
  bottom: 24px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(46, 126, 78, 0.18),
    rgba(46, 126, 78, 0.04)
  );

  @media (max-width: 480px) {
    left: 20px;
  }
`;

const RoadmapItem = styled.li`
  position: relative;
  padding-left: 44px;
  padding-bottom: 20px;
  margin-bottom: 4px;

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const StepDot = styled.span`
  position: absolute;
  left: 16px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #ffffff;
  border: 3px solid #2e7e4e;
  box-shadow: 0 0 0 3px rgba(46, 126, 78, 0.08);
`;

const StepMonth = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2e7e4e;
  margin-bottom: 4px;
`;

const StepTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #111;
  margin-bottom: 2px;
  word-break: keep-all;
`;

const StepDesc = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  word-break: keep-all;
`;

const TechImageCard = styled.div`
  border-radius: 24px;
  background: radial-gradient(
    circle at 0% 0%,
    #e7f5eb 0,
    #f9fbf7 40%,
    #ffffff 100%
  );
  padding: 18px 18px 16px;
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(13, 34, 24, 0.04);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TechImageWrapper = styled.div`
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #dfe9e3;
  position: relative;
`;

const TechImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const TechImageLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #4a5a4c;
`;

const LabelLeft = styled.span`
  font-weight: 600;
`;

const LabelRight = styled.span`
  opacity: 0.7;
`;

const PricingNoteCard = styled.div`
  margin-top: 6px;
  padding: 14px 16px;
  border-radius: 16px;
  background: #f5f7f2;
  border: 1px dashed rgba(46, 126, 78, 0.28);
  font-size: 13px;
  color: #333;
  line-height: 1.6;
  word-break: keep-all;
`;

const PricingHighlight = styled.span`
  font-weight: 600;
  color: #2e7e4e;
`;

// Tech & Roadmap 섹션 컴포넌트
const TechRoadmapSection = () => {
  return (
    <SectionWrapper id="tech-roadmap">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Tech &amp; Roadmap</Eyebrow>
          <Title>
            기술 개발부터
            <br />
            <strong>시장 런칭까지의 로드맵</strong>
          </Title>
          <Subtitle>
            먹을 수 있는 친환경 빨대를 실제 제품으로 만들기 위해,
            레시피·안전성·내구성·생산라인까지 단계별로 계획적으로 진행합니다.
          </Subtitle>
        </SectionHeader>

        <ContentLayout>
          {/* 왼쪽: 로드맵 단계 */}
          <RoadmapWrapper>
            <RoadmapList>
              <VerticalLine />

              <RoadmapItem>
                <StepDot />
                <StepMonth>1~2개월차</StepMonth>
                <StepTitle>레시피 고도화 &amp; 식품안전 테스트</StepTitle>
                <StepDesc>
                  식감·내구성을 동시에 확보할 수 있는 레시피를 고도화하고,
                  식품위생 기준에 맞는 안전성 테스트를 반복적으로 진행합니다.
                </StepDesc>
              </RoadmapItem>

              <RoadmapItem>
                <StepDot />
                <StepMonth>3~4개월차</StepMonth>
                <StepTitle>프로토타입 제작 &amp; 내구성 검증</StepTitle>
                <StepDesc>
                  실제 음료 환경(온도, 산도, 시간)에 맞춰 프로토타입을 제작하고,
                  사용 시간에 따른 형태 유지, 분해 속도 등을 실사용 기준으로
                  검증합니다.
                </StepDesc>
              </RoadmapItem>

              <RoadmapItem>
                <StepDot />
                <StepMonth>5~6개월차</StepMonth>
                <StepTitle>소규모 생산라인 구축 &amp; 샘플 공급</StepTitle>
                <StepDesc>
                  소규모 생산 설비를 구축해 카페·행사 파트너에게 샘플을
                  공급하고, 실제 운영 환경에서 받은 피드백을 레시피와 공정에
                  다시 반영합니다.
                </StepDesc>
              </RoadmapItem>

              <RoadmapItem>
                <StepDot />
                <StepMonth>7개월차 이후</StepMonth>
                <StepTitle>본격 양산 &amp; 시장 런칭</StepTitle>
                <StepDesc>
                  품질과 생산성이 안정화되면 정규 라인에서 양산을 진행하고,
                  카페·프랜차이즈·행사 채널을 중심으로 순차적으로 시장에
                  런칭합니다.
                </StepDesc>
              </RoadmapItem>
            </RoadmapList>

            <PricingNoteCard>
              <PricingHighlight>· 초기 가격 전략</PricingHighlight>
              <br />
              &nbsp;&nbsp;- 종이 빨대 대비 <strong>10~30% 높은 가격</strong>으로
              책정해, 프리미엄·친환경 이미지를 명확히 가져갑니다.
              <br />
              <PricingHighlight>· 단가 절감 방향</PricingHighlight>
              <br />
              &nbsp;&nbsp;- 생산 자동화 및 대량 생산 체제로 전환하면서 원가를
              점진적으로 낮추고, 파트너사와의 장기 계약을 통해 안정적인 단가
              구조를 확보합니다.
            </PricingNoteCard>
          </RoadmapWrapper>

          {/* 오른쪽: 이미지 카드 */}
          <TechImageCard>
            <TechImageWrapper>
              <TechImage
                src={tech1}
                alt="everyeating 기술·로드맵 컨셉 이미지"
              />
            </TechImageWrapper>
            <TechImageLabel>
              <LabelLeft>everyeating tech roadmap</LabelLeft>
              <LabelRight>recipe · durability · production</LabelRight>
            </TechImageLabel>
          </TechImageCard>
        </ContentLayout>
      </SectionInner>
    </SectionWrapper>
  );
};

export default TechRoadmapSection;
