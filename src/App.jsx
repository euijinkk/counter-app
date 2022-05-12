import "./App.css";
import { useState } from "react";

import ButtonGroup from "./ButtonGroup";
import ShowCount from "./ShowCount";
import InputRange from "./InputRange";
import { useStore } from "./hooks/useStore";
import { useDispatch } from "./hooks/useDispatch";

function App() {
  const store = useStore();
  const dispatch = useDispatch();

  console.log("strore", store);
  console.log("dispatch", dispatch);

  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(0);

  const onIncrement = () => setCount((prevCount) => prevCount + (diff || 1));
  const onDecrement = () => setCount((prevCount) => prevCount - (diff || 1));
  const onReset = () => setCount(0);

  const handleDiff = ({ target }) => setDiff(target.valueAsNumber);

  return (
    <div className="App">
      <main className="App-main">
        <ShowCount count={count} diff={diff} />
        <InputRange handleDiff={handleDiff} diff={diff} />
        <ButtonGroup
          onDecrement={onDecrement}
          onReset={onReset}
          onIncrement={onIncrement}
        />
      </main>
    </div>
  );
}

export default App;
