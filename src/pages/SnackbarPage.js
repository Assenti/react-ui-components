import React, { useState } from 'react';
import Page from '../layouts/Page';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext, Button, Snackbar, snackbar, Select, Icon } from '../components';

const usage = 
`// Usage examples
import React from 'react';
import { Button, Snackbar, snackbar } from '@assenti/rui-components';

function Example() {
    const handleClick = () => {
        snackbar.message('I am a Snackbar', 
            { 
                type: 'success', 
                borderType: 'rounded',
                controls: <Button dark name="CLOSE" onClick={() => snackbar.remove()}/> 
            })
    }

    return (
        <>
            <Snackbar/>
            <br/>
            <Button
                className="mt-10 ml-0"
                onClick={handleClick} 
                name="Invoke snackbar" 
                color="primary"/>
        </>
    )
}`;

const snackbarUsage =
`snackbar {
    message: function (message: string, options?: SnackbarOptions),
    remove: function
}

SnackbarOptions {
    type?: 'info' | 'success' | 'error',
    borderType?: 'tile' | 'rounded',
    dark?: boolean,
    duration?: number, // default 5s
    controls?: React.ReactNode
}
`

const types = ['info', 'success', 'error'];
const borders = ['default','tile', 'rounded'];

const SnackbarPage = () => {
    const [type, setType] = useState('');
    const [border, setBorder] = useState('');

    const handleClick = () => {
        snackbar.message('I am a Snackbar', 
            { 
                type: type, 
                borderType: border,
                controls: <Button dark name="CLOSE" onClick={() => snackbar.remove()}/> 
            })
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={[]}
                    content={
                        <>
                            <h2>API</h2>
                            <SyntaxHighlighter 
                                    language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {snackbarUsage}
                            </SyntaxHighlighter>
                        </>
                    }
                    componentName="<Snackbar/>">
                    <Snackbar/>
                    <Select
                        items={types}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        placeholder="Choose type"
                        label="Type"
                        color="primary"
                        className="my-5"
                        value={type}
                        onChange={_type => setType(_type)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        placeholder="Choose border type"
                        label="Border type"
                        color="primary"
                        className="my-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Button
                        className="mt-10 ml-0"
                        onClick={handleClick} 
                        name="Invoke snackbar" 
                        color="primary"/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default SnackbarPage;