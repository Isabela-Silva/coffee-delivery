import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 15rem 4rem 4rem;
  width: 100%;
  max-width: 1120px; /* em observação: n sei se vai funcionar*/
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const AdressBox = styled.div`
  h3 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
  }
  div.adressBox {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 0.9375rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    header {
      display: flex;
      gap: 0.5rem;
      /* flex-direction: column; */
    }
    div.iconPin {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  input {
    background-color: ${(props) => props.theme["base-input"]};
    border: none;
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme["base-label"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
  }
  input.cep {
    width: 12.5rem;
  }
  input.rua {
    /* width: 35rem; */
  }
  div.adress-home {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.75rem;
  }

  div.adress-city {
    display: grid;
    grid-template-columns: 1fr 2fr 60px;
    gap: 0.75rem;
  }
`;

export const PaymentBox = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};

  header {
    display: flex;
    gap: 0.5rem;

    div.iconCurrency {
      color: ${(props) => props.theme["purple"]};
    }
    span {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }
    p {
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
    }
  }

  div.paymentCards {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;

    button {
      padding: 1rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["base-button"]};
      border: none;
      color: ${(props) => props.theme["base-text"]};
      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      display: flex;
      justify-content: start;
      gap: 0.5rem;
    }
    button:hover {
      background-color: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
    }
    button span {
      color: ${(props) => props.theme["purple"]};
    }
  }
`;

export const RequestsBox = styled.div`
  div.requestsBox {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    margin-top: 0.9375rem;
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
    header {
      display: flex;
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
    }
  }
`;

export const RequestButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-right: 2rem;

  button {
    border: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
  button svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
