import React from 'react'
import styled from 'styled-components'
import { Card } from '@snowge/uikit'
import Socials from '../components/socials'

export const BodyWrapper = styled(Card)`
  position: relative;
  opacity: 0.95;
  max-width: 1000px;
  width: 100%;
  z-index: 5;
  transform: scale(1);
  transition: all 200ms linear;
  &:hover {
    transform: scale(1.01);
    transition: all 200ms linear;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}<Socials/></BodyWrapper>
}
