import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import { renderRoutes } from "react-router-config";
import { HashRouter as Route } from "react-router-dom";
import routes from "./routes/index";

function App() {
  return (
    <Route>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </Route>
  );
}

export default App;
