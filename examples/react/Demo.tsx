import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import Backdrop from '../../src';

const Demo=()=>{

    const [visible,setVisible]=useState(false);

    const handleClick=(flag)=>()=>{
        setVisible(flag);
    }

    return (
        <div>

            <Button variant="contained" onClick={handleClick(true)}>打开</Button>

            <Backdrop visible={visible} onClick={handleClick(false)} />

        </div>
    )
}

export default Demo;