import { useContext } from "react";
import { Card } from "./compnents/Card";
import { AdminFlagContext } from "./compnents/providers/AdminFlagProvider";

export const App = () => {
  // Context 内の isAdmin と更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext)

  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者フラグがtrueのときとそれ以外で文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};