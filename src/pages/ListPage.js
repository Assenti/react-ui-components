import React, { useState } from 'react';
import { List, ListItem } from '../components/List';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';

export const ListPage = () => {
    const items = ['John Doe', 'Peter Parker', 'Tony Stark', 'Bruce Benner'];

    const itemsComplexInitial = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
    ];

    const [itemsComplex, setItemsComplex] = useState(itemsComplexInitial);
    const [selected, setSelected] = useState([]);

    const selectOne = (item) => {
        if (isSelected(item, 'hero')) {
            setSelected(selected => selected.filter(_item => _item.hero !== item.hero))
        } else setSelected([...selected, item]);
    }

    const isSelected = (item, prop) => {
        let result = false
        if (prop) {
            for (const select of selected) {
                if (item[prop] === select[prop]) result = true 
            }
        }
        return result
    }

    return (
        <div className="page">
            <div className="page-title">Lists</div>
            <div className="half-width">
                <h3>Simple list</h3>
                <List items={items}/>
                <h3>Simple list dark mode with hover and icons</h3>
                <div className="bg-night pa-10 smooth-border">
                    <List items={itemsComplex} itemTitle="hero" dark hover/>
                </div>
                <h3>Dense size list with header and hover</h3>
                <List dense hover items={items} header="Marvel avengers:"/>
                <h3>List with checkbox</h3>
                <List 
                    onItemClick={() => {}} 
                    header={'Selected Marvel avengers: ' + selected.length}>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item}
                            itemTitle="hero"
                            noIcon
                            hover
                            checkbox={<Checkbox 
                                checked={isSelected(item, 'hero')}
                                onChange={() => selectOne(item)}/>}/>
                    )}
                </List>
                <h3>List with controls and subtitles</h3>
                <List>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item} 
                            itemTitle="name"
                            subTitle={item.hero}
                            controls={
                                <React.Fragment>
                                    <Button outlined small color="light" className="mr-10" icon="edit" onClick={() => {}}/>
                                    <Button outlined small color="light" icon="delete" onClick={() => {}}/>
                                </React.Fragment>
                            }/>
                    )}
                </List>
            </div>
        </div>
    )
}
