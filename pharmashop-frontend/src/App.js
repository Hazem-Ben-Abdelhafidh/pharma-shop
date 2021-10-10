import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartDetails from "./components/CartDetails/CartDetails";
import CategoryDetails from "./components/Categories/CategoryDetails/CategoryDetails";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {PharmaProvider } from "./PharmaContext";

function App() {
  return (
  
      <BrowserRouter>
        <PharmaProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/register">
              <RegisterPage />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/categories/:id">
              <CategoryDetails />
            </Route>
            <Route exact path="/:name/:id">
                <CartDetails/>
            </Route>
          </Switch>
        </Layout>
        </PharmaProvider>
      </BrowserRouter>
    
  );
}

export default App;
