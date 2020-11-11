import "./App.css";
import Project from "./Project";

function App() {
  return (
    < >
      <header>
        <h1 className='heading'>Projects</h1>
      </header>

      <div className="projects">
        <Project /> <Project /> <Project /> <Project /> <Project /> <Project />{" "}
        <Project /> <Project />
        <Project /> <Project /> <Project /> <Project /> <Project /> <Project />{" "}
        <Project /> <Project />
      </div>
    </>
  );
}

export default App;
