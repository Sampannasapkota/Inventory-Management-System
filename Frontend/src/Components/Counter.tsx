import { useState } from "react";
import CounterText from "./counterText";
import CustomButton from "./customButton";
import CustomText from "./customText";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const [pointerEvents, setPointerEvents] = useState("auto");
  const [disable, setDisable] = useState(false);
  const disableButton = () => {
    console.log("Button is disabled");
    // setPointerEvents("none");
    setDisable(true);
  }

  return (
    <div>
      {/* <CustomText content="Counter" color="white" size="32px" />
      <CustomText content="This is a counter" /> */}
      <CustomText content={count.toString()} color="white" size="32px" />
      <CustomButton style={{ width: 100 }} label="+ 1" onClick={() => setCount(count + 1)} />
      {/* <CustomButton label="- 1" onClick={() => setCount(count - 1)} />
      <CustomButton style={{ pointerEvents: disable ? "none" : "auto" }} label="Click me to disable" onClick={disableButton} />
      <CustomButton label="Reset" onClick={() => setCount(0)} /> */}

    </div>
  )
}
export default Counter;