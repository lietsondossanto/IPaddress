import styled from 'styled-components'

export const Info = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.textPrimary};

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
`

export const Menu = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);

  .nameOfWebsite {
    font-size: 1.90rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 650px) {
    height: 4rem;
  }
`


export const Content = styled.div`
  width: 100%;
  margin: 7rem auto;
  text-align: justify;
  text-justify: inter-word;
  text-indent: 2em;

  .first_post {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 6rem;
      font-size: 2.4rem;
    }

    .container {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;

      .texts {
        width: 50%;
        margin-right: 5rem;

        p {
          margin-top: 1rem;
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.textSecond};
        }
      }

      .images {
        width: 30%;
      }
    }
  }

  .second_post {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 12rem;
    background-color: #fff;

    h1 {
      font-size: 2.4rem;
      margin-top: 2rem;
    }

    .container {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;

      .texts {
        width: 50%;
        margin-top: 2rem;
        margin-left: 5rem;

        p:first-child {
          margin-top: 1rem;
        }

        p {
          margin-top: 1rem;
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.textSecond};
        }
      }

      .images {
        width: 30%;
        margin-top: 2rem;
      }
    }
  }

  .third_post {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4rem;

    h1 {
      margin-top: 2rem;
      font-size: 2.4rem;
    }

    .container {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .texts {
        width: 50%;
        margin-right: 5rem;

        p {
          margin-top: 1rem;
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.textSecond};
        }
      }

      .images {
        width: 30%;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .first_post {
      h1 {
        font-size: 2rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            margin-top: 1rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};
          }
        }

        .images {
          width: 30%;
        }
      }
    }

    .second_post {
      h1 {
        margin-top: 2rem;
        font-size: 2rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-top: 2rem;
          margin-left: 5rem;

          p:first-child {
            margin-top: 1rem;
          }

          p {
            margin-top: 1rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};
          }
        }

        .images {
          width: 30%;
          margin-top: 2rem;
        }
      }
    }

    .third_post {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 4rem;

      h1 {
        font-size: 2rem;
        margin-top: 2rem;
      }

      .container {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            margin-top: 1rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};

            span {
            }
          }
        }

        .images {
          width: 30%;
          margin-top: 2rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .first_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;

          p {
            font-size: 0.85rem;
          }
        }

        .images {
          width: 50%;
        }
      }
    }

    .second_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-top: 2rem;
          margin-left: 5rem;

          p {
            font-size: 0.85rem;
          }
        }

        .images {
          width: 50%;
          margin-top: 2rem;
        }
      }
    }

    .third_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            font-size: 0.85rem;

            span {
            }
          }
        }

        .images {
          width: 50%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    margin: 7rem auto;

    .first_post {
      h1 {
        font-size: 1.3rem;
      }

      .container {
        width: 100%;
        margin-top: 0;

        .texts {
          width: 90%;
          margin: 0 auto;

          p {
            margin-top: 1rem;
            font-size: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }

    .second_post {
      width: 100%;
      margin-top: 0rem;
      background-color: ${({ theme }) => theme.colors.background};

      h1 {
        margin-top: 2rem;
        font-size: 1.3rem;
      }

      .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;

        .texts {
          width: 90%;
          margin-top: 0rem;
          margin-left: 0;

          p {
            font-size: 1rem;
            margin-top: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }

    .third_post {
      width: 100%;
      margin-top: 0;

      h1 {
        margin-top: 2rem;
        font-size: 1.3rem;
      }

      .container {
        width: 100%;

        .texts {
          width: 90%;
          margin-right: 0;

          p {
            margin-top: 1rem;
            font-size: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }
  }
`
