// src/components/sections/SolutionSection.jsx
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 100px 20px 110px;
  background-color: #f5f7f4;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 80px 16px 90px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
`;

const SectionTag = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #4a6b52;
  text-align: center;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: #111111;
  line-height: 1.3;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.7;
  color: #5a645a;
  max-width: 620px;
  margin: 0 auto 40px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1.1fr;
  gap: 28px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnBox = styled.div`
  border-radius: 24px;
  padding: 24px 24px 26px;
  background-color: #ffffff;
  border: 1px solid #dde6dd;
  box-shadow: 0 14px 30px rgba(15, 23, 18, 0.05);

  @media (max-width: 640px) {
    padding: 20px 18px 22px;
  }
`;

const ColumnTag = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #04a96d;
  margin-bottom: 6px;
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 12px;
`;

const ColumnText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: #5a5f63;
  margin-bottom: 16px;
  word-break: keep-all;
`;

const BulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.6;
  color: #495149;
  word-break: keep-all;
`;

const BulletDot = styled.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: #04a96d;
  margin-right: 8px;
  margin-top: 7px;
`;

const BadgeRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f2faf5;
  color: #0f3a22;
  border: 1px solid #c6ead3;
`;

const SolutionSection = () => {
  return (
    <Section id="solution-section">
      <Inner>
        <SectionTag>Solution · 우리가 제안하는 해결책</SectionTag>
        <SectionTitle>식용 친환경 빨대, 이렇게 다릅니다.</SectionTitle>
        <SectionSubtitle>
          단순히 소재만 바꾸는 것이 아니라, 일회용 쓰레기를 줄이고 카페와
          브랜드의 이미지를 함께 높일 수 있는 새로운 식음 경험을 설계합니다.
          아래 내용은 자유롭게 수정해서 사용하면 됩니다.
        </SectionSubtitle>

        <Layout>
          {/* 왼쪽: 제품 개요 */}
          <ColumnBox>
            <ColumnTag>제품 개요</ColumnTag>
            <ColumnTitle>식용 단백질·곡물 기반 빨대</ColumnTitle>
            <ColumnText>
              주원료, 유지 시간, 맛·식감 등 솔루션 핵심 스펙을 정리하는 영역.
              실제 레시피나 특징을 한글로 자연스럽게 풀어서 적어주면 됩니다.
            </ColumnText>

            <BulletList>
              <BulletItem>
                <BulletDot />
                <span>단백질·곡물·천연 감미료 기반의 식용 소재 사용</span>
              </BulletItem>
              <BulletItem>
                <BulletDot />
                <span>음료 안에서 일정 시간 형태를 유지하는 구조 설계</span>
              </BulletItem>
              <BulletItem>
                <BulletDot />
                <span>섭취 후 별도 폐기 없이 자연스럽게 소비 가능</span>
              </BulletItem>
            </BulletList>

            <BadgeRow>
              <Badge>식품 안전 기준 충족</Badge>
              <Badge>맛·색·사이즈 커스터마이징</Badge>
            </BadgeRow>
          </ColumnBox>

          {/* 오른쪽: 차별화 포인트 */}
          <ColumnBox>
            <ColumnTag>차별화 포인트</ColumnTag>
            <ColumnTitle>플라스틱·종이빨대와 다른 경험</ColumnTitle>
            <ColumnText>
              기존 빨대와 비교했을 때 무엇이 확실히 다른지, 매장과 소비자
              모두에게 어떤 가치를 주는지 요약하는 영역입니다.
            </ColumnText>

            <BulletList>
              <BulletItem>
                <BulletDot />
                <span>쓰레기 발생량을 사실상 0에 가깝게 줄이는 사용 방식</span>
              </BulletItem>
              <BulletItem>
                <BulletDot />
                <span>종이빨대처럼 젖거나 흐물거리지 않는 사용감</span>
              </BulletItem>
              <BulletItem>
                <BulletDot />
                <span>“먹는 빨대”라는 요소만으로도 강력한 마케팅 포인트</span>
              </BulletItem>
              <BulletItem>
                <BulletDot />
                <span>ESG·친환경 캠페인, 행사, 프로모션에 바로 활용 가능</span>
              </BulletItem>
            </BulletList>
          </ColumnBox>
        </Layout>
      </Inner>
    </Section>
  );
};

export default SolutionSection;
