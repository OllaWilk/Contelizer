import type { NavItem } from '../types/common-types';
import { ROUTES } from './routes';

export const NAV_ITEMS: NavItem[] = [
  { key: 'task-one', label: 'One', to: ROUTES.TASK_ONE },
  { key: 'task-two', label: 'Two', to: ROUTES.TASK_TWO },
  { key: 'task-three', label: 'Three', to: ROUTES.TASK_THREE },
];
