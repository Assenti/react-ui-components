import React, { useState } from 'react';
import { Button, Preloader, Table, Collapse, Card, CopyToClipboard, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'visible', 
        description: 'Preloader visibile state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'preloader', 
        description: 'Pass your own custom preloader element', 
        default: 'Moving ellipsis', 
        type: 'any',
        value: ''
    },
    { 
        property: 'backgroundColor', 
        description: 'Set preloader background color', 
        default: 'transparent', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set preloader default ellipsis color', 
        default: 'primary (#1678c2)', 
        type: 'string',
        value: 'hex | rgb '
    }
]

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Preloader, Button } from '@assenti/rui-components';

function Example() {
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <div>
            <div className="py-10">
                <Button name="Activate" color="info" onClick={handleClick}/>
            </div>
            <Preloader visible={loading}/>
        </div>
    )
}`

const PreloaderPage = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Preloader/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <p>Launch full page preloader and make all actions on screen disabled</p>
                        <div className="py-10">
                            <Button name="Activate" color="primary" onClick={handleClick}/>
                        </div>
                        <Collapse 
                            dark={theme}
                            icon="code"
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>}  
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <Preloader
                        visible={loading}/>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default PreloaderPage;