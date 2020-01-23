import React from 'react';
import { 
    Delete,
    Search,
    Home,
    Edit,
    Close,
    Github
} from '../icons/index';

export const Icon = (props) => {

    const Icon = () => {
        switch (props.name) {
            case 'delete':
                return <Delete size={props.size} color={props.color}/>;
            case 'search':
                return <Search size={props.size} color={props.color}/>;
            case 'home':
                return <Home size={props.size} color={props.color}/>;
            case 'edit':
                return <Edit size={props.size} color={props.color}/>;
            case 'github':
                return <Github size={props.size} color={props.color}/>;
            case 'close':
                return <Close size={props.size} color={props.color}/>;
            default:
                return '';
        }
    }

    return (
        <Icon/>
    )
}
