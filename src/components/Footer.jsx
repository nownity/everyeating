// src/components/Footer.jsx
import styled from "styled-components";

const colors = {
  bg: "#0f1912",
  text: "#e6f0ea",
  muted: "#8ea296",
  border: "#26342a",
  accent: "#4aa36b",
};

const FooterWrapper = styled.footer`
  width: 100%;
  background: ${colors.bg};
  color: ${colors.text};
`;

const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 20px 32px;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 24px;
  border-top: 1px solid ${colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: lowercase;
`;

const Description = styled.p`
  font-size: 13px;
  color: ${colors.muted};
  line-height: 1.7;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: ${colors.muted};

  @media (min-width: 769px) {
    align-items: flex-end;
    text-align: right;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const SmallLinkGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  a {
    font-size: 12px;
    color: ${colors.text};
    text-decoration: none;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.border};
  padding: 10px 20px 18px;
  font-size: 11px;
  color: ${colors.muted};
  text-align: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        <Left>
          <Logo>everyeating</Logo>
          <Description>
            매일의 식사를 가볍게 기록하고, 환경을 생각하는 선택까지 이어지도록
            돕는 식생활 서비스입니다.
          </Description>
        </Left>

        <Right>
          <InfoRow>
            <span>상호명: 에브리에이팅(예시)</span>
            <span>대표자: 홍길동</span>
          </InfoRow>
          <InfoRow>
            <span>사업자등록번호: 000-00-00000</span>
            <span>이메일: contact@everyeating.com</span>
          </InfoRow>
          <SmallLinkGroup>
            <a href="#!">이용약관</a>
            <a href="#!">개인정보처리방침</a>
          </SmallLinkGroup>
        </Right>
      </FooterInner>

      <Copyright>© {year} everyeating. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
