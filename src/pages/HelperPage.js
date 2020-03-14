import React, { createRef } from 'react';
import { Card, Table, BackTopBtn, List, ListItem, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const margins = [
    { 
        class: 'ma-{number}', 
        description: 'Set all margins', 
        example: 'ma-5'
    },
    { 
        class: 'my-{number}', 
        description: 'Set top and bottom margins', 
        example: 'my-5'
    },
    { 
        class: 'mx-{number}', 
        description: 'Set right and left margins', 
        example: 'my-5'
    },
    { 
        class: 'ml-{number}', 
        description: 'Set left margin', 
        example: 'ml-5'
    },
    { 
        class: 'mr-{number}', 
        description: 'Set right margin', 
        example: 'mr-5'
    },
    { 
        class: 'mt-{number}', 
        description: 'Set top margin', 
        example: 'mt-5'
    },
    { 
        class: 'mb-{number}', 
        description: 'Set bottom margin', 
        example: 'mb-5'
    },
]
const paddings = [
    { 
        class: 'pa-{number}', 
        description: 'Set all paddings', 
        example: 'pa-5'
    },
    { 
        class: 'py-{number}', 
        description: 'Set top and bottom paddings', 
        example: 'py-5'
    },
    { 
        class: 'px-{number}', 
        description: 'Set right and left paddings', 
        example: 'px-5'
    },
    { 
        class: 'pl-{number}', 
        description: 'Set left padding', 
        example: 'pl-5'
    },
    { 
        class: 'pr-{number}', 
        description: 'Set right padding', 
        example: 'pr-5'
    },
    { 
        class: 'pt-{number}', 
        description: 'Set top padding', 
        example: 'pt-5'
    },
    { 
        class: 'pb-{number}', 
        description: 'Set bottom padding', 
        example: 'pb-5'
    },
]
const flexbox = [
    { 
        class: 'row', 
        description: 'Set display flex'
    },
    { 
        class: 'row-inline', 
        description: 'Set display inline-flex'
    },
    { 
        class: 'column', 
        description: 'Set flex-direction to column (has effect with row class)'
    },
    { 
        class: 'wrap', 
        description: 'Set flex-wrap (has effect with row class)'
    },
    { 
        class: 'col', 
        description: 'Set flex-grow: 1 (has effect in parent element with row class)'
    },
    { 
        class: 'align-center', 
        description: 'Align items on center (has effect in parent element with row class)'
    },
    { 
        class: 'align-top', 
        description: 'Align items on top (has effect in parent element with row class)'
    },
    { 
        class: 'align-bottom', 
        description: 'Align items on bottom (has effect in parent element with row class)'
    },
    { 
        class: 'space-between', 
        description: 'Justify content with spacing between elements (has effect in parent element with row class)'
    },
    { 
        class: 'space-around', 
        description: 'Justify content with spacing around elements (has effect in parent element with row class)'
    },
    { 
        class: 'justify-center', 
        description: 'Justify content on center (has effect in parent element with row class)'
    },
    { 
        class: 'justify-start', 
        description: 'Justify content on start (has effect in parent element with row class)'
    },
    { 
        class: 'justify-end', 
        description: 'Justify content on end (has effect in parent element with row class)'
    }
]
const colors = [
    { 
        class: 'text-{color}', 
        description: 'Set {color} to text'
    },
    { 
        class: 'bg-{color}', 
        description: 'Set {color} to background'
    }
]
const fonts = [
    { class: 'fz-5', description: 'Set font-size: 0.5rem' },
    { class: 'fz-6', description: 'Set font-size: 0.6rem' },
    { class: 'fz-7', description: 'Set font-size: 0.7rem' },
    { class: 'fz-8', description: 'Set font-size: 0.8rem' },
    { class: 'fz-9', description: 'Set font-size: 0.9rem' },
    { class: 'fz-10', description: 'Set font-size: 1rem' },
    { class: 'fz-11', description: 'Set font-size: 1.1rem' },
    { class: 'fz-12', description: 'Set font-size: 1.2rem' },
    { class: 'fz-13', description: 'Set font-size: 1.3rem' },
    { class: 'fz-14', description: 'Set font-size: 1.4rem' },
    { class: 'fz-15', description: 'Set font-size: 1.5rem' },
    { class: 'fz-16', description: 'Set font-size: 1.6rem' },
    { class: 'fz-17', description: 'Set font-size: 1.7rem' },
    { class: 'fz-18', description: 'Set font-size: 1.8rem' },
    { class: 'fz-19', description: 'Set font-size: 1.9rem' },
    { class: 'fz-20', description: 'Set font-size: 2rem' },
    { class: 'fw-normal', description: 'Set font-weight: normal' },
    { class: 'fw-bold', description: 'Set font-weight: 600' },
    { class: 'fw-thin', description: 'Set font-weight: thin' }
]
const textStyles = [
    { class: 'text-left', description: 'Set text alignment on left' },
    { class: 'text-center', description: 'Set text alignment on center' },
    { class: 'text-right', description: 'Set text alignment on right' }
]

const presetColors = [
    { name: 'primary', value: '#1678c2' },
    { name: 'info', value: '#42a5f5' },
    { name: 'error', value: '#f44336' },
    { name: 'success', value: '#1aaa55' },
    { name: 'yellow', value: '#feda24' },
    { name: 'warning', value: '#ff3d00' },
    { name: 'night', value: '#303846' },
    { name: 'light', value: '#fafafa' },
    { name: 'lightgray', value: '#f0f2f5' },
    { name: 'dark', value: '#4d4d4d' },
    { name: 'gray', value: '#e0e0e0' }
]

const usage = 
`// Usage examples
import React from 'react';

function Example() {
    return (
        <>
            <div className="text-primary">Text</div>
            <div className="bg-primary">Background</div>
        </>
    )
}`

const HelperPage = () => {
    const parent = createRef();

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Helper CSS classes</div>
            </div>
            <Card outlined title="Margins & Paddings">
                <h4>Margins</h4>
                <Table
                    bordered
                    headers={['Class', 'Description', 'Example']}
                    items={margins}
                    index={true}
                    itemTitles={['class', 'description', 'example']}/>
                <br/>
                <h4>Paddings</h4>
                <Table
                    bordered
                    headers={['Class', 'Description', 'Example']}
                    items={paddings}
                    index={true}
                    itemTitles={['class', 'description', 'example']}/>
            </Card>
            <br/>
            <Card outlined title="Font size and weight">
                <Table
                    bordered
                    headers={['Class', 'Description']}
                    items={fonts}
                    index={true}
                    itemTitles={['class', 'description']}/>
            </Card>
            <br/>
            <Card outlined title="Text alignment">
                <Table
                    bordered
                    headers={['Class', 'Description']}
                    items={textStyles}
                    index={true}
                    itemTitles={['class', 'description']}/>
            </Card>
            <br/>
            <Card outlined title="Flex box">
                <Table
                    bordered
                    headers={['Class', 'Description']}
                    items={flexbox}
                    index={true}
                    itemTitles={['class', 'description']}/>
            </Card>
            <br/>
            <Card outlined title="Set color">
                <List size="medium">
                    {presetColors.map((item, index) =>
                        <ListItem  
                            key={index}
                            noDivider
                            render={
                                <div className="row align-center space-between">
                                    <div 
                                        style={{ width: 100, height: 30, border: '1px solid lightgray' }}
                                        className={`bg-${item.name} border row align-center justify-center fz-9`}>
                                    </div>
                                    <div className="ml-10 row align-center">
                                        <span>{item.name} (HEX: {item.value})</span>
                                        <CopyToClipboard 
                                            text={item.value}
                                            className="ml-5" 
                                            defaultText="Copy HEX"/>
                                    </div>
                                </div>
                            }
                            />
                    )}
                </List>
                <div className="py-10">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </div>
                <Table
                    className="mt-10"
                    bordered
                    headers={['Class', 'Description']}
                    items={colors}
                    index={true}
                    itemTitles={['class', 'description']}/>
            </Card>
            <BackTopBtn setRef={parent} size="medium" dark/>
        </div>
    )
}
export default HelperPage;