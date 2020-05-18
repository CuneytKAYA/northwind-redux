import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import SaveOrUpdateProduct from "../product/SaveOrUpdateProduct";
import Notfound from "../common/Notfound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/product" exact component={Dashboard}></Route>
        <Route path="/saveProduct/:productId" component={SaveOrUpdateProduct}></Route>
        <Route path="/saveProduct" component={SaveOrUpdateProduct}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
        <Route exact component={Notfound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
