import React from 'react';
import { Table, Icon, Card } from '../components';
import { description } from '../../package.json';

export const IconPage = () => {
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
        'file-outline'  
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

    return (
        <div className="page">
            <div className="page-title">Icon Component</div>
            <p><strong>{description}</strong> use primarily
                <a href="https://materialdesignicons.com/"
                    target="blank_"
                    className="ml-5">Material Design Icons</a>
            </p>
            <br/>
            <Card outlined color="primary" title="Icons collection">
                {icons.map((item, index) => 
                    <div key={index} 
                        style={{ minWidth: 60 }}
                        className="row-inline text-center column justify-center align-center pa-5 ma-10 hoverable">
                        <Icon name={item}/>
                        <div className="mt-5 fz-8">{item}</div>
                    </div>
                )}
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
