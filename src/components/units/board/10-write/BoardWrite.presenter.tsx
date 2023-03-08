import { BlueButton, RedInput } from './BoardWrite.styles';
import { ChangeEvent } from 'react';

interface IProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  mycolor: boolean;
  isEdit: boolean;
  data: any;
}

export default function BoardWriteUI(props: IProps) {
  // 자바스크립트 영역

  // HTML 영역(return 아래)
  return (
    <>
      작성자:{' '}
      <RedInput
        type='text'
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:{' '}
      <input
        type='text'
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{' '}
      <input
        type='text'
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <BlueButton
        rrr='20px'
        qqq='yellow'
        zzz={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? '수정하기' : '등록하기'}
      </BlueButton>
    </>
  );
}
