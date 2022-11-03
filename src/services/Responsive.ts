
import { useMediaQuery } from 'react-responsive'


class Responsive {

    

    isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })
    isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    isTablet = useMediaQuery({ query: '(min-width: 701px) and (max-width: 1119px)' })

}

export default Responsive;