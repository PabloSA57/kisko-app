import React, {useRef, useState} from 'react';
import { Avatar } from '@mui/material'
import { SAvatar } from './style.avatar';
import { AiOutlineDown } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

interface Prop {
    name: string,
    lastname: string
}

const AvatarC = ({name, lastname}:Prop) => {
    let firstName = name[0]; 
    let firstLastName = lastname[0];
    const [active, setActive] = useState<boolean>(false);
    const divmas = useRef<HTMLHeadingElement>(null);
    
    const handleMas = () => {
        if(!active){
            divmas.current?.style.removeProperty('display')
            setActive(!active)
        }else{
            divmas.current?.style.setProperty('display', 'none')
            setActive(!active)
        }
        
    }


    return (
        <>
        <SAvatar>
        <Avatar className='avatar'>
                {`${firstName}${firstLastName}`}
            </Avatar>

            <div className='mas' onClick={handleMas}>
                    <AiOutlineDown />
                </div>

                <div className='menu-desple' ref={divmas} style={{display:'none'}}>
                    <div className='menu-desple1'>
                        <div className='menu-desple2'>
                        <IoExitOutline /> <span>Cerrar sesion</span> 
                        </div>
                    </div>
                </div>
        </SAvatar>
        </>
    )
}

export default AvatarC;

