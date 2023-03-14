import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []); // 의존성 배열(dependency array)

  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  }); // 의존성 배열(dependency array)

  useEffect(() => {
    return () => {
      console.log("사라질 때 실행!!");
    };
  }, []);

  // 1. 하나로 합치기 가능
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!!");
  //   return () => {
  //     console.log("사라질 때 실행!!");
  //   };
  // }, []);

  // 2. useEffect의 잘못된 사용 예제(가급적 useEffect안에서 setState 지양, 사용해야하는 경우도 있음)
  // (1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // }, [count]);

  const onClickCountUp = () => {
    setCount(prev => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
