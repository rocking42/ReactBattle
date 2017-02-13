import React from "react";

export const user = {
  img: "https://avatars1.githubusercontent.com/u/22362644?v=3&s=400",
  name: "Ned",
  link: "rocking42"
};

export function ProfileName(props) {
    return (
      <h2>{props.name}</h2>
    )
}

export function ProfileLink(props){
    return (
      <a href={`https://github.com/${props.link}`}>{props.link}</a>
    )
}

export function ProfilePic(props) {
    console.log(this);
    return (
      <img src={props.img} style={{height:100, width:100}}/>
    )
}

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.number(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  number() {
    let currentNum = this.state.number
    this.setState((prevState, props) => ({
      number: prevState.number += 1
    }))
  }

  render() {
    return (
      <div>
        <h1>Stopwatch {this.state.number}</h1>
      </div>
    )
  }
}
