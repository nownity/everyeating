// src/components/Header.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// 에코 톤 컬러 팔레트
const colors = {
  headerBg: "#ffffffcc",
  text: "#111810",
  muted: "#344238",
  border: "#d7e4db",
  primary: "#2f7c4a",
  primaryDark: "#31754c",
  overlay: "rgba(0, 0, 0, 0.35)",
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${(props) => (props.$transparent ? "transparent" : "#ffffff")};
  border-bottom: 1px solid
    ${(props) => (props.$transparent ? "transparent" : colors.border)};
  transition: all 0.22s ease;
`;

const HeaderInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.03em;
  text-decoration: none;
  color: ${colors.text};
  text-transform: lowercase;
  color: #111810;
`;

const LogoHighlight = styled.span`
  color: #2f7c4a;
  @media (max-width: 400px) {
    color: #57c764;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  font-size: 18px;
  text-decoration: none;
  color: ${(props) => (props.$active ? colors.primaryDark : colors.muted)};
  font-weight: ${(props) => (props.$active ? 700 : 600)};
  padding: 4px 0;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    width: ${(props) => (props.$active ? "80%" : "0")};
    height: 2px;
    border-radius: 999px;
    background: ${colors.primary};
    transition: width 0.18s ease;
  }

  &:hover {
    color: ${colors.primaryDark};

    &::after {
      width: 70%;
    }
  }
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 999px;
  border: 1px solid ${colors.primary};
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  background: ${(props) =>
    props.$active ? colors.primaryDark : colors.primary};

  &:hover {
    background: ${colors.primaryDark};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const HamburgerLines = styled.div`
  width: 22px;
  height: 18px;
  position: relative;
`;

const Line = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: ${colors.text};
  transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease;

  &:nth-child(1) {
    top: ${(props) => (props.$open ? "8px" : "0")};
    transform: ${(props) => (props.$open ? "rotate(45deg)" : "none")};
  }

  &:nth-child(2) {
    top: 8px;
    opacity: ${(props) => (props.$open ? 0 : 1)};
  }

  &:nth-child(3) {
    top: ${(props) => (props.$open ? "8px" : "16px")};
    transform: ${(props) => (props.$open ? "rotate(-45deg)" : "none")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 20;

  opacity: ${(props) => (props.$open ? 1 : 0)};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition: opacity 0.25s ease-out;
`;

const SideMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  max-width: 78%;
  height: 100vh;
  background: #ffffff;
  z-index: 21;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 20px;

  transform: translateX(${(props) => (props.$open ? "0%" : "100%")});
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};

  transition: transform 0.25s ease-out;
`;

const SideTop = styled.div`
  position: relative;
  height: 32px;
  margin-bottom: 18px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const CloseIcon = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
`;

const CloseLine = styled.span`
  position: absolute;
  left: 0;
  top: 8px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: ${colors.text};
  transform-origin: center;

  &:first-child {
    transform: rotate(45deg);
  }

  &:last-child {
    transform: rotate(-45deg);
  }
`;

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const SideNavItem = styled(Link)`
  position: relative;
  padding: 11px 0;
  border-radius: 999px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.$active ? colors.primaryDark : colors.muted)};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    width: ${(props) => (props.$active ? "60%" : "0")};
    height: 2px;
    border-radius: 999px;
    background: ${colors.primary};
    transition: width 0.18s ease;
  }

  &:hover {
    color: ${colors.primaryDark};

    &::after {
      width: 60%;
    }
  }
`;

const SideContactButton = styled(Link)`
  margin-top: 16px;
  padding: 11px 0;
  text-align: center;
  border-radius: 999px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: ${(props) =>
    props.$active ? colors.primaryDark : colors.primary};
  border: 1px solid
    ${(props) => (props.$active ? colors.primaryDark : colors.primary)};
`;

const SideBottom = styled.div`
  margin-top: auto;
  font-size: 12px;
  color: #6c7b6f;
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid ${colors.border};
`;

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isMain = path === "/";
  const isContact = path === "/contact";
  const transparent = isMain && !scrolled;

  const menus = [
    { path: "/company", label: "회사소개" },
    { path: "/products", label: "제품소개" },
  ];

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  // 스크롤에 따라 헤더 투명/불투명 전환 (메인에서만)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  // 모바일 → PC로 리사이즈 시 메뉴 자동 닫힘
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderWrapper $transparent={transparent}>
        <HeaderInner>
          <Logo to="/">
            <LogoHighlight>every</LogoHighlight>eating
          </Logo>
          <RightSide>
            <Nav>
              {menus.map((item) => (
                <NavItem
                  key={item.path}
                  to={item.path}
                  $active={path === item.path}
                >
                  {item.label}
                </NavItem>
              ))}
            </Nav>

            <ContactButton to="/contact" $active={isContact}>
              문의하기
            </ContactButton>

            <HamburgerButton type="button" onClick={openMenu}>
              <HamburgerLines>
                <Line $open={open} />
                <Line $open={open} />
                <Line $open={open} />
              </HamburgerLines>
            </HamburgerButton>
          </RightSide>
        </HeaderInner>
      </HeaderWrapper>

      <Overlay $open={open} onClick={closeMenu} />
      <SideMenu $open={open}>
        <SideTop>
          <CloseButton type="button" onClick={closeMenu}>
            <CloseIcon>
              <CloseLine />
              <CloseLine />
            </CloseIcon>
          </CloseButton>
        </SideTop>

        <SideNav>
          {menus.map((item) => (
            <SideNavItem
              key={item.path}
              to={item.path}
              $active={path === item.path}
              onClick={closeMenu}
            >
              {item.label}
            </SideNavItem>
          ))}
        </SideNav>

        <SideContactButton
          to="/contact"
          $active={isContact}
          onClick={closeMenu}
        >
          문의하기
        </SideContactButton>

        <SideBottom>친환경 식생활을 위한 everyeating</SideBottom>
      </SideMenu>
    </>
  );
};

export default Header;
