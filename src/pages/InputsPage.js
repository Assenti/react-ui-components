import React, { useState } from 'react';
import { InputField, TextareaField } from '../components/Input';

export const InputsPage = () => {
    const [first, setFirst] = useState('')

    return (
        <div className="page">
            <div className="page-title">Inputs</div>
            <InputField
                label="Label"
                placeholder="Defaul size input field" 
                value={first}
                width="300px"
                hint="Some hint"
                onClear={() => setFirst('')} 
                onChange={e => setFirst(e.target.value)}/>

            <InputField
                medium
                color="info"
                placeholder="Input field medium" 
                value={first} 
                width="300px"
                onClear={() => setFirst('')} 
                onChange={e => setFirst(e.target.value)}/>

            <InputField
                large
                color="error"
                label="Input field large"
                placeholder="Input field large" 
                value={first} 
                width="300px"
                onClear={() => setFirst('')} 
                onChange={e => setFirst(e.target.value)}/>
            
            <TextareaField
                label="Textarea field"
                placeholder="Textarea field" 
                value={first}
                width="300px"
                onClear={() => setFirst('')} 
                onChange={e => setFirst(e.target.value)}/>

            <TextareaField
                rows={4}
                color="error"
                width="300px"
                label="Textarea field"
                placeholder="Textarea field" 
                value={first}
                onClear={() => setFirst('')} 
                onChange={e => setFirst(e.target.value)}/>
        </div>
    )
}
