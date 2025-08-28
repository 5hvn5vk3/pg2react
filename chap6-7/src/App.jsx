import { useState, memo, useCallback} from "react";
import { Child1 } from "./compnents/Child1";
import { Child4 } from "./compnents/Child4";

export const App = memo(() => {
  console.log("App レンダリング ");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset = {onClickReset}/> {/* Props として関数を指定*/}
      <Child4 />
    </>
  );
});