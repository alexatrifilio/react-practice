import  {   FC, ReactNode, useState } from 'react';
import { Button } from '../Button';
import './style.scss'

type Props = {
    title?: string,
    children: ReactNode

}


const Card:FC<Props> = ({title, children}) =>{

    const [isAsleep, setIsAsleep] = useState(false);

    return (
        <div className={`card ${isAsleep ? 'asleep' : ''}`}>
            {title && (
                <div className='card-header'>
                   <h2> {title} </h2> 
                </div>
            )}
        <div className='card-body'>
            {children}
        </div>
        <div className='card-footer'>
                <Button onClick={() => { setIsAsleep(prevState => !prevState)}} text={isAsleep === true ? 'Wake up' : 'Go to sleep'} className={`btn ${isAsleep ? 'asleep' : ''}`}></Button>
        </div>
        </div>

    )
}



export { Card }