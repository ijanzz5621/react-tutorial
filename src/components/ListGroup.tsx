// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

// Use fragment to wrap multiple tags
// Or use empty bracket <></> where React recognize as a fragment

// Input structure (Use interface to pass value to props)
// { items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // return event function
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let selectedIndex = -1;

  // create state for selectedIndex (hook)
  //const arr = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found.</p>
  //       </>
  //     );
  //   }

  //   const message =
  //     items.length === 0 ? (
  //       <>
  //         <p>No item found.</p>
  //       </>
  //     ) : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? (
  //       <>
  //         <p>No item found.</p>
  //       </>
  //     ) : null;
  //   };

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  const listGroup = (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? (
        <>
          <p>No item found.</p>
        </>
      ) : null} */}

      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  return listGroup;
}

export default ListGroup;
