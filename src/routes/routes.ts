import { LazyExoticComponent, lazy } from "react";
import { Home } from "../components/pages/Home";
import { People } from "../components/pages/People";
import { Spaceships } from "../components/pages/Spaceships";
import { Films } from "../components/pages/Films";

type JSXComponent = () => JSX.Element;

interface Route{
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent>| JSXComponent | any ;
    name:string;
}

// const LazyLayout = lazy(()=>import(/* webpackChunkName: "LazyLoadLayout"*/'../01-lazyload/layout/LazyLayout'));

// const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));
// const Shopping = lazy(()=> import('../02-components-pattern/pages/ShoppingPage'))

export const routes: Route[] = [
  
  {
    to: "/home",
    path: "home",
    Component: Home,
    name: "Home",
  },
  {
    to: "/people",
    path: "people",
    Component: People,
    name: "People",
  },
  {
    to: "/films",
    path: "films",
    Component: Films,
    name: "Films",
  },
  {
    to: "/spaceships",
    path: "spaceships",
    Component: Spaceships,
    name: "Spaceships",
  },

];
