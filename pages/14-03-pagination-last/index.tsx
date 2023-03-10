import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import PaginationPage from "../../src/components/commons/pagination";
import FetchBoardsElement from "../../src/components/units/14-pagination-last";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardCount ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      <FetchBoardsElement data={data} />

      <PaginationPage
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
        lastPage={lastPage}
        onClickPage={onClickPage}
      />

      {/* <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (
          _,
          index, // _ data 값을 안 쓴다는 의미
        ) => {
          if (index + startPage <= lastPage) {
            return (
              <span
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                style={{ margin: "10px" }}
              >
                {index + startPage}
              </span> // id는 숫자가 못들어감
            );
          } else {
            return <span key={index + startPage}></span>;
          }
        },
      )}
      <span onClick={onClickNextPage}>다음페이지</span>

      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (
          _,
          index, // _ data 값을 안 쓴다는 의미
        ) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span> // id는 숫자가 못들어감
        ),
      )}

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span> // id는 숫자가 못들어감
      ))}

      <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </>
  );
}
