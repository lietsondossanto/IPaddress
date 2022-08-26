import React from 'react'
import Link from 'next/link'
import { IoLogoLinkedin } from 'react-icons/io'
import { VscFoldUp, VscTwitter, VscGithub } from 'react-icons/vsc'

import { Wrapper } from './styles'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/lietsondossanto/">
              <a target="_blank">
                <IoLogoLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/lietsondossanto">
              <a target="_blank">
                <VscGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/lietsondossanto">
              <a target="_blank">
                <VscTwitter />
              </a>
            </Link>
          </li>
        </ul>

        <div className="description">
          <h1>IPadress</h1>
          <p>
            Preocupamo-nos com a sua privacidade. Direitos Reservados &copy;
            2021-2022
          </p>
        </div>

        <button type="button" onClick={() => scrollTo(0, 0)}>
          <VscFoldUp />
        </button>
      </Wrapper>
    </>
  )
}

export default Footer
