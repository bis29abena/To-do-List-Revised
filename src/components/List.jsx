import React from "react";

function List(props) {
  // const [cross, setCross] = useState(false);

  // function crossItem() {
  //   // setCross((previous) => {
  //   //   return !previous;
  //   // });
  // }

  return (
    <div>
      <li
        // style={{ textDecoration: cross ? "line-through" : "none" }}
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.name}
      </li>
    </div>
  );
}

export default List;
