import { FC } from "react"
import './style.scss'

type Props = {
    text?: string,
    onClick: () => void,
    className: string

}

const Button: FC<Props> = ({text, onClick, className}) => {
    return(
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}

export { Button }