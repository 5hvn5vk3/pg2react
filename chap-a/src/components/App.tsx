import type { ChangeEvent, FC } from "react"; // 教本と違って FC ではなく　　 type FC と書くようだ
import { useState } from "react";
import { styled } from "styled-components";


export const App: FC = () => {
  // テキストボックス State
  const [text, setText] = useState<string>("");
  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容を　 State に設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // [追加]ボタン押下時
  const onClickAdd = () => {
    // State 変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  // [削除]ボタン押下時（何番目が押されたかを引数で受け取る）
  const onClickDelete = (index: number) => {
    // State 変更を正常に検出させるため新たな配列を生成
    const newMemos = [...memos];
    // メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return(
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => {onClickDelete(index)}}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  paddig: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  aligin-items: center;
`;
