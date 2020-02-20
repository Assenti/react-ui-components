import React, { createRef, useState } from 'react';
import { Table, Icon, Card, Collapse, Tooltip, InputField } from '../components';
import { description } from '../../package.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const icons = [
    'delete', 
    'search', 
    'home', 
    'edit', 
    'github', 
    'close', 
    'chevron-double-right', 
    'chevron-double-left',
    'code',
    'chip',
    'account',
    'person',
    'shield-account',
    'chevron-down',
    'chevron-next', 
    'chevron-back', 
    'sun',
    'moon',
    'star',
    'star-outline',
    'smartphone',
    'hammer',
    'city',
    'empty',
    'download',
    'menu',
    'file-outline' ,
    'email',
    'rocket',
    'key',
    'exit-to-app',
    'arrow-up-bold',
    'format-align-left',
    'format-align-center',
    'format-align-right',
    'brush',
    'lock',
    'filter'
]

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
        property: 'title', 
        description: 'Set title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set icon color', 
        default: '', 
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
        <div>
            <Icon name="search" size={20} color="red"/>
            <Icon name="home" size={20} color="#1976d2"/>
            <Icon name="account" size={20} color="#rgb(0,0,5)"/>
        </div>
    )
}
`

export const IconPage = () => {
    const api = createRef();
    const [search, setSearch] = useState('');

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const filteredIcons = () => {
        if (search) {
            return icons.filter(item => item.toLowerCase().includes(search.toLowerCase()))
        } else {
            return icons
        }
    }

    return (
        <div className="page">
            <div className="row align-center space-between">
                <div className="page-title">Icon Component</div>
                <a onClick={goToApi} className="fz-13 fw-bold">API</a>
            </div>
            <p><strong>{description}</strong> use primarily
                <a href="https://materialdesignicons.com/"
                    target="blank_"
                    className="ml-5">Material Design Icons</a>
            </p>
            <br/>
            <Card outlined color="primary" title="Icons collection">
                <div className="pa-10">
                    <InputField 
                        value={search}
                        prefix={<Icon name="search"/>}
                        placeholder="Search icons"
                        color="primary"
                        onChange={e => setSearch(e.target.value)}/>
                </div>
                {filteredIcons().map((item, index) => 
                    <div key={index} 
                        style={{ width: 35, height: 35 }}
                        className="row-inline text-center column justify-center align-center pa-5 ma-10 hoverable">
                        <Tooltip tooltip={item}>
                            <Icon name={item}/>
                        </Tooltip>
                        {/* <div className="mt-5 fz-8">{item}</div> */}
                    </div>
                )}
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
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
