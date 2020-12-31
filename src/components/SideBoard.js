import { useState } from "react";

const SideBoard = () => {
  const [links, setLinks] = useState([
    { url: "https://www.google.com/", id: 1 },
    { url: "https://www.youtube.com/", id: 2 },
  ]);

  const addLinks = () => {
    setLinks(...links, { url: "https://www.fb.com/", id: 3 });
  };

  const onDragStart = (e) => {
    const target = e.target;
    console.log(target.id);
    e.dataTransfer.setData("id", target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
    // e.target.style.display = "initial";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const link_id = e.dataTransfer.getData("id");

    const link = document.getElementById(link_id);

    link.style.display = "block";

    e.target.appendChild(link);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnd = (e) => {
    console.log(e);
  };

  return (
    <div className="sideboard" onDrop={onDrop} onDragOver={onDragOver}>
      {links.map((link) => {
        return (
          <div
            className="url"
            key={link.id}
            id={link.id}
            draggable="true"
            onDragStart={onDragStart}
            onDragOver={dragOver}
            onDragEnd={onDragEnd}
          >
            {link.url}
          </div>
        );
      })}
    </div>
  );
};

export default SideBoard;
