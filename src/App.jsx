import { Suspense, lazy } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import data from "./data/data.json";

const MainCountries = lazy(() => import("./components/Main/MainCountries"));

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<p className="mt-8 px-4 text-center">Loading countries...</p>}>
        <MainCountries countries={data} />
      </Suspense>
    </HashRouter>
  );
};

export default App;
