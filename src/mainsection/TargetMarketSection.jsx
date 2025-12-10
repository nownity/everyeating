// src/components/target/TargetMarketSection.jsx
import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 100%;
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  background: #ffffff;
`;

const SectionInner = styled.div`
  width: 100%;
  max-width: 1120px;
`;

const SectionHeader = styled.div`
  margin-bottom: 48px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 24px 22px 22px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 38, 32, 0.04);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.18s ease-out, box-shadow 0.18s ease-out,
    border-color 0.18s ease-out, translate 0.18s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(39, 82, 57, 0.08);
    border-color: rgba(39, 82, 57, 0.18);
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(55, 142, 93, 0.06);
  color: #2b6d47;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  word-break: keep-all;
`;

const Highlight = styled.span`
  color: #2b7a4b;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  word-break: keep-all;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Tag = styled.li`
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: #f1f4ee;
  color: #546256;
`;

const Note = styled.p`
  margin-top: 28px;
  font-size: 12px;
  color: #777;
  word-break: keep-all;
`;

// Target & Market 섹션 컴포넌트
const TargetMarketSection = () => {
  return (
    <SectionWrapper id="target-market">
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Target &amp; Market</Eyebrow>
          <Title>
            everyeating이 가장 잘 맞는
            <br />
            <Highlight>공간과 비즈니스</Highlight>
          </Title>
          <Subtitle>
            메뉴 개발팀, 그래픽 디자이너가 없어도,
            <br />
            사진·카피·메뉴 구성을 한 번에 정리해주고 싶은 공간들을 중심으로
            설계했어요.
          </Subtitle>
        </SectionHeader>

        <CardGrid>
          {/* 1. 카페 */}
          <Card>
            <Badge>카페 / 디저트샵</Badge>
            <CardTitle>
              <Highlight>작은 카페</Highlight>일수록
              <br />
              메뉴판 완성도가 곧 브랜드력
            </CardTitle>
            <CardDesc>
              시즌 음료, 디저트가 자주 바뀌는데 디자이너에게 의뢰하기는
              부담스러울 때, everyeating으로 텍스트만 넣고 바로 쓸 수 있는 메뉴
              비주얼을 만들어 보세요.
            </CardDesc>
            <TagList>
              <Tag>로컬 카페</Tag>
              <Tag>디저트 바</Tag>
              <Tag>테이크아웃 위주</Tag>
              <Tag>신메뉴 실험</Tag>
            </TagList>
          </Card>

          {/* 2. 프랜차이즈 */}
          <Card>
            <Badge>프랜차이즈 / 멀티지점</Badge>
            <CardTitle>
              <Highlight>여러 지점</Highlight>을 한 번에 관리해야 하는
              본사·운영팀
            </CardTitle>
            <CardDesc>
              전국 지점에 메뉴판 파일을 일일이 뿌리는 대신, 포맷 하나만 잡아두고
              텍스트·가격만 변경해서 빠르게 배포할 수 있는 구조를 제공합니다.
            </CardDesc>
            <TagList>
              <Tag>브랜드 본사</Tag>
              <Tag>운영 매뉴얼</Tag>
              <Tag>지점별 가격 상이</Tag>
              <Tag>프로모션 교체</Tag>
            </TagList>
          </Card>

          {/* 3. 행사 / 이벤트 */}
          <Card>
            <Badge>행사 / 팝업 / 케이터링</Badge>
            <CardTitle>
              <Highlight>하루짜리 행사</Highlight>라도
              <br />
              메뉴 퀄리티는 포기 못 할 때
            </CardTitle>
            <CardDesc>
              팝업 스토어, 사내 행사, 페스티벌 푸드트럭처럼 짧은 기간 운영되는
              메뉴도 빠르게 정리된 형태의 메뉴판으로 행사 브랜드 이미지를 살릴
              수 있어요.
            </CardDesc>
            <TagList>
              <Tag>팝업스토어</Tag>
              <Tag>기업 행사</Tag>
              <Tag>푸드트럭</Tag>
              <Tag>케이터링 테이블</Tag>
            </TagList>
          </Card>
        </CardGrid>

        <Note></Note>
      </SectionInner>
    </SectionWrapper>
  );
};

export default TargetMarketSection;
