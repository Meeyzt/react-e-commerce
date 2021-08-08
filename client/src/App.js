import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import "semantic-ui-css/semantic.min.css";
import Products from "./components/pages/Products";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
