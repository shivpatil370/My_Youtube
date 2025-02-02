import "../src/App.css";
import Head from "./components/Head";
import
Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import { Provider } from "react-redux";
import store from "./components/utils/store";

import {RouterProvider, createBrowserRouter} from "react-router-dom";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      {/* <Body/> */}
      <RouterProvider router={appRouter}/>


{/**
 * #head
 * #body
 *  1)slidebar
 *    -menuitems
 *  2)maincontainer
 *    -buttonlist
 *    -videocontainer
 *      >videocard
 */}

    </div>
    </Provider>
  );
}

export default App;
