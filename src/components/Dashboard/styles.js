import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 70vh;
`;

export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1rem;

  .left-side {
    width: 40%;
    min-height: 55%;
    max-height: 55%;
    display: flex;
    align-items: center;

    .informationWrapper {
      font-size: 2.2rem;

      .informations {
        margin-top: 2rem;
        font-size: 0.88rem;
        color: ${({ theme }) => theme.colors.textSecond};

        h2 {
          font-weight: bold;

          span {
            font-weight: normal;
          }
        }
      }
    }
  }

  .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .map {
      width: 100%;
      height: 70%;
      border-radius: 2%;
      background-color: #000000;
    }
  }

  @media (max-width: 1660px) {
    width: 70%;

    .left-side {
      width: 50%;

      .informations {
        font-size: 1.6rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.8rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 90%;
        height: 60%;
      }
    }
  }

  @media (max-width: 1100px) {
    width: 80%;

    .left-side {
      width: 50%;

      .informations {
        font-size: 1.6rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.8rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 90%;
        height: 60%;
      }
    }
  }

  @media (max-width: 927px) {
    width: 90%;

    .left-side {
      width: 50%;

      .informations {
        font-size: 1.3rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.7rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 100%;
        height: 50%;
      }
    }
  }

  @media (max-width: 710px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 0;

    .left-side {
      width: 100%;
      height: 60%;
      padding: 0.6rem;

      .informations {
        width: 100%;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .moreInformation {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        font-size: 0.5em;
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.textSecond};
        background-color: ${({ theme }) => theme.colors.background};

        h2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          padding: 0.6rem;

          span {
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 0.8em;
          }
        }

        .hidden {
          display: none;
        }
      }
    }

    .right-side {
      width: 100%;
      height: 40%;

      .map {
        width: 100%;
        height: 100%;
        border-radius: 0;
        background-color: #000000;
      }
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  form {
    display: flex;

    input {
      width: 28rem;
      height: 4rem;
      padding: 1rem;
      font-size: 1.3rem;
      border-style: none;
      border-top-left-radius: 0.6rem;
      border-bottom-left-radius: 0.6rem;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    button {
      width: 5rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-size: 2rem;
      border-style: none;
      border-top-right-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
      color: ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.primary};
      transition: 0.4s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 1440px) {
    input {
      width: 20rem;
      height: 3.6rem;
      font-size: 1.2rem;
    }

    button {
      height: 3.6rem;
    }
  }

  @media (max-width: 1024px) {
    input {
      width: 20rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 17rem;
      height: 3.3rem;
      font-size: 1rem;
    }

    button {
      height: 3.3rem;
    }
  }

  @media (max-width: 425px) {
    input {
      width: 12rem;
      height: 3rem;
      font-size: 0.7rem;
    }

    button {
      width: 4rem;
      height: 3rem;
    }
  }
`;
