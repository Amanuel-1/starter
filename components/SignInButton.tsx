'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"


const SignInButton = (props: {props:string}) => {
    const {text} = props

    const handleClick = async  () => {
        await signIn('google')
    }
    return (
        <Button onClick={handleClick} className="rounded-lg">
            {text}
        
        </Button>
    )

}
export default SignInButton