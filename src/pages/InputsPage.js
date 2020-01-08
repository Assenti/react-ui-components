import React, { useState } from 'react';
import { InputField, TextareaField } from '../components/Input';

export const InputsPage = () => {
    const [first, setFirst] = useState('Input')

    return (
        <div className="page">
            <div className="page-title">Inputs</div>
            <div className="flex wrap">
                <div className="col mr-10">
                    <InputField
                        label="Input field"
                        placeholder="Input field" 
                        value={first}
                        onClear={() => setFirst('')} 
                        onChange={e => setFirst(e.target.value)}/>
                </div>
                <div className="col mr-10">
                    <InputField
                        medium
                        color="info"
                        label="Input field medium"
                        placeholder="Input field medium" 
                        value={first} 
                        onClear={() => setFirst('')} 
                        onChange={e => setFirst(e.target.value)}/>
                </div>
                <div className="col">
                    <InputField
                        large
                        color="error"
                        label="Input field large"
                        placeholder="Input field large" 
                        value={first} 
                        onClear={() => setFirst('')} 
                        onChange={e => setFirst(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="flex">
                <div className="col mr-10">
                    <TextareaField
                        label="Textarea field"
                        placeholder="Textarea field" 
                        value={first}
                        onClear={() => setFirst('')} 
                        onChange={e => setFirst(e.target.value)}/>
                </div>
                <div className="col">
                    <TextareaField
                        rows={4}
                        color="error"
                        label="Textarea field"
                        placeholder="Textarea field" 
                        value={first}
                        onClear={() => setFirst('')} 
                        onChange={e => setFirst(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}
