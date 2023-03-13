import { useState } from "react";

export default function BoardCommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <div>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
      {isEdit && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  );
}
