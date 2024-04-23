import styled from "styled-components";

export const HomeContainer = styled.div`
  /* padding: 1rem; */
  padding: 0 4rem 4rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const InfoSection = styled.section`
  display: flex;
  padding-top: 7.875rem;
  justify-content: space-between;
  max-width: 1120px; /* em observação: n sei se vai funcionar*/
  margin: 0 auto;

  div {
    max-width: 30.75rem;
    h1 {
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      color: ${(props) => props.theme["base-title"]};
    }
    h3 {
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
  img {
    max-width: 25rem;
    align-items: start;
  }
`;

export const InfoDiv = styled.div`
  padding-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    align-items: center;
    display: grid;
    grid-template-columns: min-content 1fr;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }

  span svg {
    color: ${(props) => props.theme["white"]};
    padding: 0.5rem;
    border-radius: 50%;
    align-self: center;
    box-sizing: initial;
    line-height: none;
  }
  span svg.shop {
    background: ${(props) => props.theme["yellow-dark"]};
  }
  span svg.time {
    background: ${(props) => props.theme["yellow"]};
  }
  span svg.package {
    background: ${(props) => props.theme["base-text"]};
  }
  span svg.coffee {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const TitleCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 6rem;

  h2 {
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-items: center;

  gap: 3rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  div h2 {
    display: flex;
  }
`;
