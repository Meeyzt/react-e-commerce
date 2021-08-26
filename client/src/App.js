import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Loading from "./components/Loading";
import "semantic-ui-css/semantic.min.css";
import Products from "./components/pages/Products";
import Profile from "./components/pages/Profile";
import { QueryClient, QueryClientProvider } from "react-query";
import ListUsers from "./components/pages/Admin/ListUsers";
import LoginRoute from "./components/PrivateRoute/LoginRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import Admin from "./components/pages/Admin";

function App() {
  const queryClient = new QueryClient();
  queryClient.setDefaultOptions({
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <LoginRoute path="/Profile">
            <Profile />
          </LoginRoute>
          <Route path="/Products" exact component={Products} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Loading" component={Loading} />
          <AdminRoute path="/Admin/ListUsers">
            <ListUsers />
          </AdminRoute>
          <AdminRoute path="/Admin">
            <Admin />
          </AdminRoute>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
