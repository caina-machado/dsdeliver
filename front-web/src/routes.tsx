import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Orders from "./pages/Orders";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
