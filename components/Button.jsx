import React from 'react'
import { Link } from 'next-view-transitions'

const Button = ({ButtonText, url}) => {
  return (
    <Link href={url} className="hidden md:flex cursor-pointer text-white bg-primary shadow-2xl shadow-primary outline-accent hover:bg-blue-800  transition-colors duration-300 outline-2 px-4 py-2 rounded-xl">
        {ButtonText}
    </Link>
  )
}

export default Button