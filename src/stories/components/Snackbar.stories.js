import React from 'react';
import Snackbar from '../../components/snackbar/Snackbar';
import { snackbar } from '../../components/snackbar';
import Button from '../../components/button';
import Icon from '../../components/icon';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`
// Usage examples
// Paste <Snackbar/> component in the root of your app (App.js | App.tsx)
// and then just use snackbar function

import React from 'react';
import { Button, Icon, Snackbar, snackbar } from '@assenti/rui-components';

function Example() {
    
    const handleClick = () => {
        snackbar.message('I am a Snackbar', 
            { 
                type: 'success', 
                borderType: 'rounded',
                controls: <Button dark icon={<Icon name="close"/>} onClick={() => snackbar.remove()}/> 
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

export default {
    title: 'Example/Snackbar',
    component: Snackbar
};

const Template = (args) => (
    <>
        <Snackbar/>
        <Button
            className="mt-10 ml-0"
            onClick={() => {
                snackbar.message('I am a Snackbar', 
                { 
                    borderType: 'rounded',
                    controls: <Button dark icon={<Icon name="close"/>} onClick={() => snackbar.remove()}/> 
                })
            }} 
            name="Invoke snackbar" 
            color="primary"/>
        <SyntaxHighlighter 
            language="jsx" 
            style={coy}>
            {usage}
        </SyntaxHighlighter>
    </>
)

export const Snackbar_ = Template.bind({});