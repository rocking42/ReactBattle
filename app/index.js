import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "./testComponents/Clock";
import { user, ProfileName, ProfileLink, ProfilePic, Timer } from "./info/user";
import {Routes} from './config/routes';

function Link(props) {
  const changeURL = () => {
    window.location.replace(props.href);
  }
  return (
    <span
      style={{color: 'blue', cursor: 'pointer'}}
      onClick={changeURL}>
      {props.children}
    </span>
  );
}

function Avatar(props) {
  const {img, name, link} = props.user
  return (
    <div>
      <Clock />
      <ProfilePic img={img}/>
      <ProfileName name={name} />
      <ProfileLink link={link} />
      <Timer />
      <Link href="http://google.com">
        Hi Everyone
      </Link>
    </div>
  )
}

ReactDOM.render(
  <Avatar user={user}/>,
  document.querySelector("#app")
)
