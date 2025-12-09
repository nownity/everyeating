import styled from "styled-components";
import problem1 from "../images/problem1.jpg";
import problem2 from "../images/problem2.jpg";
import problem3 from "../images/problem3.jpg";

const Section = styled.section`
  width: 100%;
  padding: 200px 50px 200px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 80px 16px 90px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
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
  line-height: 1;
  margin-bottom: 40px;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background-color: #f1f5f2;
  border-radius: 32px;
  padding: 28px 24px 26px;
  box-shadow: 0 18px 40px rgba(15, 23, 18, 0.06);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImageWrap = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 22px;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTag = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #04a96d;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #5a5f63;
  word-break: keep-all;
`;

const ProblemSection = () => {
  const cards = [
    {
      id: 1,
      img: problem1,
      tag: "01. 환경 부담",
      title: "플라스틱도 종이도 정답은 아닙니다.",
      text: "일회용 플라스틱 빨대는 여전히 막대한 양이 폐기되고 있고, 종이빨대는 젖음·사용감 문제로 고객 불만이 높은 상황입니다. 매장은 규제에 대응해야 하지만, 실질적인 대안은 아직 부족합니다.",
    },
    {
      id: 2,
      img: problem2,
      tag: "02. 사용자 경험",
      title: "젖어버리는 종이빨대의 한계",
      text: "종이빨대는 친환경 대안으로 도입되었지만, 짧은시간 안에 젖어 흐물거리고, 음료 맛까지 변한다는 이유로 고객 불만이 계속 쌓이고 있습니다.",
    },
    {
      id: 3,
      img: problem3,
      tag: "03. 매장 입장",
      title: "ESG 압박 vs 실질적인 대안 부재",
      text: " 정부·지자체의 규제와 ESG 요구는 강화되고 있지만, 매장 입장에서는 비용·품질·고객 경험을 동시에 만족시키는 솔루션을 찾기 어렵습니다. 눈에 보이는 친환경 아이템이 필요한 시점입니다.",
    },
  ];

  return (
    <Section id="problem-section">
      <Inner>
        <SectionTag>서비스 문제 정의</SectionTag>
        <SectionTitle>왜 지금, 식용 친환경 빨대가 필요할까요?</SectionTitle>

        <CardsRow>
          {cards.map((card) => (
            <Card key={card.id}>
              <CardImageWrap>
                <CardImage src={card.img} alt={card.title} />
              </CardImageWrap>

              <CardTag>{card.tag}</CardTag>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </Card>
          ))}
        </CardsRow>
      </Inner>
    </Section>
  );
};

export default ProblemSection;
