import React, { useState } from 'react';
import { Select } from '../components/Select';

export const SelectPage = () => {
    const items = [
        { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
        { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
        { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
        { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
        { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] }
    ]
    const [selected, setSelected] = useState('');
    const [selectedCascader, setSelectedCascader] = useState('');
    const [selectedCascaderSubItem, setSelectedCascaderSubItem] = useState('');

    return (
        <div className="page">
            <div className="page-title">Selects</div>
            <h3>Simple Selects</h3>
            <div className="flex align-top">
                <Select
                    placeholder="Select a country" 
                    items={items}
                    itemName="country"
                    normalTitle={true}
                    labelName="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <div className="mx-20"></div>
                <Select
                    placeholder="Select a country" 
                    items={items}
                    width={300}
                    hint="Custom width: 300px"
                    itemName="country"
                    normalTitle={true}
                    labelName="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
            </div>
            <h3>Selects with subitems</h3>
            <div className="flex align-top">
                <Select
                    items={items}
                    width={300}
                    selectedItem={selectedCascader}
                    placeholder="Select a country and a capital" 
                    itemName="country"
                    subItemsField="cities"
                    normalTitle={true}
                    subTitle={true}
                    labelName="Countries and capitals"
                    onSelect={v => setSelectedCascader(v)}/>
            </div>
            <h3>Selects with subitems (show only subitem value)</h3>
            <div className="flex align-top">
                <Select
                    items={items}
                    width={300}
                    selectedItem={selectedCascaderSubItem}
                    placeholder="Select a country and a capital" 
                    itemName="country"
                    subItemsField="cities"
                    normalTitle={true}
                    subTitle={true}
                    showSubItemOnly={true}
                    labelName="Countries and capitals"
                    hint="Some hint for this select"
                    onSelect={v => setSelectedCascaderSubItem(v)}/>
            </div>
        </div>
        
    )
}
