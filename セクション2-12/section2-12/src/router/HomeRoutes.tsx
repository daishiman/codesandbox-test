import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    ptah: "/",
    exact: true,
    children: <Home />
  },
  {
    ptah: "/user_management",
    exact: true,
    children: <UserManagement />
  },
  {
    ptah: "/setting",
    exact: true,
    children: <Setting />
  },
  {
    ptah: "/*",
    exact: true,
    children: <Page404 />
  },
];
