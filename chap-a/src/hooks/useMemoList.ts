import { useCallback, useState } from "react";

export const useMemoList = () => {
    // メモ一覧 State
    const [memos, setMemos] = useState<string[]>([]);

    // メモ追加ロジック
    const addTodo = useCallback((text: string) => {
        // State 変更を正常に検知させるため新たな配列を生成
        const newMemos = [...memos];
        // テキストボックスの入力内容をメモ配列に追加
        newMemos.push(text);
        setMemos(newMemos);
    }, [memos]); // 依存配列には memos を設定

    // メモ削除ロジック
    const deleteTodo = useCallback((index: number) => {
        const newMemos = [...memos];
        // メモ配列から該当の要素を削除
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return { memos, addTodo, deleteTodo};
};