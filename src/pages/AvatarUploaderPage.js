import React, { useState } from 'react';
import { Card, AvatarUploader, Table, Collapse, Select, Icon, CopyToClipboard, ThemeContext, Divider, Switch } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'width', 
        description: 'Set avatar width',
        default: '100px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'height', 
        description: 'Set avatar height',
        default: '120px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'avatar', 
        description: 'Pass avatar state value',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes on image uploading',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onClear', 
        description: 'Invokes on delete button click',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'label', 
        description: 'Set label text',
        default: 'Upload avatar', 
        type: 'string',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set title',
        default: 'Choose file', 
        type: 'string',
        value: ''
    },
    { 
        property: 'accept', 
        description: 'Set accepted MIME types for files',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholderImage', 
        description: 'Set custom placeholder',
        default: '', 
        type: 'ReactNode',
        value: '<svg/> or <img/>'
    },
    { 
        property: 'lifted', 
        description: 'Elevate Avatar',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark', 
        description: 'Set avatar dark mode',
        default: '', 
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
const borders = ['default', 'smooth', 'rounded', 'tile'];
const usage =
`// Usage example
import React, { useState } from 'react';
import { AvatarUploader, Switch, Select, Icon, Divider } from '../components';
import manImage from '/path/to/man.png';

function Example() {
    const [border, setBorder] = useState(borders[1]);
    const [avatar, setAvatar] = useState('');
    const [lifted, setLifted] = useState(false);

    return (
        <>
            <Select
                dark={theme}
                items={borders}
                prefix={<Icon name="shape"/>}
                width={200}
                label="Border type"
                color="primary"
                value={border}
                onChange={v => setBorder(v)}/>
            <br/>
            <Switch
                color="primary"
                check={lifted}
                className="mt-10 mb-20"
                rightLabel="Lifted"
                onChange={() => setLifted(!lifted)}/>
            <Divider/>
            <br/>
            <AvatarUploader
                lifted={lifted}
                borderType={border}
                width={140}
                height={170}
                avatar={avatar}
                onChange={a => setAvatar(a)}
                onClear={() => setAvatar('')}/>
        </>
    )
}`

const AvatarUploaderPage = () => {
    const [border, setBorder] = useState(borders[1]);
    const [avatar, setAvatar] = useState('');
    const [lifted, setLifted] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{`<AvatarUploader/>`} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            dark={theme}
                            items={borders}
                            prefix={<Icon name="shape"/>}
                            width={200}
                            label="Border type"
                            color="primary"
                            value={border}
                            onChange={v => setBorder(v)}/>
                        <br/>
                        <Switch
                            color="primary"
                            check={lifted}
                            className="mt-10 mb-20"
                            rightLabel="Lifted"
                            onChange={() => setLifted(!lifted)}/>
                        <Divider/>
                        <br/>
                        <AvatarUploader
                            dark={theme}
                            lifted={lifted}
                            borderType={border}
                            avatar={avatar}
                            onChange={a => setAvatar(a)}
                            onClear={() => setAvatar('')}/>
                        <Collapse
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>}  
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default AvatarUploaderPage;