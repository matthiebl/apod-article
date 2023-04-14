import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ReferenceProps {
    children: string
    link: string
}

export const Reference: React.FC<ReferenceProps> = ({ children, link }) => {
    const navigate = useNavigate()

    const onClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
        event.preventDefault()
        navigate(link)
    }

    return (
        <a className='italic' href={link} onClick={onClick}>
            {children}
        </a>
    )
}
