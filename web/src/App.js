import "./styles/App.css";
import { AppRouter } from "./components/AppRouter.js";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
//afs
export default observer(App);
