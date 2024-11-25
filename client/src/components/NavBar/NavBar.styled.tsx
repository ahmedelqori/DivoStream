import styled from "styled-components";
import { CiSearch, CiMenuBurger, CiBellOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  gap: 1rem;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1366px) {
    width: 100%;
    padding: 0.25rem 0.5rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  transition: 0.2s ease;
`;

export const Li = styled.li`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid black;
    right: -20px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    transition: 0.5s ease;
  }

  &:hover::after {
    rotate: 180deg;
  }
  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const LinkReact = styled(Link)`
  &:hover {
    color: #5533ff;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const SearchIcon = styled(CiSearch)`
  font-size: 2rem;
  cursor: pointer;
`;

export const Notification = styled(CiBellOn)`
  font-size: 2rem;
  cursor: pointer;
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 45px;
  cursor: pointer;
  transition: 0.2s ease;

  @media screen and (max-width: 864px) {
    display: none;
  }
`;
export const LoginSignUp = styled.span`
  background-color: #5533ff;
  color: white;
  padding: 10px 30px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  display: none;
`;

export const Menu = styled(CiMenuBurger)`
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s ease;
  display: none;
  position: relative;
  @media screen and (max-width: 864px) {
    display: block;
  }
`;
