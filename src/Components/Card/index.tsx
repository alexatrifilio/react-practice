import  {   FC, ReactNode } from 'react';
import './style.scss'

type Props = {
    title?: string,
    children: ReactNode

}


const Card:FC<Props> = ({children}) =>{
    return (
        <div className='card'>

            {children}
        </div>
    )
}



export { Card }