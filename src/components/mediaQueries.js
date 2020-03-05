import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null

}
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

export const Device = () => {
    const isDesktop = useMediaQuery({ query: '(min-device-width: 992px)' })
    const isTablet = useMediaQuery({ query: '(min-device-width: 778px) and (max-device-width: 991px)' })
    const isMobile = useMediaQuery({ query: '(min-device-width: 767px)' })
    const isNotMobile = useMediaQuery({ query: '(min-device-width: 768px)' })
}