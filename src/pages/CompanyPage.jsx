// src/pages/CompanyPage.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 20px 48px;

  @media (min-width: 768px) {
    padding: 48px 20px 72px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 16px;
`;

const Section = styled.section`
  margin-top: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #555555;
`;

const InfoList = styled.ul`
  margin-top: 8px;
  padding-left: 18px;
  font-size: 14px;
  color: #555555;
`;

const CompanyPage = () => {
  return (
    <Wrapper>
      <Title>회사소개</Title>

      <Section>
        <SectionTitle>everyeating은</SectionTitle>
        <Text>
          여기에는 서비스 및 회사를 간단히 소개하는 문구가 들어갑니다. 예를
          들어, 바쁜 일상 속에서도 내가 무엇을 먹고 있는지, 한 번에 정리해서
          보고 싶은 사람들을 위해 시작한 프로젝트라는 식으로 스토리를 넣을 수
          있습니다.
        </Text>
      </Section>

      <Section>
        <SectionTitle>회사 정보</SectionTitle>
        <InfoList>
          <li>법인명 / 상호: (예시) 에브리에이팅</li>
          <li>대표자: 홍길동</li>
          <li>주소: 서울시 ○○구 ○○로 00, 000호</li>
          <li>대표 이메일: contact@everyeating.com</li>
        </InfoList>
      </Section>

      <Section>
        <SectionTitle>비전</SectionTitle>
        <Text>
          이 섹션에는 회사가 지향하는 가치나 방향성을 적습니다. 예를 들어,
          단순한 칼로리 계산이 아니라, 사용자가 자신의 패턴을 이해하고 스스로
          균형을 찾을 수 있도록 돕는 것이 목표라는 식의 내용을 넣을 수 있습니다.
        </Text>
      </Section>
    </Wrapper>
  );
};

export default CompanyPage;
