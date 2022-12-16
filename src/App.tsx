import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { CategoriesPage } from "pages/Categories/Categories";
import { HistoryPage } from "pages/History/History";
import { SortExpensesPage } from "pages/SortExpenses/SortExpenses";
import { Landing } from "./pages/Landing/Landing";

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Landing,
});

const categoriesRoute = rootRoute.createRoute({
  path: "/categories",
  component: CategoriesPage,
});

const historyRoutes = rootRoute.createRoute({
  path: "/history",
  component: HistoryPage,
});

const sortExpenses = rootRoute.createRoute({
  path: "/sortExpenses",
  component: SortExpensesPage,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  categoriesRoute,
  historyRoutes,
  sortExpenses,
]);

const router = createReactRouter({ routeConfig });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
