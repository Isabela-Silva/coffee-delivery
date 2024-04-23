import styled from "styled-components";

export const Count = styled.div`
  width: 5.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  button {
    background: ${(props) => props.theme["base-button"]};
    align-items: center;
    line-height: 0;

    svg.countSvg {
      background: none;
      padding: 0;

      color: ${(props) => props.theme["purple"]};
      cursor: pointer;
    }

    svg.countSvg:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
