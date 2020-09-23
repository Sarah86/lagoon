import { useMediaQuery } from "react-responsive"

export const DevicesQueries = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1200 })
    const isBigScreen = useMediaQuery({ minDeviceWidth: 992 })
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 576 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })
  }