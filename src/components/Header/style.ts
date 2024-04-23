import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 2rem;
  left: 0;
  right: 0;
  background: ${(props) => props.theme["background"]};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    a {
      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      padding: 0.5rem;
      border-radius: 6px;
      transition: background 0.3s;
    }
    a:hover {
      background: ${(props) => props.theme["yellow-dark"]};
      color: ${(props) => props.theme["white"]};
    }
    button {
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
    }
    span {
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${(props) => props.theme["yellow-dark"]};
      color: ${(props) => props.theme["white"]};
      border-radius: 50%;
      margin-top: -2.5rem;
      margin-left: -1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Roboto", sans-serif;
    }
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
