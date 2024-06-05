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

  .triangle {
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #6bb9f0;
  }
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
    padding: 2rem;
    margin-top: 0.9375rem;
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
  }
  div.coffeeProduct {
    display: flex;
    gap: 0.9rem;
    padding: 2rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    justify-content: space-between;
    img {
      width: 6rem;
    }

    strong {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      width: 4rem;
    }
    div.coffeeInfo {
      width: 13rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      span {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }
      div.coffeeButtons {
        display: flex;
        gap: 0.8rem;
        button {
          display: flex;
          border: none;
          background-color: ${(props) => props.theme["base-button"]};
          padding: 0.5rem;
          gap: 0.2rem;
          border-radius: 8px;
          color: ${(props) => props.theme["base-text"]};
          font-family: "Roboto", sans-serif;
          font-size: 0.75rem;
          cursor: pointer;

          &:hover {
            border: 1px solid ${(props) => props.theme["purple-dark"]};
            background-color: ${(props) => props.theme["purple-light"]};
          }
        }

        button svg {
          color: ${(props) => props.theme["purple-dark"]};
        }
      }
    }
  }
  footer {
    padding-top: 1.5rem;
    div {
      font-family: "Roboto", sans-serif;

      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    button {
      padding: 1rem;
      width: 100%;
      color: ${(props) => props.theme["white"]};
      background-color: #f78ad0;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        border: 1px solid ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;
