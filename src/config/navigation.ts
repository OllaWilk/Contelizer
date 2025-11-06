import type { NavItem } from "../types/common-types";
import { ROUTES } from "./routes";

export const NAV_ITEMS: NavItem[] = [
  { key: "task-one", label: "Task One", to: ROUTES.TASK_ONE },
  { key: "task-two", label: "Task Two", to: ROUTES.TASK_TWO },
  { key: "task-three", label: "Task Three", to: ROUTES.TASK_THREE },
];
