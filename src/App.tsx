import React from 'react';
import {Provider} from "react-redux";
import {store} from "./app/store";

import {useRoutes} from "react-router-dom";
import {Route} from "./Route/Route";


function App() {
  return (
      <Provider store={store}>
        {useRoutes(Route)}
      </Provider>
  );
}

export default App;
