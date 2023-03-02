import axios from 'axios';
import { useState } from 'react';

export default function RestGetPage() {
  const [title, setTitle] = useState('');
  const onClickAsync = () => {
    const result = axios.get('https://koreanjson.com/posts/1');
    console.log(result);
  };

  const onClickSync = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    setTitle(result.data.title);
    console.log(result);
    console.log(result.data);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
}
