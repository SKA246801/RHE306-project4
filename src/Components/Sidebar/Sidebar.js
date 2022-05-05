import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarWrapper>
          <SidebarLink to='/'>Home</SidebarLink>
          <SidebarLink to='/history'>History</SidebarLink>
          <SidebarLink to='/map'>Map</SidebarLink>
          <SidebarLink
            to={{ pathname: 'https://www.nass.org/can-I-vote' }}
            target='_blank'
          >
            Voting Signup
          </SidebarLink>
        </SidebarWrapper>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
