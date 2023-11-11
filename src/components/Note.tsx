import { useEffect, useMemo, useRef, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  text: string;
};

const Note = ({ text }: Props) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [isDraggable, setDraggable] = useState(true);
  const modalRef = useRef<any>(null);
  useEffect(() => {
    console.log("first");

    return () => {};
  }, []);

  const [value] = useState<any>([
    {
      type: "paragraph",
      children: [{ text: text }],
    },
  ]);
  const [draggableDivPosition, setDraggableDivPosition] = useState({
    x: 0,
    y: 100,
  });
  function handleDrag(e: DraggableEvent, data: DraggableData): false | void {
    console.log("handleDrag" + data.x + " " + data.y + e.timeStamp);
  }
  function handleStop(e: DraggableEvent, data: DraggableData): false | void {
    console.log("handleStop" + e.timeStamp);
    console.log("handleDrag");
    setDraggableDivPosition({
      x: data.lastX,
      y: data.lastY,
    });

    // Get the element id.

    // setDraggable(false);
  }
  function handleStart(e: DraggableEvent, data: DraggableData): false | void {
    console.log("handleStart" + data.x + " " + data.y);

    const element = e.target as HTMLInputElement;
    const elementId = element?.id;
    if (elementId === "c") {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  }

  function OnMouseDown(e: MouseEvent) {
    console.log("OnMouseDown");
    const element = e.target as HTMLInputElement;

    // Get the element id.
    const elementId = element?.id;
    console.log("Element is " + elementId);

    if (elementId === "c") {
      console.log(" ok drag");
      setDraggable(true);
    } else {
      console.log("no drag");
      setDraggable(false);
    }
  }
  // const shouldAllowDragging = (e: DraggableData) => {
  //   // Implement your custom logic here to determine if dragging is allowed
  //   // For example, you can check if a condition is met based on mouse coordinates or other factors
  //   return true; // Allow dragging on the left half of the screen
  // };

  return (
    <>
      <div className="container-wrap">
        <Draggable
          ref={modalRef}
          disabled={!isDraggable}
          onStop={handleStop}
          onStart={handleStart}
          onDrag={handleDrag}
          scale={1}
          position={draggableDivPosition}
          onMouseDown={OnMouseDown}
        >
          <div id="c" style={{ paddingTop: "30px", background: "red" }}>
            <Slate
              editor={editor}
              initialValue={value}
              onChange={(newValue) => console.log(newValue)}
            >
              <Editable spellCheck autoFocus className="postit" />
            </Slate>
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default Note;
