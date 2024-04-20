import Main from "./layout/Main.jsx";
import ItemContextProvider from "./store/ItemContest.jsx";

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </div>
  );
}

export default App;
