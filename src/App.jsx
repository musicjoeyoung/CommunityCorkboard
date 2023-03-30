import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./App.scss";
import thumbtack from "./assets/thumbtack.png";

function App() {
  const [draggables, setDraggables] = useState([]);

  const addDraggable = () => {
    setDraggables([...draggables, { color: "#F3E779" }]);
  };

  const handleColorChange = (index, e) => {
    const newDraggables = [...draggables];
    newDraggables[index].color = e.target.value;
    setDraggables(newDraggables);
  };

  useEffect(() => {
    // Calculate the total height of all draggable divs
    const totalHeight = draggables.length * 250 + 75;

    // Set the height of the body element to the total height
    document.body.style.height = totalHeight + "px";
  }, [draggables]);

  return (
    <div className="corkboard">
      <button onClick={addDraggable}>Add Post-It Note!</button>
      {draggables.map((draggable, index) => (
        <Draggable key={index}>
          <div>
            <div
              className="draggable"
              style={{ backgroundColor: draggable.color }}
            >
              <div>
                <img src={thumbtack} contentEditable={false} />
              </div>
              <div className="text" contentEditable={true}>
                Draggable {index + 1}
              </div>
            </div>
            <div className="colorPickerContainer">
              <input
                className="colorPicker"
                type="color"
                value={draggable.color}
                onChange={(e) => handleColorChange(index, e)}
              />
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default App;
