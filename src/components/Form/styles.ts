import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 95vh;
  border-radius: 5px;
  border: 2px solid #bdbdbd;
  background-color: #fff;

  @media (min-width: 550px) {
    width: 60vw;
    height: 70vh;
    flex-direction: row;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70vw;
    gap: 3px;
  }

  h1 {
    font-size: 21px;
  }

  input {
    border: 2px solid #f2f2f2;
    border-radius: 2px;
    height: 25px;
  }

  p {
    font-size: 10px;
  }

  button {
    margin-top: 10px;
  }

  .results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    margin-top: 10px;

    @media (min-width: 550px) {
      gap: 15px;
      margin-top: 0px;
      height: 100%;
    }
  }

  h2 {
    font-size: 15px;
  }

  h2,
  h4 {
    margin-left: 15px;
  }
`;
