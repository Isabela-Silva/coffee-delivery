import styled from "styled-components";

export const CoffeePaymentContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme["base-label"]};
  font-family: "Roboto", sans-serif;

  img {
    max-width: 4rem;
    padding-right: 1.25rem;
    box-sizing: initial;
  }

  strong {
    width: 100%;
    display: flex;
    width: 4rem; /* em duvida se esse strong tem que ter width*/
  }
  /* background-color: red; */

  div {
    span.titleCoffee {
      display: flex;
      /* margin-bottom: 1rem; */
      padding-bottom: 1rem;
    }
    a {
      background-color: #fff0f5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      padding: 0.5rem;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
