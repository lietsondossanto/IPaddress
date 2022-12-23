import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: max-content;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: max-content;

  .info {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.textBold};

    p {
      margin-right: 1rem;

      span {
        color: red;
      }

      &:nth-child(3) {
        margin-right: 0;
      }
    }

    @media (max-width: 650px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .country {
        display: none;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }

  .menu {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);

    .menu__logo {
      font-size: 1.9rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.background};
    }

    @media (max-width: 650px) {
      height: 4rem;
    }
  }
`;

export const Dashboard = styled.section`
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 7rem;
    background-color: ${({ theme }) => theme.colors.white};

    .content--left-side {
      width: 40%;
      min-height: 55%;
      max-height: 55%;
      display: flex;
      align-items: center;

      .information {
        .information__title {
          font-size: 2rem;
        }

        .information__subtitle {
          font-size: 4rem;
        }

        .information__list {
          list-style: none;
          margin-top: 3rem;
          color: ${({ theme }) => theme.colors.text};

          .list__item {
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: 0.3rem;

            span {
              font-weight: normal;
            }
          }
        }
      }
    }

    .content--right-side {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* @media (max-width: 1100px) {
      width: 80%;

      .left-side {
        width: 50%;

        .information {
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
    } */

    /* @media (max-width: 927px) {
      width: 90%;

      .left-side {
        width: 50%;

        .information {
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

        .information {
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
          color: ${({ theme }) => theme.colors.text};
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

          .list__item--hidden {
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
          background-color: ${({ theme }) => theme.colors.black};
        }
      }
    } */
  }

  .searchInput {
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

    /* @media (max-width: 1440px) {
      input {
        width: 20rem;
        height: 3.6rem;
        font-size: 1.2rem;
      }

      button {
        height: 3.6rem;
      }
    } */

    /* @media (max-width: 1024px) {
      input {
        width: 20rem;
        font-size: 1.3rem;
      }
    } */

    /* @media (max-width: 768px) {
      input {
        width: 17rem;
        height: 3.3rem;
        font-size: 1rem;
      }

      button {
        height: 3.3rem;
      }
    } */

    /* @media (max-width: 425px) {
      input {
        width: 12rem;
        height: 3rem;
        font-size: 0.7rem;
      }

      button {
        width: 4rem;
        height: 3rem;
      }
    } */
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .post {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    padding: 2rem;

    h1 {
      margin-top: 4rem;
      font-size: 2.4rem;
    }

    .container {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .texts {
        width: 50%;
        text-indent: 2em;
        text-align: justify;
        text-justify: inter-word;

        p {
          width: 85%;
          margin-top: 1rem;
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }

      .images {
        width: 30rem;
      }
    }
  }

  .secondPost {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  ul {
    display: flex;

    li {
      list-style: none;
      margin-right: 1.5rem;

      a {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.background};
        transition: 1s;

        &:hover {
          filter: brightness(0.7);
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
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: none;
    border-radius: 4px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  /* @media (max-width: 768px) {
    .description {
      h1 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.3rem;
        font-size: 0.8rem;
      }
    }
  } */

  /* @media (max-width: 425px) {
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
  } */
`;
