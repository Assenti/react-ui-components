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
    PackageDown,
    ClockOutline,
    WiFi,
    Cart,
    ChartPpf,
    Users,
    Airplane,
    Cancel,
    Grid,
    ViewList,
    CheckList,
    AccountGroup,
    ArrowUp,
    ArrowDown,
    DashboardOutline,
    ChartBar,
    ChartPie,
    CharDonut,
    Rotate,
    Bulb,
    Refresh,
    Heart,
    HeartOutline,
    Send,
    Reply,
    ReplyAll,
    Like,
    Dislike,
    Forward,
    ListIcon
} from './icons/index';
import { strinfigyClassObject } from '../utils';

const Icon = (props) => {
    const { custom, name, className, title, size, color } = props;
    const Icon = () => {
        switch (name) {
            case 'delete':
                return <Delete {...props}/>;
            case 'search':
                return <Search {...props}/>;
            case 'home':
                return <Home {...props}/>;
            case 'edit':
                return <Edit {...props}/>;
            case 'github':
                return <Github {...props}/>;
            case 'close':
                return <Close {...props}/>;
            case 'chevron-double-right':
                return <ChevronDoubleRight {...props}/>;
            case 'chevron-double-left':
                return <ChevronDoubleLeft {...props}/>; 
            case 'code':
                return <Code {...props}/>; 
            case 'chip':
                return <Chip {...props}/>; 
            case 'account':
                return <Account {...props}/>; 
            case 'person':
                return <Person {...props}/>; 
            case 'chevron-down':
                return <ChevronDown {...props}/>; 
            case 'chevron-next':
                return <ChevronNext {...props}/>;
            case 'chevron-back':
                return <ChevronBack {...props}/>;    
            case 'sun':
                return <Sun {...props}/>;    
            case 'moon':
                return <Moon {...props}/>; 
            case 'star':
                return <Star {...props}/>;    
            case 'star-outline':
                return <StarOutline {...props}/>;   
            case 'smartphone':
                return <Smartphone {...props}/>; 
            case 'hammer':
                return <Hammer {...props}/>;  
            case 'city':
                return <City {...props}/>;   
            case 'empty':
                return <Empty {...props}/>;
            case 'download':
                return <Download {...props}/>;  
            case 'menu':
                return <Menu {...props}/>;
            case 'loading':
                return <Loading {...props}/>;
            case 'shield-account':
                return <ShieldAccount {...props}/>;    
            case 'react':
                return <ReactLogo {...props}/>;
            case 'file-outline':
                return <FileOutline {...props}/>;
            case 'email':
                return <Email {...props}/>;
            case 'rocket':
                return <Rocket {...props}/>;
            case 'key':
                return <Key {...props}/>;
            case 'exit-to-app':
                return <ExitToApp {...props}/>;
            case 'arrow-up-bold':
                return <ArrowUpBold {...props}/>;
            case 'format-align-center':
                return <FormatAlignCenter {...props}/>;
            case 'format-align-left':
                return <FormatAlignLeft {...props}/>;
            case 'format-align-right':
                return <FormatAlignRight {...props}/>;
            case 'brush':
                return <Brush {...props}/>;
            case 'lock':
                return <Lock {...props}/>;
            case 'filter':
                return <Filter {...props}/>;
            case 'sort-ascending':
                return <SortAscending {...props}/>;
            case 'sort-descending':
                return <SortDescending {...props}/>;
            case 'content-copy':
                return <ContentCopy {...props}/>;
            case 'toy-brick':
                return <ToyBrick {...props}/>;
            case 'chevron-up':
                return <ChevronUp {...props}/>;
            case 'help-circle-outline':
                return <HelpCircleOutline {...props}/>;
            case 'dots-vertical':
                return <DotsVertical {...props}/>;
            case 'dots-horizontal':
                return <DotsHorizontal {...props}/>;
            case 'language-css-3':
                return <LanguageCss3 {...props}/>;
            case 'earth':
                return <Earth {...props}/>;
            case 'check':
                return <Check {...props}/>;
            case 'eye':
                return <Eye {...props}/>;
            case 'eye-off':
                return <EyeOff {...props}/>;
            case 'tenge':
                return <Tenge {...props}/>;
            case 'currency-usd':
                return <CurrencyUsd {...props}/>;
            case 'credit-card':
                return <CreditCard {...props}/>;
            case 'qrcode':
                return <QrCode {...props}/>;
            case 'calendar-month':
                return <CalendarMonth {...props}/>;
            case 'card-account-details':
                return <CardAccountDetails {...props}/>;
            case 'translate':
                return <Translate {...props}/>;
            case 'arrow-down-bold':
                return <ArrowDownBold {...props}/>;
            case 'fullscreen':
                return <Fullscreen {...props}/>;
            case 'fullscreen-exit':
                return <FullscreenExit {...props}/>;
            case 'alert':
                return <Alert {...props}/>;
            case 'calendar-star':
                return <CalendarStar {...props}/>;
            case 'shape':
                return <Shape {...props}/>;
            case 'format-size':
                return <FormatSize {...props}/>;
            case 'book-open':
                return <BookOpen {...props}/>;
            case 'cog-outline':
                return <CogOutline {...props}/>;
            case 'target':
                return <Target {...props}/>;
            case 'map':
                return <Map {...props}/>;
            case 'map-marker':
                return <MapMarker {...props}/>;
            case 'language-js':
                return <LanguageJS {...props}/>;
            case 'language-ts':
                return <LanguageTS {...props}/>;
            case 'language-go':
                return <LanguageGo {...props}/>;
            case 'gitlab':
                return <Gitlab {...props}/>;
            case 'linkedin':
                return <LinkedIn {...props}/>;
            case 'facebook':
                return <Facebook {...props}/>;
            case 'facebook-workplace':
                return <FacebookWorkplace {...props}/>;
            case 'instagram':
                return <Instagram {...props}/>;
            case 'whatsapp':
                return <WhatsApp {...props}/>;
            case 'telegram':
                return <Telegram {...props}/>;
            case 'flag':
                return <Flag {...props}/>;
            case 'star-half-full':
                return <StarHalfFull {...props}/>;
            case 'plus':
                return <Plus {...props}/>;
            case 'account-plus':
                return <AccountPlus {...props}/>;
            case 'share':
                return <Share {...props}/>;
            case 'phone':
                return <Phone {...props}/>;
            case 'bell':
                return <Bell {...props}/>;
            case 'wrench':
                return <Wrench {...props}/>;
            case 'minus':
                return <Minus {...props}/>;
            case 'check-circle':
                return <CheckCircle {...props}/>;
            case 'alert-circle':
                return <AlertCirlce {...props}/>;
            case 'info':
                return <Information {...props}/>;
            case 'package-down':
                return <PackageDown {...props}/>;
            case 'clock-outline':
                return <ClockOutline {...props}/>;
            case 'wifi':
                return <WiFi {...props}/>;
            case 'cart':
                return <Cart {...props}/>;
            case 'chart-ppf':
                return <ChartPpf {...props}/>;
            case 'users':
                return <Users {...props}/>;
            case 'airplane':
                return <Airplane {...props}/>;
            case 'cancel':
                return <Cancel {...props}/>;
            case 'grid':
                return <Grid {...props}/>;
            case 'view-list':
                return <ViewList {...props}/>;
            case 'checklist':
                return <CheckList {...props}/>;
            case 'account-group':
                return <AccountGroup {...props}/>;
            case 'arrow-up':
                return <ArrowUp {...props}/>;
            case 'arrow-down':
                return <ArrowDown {...props}/>;
            case 'dashboard-outline':
                return <DashboardOutline {...props}/>;
            case 'chart-bar':
                return <ChartBar {...props}/>;
            case 'chart-pie':
                return <ChartPie {...props}/>;
            case 'chart-donut':
                return <CharDonut {...props}/>;
            case 'rotate':
                return <Rotate {...props}/>;
            case 'bulb':
                return <Bulb {...props}/>;
            case 'refresh':
                return <Refresh {...props}/>;
            case 'heart':
                return <Heart {...props}/>;
            case 'heart-outline':
                return <HeartOutline {...props}/>;
            case 'send':
                return <Send {...props}/>;
            case 'reply':
                return <Reply {...props}/>;
            case 'reply-all':
                return <ReplyAll {...props}/>;
            case 'forward':
                return <Forward {...props}/>;
            case 'like':
                return <Like {...props}/>;
            case 'dislike':
                return <Dislike {...props}/>;
            case 'list-bulleted':
                return <ListIcon {...props}/>;
            default:
                return '';
        }
    }

    const iconClassName = {
        name: 'rui-icon',
        disabled: props.disabled ? 'disabled' : '',
        className: className ? className : ''
    }

    return (
        <i title={title}
            style={{ width: size ? size : 24, height: size ? size : 24 }}
            className={strinfigyClassObject(iconClassName)}
            onMouseOver={e => props.onMouseOver ? props.onMouseOver(e) : {}}
            onMouseLeave={e => props.onMouseOver ? props.onMouseLeave(e) : {}} 
            onClick={(e) => props.onClick && !props.disabled ? props.onClick(e) : {}}>
            {custom ? custom : <Icon size={size} color={color}/>}
        </i>
    )
}
Icon.propTypes = {
    name: PropTypes.string,
    custom: PropTypes.node,
    title: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string
}
export default Icon;