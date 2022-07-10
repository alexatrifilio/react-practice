import {  FC, ReactNode } from 'react';
import { Card } from '../../Components';
import { Inhabitants } from '../../Data';
import './style.scss'




const Personajes: FC = () => {
    return (
        <div className='page personajes'>
            {
                Inhabitants.map(inhabitant => {

                    return(
                    <Card key={inhabitant.id}>
                        <div className='header'>
                            <h2>{inhabitant.name}</h2>
                        </div>

                        <div className='body'>
                            age: {inhabitant.age}
                            <img src={inhabitant.thumbnail} alt="" />
                        </div>
                    </Card>
                    )
                })
            }
           

        </div>
    )


}

export { Personajes }