import { useState } from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { background } from "@chakra-ui/react";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const PeriodicTable = () => {

  // const [elementName, setElementName] = useState(null)

  // const getElementName = (name) => {
  //   setElementName(name);
  //   console.log(name)
  // }

  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <button
          //i dont know why it is looping
          // onClick={getElementName(element.number)}

          className="element"
          key={element.name}
          
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
            backgroundColor: colorMap[element.category]
          }}
        >
          {/* <p>{elementName}</p> */}
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </button>
      ))}
    </div>
  );
};

export default PeriodicTable;
