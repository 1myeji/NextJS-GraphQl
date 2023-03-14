import { Component } from "react";
import Router from "next/router";

interface IPrevState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // Component안에 내장되어 있는 것들 state, render, ... 밑에 함수들
  componentDidMount() {
    console.log("그려지고 나서 실행!!!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!!");
    // 채팅방 나가기 api
  }

  componentWillUnmount() {
    console.log("사라질때 실행!!");
  }

  onClickCountUp = () => {
    this.setState((prev: IPrevState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
}
