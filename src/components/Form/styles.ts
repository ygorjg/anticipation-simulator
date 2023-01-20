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

  @media (min-width: 700px) {
    width: 60vw;
    height: 70vh;
    flex-direction: row;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 50%;
    gap: 5px;

    @media (min-width: 700px) {
      gap: 22px;
      width: 60%;
      height: 100%;
    }
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 21px;
    font-weight: 600;
    color: #696969;

    @media (min-width: 700px) {
      margin-left: 35px;
    }
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #696969;

    @media (min-width: 700px) {
      margin-left: 35px;
    }
  }

  input {
    border: 2px solid #f2f2f2;
    border-radius: 2px;
    height: 28px;

    @media (min-width: 700px) {
      margin-left: 35px;
      width: 80%;
      height: 45px;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #a9a9a9;
    font-size: 10px;

    @media (min-width: 700px) {
      margin-left: 35px;
    }
  }

  button {
    font-family: "Roboto", sans-serif;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    height: 32px;
    color: #4f4f4f;
    background-color: #f2f2f2;

    @media (min-width: 700px) {
      width: 80%;
      margin-left: 35px;
    }
  }

  button:hover {
    color: #f2f2f2;
    background-color: #4f4f4f;
    transition: 200ms;
    cursor: pointer;
  }

  .results {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 50%;
    background-color: #f2f2f2;
    margin-top: 10px;

    @media (min-width: 700px) {
      justify-content: center;
      gap: 10%;
      margin-top: 0px;
      width: 40%;
      height: 100%;
    }
  }

  h2,
  h4 {
    font-family: "Roboto", sans-serif;
    margin-left: 15px;
    color: #6495ed;
  }

  h2 {
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
  }

  h4 {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
`;
