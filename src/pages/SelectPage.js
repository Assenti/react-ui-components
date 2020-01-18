import React, { useState } from 'react';
import { Select } from '../components/Select';

export const SelectPage = () => {
    const items = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Next', 'Redux', 'React-Redux', 'Vue', 'Vuex', 'Nuxt']
    const [selected, setSelected] = useState('')

    return (
        <div className="page">
            <div className="page-title">Selects</div>
            <h3>Simple Selects</h3>
            <div className="flex align-top">
                <Select
                    placeholder="Select an item" 
                    items={items}
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
            </div>
            <br/>
            <h3>Selects with subitems</h3>
            <div className="flex align-top">
                <Select
                    placeholder="Select an item" 
                    items={items}
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
            </div>
        </div>
        
    )
}
