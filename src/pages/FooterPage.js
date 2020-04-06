import React, { useState } from 'react';
import { Footer, Card, Table, Collapse, Select, Icon, Switch, CopyToClipboard, ThemeContext, Divider, List, ListItem } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { countries } from '../data/countries';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'height',
        description: 'Set Footer height', 
        default: '50px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set Footer background color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | info'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'smooth',
        description: 'Make header borders smooth', 
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

const usage = 
`// Usage examples
import React from 'react';
import { Footer, List, ListItem } from '@assenti/react-ui-components';

function Example() {
        <>
            <Footer>
                <div className="full-width">
                    <div className="row space-around">
                        <List>
                            {countries.slice(0,5).map((item, index) => 
                                <a href={item.url} 
                                    target="_blank" 
                                    key={index}
                                    rel="noopener noreferrer">
                                    <ListItem
                                        noDivider
                                        item={item.country}/>
                                </a>
                            )}
                        </List>
                        <List>
                            {countries.slice(5,10).map((item, index) => 
                                <a href={item.url} 
                                    key={index}    
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <ListItem
                                        noDivider
                                        item={item.country}/>
                                </a>
                            )}
                        </List>
                    </div>
                    <div className="fz-8 py-10 text-center">
                        {getYears()} &copy;	React UI Components
                    </div>
                </div>
            </Footer>
        </>
    )
}`

const colors = ['default', 'primary', 'info', 'success', 'error'];

const FooterPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [smooth, setSmooth] = useState(false);

    const getYears = () => {
        if (new Date().getFullYear() === 2020) return new Date().getFullYear();
        else return `2020 - ${new Date().getFullYear()}`;
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Footer/>'} Component</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            dark={theme}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            label="Color theme"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Switch 
                            color="primary" 
                            check={smooth}
                            rightLabel="Smooth borders"
                            className="my-10"
                            onChange={() => setSmooth(!smooth)}/>
                        <Divider/>
                        <br/>
                        <Footer
                            color={!theme ? color : null}
                            smooth={smooth}
                            dark={theme}>
                            <div className="full-width">
                                <div className="row space-around">
                                    <List>
                                        {countries.slice(0,5).map((item, index) => 
                                            <a href={item.url} 
                                                target="_blank" 
                                                key={index}
                                                rel="noopener noreferrer">
                                                <ListItem
                                                    noDivider
                                                    item={item.country}/>
                                            </a>
                                        )}
                                    </List>
                                    <List>
                                        {countries.slice(5,10).map((item, index) => 
                                            <a href={item.url} 
                                                key={index}    
                                                target="_blank" 
                                                rel="noopener noreferrer">
                                                <ListItem
                                                    noDivider
                                                    item={item.country}/>
                                            </a>
                                        )}
                                    </List>
                                </div>
                                <div className="fz-8 py-10 text-center">
                                    {getYears()} &copy;	React UI Components
                                </div>
                            </div>
                        </Footer>
                        <Collapse 
                            icon="code" 
                            iconSize={18}
                            dark={theme}
                            extra={<CopyToClipboard 
                                    defaultText="Copy code" 
                                    text={usage}
                                    dark={theme} 
                                    className="mr-10"/>} 
                            contentStyles={{ padding: 0 }}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? darcula : prism}>
                                {usage}
                            </SyntaxHighlighter> 
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index
                        dark={theme}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default FooterPage;