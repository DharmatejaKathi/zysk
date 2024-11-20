import Header from "./component/Header";
import Home from "./component/Home";
import FeaturesSection from "./component/FeaturesSection";
import TestmonialSection from "./component/TestmonialSection";
import CuttingedgeFeatures from "./component/CuttingedgeFeatures";
import FrequentlySection from "./component/FrequentlySection";

import "./App.css";

const App = () => (
  <div className="main">
    <Header />
    <Home />
    <FeaturesSection />
    <TestmonialSection />
    <CuttingedgeFeatures />
    <FrequentlySection />
  </div>
);

export default App;
