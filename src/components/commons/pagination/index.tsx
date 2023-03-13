import { MouseEvent } from 'react';

interface IPaginationPageProps {
  onClickPrevPage: () => void
  onClickNextPage: () => void
  startPage: number
  lastPage: number
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
}

export default function PaginationPage(props: IPaginationPageProps) {
  return (
    <>
      <span onClick={props.onClickPrevPage} style={{cursor: "pointer"}}>이전페이지</span>
      {new Array(10).fill(1).map(
        (
          _,
          index, // _ data 값을 안 쓴다는 의미
        ) => {
          return (
            index + props.startPage <= props.lastPage && (
              <span
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {index + props.startPage}
              </span>
            ) // id는 숫자가 못들어감
          );
        },
      )}
      <span onClick={props.onClickNextPage} style={{cursor: "pointer"}}>다음페이지</span>
    </>
  );
}
