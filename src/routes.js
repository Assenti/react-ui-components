import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/ButtonPage';
import { MenuPage } from './pages/MenuPage';
import { ListPage } from './pages/ListPage';
import { InputsPage } from './pages/InputsPage';
import { DrawerPage } from './pages/DrawerPage';
import { TooltipPage } from './pages/TooltipPage';
import { PaginationPage } from './pages/PaginationPage';
import { SelectPage } from './pages/SelectPage';

export const routes = [
    { path: '/', name: 'Home', Component: HomePage },
    { path: '/btns', name: 'Button', Component: ButtonPage },
    { path: '/menus', name: 'Menu', Component: MenuPage },
    { path: '/lists', name: 'List', Component: ListPage },
    { path: '/inputs', name: 'Input', Component: InputsPage },
    { path: '/drawer', name: 'Drawer', Component: DrawerPage },
    { path: '/tooltip', name: 'Tooltip', Component: TooltipPage },
    { path: '/pagination', name: 'Pagination', Component: PaginationPage },
    { path: '/select', name: 'Select', Component: SelectPage }
];