// src/components/impact/ImpactSection.jsx
import styled from "styled-components";
import impact1 from "../images/impact1.jpg"; // 예시용 공용 이미지

const SectionWrapper = styled.section`
  width: 100%;
  padding: 120px 20px 140px;
  display: flex;
  justify-content: center;
  background: #ffffff;
  color: #000000;

  @media (max-width: 768px) {
    padding: 96px 20px 120px;
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
  color: #466953;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #545e56;
  line-height: 1.7;
  max-width: 640px;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

/* 메인 임팩트 카드 */

const ImpactCard = styled.div`
  border-radius: 24px;
  padding: 24px 24px 20px;
  background: radial-gradient(
      circle at 0% 0%,
      rgba(152, 163, 156, 0.14),
      transparent 55%
    ),
    #9edfac;
`;

const ImpactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 18px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImpactTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
`;

const ImpactTag = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const ImpactDesc = styled.p`
  font-size: 15px;
  color: #ffffff;
  line-height: 1.9;
  word-break: keep-all;
`;

/* 수치 카드 3개 */

const MetricGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  border-radius: 18px;
  padding: 14px 14px 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(130, 186, 147, 0.4);
`;

const MetricLabel = styled.p`
  font-size: 11px;
  color: #a9b9ad;
  margin-bottom: 4px;
`;

const MetricValue = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #ebffe9;
`;

const MetricNote = styled.p`
  margin-top: 2px;
  font-size: 11px;
  color: #8da292;
`;

/* ESG / 쓰레기 감소 카드 */

const ESGGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ESGCard = styled.div`
  border-radius: 20px;
  padding: 18px 18px 16px;
  background: #9edfac;
  border: 1px solid rgba(113, 121, 115, 0.28);
`;

const ESGHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const ESGLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

const ESGBadge = styled.span`
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
`;

const ESGDesc = styled.p`
  font-size: 13px;
  color: #ffffff;
  line-height: 1.8;
  word-break: keep-all;
`;

const ESGList = styled.ul`
  margin-top: 8px;
  padding-left: 16px;
  font-size: 12px;
  color: #ffffff;
  line-height: 1.7;
`;

const ESGItem = styled.li``;

/* 오른쪽: 이미지 + 코멘트 */

const ImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ImpactImageCard = styled.div`
  border-radius: 18px;
  overflow: hidden;
  background: #9edfac;
  border: 1px solid rgba(141, 198, 161, 0.4);
`;

const ImpactImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const ImageCaption = styled.div`
  padding: 8px 10px 9px;
  font-size: 11px;
  color: #caddce;
`;

const ImpactNote = styled.p`
  font-size: 12px;
  color: #9db0a0;
  line-height: 1.7;
  word-break: keep-all;
`;

const Highlight = styled.span`
  color: #96e3af;
  font-weight: 600;
`;

// Impact 섹션 컴포넌트
const ImpactSection = () => {
  return (
    <SectionWrapper id="impact">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Impact</Eyebrow>
          <Title>
            쓰고 버리는 빨대에서,
            <br />
            <Highlight>먹고 기억에 남는 경험</Highlight>으로
          </Title>
          <Subtitle>
            everyeating 빨대는 일회용품을 줄이는 것에서 끝나지 않고,
            카페·프랜차이즈·행사 브랜드의 ESG 스토리와 고객 경험까지 함께
            설계합니다.
          </Subtitle>
        </SectionHeader>

        <ContentLayout>
          {/* 왼쪽: 임팩트 + ESG 설명 */}
          <LeftColumn>
            <ImpactCard>
              <ImpactHeader>
                <ImpactTitle>숫자로 보는 기대 효과</ImpactTitle>
                <ImpactTag>expected impact</ImpactTag>
              </ImpactHeader>
              <ImpactDesc>
                종이 빨대 대비 <strong>10~30% 높은 가격</strong>이지만, 친환경
                콘셉트와 브랜드 스토리를 함께 제공해 &quot;조금 더 비싸도 선택할
                이유&quot;를 만듭니다. 초기에는 프리미엄 포지셔닝에 집중하고,
                대량 생산 단계에서 점진적인 단가 절감을 추진합니다.
              </ImpactDesc>

              <MetricGrid>
                <MetricCard>
                  <MetricLabel>ESG / 브랜딩 효과</MetricLabel>
                  <MetricValue>+1 스토리</MetricValue>
                  <MetricNote>
                    단순 친환경이 아니라 &quot;먹을 수 있는 빨대&quot;라는
                    직관적인 브랜드 경험 제공
                  </MetricNote>
                </MetricCard>

                <MetricCard>
                  <MetricLabel>플라스틱·종이 쓰레기 감소</MetricLabel>
                  <MetricValue>1잔 = 1개↓</MetricValue>
                  <MetricNote>
                    빨대를 별도 폐기하지 않고 먹거나 자연 분해되는 방향으로 설계
                  </MetricNote>
                </MetricCard>

                <MetricCard>
                  <MetricLabel>단가 전략</MetricLabel>
                  <MetricValue>+10~30%</MetricValue>
                  <MetricNote>
                    초기 프리미엄 가격대 유지 후 대량 생산 효과로 원가 점진적
                    하향
                  </MetricNote>
                </MetricCard>
              </MetricGrid>
            </ImpactCard>

            <ESGGrid>
              <ESGCard>
                <ESGHeader>
                  <ESGLabel>ESG 관점에서의 가치</ESGLabel>
                  <ESGBadge>E · S · G</ESGBadge>
                </ESGHeader>
                <ESGDesc>
                  규제 대응용 &quot;형식적인 친환경&quot;이 아니라, 실제 고객이
                  경험하고 사진·콘텐츠로 남길 수 있는 스토리 있는 ESG 액션을
                  제공합니다.
                </ESGDesc>
                <ESGList>
                  <ESGItem>
                    · <strong>E(Environment)</strong> : 일회용 빨대 쓰레기 감소,
                    분해/섭취 가능한 소재 지향
                  </ESGItem>
                  <ESGItem>
                    · <strong>S(Social)</strong> : 고객이 즐겁게 참여하는
                    캠페인(&quot;빨대까지 먹고 가는 날&quot; 등) 기획 가능
                  </ESGItem>
                  <ESGItem>
                    · <strong>G(Governance)</strong> : 지속가능경영보고서, ESG
                    발표자료에 구체적인 사례로 포함 가능
                  </ESGItem>
                </ESGList>
              </ESGCard>

              <ESGCard>
                <ESGHeader>
                  <ESGLabel>쓰레기 감소 시나리오</ESGLabel>
                  <ESGBadge>waste reduction</ESGBadge>
                </ESGHeader>
                <ESGDesc>
                  하루 300잔을 판매하는 카페 기준, 빨대 1개당 쓰레기 1개를
                  줄인다고 가정하면, 한 달(30일) 동안 약{" "}
                  <strong>9,000개</strong>의 일회용 빨대 쓰레기를 없앨 수
                  있습니다.
                </ESGDesc>
                <ESGList>
                  <ESGItem>
                    · 매장 수, 행사 규모에 따라 축적되는 환경 임팩트는
                    기하급수적으로 증가
                  </ESGItem>
                  <ESGItem>
                    · 브랜드 리포트, 연간 리캡 콘텐츠에 정량적인 성과로 사용
                    가능
                  </ESGItem>
                </ESGList>
              </ESGCard>
            </ESGGrid>
          </LeftColumn>

          {/* 오른쪽: 이미지 + 한 줄 요약 */}
          <RightColumn>
            <ImageStack>
              <ImageRow>
                <ImpactImageCard>
                  <ImpactImage
                    src={impact1}
                    alt="카페 매장에서의 친환경 빨대 사용 이미지 예시"
                  />
                  <ImageCaption>카페·프랜차이즈 매장 적용 예시</ImageCaption>
                </ImpactImageCard>
                <ImpactImageCard>
                  <ImpactImage
                    src={impact1}
                    alt="행사·팝업에서의 친환경 빨대 사용 이미지 예시"
                  />
                  <ImageCaption>행사·팝업·푸드트럭 적용 예시</ImageCaption>
                </ImpactImageCard>
              </ImageRow>

              <ImpactImageCard>
                <ImpactImage
                  src={impact1}
                  alt="everyeating ESG & 쓰레기 감소 임팩트 비주얼"
                />
                <ImageCaption>
                  everyeating이 만드는 것은 빨대가 아니라,
                  <Highlight>브랜드가 말할 수 있는 이야기</Highlight>입니다.
                </ImageCaption>
              </ImpactImageCard>

              <ImpactNote>
                <Highlight>종이 빨대 대비 10~30% 높은 가격</Highlight>은 비용이
                아니라, ESG와 브랜드 이미지를 동시에 강화하는 투자라는 관점에서
                설계했습니다. 쓰레기 감소 데이터와 실제 고객 경험이 쌓일수록, 이
                프리미엄은 더 설득력을 갖게 됩니다.
              </ImpactNote>
            </ImageStack>
          </RightColumn>
        </ContentLayout>
      </SectionInner>
    </SectionWrapper>
  );
};

export default ImpactSection;
