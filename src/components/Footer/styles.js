import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.second};
  background-color: ${({ theme }) => theme.colors.primary};

  ul {
    display: flex;

    li {
      list-style: none;
      margin-right: 1rem;

      a {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.background};
        transition: 1s;

        &:hover {
          filter: brightness(0.5);
        }
      }

      &:nth-child(3) {
        margin-right: 0;
      }
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 1.4rem;
    }

    p {
      margin-top: 0.3rem;
      font-size: 1rem;
    }
  }

  button {
    width: 3rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: none;
    border-radius: 0.3rem;
    transition: 0.5s;

    &:hover {
      filter: brightness(0.7);
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .description {
      h1 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.3rem;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;

    ul {
      display: flex;

      li {
        list-style: none;

        a {
          font-size: 1.3rem;
          transition: 1s;
        }
      }
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.3rem;
        font-size: 0.62rem;
      }
    }

    button {
      display: none;
    }
  }
`;
