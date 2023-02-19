import React, { useEffect, useState } from "react";
import { BulbFilled } from '@ant-design/icons';

const ToggleMode = () =>{

    const getLocalData = () =>{
        let data= localStorage.getItem("mode");
    
        if(data){
            return JSON.parse(localStorage.getItem("mode"));
        }
        else{
            return "light-mode";
        }
    }

    const [mode, setMode] = useState(getLocalData());

    const toggleTheme =  () =>{
        (mode === "dark-mode") ? setMode("light-mode") : setMode("dark-mode");
        window.location.reload();
    }

    useEffect(() => {
        document.body.className= mode;
        localStorage.setItem("mode", JSON.stringify(mode));
    }, [mode]);

    console.log(mode);

    return(
        <div className='switch-div'>
            <BulbFilled className="bulb-icon" onClick={() => toggleTheme()} />
            </div>
    );
}

export default ToggleMode;