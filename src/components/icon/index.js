import React from 'react';
import { 
    Delete,
    Search,
    Home,
    Edit,
    Close,
    Github,
    ChevronDoubleRight,
    ChevronDoubleLeft,
    ChevronDown,
    ChevronNext,
    Code,
    Chip,
    Account,
    Sun,
    Moon,
    Star,
    StarOutline,
    Smartphone,
    Hammer,
    City,
    ChevronBack,
    Empty,
    Download,
    Menu,
    Person,
    Loading,
    ShieldAccount,
    ReactLogo,
    FileOutline,
    Email,
    Rocket,
    Key,
    ExitToApp,
    ArrowUpBold,
    FormatAlignCenter,
    FormatAlignLeft,
    FormatAlignRight
} from './icons/index';

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
            case 'chevron-double-right':
                return <ChevronDoubleRight size={props.size} color={props.color}/>;
            case 'chevron-double-left':
                return <ChevronDoubleLeft size={props.size} color={props.color}/>; 
            case 'code':
                return <Code size={props.size} color={props.color}/>; 
            case 'chip':
                return <Chip size={props.size} color={props.color}/>; 
            case 'account':
                return <Account size={props.size} color={props.color}/>; 
            case 'person':
                return <Person size={props.size} color={props.color}/>; 
            case 'chevron-down':
                return <ChevronDown size={props.size} color={props.color}/>; 
            case 'chevron-next':
                return <ChevronNext size={props.size} color={props.color}/>;
            case 'chevron-back':
                return <ChevronBack size={props.size} color={props.color}/>;    
            case 'sun':
                return <Sun size={props.size} color={props.color}/>;    
            case 'moon':
                return <Moon size={props.size} color={props.color}/>; 
            case 'star':
                return <Star size={props.size} color={props.color}/>;    
            case 'star-outline':
                return <StarOutline size={props.size} color={props.color}/>;   
            case 'smartphone':
                return <Smartphone size={props.size} color={props.color}/>; 
            case 'hammer':
                return <Hammer size={props.size} color={props.color}/>;  
            case 'city':
                return <City size={props.size} color={props.color}/>;   
            case 'empty':
                return <Empty size={props.size} color={props.color}/>;
            case 'download':
                return <Download size={props.size} color={props.color}/>;  
            case 'menu':
                return <Menu size={props.size} color={props.color}/>;
            case 'loading':
                return <Loading size={props.size} color={props.color}/>;
            case 'shield-account':
                return <ShieldAccount size={props.size} color={props.color}/>;    
            case 'react':
                return <ReactLogo size={props.size} color={props.color}/>;
            case 'file-outline':
                return <FileOutline size={props.size} color={props.color}/>;
            case 'email':
                return <Email size={props.size} color={props.color}/>;
            case 'rocket':
                return <Rocket size={props.size} color={props.color}/>;
            case 'key':
                return <Key size={props.size} color={props.color}/>;
            case 'exit-to-app':
                return <ExitToApp size={props.size} color={props.color}/>;
            case 'arrow-up-bold':
                return <ArrowUpBold size={props.size} color={props.color}/>;
            case 'format-align-center':
                return <FormatAlignCenter size={props.size} color={props.color}/>;
            case 'format-align-left':
                return <FormatAlignLeft size={props.size} color={props.color}/>;
                case 'format-align-right':
            return <FormatAlignRight size={props.size} color={props.color}/>;
            default:
                return '';
        }
    }

    const iconClass = () => {
        if (props.className) return `icon ${props.className}`
        else return 'icon'
    }

    return (
        <i title={props.title}
            style={{ width: props.size ? props.size : 24, height: props.size ? props.size : 24 }}
            className={iconClass()} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            <Icon/>
        </i>
    )
}
