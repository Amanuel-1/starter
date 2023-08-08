'use client'
import {ThemeProvider   } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import {SessionProvider} from 'next-auth/react'

const Providers = ({children}:ThemeProviderProps) => {
  
    return (
       <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
           <SessionProvider>
               {children}

           </SessionProvider>

       </ThemeProvider>
    )
}
export default Providers