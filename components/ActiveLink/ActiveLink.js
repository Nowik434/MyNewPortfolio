import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Children } from 'react'
import { NavElement } from './ActiveLinkStyle';

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <NavElement {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </NavElement>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink