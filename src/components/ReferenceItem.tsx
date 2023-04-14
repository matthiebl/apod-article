import React from 'react'

export type ReferenceItemProps = {
    id?: number
    selected?: string
    author: string
    title: string
    sponsor?: string
    type?: string
    accessed: string
    href?: string
}

export const ReferenceItem: React.FC<ReferenceItemProps> = ({
    id = 0,
    selected = '0',
    author,
    title,
    sponsor = '',
    type = '',
    accessed,
    href = '',
}) => {
    const [bounce, setBounce] = React.useState(selected === id.toString())
    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBounce(false)
        }, 1485)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div id={id.toString()} className={'overflow mt-4 w-full' + (bounce ? ' animate-bounce' : '')}>
            {author}, <i>{title}</i>, {sponsor !== '' && sponsor + ', '}
            {type !== '' && type + ', '}
            accessed {accessed}
            {href !== '' && ', <'}
            {href !== '' && (
                <a
                    className='w-full break-words text-blue-600 underline hover:text-blue-700'
                    href={href}
                    target='_blank'
                >
                    {href}
                </a>
            )}
            {href !== '' && '>'}
        </div>
    )
}
