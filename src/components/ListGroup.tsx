import { MouseEvent } from "react";

//import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Paris"];

  // items = [];
  const handlerClick = (event: MouseEvent) => console.log(event);

  if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No item Found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handlerClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
