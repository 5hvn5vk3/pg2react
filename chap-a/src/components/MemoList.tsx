import type { FC } from "react";
import { styled } from "styled-components";


type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = props => {
    const { memos, onClickDelete} = props;
    return(
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
    );
};

const SContainer = styled.div`
  border: solid 1px #ccc;
  paddig: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  aligin-items: center;
`;

const SButton = styled.button`
  margin-left: 16px;
`;

