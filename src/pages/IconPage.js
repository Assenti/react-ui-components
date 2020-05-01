import React, { useRef } from 'react';
import { Table, Icon, Card, Tooltip, BackTopBtn, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'name', 
        description: 'Set icon name', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Handle click event', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'custom', 
        description: 'Set custom icon', 
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set icon color', 
        default: 'gray', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    },
    { 
        property: 'size', 
        description: 'Set icon size',
        default: '24', 
        type: 'number',
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
import { Icon } from '@assenti/rui-components';

funcation Example() {
    return (
        <>
            <Icon name="search" size={20} color="red"/>
            <Icon name="home" size={20} color="#1976d2"/>
            <Icon name="account" size={20} color="#rgb(0,0,5)"/>
        </>
    )
}`

const customIconUsage = 
`// Usage examples
import React from 'react';
import { Icon } from '@assenti/rui-components';

funcation Example() {

    const CustomIconSvg = () => {
        return (
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="gray" d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
            </svg>
        )
    }

    return (
        <>
            <Icon custom={<CustomIconSvg/>}/>
        </>
    )
}`

const IconPage = () => {
    const api = useRef();
    const parent = useRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const CustomIconSvg = () => {
        return (
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="gray" d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
            </svg>
        )
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Icon/>'} Component</div>
                        <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
                    </div>
                    <Card dark={theme} color="gray" header={<h4>Usage</h4>}>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={theme ? tomorrow : coy}>
                            {usage}
                        </SyntaxHighlighter>
                    </Card>
                    <br/>
                    <Card dark={theme} header={<h4>Custom icon</h4>}>
                        <div className="pa-10">
                            <Tooltip tooltip="I am custom svg icon" position="right">
                                <Icon custom={<CustomIconSvg/>}/>
                            </Tooltip>
                        </div>
                        <SyntaxHighlighter language="jsx" 
                            style={theme ? tomorrow : coy}>
                            {customIconUsage}
                        </SyntaxHighlighter>
                    </Card>
                    <BackTopBtn setRef={parent} dark size="medium"/>
                    <Card className="mt-10">
                        <Table
                            bordered
                            tableTitle={<h2 ref={api}>API</h2>}
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={items}
                            index={true}
                            itemTitles={keys}/>
                    </Card>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default IconPage;
