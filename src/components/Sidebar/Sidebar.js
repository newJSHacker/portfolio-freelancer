import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell'

import { StyledSideNav } from './styles'

const items = [
    {name: 'Me', path: '/react-portfolio/'},
    {name: 'Projects', path: '/react-portfolio/projects'},
    {name: 'Work', path: '/react-portfolio/work'},
    {name: 'Education', path: '/react-portfolio/education'},
]

const Sidebar = () => {
    const location = useLocation()

    return (
        <StyledSideNav ifFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                        isActive={
                            location.pathname === '/' && i.path === '/' ? true: location.pathname === i.path
                        }
                        element = { Link }
                        to = { i.path }
                        key = { i.name }
                    >
                        { i.name }
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    )
}

export default Sidebar