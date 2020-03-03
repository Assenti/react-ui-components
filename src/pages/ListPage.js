import React, { useState, createRef } from 'react';
import { List, ListItem, Button, Table, Card, Collapse, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const simpleList =
`// Usage examples
import React, { useState } from 'react';
import { List, ListItem } from '@assenti/rui-components';
const names = [
    { name: 'John Doe', active: false },
    { name: 'Peter Parker', active: true },
    { name: 'Tony Stark', active: false },
    { name: 'Bruce Benner', active: false }
];

function Example() {
    const [item, setItem] = useState('');

    return (
        <div>
            <List>
                {names.map((item, index) => 
                    <ListItem
                        isActiveItem={item => item.active} 
                        key={index} 
                        item={item}
                        itemTitle="name"/>
                )}
            </List>
            <br/>
            <List size="medium" header="Medium size">
                {names.map((item, index) => 
                    <ListItem
                        isActiveItem={item => item.active} 
                        key={index} 
                        item={item}
                        itemTitle="name"/>
                )}
            </List>
            <br/>
            <List size="large" header="Large size">
                {names.map((item, index) => 
                    <ListItem
                        key={index}
                        hover
                        icon="account" 
                        item={item.name}
                        controls={<span className="fz-10 text-dark">+7 (777) 777-77-77</span>}/>
                )}
            </List>
        </div>
    )
}`

const darkMode =
`// Usage examples
import React, { useState } from 'react';
import { List, ListItem } from '@assenti/rui-components';
const heroes = [
    { hero: 'Captain America', icon: 'shield-account' }, 
    { hero: 'Spider man', icon: 'shield-account' }, 
    { hero: 'Iron man', icon: 'shield-account' }, 
    { hero: 'Hulk', icon: 'shield-account' }
];

function Example() {
    return (
        <div>
            <List dark
            header="Marvel Avengers" 
            items={itemsComplex} 
            itemTitle="hero" 
            hover>
            {itemsComplex.map((item, index) => 
                <ListItem 
                    key={index} 
                    item={item}
                    icon={item.icon}
                    itemTitle="hero"
                    hover/>
            )}
            </List>
        </div>
    )
}`

const checkboxList =
`// Usage examples
import React, { useState } from 'react';
import { List, ListItem, Checkbox } from '@assenti/rui-components';
const names = [
    { name: 'Steve Rogers', hero: 'Captain America', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', check: false }
];

function Example() {
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
        <div>
            <List header={'Selected Marvel avengers: ' + selected.length}>
                {itemsComplex.map((item, index) => 
                    <ListItem 
                        key={index} 
                        item={item.hero}
                        isActiveItem={isSelected(item.hero)}
                        hover
                        onClick={() => selectOne(item.hero)}
                        checkbox/>
                )}
            </List>
        </div>
    )
}`

const controlsList =
`// Usage examples
import React, { useState } from 'react';
import { List, ListItem, Button, Tag } from '@assenti/rui-components';
const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account' }
];

function Example() {
    return (
        <div>
            <List>
                {names.map((item, index) => 
                    <ListItem 
                        key={index} 
                        item={item}
                        icon={item.icon} 
                        itemTitle="name"
                        subTitle={<Tag small color="info" value={item.hero}/>}
                        controls={
                            <React.Fragment>
                                <Button small color="light" className="mr-10" icon="edit"/>
                                <Button small color="light" icon="close"/>
                            </React.Fragment>
                        }/>
                )}
            </List>
        </div>
    )
}`

const names = [
    { name: 'John Doe', hero: 'Captain America', active: false },
    { name: 'Peter Parker', hero: 'Spider man', active: true },
    { name: 'Tony Stark', hero: 'Iron man', active: false },
    { name: 'Bruce Benner', hero: 'Hulk', active: false }
];

const itemsComplexInitial = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'header', 
        description: 'Set list header',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set list item size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'dark',
        description: 'Set dark mode (can not be used with light prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const items2 = [
    { 
        property: 'render', 
        description: 'You can pass your own custom element', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Invokes on item click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'item', 
        description: 'Set list item', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'subTitle', 
        description: 'Set subtitle in list item (It can be just text or Tag and etc.)', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'tooltip', 
        description: 'Set tooltip', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tooltipPosition', 
        description: 'Set tooltip position', 
        default: 'top', 
        type: 'string',
        value: 'left | right | bottom'
    },
    { 
        property: 'isActiveItem', 
        description: 'Set active list item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'roundedActive', 
        description: 'Set hover and active list item rounded', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'leftBorder', 
        description: 'Set left border highlighting on active item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'checkbox',
        description: 'A placeholder for checkbox (Expect a checkbox element or Component)', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'icon',
        description: 'Set icon before the text in list item', 
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'controls',
        description: 'A placeholder for item controls like buttons or etc.', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'noDivider',
        description: 'Remove the divider line between items', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'hover',
        description: 'Highlight hovered list item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const ListPage = () => {
    const [itemsComplex] = useState(itemsComplexInitial);
    const [selected, setSelected] = useState([]);
    const listApi = createRef();
    const listItemApi = createRef();
    const parent = createRef();

    const goListApi = () => {
        if (listApi.current) listApi.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const goListItemApi = () => {
        if (listItemApi.current) listItemApi.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const selectOne = (item) => {
        if (isSelected(item)) {
            setSelected(selected => selected.filter(_item => _item !== item))
        } else setSelected([...selected, item]);
    }

    const isSelected = (item) => {
        let result = false
        for (const select of selected) {
            if (item === select) result = true 
        }
        return result
    }
    
    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">List, ListItem Components</div>
                <div className="row">
                    <div className="rui-link fz-13 fw-bold mr-10" onClick={() => goListApi()}>List API</div>
                    <div className="rui-link fz-13 fw-bold" onClick={() => goListItemApi()}>ListItem API</div>
                </div>
            </div>
            <Card 
                outlined 
                className="px-0"
                title="Simple list with active item">
                <List header="Default size">
                    {names.map((item, index) => 
                        <ListItem
                            isActiveItem={item.active} 
                            key={index} 
                            item={item.name}
                            subTitle={item.hero}/>
                    )}
                </List>
                <br/>
                <List size="medium" header="Medium size, left bordered active item">
                    {names.map((item, index) => 
                        <ListItem
                            isActiveItem={item.active} 
                            key={index}
                            leftBorder 
                            item={item.name}
                            subTitle={item.hero}/>
                    )}
                </List>
                <br/>
                <List size="large" header="Large size">
                    {names.map((item, index) => 
                        <ListItem
                            key={index}
                            hover
                            icon="account" 
                            item={item.name}
                            controls={<span className="fz-10 text-dark">+7 (777) 777-77-77</span>}/>
                    )}
                </List>
                <Collapse className="px-15" icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleList}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Dark mode">
                <List dark
                    header="Marvel Avengers" 
                    hover>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item.hero}
                            icon={item.icon}
                            hover/>
                    )}
                </List>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {darkMode}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card 
                outlined 
                title="List with checkbox"
                className="px-0">
                <List header={'Selected Marvel avengers: ' + selected.length}>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item.hero}
                            isActiveItem={isSelected(item.hero)}
                            hover
                            onClick={() => selectOne(item.hero)}
                            checkbox/>
                    )}
                </List>
                <Collapse className="px-15" icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {checkboxList}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="List with controls and subtitles">
                <List>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item.name}
                            icon={item.icon} 
                            subTitle={item.hero}
                            controls={
                                <React.Fragment>
                                    <Button color="light" 
                                        className="mr-10" 
                                        icon="edit"
                                        iconSize={16}/>
                                    <Button small color="light" icon="close"/>
                                </React.Fragment>
                            }/>
                    )}
                </List>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {controlsList}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2 ref={listApi}>List API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
            <h2 ref={listItemApi}>ListItem API</h2>
            <Table
                bordered
                headers={keys}
                items={items2}
                index={true}
                itemTitles={keys}/>
            <BackTopBtn setRef={parent} dark size="medium"/>
        </div>
    )

}

export default ListPage;
