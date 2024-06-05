import styled from "styled-components";

export const ContainerCoffee = styled.section`
  /* padding: 6rem 0; */
  margin: 0 auto;
`;

export const Card = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${(props) => props.theme["base-card"]};

  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;

  img {
    width: 40%;
    margin-top: -2rem;
  }

  > span {
    font-size: 0.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 100px;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-label"]};
    max-width: 12.5rem;
    margin-bottom: 1.875rem;
  }
  footer {
    display: flex;
    gap: 1rem;
    span {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      strong {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
      }
    }

    button {
      border: 0;
      svg {
        border: 0;
        background: ${(props) => props.theme["purple-dark"]};
        padding: 0.5rem;
        box-sizing: initial;
        border-radius: 6px;
        color: ${(props) => props.theme["white"]};
        cursor: pointer;
      }
    }
  }
`;
