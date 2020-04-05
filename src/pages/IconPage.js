import React, { useRef, useState } from 'react';
import { Table, Icon, Card, Collapse, Tooltip, InputField, BackTopBtn } from '../components';
import { description } from '../../package.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const icons = [
    'delete', 
    'search', 
    'home', 
    'edit', 
    'github', 
    'gitlab', 
    'close', 
    'chevron-double-right', 
    'chevron-double-left',
    'code',
    'chip',
    'account',
    'users',
    'person',
    'shield-account',
    'chevron-down',
    'chevron-up',
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
    'arrow-down-bold',
    'format-align-left',
    'format-align-center',
    'format-align-right',
    'brush',
    'lock',
    'filter',
    'sort-ascending',
    'sort-descending',
    'content-copy',
    'toy-brick',
    'help-circle-outline',
    'dots-vertical',
    'dots-horizontal',
    'react',
    'language-css-3',
    'earth',
    'check',
    'check-circle',
    'eye',
    'eye-off',
    'tenge',
    'currency-usd',
    'credit-card',
    'qrcode',
    'calendar-month',
    'calendar-star',
    'card-account-details',
    'translate',
    'alert',
    'format-size',
    'cog-outline',
    'target',
    'map',
    'map-marker',
    'language-js',
    'language-ts',
    'language-go',
    'linkedin',
    'facebook',
    'facebook-workplace',
    'instagram',
    'whatsapp',
    'telegram',
    'flag',
    'plus',
    'minus',
    'account-plus',
    'book-open',
    'shape',
    'share',
    'phone',
    'bell',
    'wrench',
    'alert-circle',
    'info',
    'package-down',
    'clock-outline',
    'wifi',
    'cart',
    'chart-ppf',
    'airplane',
    'cancel'
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

    const CustomIconSvg = () => {
        return (
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="gray" d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
            </svg>
        )
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">{'<Icon/>'} Component</div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <p><strong>{description}</strong> use primarily
                <a href="https://materialdesignicons.com/"
                    target="blank_"
                    className="ml-5">Material Design Icons</a>
            </p>
            <br/>
            <Card outlined color="gray" title="Icons collection">
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
            <br/>
            <Card outlined title="Custom icon">
                <div className="pa-10">
                    <Tooltip tooltip="I am custom svg icon" position="right">
                        <Icon custom={<CustomIconSvg/>}/>
                    </Tooltip>
                </div>
                <SyntaxHighlighter language="jsx" style={prism}>
                    {customIconUsage}
                </SyntaxHighlighter>
            </Card>
            <h2 ref={api}>API</h2>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default IconPage;
