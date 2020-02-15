import React from 'react';
import { Tag } from '../components/tag';
import { Card } from '../components/card';
import { Table } from '../components/table';

export const TagPage = () => {
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
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    return (
        <div className="page">
            <div className="page-title">Tags</div>
            <h3>Tag colors</h3>
            <Card>
                <Tag value="Price: 1000" />
                <Tag value="Price: 1000" color="yellow"/>
                <Tag value="Price: 1000" color="primary"/>
                <Tag value="Price: 1000" color="info"/>
                <Tag value="Price: 1000" color="success"/>
                <Tag value="Price: 1000" color="error"/>
            </Card>
            <h3>Tag types</h3>
            <Card>
                <Tag value="Price: 1000" rounded color="yellow"/>
                <Tag value="Price: 1000" rounded outlined color="primary"/>
                <Tag value="Price: 1000" rounded lifted color="primary"/>
                <Tag value="Price: 1000" outlined color="primary"/>
                <Tag value="Price: 1000" smooth color="success"/>
            </Card>
            <h3>Tag sizes</h3>
            <Card>
                <Tag value="Defaul tag" color="yellow"/>
                <Tag value="Small tag" small color="yellow"/>
                <Tag value="Small tag" small rounded color="yellow"/>
            </Card>
            <h3>Tag with icons</h3>
            <Card>
                <Tag iconLeft="smartphone" value="777 777 77 77" color="primary"/>
                <Tag iconLeft="star" value="1020" small color="yellow"/>
                <Tag iconLeft="account" value="John Doe" color="info"/>
                <Tag iconLeft="account" value="John Doe" />
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
