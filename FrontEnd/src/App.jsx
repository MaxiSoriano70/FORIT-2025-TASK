import HeaderTask from "./components/HeaderTask";
import FooterTask from "./components/FooterTask";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/Error404Page";
import { Route, Routes } from "react-router-dom";
import styles from "./css/main.module.css";

function App() {
  return (
      <div className={styles.mainPrincipal}>
          <HeaderTask/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
              </Routes>
          <FooterTask/>
      </div>
    )
}

export default App;
