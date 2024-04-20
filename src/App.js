import Main from "./layout/Main.jsx";
import itemContextProvider from "./store/ItemContest.jsx";

function App() {
  return (
    <div className="App">
      <itemContextProvider>
        <Main />
      </itemContextProvider>
    </div>
  );
}

export default App;
