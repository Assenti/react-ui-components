import React, { useRef, useState } from 'react';
import { Card, List, ListItem, Table, Switch, Collapse, BackTopBtn, Select, Icon, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man.png';
import manImage2 from '../img/hipster.png';
import girlImage from '../img/girl.png';
import girlImage2 from '../img/girl_.png';

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
        value: 'primary | info | success | error | gray'
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
const colors = ['primary', 'info', 'success', 'error', 'gray'];

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
}`

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
}`

const CardPage = () => {
    const api = useRef();
    const parentRef = useRef();
    const [dark, setDark] = useState(false);
    const [flat, setFlat] = useState(false);
    const [hover, setHover] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);

    const imageCards = () => {
        let cards = [
            {img: manImage, name: 'John Doe'},
            {img: manImage2, name: 'John Smith'},
            {img: girlImage, name: 'Jane Doe' },
            {img: girlImage2, name: 'Jane Smith'}     
        ];
        return (
            <div className="row wrap space-around">
                {cards.map((item, index) => 
                    <Card 
                        key={index}
                        hover
                        className="ma-5"
                        width={200} 
                        img={item.img}
                        footer={<h4 className="text-center">{item.name}</h4>}>
                        <p className="text-center">Hey there!</p>
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
                <div className="rui-page-title">{'<Card/>'} Component</div>
                <div className="rui-link fz-13 fw-bold" onClick={goToApi}>API</div>
            </div>
            <Card outlined title="Usage">
                <Switch 
                    color="primary" 
                    check={dark}
                    disabled={outlined}
                    rightLabel="Dark"
                    className="my-10"
                    onChange={() => setDark(!dark)}/>
                <Switch 
                    color="primary" 
                    check={flat}
                    rightLabel="Flat"
                    className="my-10"
                    onChange={() => setFlat(!flat)}/>
                <Switch 
                    color="primary" 
                    check={hover}
                    rightLabel="Hover"
                    className="my-10"
                    onChange={() => setHover(!hover)}/>
                <Switch 
                    color="primary" 
                    check={outlined}
                    rightLabel="Outlined"
                    className="my-10"
                    onChange={() => setOutlined(!outlined)}/>
                <br/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Outline color"
                    color="primary"
                    value={color}
                    onChange={v => setColor(v)}/>
                <Card
                    dark={dark}
                    flat={flat} 
                    hover={hover}
                    outlined={outlined}
                    title={outlined ? 'Card props' : ''}
                    color={color}
                    header="Marvel heroes">
                    <List dark={dark}>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item.name}
                                hover/>
                        )}
                    </List>
                </Card>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Card with image and hover">
                {imageCards()}
                <Collapse 
                    icon="code"
                    extra={<CopyToClipboard defaultText="Copy code" text={usageImage} className="mr-10"/>} 
                    iconSize={18} 
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageImage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn dark setRef={parentRef} size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index
                itemTitles={keys}/>
        </div>
    )
}
export default CardPage;