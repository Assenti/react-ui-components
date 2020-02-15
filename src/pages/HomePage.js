import React from 'react';
import { Tag } from '../components';

export const HomePage = () => {
    return (
        <div>
            <h1 className="text-primary">Welcome to React UI Components</h1>
            <h4>Main Goal: Create a lot of usefull and maximum reusable UI components for React apps</h4>
            <Tag iconLeft="hammer" value="Work in progress..."/>
        </div>
    )
}
