import Screen from "./Components/Screen";
import Button from "./Components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <>
      <div className="wrapper">
        <Screen />
        <div className="buttonBox">
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </div>
        <div className="myName">&copy; BY SONU</div>
      </div>
    </>
  );
}

export default App;
