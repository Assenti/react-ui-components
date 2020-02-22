import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/ButtonPage';
import { DropdownPage } from './pages/DropdownPage';
import { ListPage } from './pages/ListPage';
import { InputsPage } from './pages/InputsPage';
import { DrawerPage } from './pages/DrawerPage';
import { TooltipPage } from './pages/TooltipPage';
import { PaginationPage } from './pages/PaginationPage';
import { SelectPage } from './pages/SelectPage';
import { TablePage } from './pages/TablePage';
import { ModalPage } from './pages/ModalPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { CardPage } from './pages/CardPage';
import { SwitchPage } from './pages/SwitchPage';
import { TagPage } from './pages/TagPage';
import { BadgePage } from './pages/BadgePage';
import { RadioPage } from './pages/RadioPage';
import { IconPage } from './pages/IconPage';
import { PreloaderPage } from './pages/PreloaderPage';
import { BackTopBtnPage } from './pages/BackTopBtnPage';
import { CollapsePage } from './pages/CollapsePage';
import { ButtonGroupPage } from './pages/ButtonGroupPage';
import { ColorsPage } from './pages/ColorsPage';
import { PopOverPage } from './pages/PopOverPage';
import { HeaderPage } from './pages/HeaderPage';
import { HelperPage } from './pages/HelperPage';

export const routes = [
    { path: '/', name: 'Getting started', Component: HomePage, icon: 'rocket' },
    { path: '/btns', name: 'Button', Component: ButtonPage },
    { path: '/icon', name: 'Icon', Component: IconPage },
    { path: '/dropdown', name: 'Dropdown', Component: DropdownPage },
    { path: '/lists', name: 'List', Component: ListPage },
    { path: '/inputs', name: 'Input', Component: InputsPage },
    { path: '/drawer', name: 'Drawer', Component: DrawerPage },
    { path: '/tooltip', name: 'Tooltip', Component: TooltipPage },
    { path: '/pagination', name: 'Pagination', Component: PaginationPage },
    { path: '/select', name: 'Select', Component: SelectPage },
    { path: '/table', name: 'Table', Component: TablePage },
    { path: '/modal', name: 'Modal', Component: ModalPage },
    { path: '/checkbox', name: 'Checkbox', Component: CheckboxPage },
    { path: '/radio', name: 'Radio Group', Component: RadioPage },
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
    { path: '/helper', name: 'Helper CSS classes', Component: HelperPage }
]