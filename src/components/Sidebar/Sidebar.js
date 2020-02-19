import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell'

import { StyledSideNav } from './styles'

const items = [
    {name: 'Me', path: '/portfolio-freelancer/'},
    {name: 'Projects', path: '/portfolio-freelancer/projects'},
    {name: 'Work', path: '/portfolio-freelancer/work'},
    {name: 'Education', path: '/portfolio-freelancer/education'},
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