import React, { useState } from 'react';
import { Footer, Select, Icon, Switch, ThemeContext, Divider, List, ListItem } from '../components';
import { countries } from '../data/countries';
import Page from '../layouts/Page';

const items = [
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
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'object',
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
    const [fixed, setFixed] = useState(false);

    const getYears = () => {
        if (new Date().getFullYear() === 2020) return new Date().getFullYear();
        else return `2020 - ${new Date().getFullYear()}`;
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Footer/>"
                    apiDescItems={items}>
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
                    <Switch 
                        color="primary" 
                        check={fixed}
                        rightLabel="Fixed"
                        className="my-10"
                        onChange={() => setFixed(!fixed)}/>
                    <Divider/>
                    <br/>
                    <Footer
                        fixed={fixed}
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
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default FooterPage;