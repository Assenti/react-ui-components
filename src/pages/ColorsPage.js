import React from 'react';
import { Card, Table } from '../components';

const colors = [
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

const keys = ['Color', 'Name', 'HEX']

export const ColorsPage = () => {
    return (
        <div>
            <div className="row align-center space-between">
                <div className="page-title">Colors set</div>
            </div>
            <Card outlined color="primary" title="Colors set">
                <p>Colors set that used in styles.</p>
                <Table
                    bordered
                    headers={keys}
                    items={colors}
                    itemTitles={[<div style={{
                        backgroundColor: '#1678c2',
                        width: 80,
                        height: 40
                    }}></div>, 'name', 'value']}/>
            </Card>
        </div>
    )
}
