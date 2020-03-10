import React from 'react';
import PropTypes from 'prop-types';
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
    FormatAlignRight,
    Brush,
    Lock,
    Filter,
    SortAscending,
    SortDescending,
    ContentCopy,
    ToyBrick,
    ChevronUp,
    HelpCircleOutline,
    DotsVertical,
    DotsHorizontal,
    LanguageCss3,
    Earth,
    Check,
    Eye,
    EyeOff,
    Tenge,
    CurrencyUsd,
    CreditCard,
    QrCode,
    CalendarMonth,
    CardAccountDetails,
    Translate,
    ArrowDownBold,
    Fullscreen,
    FullscreenExit,
    Alert,
    CalendarStar,
    Shape,
    FormatSize,
    BookOpen,
    CogOutline,
    Target,
    Map,
    MapMarker,
    LanguageJS,
    LanguageTS,
    LanguageGo,
    Gitlab,
    LinkedIn,
    Facebook,
    FacebookWorkplace,
    Instagram,
    WhatsApp,
    Telegram,
    Flag,
    StarHalfFull,
    Plus,
    AccountPlus,
    Share,
    Phone,
    Bell,
    Wrench,
    Minus,
    CheckCircle,
    AlertCirlce,
    Information,
    PackageDown
} from './icons/index';

const Icon = (props) => {
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
            case 'brush':
                return <Brush size={props.size} color={props.color}/>;
            case 'lock':
                return <Lock size={props.size} color={props.color}/>;
            case 'filter':
                return <Filter size={props.size} color={props.color}/>;
            case 'sort-ascending':
                return <SortAscending size={props.size} color={props.color}/>;
            case 'sort-descending':
                return <SortDescending size={props.size} color={props.color}/>;
            case 'content-copy':
                return <ContentCopy size={props.size} color={props.color}/>;
            case 'toy-brick':
                return <ToyBrick size={props.size} color={props.color}/>;
            case 'chevron-up':
                return <ChevronUp size={props.size} color={props.color}/>;
            case 'help-circle-outline':
                return <HelpCircleOutline size={props.size} color={props.color}/>;
            case 'dots-vertical':
                return <DotsVertical size={props.size} color={props.color}/>;
            case 'dots-horizontal':
                return <DotsHorizontal size={props.size} color={props.color}/>;
            case 'language-css-3':
                return <LanguageCss3 size={props.size} color={props.color}/>;
            case 'earth':
                return <Earth size={props.size} color={props.color}/>;
            case 'check':
                return <Check size={props.size} color={props.color}/>;
            case 'eye':
                return <Eye size={props.size} color={props.color}/>;
            case 'eye-off':
                return <EyeOff size={props.size} color={props.color}/>;
            case 'tenge':
                return <Tenge size={props.size} color={props.color}/>;
            case 'currency-usd':
                return <CurrencyUsd size={props.size} color={props.color}/>;
            case 'credit-card':
                return <CreditCard size={props.size} color={props.color}/>;
            case 'qrcode':
                return <QrCode size={props.size} color={props.color}/>;
            case 'calendar-month':
                return <CalendarMonth size={props.size} color={props.color}/>;
            case 'card-account-details':
                return <CardAccountDetails size={props.size} color={props.color}/>;
            case 'translate':
                return <Translate size={props.size} color={props.color}/>;
            case 'arrow-down-bold':
                return <ArrowDownBold size={props.size} color={props.color}/>;
            case 'fullscreen':
                return <Fullscreen size={props.size} color={props.color}/>;
            case 'fullscreen-exit':
                return <FullscreenExit size={props.size} color={props.color}/>;
            case 'alert':
                return <Alert size={props.size} color={props.color}/>;
            case 'calendar-star':
                return <CalendarStar size={props.size} color={props.color}/>;
            case 'shape':
                return <Shape size={props.size} color={props.color}/>;
            case 'format-size':
                return <FormatSize size={props.size} color={props.color}/>;
            case 'book-open':
                return <BookOpen size={props.size} color={props.color}/>;
            case 'cog-outline':
                return <CogOutline size={props.size} color={props.color}/>;
            case 'target':
                return <Target size={props.size} color={props.color}/>;
            case 'map':
                return <Map size={props.size} color={props.color}/>;
            case 'map-marker':
                return <MapMarker size={props.size} color={props.color}/>;
            case 'language-js':
                return <LanguageJS size={props.size} color={props.color}/>;
            case 'language-ts':
                return <LanguageTS size={props.size} color={props.color}/>;
            case 'language-go':
                return <LanguageGo size={props.size} color={props.color}/>;
            case 'gitlab':
                return <Gitlab size={props.size} color={props.color}/>;
            case 'linkedin':
                return <LinkedIn size={props.size} color={props.color}/>;
            case 'facebook':
                return <Facebook size={props.size} color={props.color}/>;
            case 'facebook-workplace':
                return <FacebookWorkplace size={props.size} color={props.color}/>;
            case 'instagram':
                return <Instagram size={props.size} color={props.color}/>;
            case 'whatsapp':
                return <WhatsApp size={props.size} color={props.color}/>;
            case 'telegram':
                return <Telegram size={props.size} color={props.color}/>;
            case 'flag':
                return <Flag size={props.size} color={props.color}/>;
            case 'star-half-full':
                return <StarHalfFull size={props.size} color={props.color}/>;
            case 'plus':
                return <Plus size={props.size} color={props.color}/>;
            case 'account-plus':
                return <AccountPlus size={props.size} color={props.color}/>;
            case 'share':
                return <Share size={props.size} color={props.color}/>;
            case 'phone':
                return <Phone size={props.size} color={props.color}/>;
            case 'bell':
                return <Bell size={props.size} color={props.color}/>;
            case 'wrench':
                return <Wrench size={props.size} color={props.color}/>;
            case 'minus':
                return <Minus size={props.size} color={props.color}/>;
            case 'check-circle':
                return <CheckCircle size={props.size} color={props.color}/>;
            case 'alert-circle':
                return <AlertCirlce size={props.size} color={props.color}/>;
            case 'info':
                return <Information size={props.size} color={props.color}/>;
            case 'package-down':
                return <PackageDown size={props.size} color={props.color}/>;
            default:
                return '';
        }
    }

    const iconClass = () => {
        if (props.className) return `rui-icon ${props.className}`
        else return 'rui-icon'
    }

    return (
        <i title={props.title}
            style={{ width: props.size ? props.size : 24, height: props.size ? props.size : 24 }}
            className={iconClass()}
            onMouseOver={e => props.onMouseOver ? props.onMouseOver(e) : {}}
            onMouseLeave={e => props.onMouseOver ? props.onMouseLeave(e) : {}} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            <Icon/>
        </i>
    )
}
Icon.propTypes = {
    title: PropTypes.string,
    size: PropTypes.number,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onClick: PropTypes.func,
    color: PropTypes.string
}
Icon.defaultProps = {
    size: 24,
    color: 'gray'
}
export default Icon;