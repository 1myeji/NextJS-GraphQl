import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  // 사용하기 위해서 Component import 받고 extends Component 해줘야함(Component안에 render라는 기능이 있음, 밑에 예시보고 이해하기)
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
      </>
    );
  }
}

// class AAA {
//   power = 50;

//   attack() {}
// }

// class BBB extends AAA { => 상속
//   // AAA 기능 상속받기
//   run() {}
// }

// const mybbb = new BBB();
// mybbb.attack();
