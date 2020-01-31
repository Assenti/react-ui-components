import React, { useState } from 'react';
import { Switch } from '../components/Switch';

export const SwitchPage = () => {
    const [check, setCheck] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check1, setCheck1] = useState(true);

    return (
        <div className="page">
            <div className="page-title">Switches</div>
            <h3>Simple switches</h3>
            <div className="row">
                <Switch check={check} onChange={() => setCheck(!check)}/>
                <Switch check={check} color="primary" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="info" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="success" onChange={() => setCheck(!check)}/>
                <Switch check={check} color="error" onChange={() => setCheck(!check)}/>
                <Switch check={check2} color="error" disabled onChange={() => setCheck2(!check2)}/>

            </div>
            <h3>Switches with icons and labels</h3>
            <Switch color="info" 
                check={check1}
                leftLabel="Off"
                rightLabel="On" 
                onChange={() => setCheck1(!check1)}/>
            <br/>
            <Switch color="primary" 
                check={check1}
                leftIcon="moon"
                leftIconColor="darkblue"
                rightIcon="sun" 
                rightIconColor="#feda24"
                onChange={() => setCheck1(!check1)}/>
        </div>
    )
}
