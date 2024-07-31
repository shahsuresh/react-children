import React from "react";

const ShowName = (props) => {
  console.log(props);
  return (
    <div>
      <p>My name is {props.userName}</p>
      <hr />
      {props.userName === "Suresh" && props.children}
    </div>
  );
};

export default ShowName;
