import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";


const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  
  // Context 内の　 isAdmin を取得
  const { isAdmin } = useContext(AdminFlagContext);
  
  // isAdmin が false （管理者でない）ときにボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin} onClick={() => alert("編集ボタンが押されました")}> {/* （非）活性化の確認 */}
      編集
    </button>
  );
};
