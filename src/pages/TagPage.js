import React, { createRef, useState } from 'react';
import { Tag, Card, Table, Collapse, BackTopBtn, Button } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'value', 
        description: 'Tag value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Lift up the input field', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of input field from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | black'
    },
    { 
        property: 'rounded', 
        description: 'Make border radius rounded',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'smooth',
        description: 'Set input field borders more smooth', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'small', 
        description: 'Set tag size',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'iconLeft', 
        description: 'Set icon before the value',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'iconRight', 
        description: 'Set icon after the value',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'width',
        description: 'Set a tag width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'closable',
        description: 'Enable close function', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible',
        description: 'Set Tag visible state', 
        default: 'true', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose',
        description: 'Invokes on close icon click', 
        default: '', 
        type: 'function',
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

const tagColors =
`// Usage examples
import React from 'react';
import { Tag } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Tag value="Price: 1000" />
            <Tag value="Price: 1000" color="yellow"/>
            <Tag value="Price: 1000" color="primary"/>
            <Tag value="Price: 1000" color="info"/>
            <Tag value="Price: 1000" color="success"/>
            <Tag value="Price: 1000" color="error"/>
        </div>
    )
}`

const tagTypes =
`// Usage examples
import React from 'react';
import { Tag } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Tag value="Price: 1000" rounded color="yellow"/>
            <Tag value="Price: 1000" rounded outlined color="primary"/>
            <Tag value="Price: 1000" rounded lifted color="primary"/>
            <Tag value="Price: 1000" outlined color="primary"/>
            <Tag value="Price: 1000" smooth color="success"/>
            <Collapse icon="code" iconSize={18} tooltip="Code">
        </div>
    )
}`

const tagSizes =
`// Usage examples
import React from 'react';
import { Tag } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Tag value="Defaul tag" color="yellow"/>
            <Tag value="Small tag" small color="yellow"/>
            <Tag value="Small tag" small rounded color="yellow"/>
        </div>
    )
}`

const tagIcons =
`// Usage examples
import React from 'react';
import { Tag } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Tag iconLeft="smartphone" value="777 777 77 77" color="primary"/>
            <Tag iconLeft="star" value="1020" small color="yellow"/>
            <Tag iconLeft="account" value="John Doe" color="info"/>
            <Tag iconLeft="account" value="John Doe" />
        </div>
    )
}`

const TagPage = () => {
    const parent = createRef();
    const api = createRef();
    const [visible, setVisible] = useState(true);

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Tags</div>
                <div onClick={() => goToApi()} className="rui-link fz-13 fw-bold mr-10">API</div>
            </div>
            <Card outlined color="primary" title="Tag colors">
                <Tag value="Price: 1000" />
                <Tag value="Price: 1000" color="yellow"/>
                <Tag value="Price: 1000" color="primary"/>
                <Tag value="Price: 1000" color="info"/>
                <Tag value="Price: 1000" color="success"/>
                <Tag value="Price: 1000" color="error"/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {tagColors}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Tag types">
                <Tag value="Price: 1000" rounded color="yellow"/>
                <Tag value="Price: 1000" rounded outlined color="primary"/>
                <Tag value="Price: 1000" rounded lifted color="primary"/>
                <Tag value="Price: 1000" outlined color="primary"/>
                <Tag value="Price: 1000" smooth color="success"/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {tagTypes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Tag sizes">
                <Tag value="Defaul tag" color="yellow"/>
                <Tag value="Small tag" small color="yellow"/>
                <Tag value="Small tag" small rounded color="yellow"/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {tagSizes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Tag with icons">
                <div className="row align-center">
                    <Tag iconLeft="smartphone" value="777 777 77 77" color="primary"/>
                    <Tag iconLeft="star" value="1020" small color="yellow"/>
                    <Tag iconLeft="account" value="John Doe" color="info"/>
                    <Tag 
                        iconLeft="account" 
                        value="John Doe" 
                        closable
                        visible={visible} 
                        onClose={() => setVisible(false)}/>
                    <Button 
                        name="Return Tag" 
                        color="info" 
                        className="ml-20" 
                        onClick={() => setVisible(true)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {tagIcons}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2 ref={api}>API</h2>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default TagPage;
