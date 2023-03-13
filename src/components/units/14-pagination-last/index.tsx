import { IQuery } from "../../../commons/types/generated/types";

interface IFetchBoardsProps {
  data?: Pick<IQuery, "fetchBoards">;
}

export default function FetchBoardsElement(props: IFetchBoardsProps) {
  return (
    <>
      {props.data?.fetchBoards.map(el => {
        // el에 빨간줄이 뜰텐데 fetchBoards에 type을 지정해주면 됩니다.
        return (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
          </div>
        );
      })}
    </>
  );
}
