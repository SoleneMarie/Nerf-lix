import "./App.css";
import Title from "./components/Title.jsx";
import AllSections from "./components/AllSections.jsx";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <AllSections data={data} />
      </main>
    </>
  );
}
export default App;
