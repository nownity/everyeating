// src/pages/ContactPage.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 640px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #333333;
`;

const Input = styled.input`
  width: 100%;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #111111;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #111111;
  }
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 999px;
  border: none;
  background: #111111;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`;

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "문의 폼 기본 구조만 구현된 상태입니다. 실제 전송 로직은 추후 연동하세요."
    );
  };

  return (
    <Wrapper>
      <Title>문의하기</Title>
      <Sub>
        서비스에 대한 문의, 제안, 협업 제안 등이 있다면 아래 폼을 통해
        남겨주세요. 현재는 레이아웃용 폼만 구현되어 있습니다.
      </Sub>

      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">이름</Label>
          <Input id="name" name="name" placeholder="이름을 입력하세요" />
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="연락 가능한 이메일을 입력하세요"
          />
        </div>
        <div>
          <Label htmlFor="message">문의 내용</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="문의 내용을 자세히 적어주세요"
          />
        </div>

        <SubmitButton type="submit">문의 보내기</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default ContactPage;
