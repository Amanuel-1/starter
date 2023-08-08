'use client'
import {ThemeProvider   } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import {SessionProvider} from 'next-auth/react'

const Providers = ({children}:ThemeProviderProps) => {
    console.log("Yje children comes from the props: " , children?.toString)
    return (
       <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
           <SessionProvider>
               {children}

           </SessionProvider>

       </ThemeProvider>
    )
}
export default Providers