import "./App.css";
import Title from "./components/Title.jsx";
import AllSections from "./components/AllSections.jsx";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Title />
      <AllSections data={data} />
    </>
  );
}
console.log(data);
export default App;
