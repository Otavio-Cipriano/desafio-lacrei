import { createGlobalStyle } from 'styled-components'

import { Nunito } from 'next/font/google'

const inter = Nunito({ weight: ['400', '500', '700', '900'], subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: ${inter.style.fontFamily};
    }
`


export default GlobalStyle;