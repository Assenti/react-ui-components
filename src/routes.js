import { lazy } from 'react';
const SidebarPage = lazy(() => import('./pages/SidebarPage'));
const IconsPage = lazy(() => import('./pages/IconsPage'));
const LayoutsPage = lazy(() => import('./pages/LayoutsPage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const CarouselPage = lazy(() => import('./pages/CarouselPage'));
const AvatarUploaderPage = lazy(() => import('./pages/AvatarUploaderPage'));
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
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const SnackbarPage = lazy(() => import('./pages/SnackbarPage'));
const AlertPage = lazy(() => import('./pages/AlertPage'));
const TextareaPage = lazy(() => import('./pages/TextareaPage'));
const TimePickerPage = lazy(() => import('./pages/TimePickerPage'));
const AutoCompletePage = lazy(() => import('./pages/AutoCompletePage'));
const ExpansionListPage = lazy(() => import('./pages/ExpansionList'));
const DockPage = lazy(() => import('./pages/DockPage'));
const DividerPage = lazy(() => import('./pages/DividerPage'));
const SliderPage = lazy(() => import('./pages/SliderPage'));
const FooterPage = lazy(() => import('./pages/FooterPage'));
const DatePickerPage = lazy(() => import('./pages/DatePickerPage'));
const SkeletonPage = lazy(() => import('./pages/SkeletonPage'));
const TableSimplePage = lazy(() => import('./pages/TableSimplePage'));

export const routes = [
    { path: '/', name: 'Getting started', Component: HomePage, icon: 'rocket' },
    { path: '/btns', name: 'Button', Component: ButtonPage, updated: false },
    { path: '/icon', name: 'Icon', Component: IconPage },
    { path: '/dropdown', name: 'Dropdown', Component: DropdownPage, updated: false },
    { path: '/list', name: 'List', Component: ListPage, updated: true },
    { path: '/inputfield', name: 'InputField', Component: InputsPage },
    { path: '/textareafield', name: 'TextareaField', Component: TextareaPage },
    { path: '/drawer', name: 'Drawer', Component: DrawerPage, updated: false },
    { path: '/tooltip', name: 'Tooltip', Component: TooltipPage },
    { path: '/pagination', name: 'Pagination', Component: PaginationPage, updated: false },
    { path: '/select', name: 'Select', Component: SelectPage, updated: false },
    { path: '/table', name: 'Table', Component: TablePage, updated: false },
    { path: '/modal', name: 'Modal', Component: ModalPage, updated: false },
    { path: '/checkbox', name: 'Checkbox', Component: CheckboxPage },
    { path: '/radio', name: 'RadioGroup', Component: RadioPage },
    { path: '/switch', name: 'Switch', Component: SwitchPage },
    { path: '/card', name: 'Card', Component: CardPage, updated: false },
    { path: '/tag', name: 'Tag', Component: TagPage, updated: false },
    { path: '/badge', name: 'Badge', Component: BadgePage },
    { path: '/preloader', name: 'Preloader', Component: PreloaderPage },
    { path: '/backtopbtn', name: 'BackTopBtn', Component: BackTopBtnPage },
    { path: '/collapse', name: 'Collapse', Component: CollapsePage, updated: false },
    { path: '/buttonGroup', name: 'ButtonGroup', Component: ButtonGroupPage },
    { path: '/popover', name: 'PopOver', Component: PopOverPage },
    { path: '/header', name: 'Header', Component: HeaderPage, updated: false },
    { path: '/helper', name: 'Helper CSS classes', Component: HelperPage },
    { path: '/copytoclipboard', name: 'CopyToClipboard', Component: CopyToClipboardPage },
    { path: '/uploader', name: 'Uploader', Component: UploaderPage, updated: false },
    { path: '/inputmask', name: 'InputMask', Component: InputMaskPage, updated: false },
    { path: '/dialog', name: 'Dialog', Component: DialogPage },
    { path: '/timeline', name: 'Timeline', Component: TimelinePage },
    { path: '/tabs', name: 'Tabs', Component: TabsPage },
    { path: '/rating', name: 'Rating', Component: RatingPage },
    { path: '/floatingbtn', name: 'FloatingBtn', Component: FloatingBtnPage },
    { path: '/avatar', name: 'Avatar', Component: AvatarPage, updated: false },
    { path: '/alert', name: 'Alert', Component: AlertPage },
    { path: '/breadcrumbs', name: 'Breadcrumbs', Component: BreadcrumbsPage },
    { path: '/progress', name: 'Progress', Component: ProgressPage },
    { path: '/calendar', name: 'Calendar', Component: CalendarPage },
    { path: '/timepicker', name: 'TimePicker', Component: TimePickerPage, updated: false },
    { path: '/autocomplete', name: 'AutoComplete', Component: AutoCompletePage },
    { path: '/expansionlist', name: 'ExpansionList', Component: ExpansionListPage, updated: false },
    { path: '/dock', name: 'Dock', Component: DockPage },
    { path: '/divider', name: 'Divider', Component: DividerPage },
    { path: '/slider', name: 'Slider', Component: SliderPage },
    { path: '/footer', name: 'Footer', Component: FooterPage },
    { path: '/datepicker', name: 'DatePicker', Component: DatePickerPage, updated: false },
    { path: '/avataruploader', name: 'AvatarUploader', Component: AvatarUploaderPage },
    { path: '/carousel', name: 'Carousel', Component: CarouselPage },
    { path: '/statistics', name: 'Statistics', Component: StatisticsPage },
    { path: '/layouts', name: 'Layouts', Component: LayoutsPage },
    { path: '/icons', name: 'Icons', Component: IconsPage },
    { path: '/snackbar', name: 'Snackbar', Component: SnackbarPage, new: false },
    { path: '/skeleton', name: 'Skeleton', Component: SkeletonPage, new: false },
    { path: '/sidebar', name: 'Sidebar', Component: SidebarPage, new: false },
    { path: '/table-simple', name: 'TableSimple', Component: TableSimplePage, new: false },
]