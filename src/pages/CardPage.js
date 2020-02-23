import React, { createRef } from 'react';
import { Card, List, ListItem, Table, Icon, Collapse, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const itemsComplexInitial = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
];

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'header', 
        description: 'Set card header',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'footer',
        description: 'Set card footer', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set card width', 
        default: '', 
        type: 'string | number',
        value: '100, "100%", "100px"'
    },
    { 
        property: 'padding',
        description: 'Set card padding', 
        default: '15px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'img',
        description: 'Set card image', 
        default: '', 
        type: 'string | base64',
        value: ''
    },
    { 
        property: 'flat', 
        description: 'Remove card box shadow',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'hover',
        description: 'Lift up the card on hover', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'outlined',
        description: 'Set card borders outlined', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color',
        description: 'Set card borders color from colors list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'title',
        description: 'Set outlined card title (has effect only with outlined prop)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

    const usage =
`// Usage examples
import React from 'react';
import { Card, List, ListItem } from '@assenti/rui-components';

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }
];

function Example() {
    return (
        <div>
            <Card header="Marvel heroes">
                <List>
                    {names.map((item, index) => 
                        <ListItem 
                            key={index}
                            item={item.name}
                            hover/>
                    )}
                </List>
            </Card>
            <Card dark header="Marvel heroes">
                <List dark>
                    {names.map((item, index) => 
                        <ListItem 
                            key={index}
                            item={item.name}
                            hover/>
                    )}
                </List>
            </Card>
        </div>
    )
}
`

    const usageFlat =
`// Usage examples
import React from 'react';
import { Card, List, ListItem } from '@assenti/rui-components';

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }
];

function Example() {
    return (
        <Card header="Marvel heroes" flat>
            <List>
                {names.map((item, index) => 
                    <ListItem 
                        key={index}
                        item={item}
                        hover
                        itemTitle="name"/>
                )}
            </List>
        </Card>
    )
}
`

const usageImage =
`// Usage examples
import React from 'react';
import { Card, Icon } from '@assenti/rui-components';

let cards = [1,2,3];

function Example() {
    return (
        <div className="row space-around">
            {cards.map((item, index) => 
                <Card 
                    key={index}
                    hover
                    className="ma-5 col"
                    width={200} 
                    img={<div className="row justify-center">
                            <Icon name="react" size={50} color="#42a5f5"/>
                        </div>}
                    footer={'Some description ' + item}>
                    <p>Some title {item}</p>
                </Card>
            )}
        </div>
    )
}
`

const usageOutlined =
`// Usage examples
import React from 'react';
import { Card, List, ListItem } from '@assenti/rui-components';

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }
];

function Example() {
    return (
        <Card outlined title="Marvel Avengers" color="primary">
            <List>
                {names.map((item, index) => 
                    <ListItem 
                        key={index}
                        item={item}
                        hover
                        itemTitle="name"/>
                )}
            </List>
        </Card>
    )
}
`

export const CardPage = () => {
    const api = createRef();
    const parentRef = createRef();

    const imageCards = () => {
        let cards = [1,2,3]
        return (
            <div className="row space-around">
                {cards.map((item, index) => 
                    <Card 
                        key={index}
                        hover
                        className="ma-5 col"
                        width={200} 
                        img={<div className="row justify-center"><Icon name="react" size={50} color="#42a5f5"/></div>}
                        footer={'Some description ' + item}>
                        <p>Some title {item}</p>
                    </Card>
                )}
            </div>
        )
    }

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="rui-page" ref={parentRef}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Card Component</div>
                <div className="rui-link fz-13 fw-bold" onClick={goToApi}>API</div>
            </div>
            <Card outlined color="primary" title="Card with header">
                <Card header="Marvel heroes">
                    <List>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item.name}
                                hover/>
                        )}
                    </List>
                </Card>
                <Card dark header="Marvel heroes">
                    <List dark>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item.name}
                                hover/>
                        )}
                    </List>
                </Card>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Card flat">
                <Card header="Marvel heroes" flat>
                    <List>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item.name}
                                hover/>
                        )}
                    </List>
                </Card>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageFlat}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Card with image and hover">
                {imageCards()}
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageImage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Outlined Cards with titles">
                <Card outlined title="Marvel Avengers" color="primary">
                    <List>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item.name}
                                hover/>
                        )}
                    </List>
                </Card>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageOutlined}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn dark setRef={parentRef} size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
