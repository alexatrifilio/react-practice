import {  FC, ReactNode } from 'react';
import { Card } from '../../Components';
import { Inhabitants } from '../../Data';
import './style.scss'




const Personajes: FC = () => {
    return (
        <div className='page personajes'>
            {
                Inhabitants.map(({name, id, age, thumbnail})=> {

                    return(
                    <Card key={id} title={name}>


                            age: {age}
                            <img src={thumbnail} alt="" />
                       
                    </Card>
                    )
                })
            }
           

        </div>
    )


}

export { Personajes }