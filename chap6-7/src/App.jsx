<<<<<<< HEAD
import { useState, memo, useCallback} from "react";
import { Child1 } from "./compnents/Child1";
import { Child4 } from "./compnents/Child4";
=======
import { useContext } from "react";
import { Card } from "./compnents/Card";
import { AdminFlagContext } from "./compnents/providers/AdminFlagProvider";
>>>>>>> aaef4b597804301d561e435b26e3c21b650e3ee9

export const App = () => {
  // Context 内の isAdmin と更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext)

<<<<<<< HEAD
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);
=======
  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
>>>>>>> aaef4b597804301d561e435b26e3c21b650e3ee9

  return (
    <div>
      {/* 管理者フラグがtrueのときとそれ以外で文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};