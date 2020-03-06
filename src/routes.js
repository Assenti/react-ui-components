import { lazy } from 'react';
const DialogPage = lazy(() => import('./pages/DialogPage'));
const InputMaskPage = lazy(() => import('./pages/InputMaskPage'));
const ButtonPage = lazy(() => import('./pages/ButtonPage'));
const DropdownPage = lazy(() => import('./pages/DropdownPage'));
const ListPage = lazy(() => import('./pages/ListPage'));
const DrawerPage = lazy(() => import('./pages/DrawerPage'));
const TooltipPage = lazy(() => import('./pages/TooltipPage'));
const SelectPage = lazy(() => import('./pages/SelectPage'));
const TablePage = lazy(() => import('./pages/TablePage'));
const ModalPage = lazy(() => import('./pages/ModalPage'));
const CheckboxPage = lazy(() => import('./pages/CheckboxPage'));
const SwitchPage = lazy(() => import('./pages/SwitchPage'));
const TagPage = lazy(() => import('./pages/TagPage'));
const RadioPage = lazy(() => import('./pages/RadioPage'));
const PreloaderPage = lazy(() => import('./pages/PreloaderPage'));
const CollapsePage = lazy(() => import('./pages/CollapsePage'));
const ButtonGroupPage = lazy(() => import('./pages/ButtonGroupPage'));
const BadgePage = lazy(() => import('./pages/BadgePage'));
const PopOverPage = lazy(() => import('./pages/PopOverPage'));
const ColorsPage = lazy(() => import('./pages/ColorsPage'));
const HeaderPage = lazy(() => import('./pages/HeaderPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const HelperPage = lazy(() => import('./pages/HelperPage'));
const BackTopBtnPage = lazy(() => import('./pages/BackTopBtnPage'));
const CopyToClipboardPage = lazy(() => import('./pages/CopyToClipboardPage'));
const CardPage = lazy(() => import('./pages/CardPage'));
const IconPage = lazy(() => import('./pages/IconPage'));
const PaginationPage = lazy(() => import('./pages/PaginationPage'));
const InputsPage = lazy(() => import('./pages/InputsPage'));
const UploaderPage = lazy(() => import('./pages/UploaderPage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const TabsPage = lazy(() => import('./pages/TabsPage'));
const RatingPage = lazy(() => import('./pages/RatingPage'));
const FloatingBtnPage = lazy(() => import('./pages/FloatingBtnPage'));
const AvatarPage = lazy(() => import('./pages/AvatarPage'));
const BreadcrumbsPage = lazy(() => import('./pages/BreadcrumbsPage'));
const ProgressPage = lazy(() => import('./pages/ProgressPage'));

export const routes = [
    { path: '/', name: 'Getting started', Component: HomePage, icon: 'rocket' },
    { path: '/btns', name: 'Button', Component: ButtonPage },
    { path: '/icon', name: 'Icon', Component: IconPage },
    { path: '/dropdown', name: 'Dropdown', Component: DropdownPage },
    { path: '/list', name: 'List', Component: ListPage },
    { path: '/inputfield', name: 'InputField', Component: InputsPage },
    { path: '/drawer', name: 'Drawer', Component: DrawerPage },
    { path: '/tooltip', name: 'Tooltip', Component: TooltipPage },
    { path: '/pagination', name: 'Pagination', Component: PaginationPage },
    { path: '/select', name: 'Select', Component: SelectPage },
    { path: '/table', name: 'Table', Component: TablePage },
    { path: '/modal', name: 'Modal', Component: ModalPage },
    { path: '/checkbox', name: 'Checkbox', Component: CheckboxPage },
    { path: '/radio', name: 'RadioGroup', Component: RadioPage },
    { path: '/switch', name: 'Switch', Component: SwitchPage },
    { path: '/card', name: 'Card', Component: CardPage },
    { path: '/tag', name: 'Tag', Component: TagPage },
    { path: '/badge', name: 'Badge', Component: BadgePage },
    { path: '/preloader', name: 'Preloader', Component: PreloaderPage },
    { path: '/backtopbtn', name: 'BackTopBtn', Component: BackTopBtnPage },
    { path: '/collapse', name: 'Collapse', Component: CollapsePage },
    { path: '/buttonGroup', name: 'ButtonGroup', Component: ButtonGroupPage },
    { path: '/colors', name: 'Colors', Component: ColorsPage },
    { path: '/popover', name: 'PopOver', Component: PopOverPage },
    { path: '/header', name: 'Header', Component: HeaderPage },
    { path: '/helper', name: 'Helper CSS classes', Component: HelperPage },
    { path: '/copytoclipboard', name: 'CopyToClipboard', Component: CopyToClipboardPage },
    { path: '/uploader', name: 'Uploader', Component: UploaderPage },
    { path: '/inputmask', name: 'InputMask', Component: InputMaskPage },
    { path: '/dialog', name: 'Dialog', Component: DialogPage },
    { path: '/timeline', name: 'Timeline', Component: TimelinePage },
    { path: '/tabs', name: 'Tabs', Component: TabsPage },
    { path: '/rating', name: 'Rating', Component: RatingPage },
    { path: '/floatingbtn', name: 'FloatingBtn', Component: FloatingBtnPage },
    { path: '/avatar', name: 'Avatar', Component: AvatarPage },
    { path: '/breadcrumbs', name: 'Breadcrumbs', Component: BreadcrumbsPage },
    { path: '/progress', name: 'Progress', Component: ProgressPage }
]