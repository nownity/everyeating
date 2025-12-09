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

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 8px;
`;

const Sub = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  padding: 16px;
  background: #ffffff;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 6px;
`;

const CardTag = styled.div`
  font-size: 12px;
  color: #999999;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 13px;
  color: #555555;
  line-height: 1.6;
`;

const ProductsPage = () => {
  return (
    <Wrapper>
      <Title>제품소개</Title>
      <Sub>
        서비스/기능별로 어떤 것을 제공하는지 간단히 정리하는 페이지입니다.
      </Sub>

      <Grid>
        <Card>
          <CardTitle>식사 기록 기본 기능</CardTitle>
          <CardTag>기본 플랜</CardTag>
          <CardText>
            사진 업로드와 간단한 메모만으로 오늘 먹은 음식을 기록할 수 있는 기본
            기능입니다. 나중에 실제 기능이 정해지면 이 설명 부분을 수정하면
            됩니다.
          </CardText>
        </Card>

        <Card>
          <CardTitle>일/주간 리포트</CardTitle>
          <CardTag>추가 기능 (예시)</CardTag>
          <CardText>
            하루 또는 일주일 단위로 어떤 패턴이 있는지 요약해서 보여주는
            리포트입니다. 색상이나 그래프 디자인은 추후 UI 작업 시 채워넣을 수
            있습니다.
          </CardText>
        </Card>

        <Card>
          <CardTitle>향후 유료 플랜 자리</CardTitle>
          <CardTag>유료 플랜 (예정)</CardTag>
          <CardText>
            예를 들면, 영양분 분석이나 식단 추천 같은 고급 기능이 들어갈 공간
            입니다. 현재는 레이아웃 잡기용 더미 텍스트만 넣어둔 상태입니다.
          </CardText>
        </Card>
      </Grid>
    </Wrapper>
  );
};

export default ProductsPage;
