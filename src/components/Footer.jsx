import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FooterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const IconBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--Violet);
  display: grid;
  border-radius: 50%;
  place-items: center;
  border: 1px solid #fff;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    color: var(--Soft-Magenta);
    border: 1px solid var(--Soft-Magenta);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterBox>
        <IconBox>
          <FaFacebookF />
        </IconBox>
        <IconBox>
          <FaTwitter />
        </IconBox>
        <IconBox>
          <FaInstagram />
        </IconBox>
      </FooterBox>
    </StyledFooter>
  );
}

export default Footer;
