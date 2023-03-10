import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState(5);

  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: number) => {
        return (
          <div key={el._id}>
            {index !== myIndex && (
              <div>
                <span style={{ margin: "10px" }}>{el.writer}</span>
                <span style={{ margin: "10px" }}>{el.title}</span>
                <button id={String(index)} onClick={onClickEdit}>
                  수정하기
                </button>
              </div>
            )}
            {index === myIndex && (
              <div>
                수정할 내용: <input type="text" />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
