import { useState } from "react";

const MainBoard = () => {
  var prevNode;
  const [collections, setCollections] = useState([
    { name: "Collection #1", links: [], id: 1 },
    {
      name: "Collection #2",
      links: [
        { url: "https://www.google.com/", id: 1 },
        { url: "https://www.youtube.com/", id: 2 },
      ],
      id: 2,
    },
  ]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const link_id = e.dataTransfer.getData("id");

    const link = document.getElementById(link_id);

    link.style.display = "block";
    // e.target.removeChild(e.target.childNodes[0]);
    e.target.innerHTML = "";

    e.target.appendChild(link);
  };

  const onDragLeave = (e) => {
    prevNode = e.target.parentNode;
    const dropDiv = `<div>Drop Url Here</div>`;
    prevNode.innerHTML += dropDiv;
  };

  return (
    <div className="mainboard">
      {collections.map((collection) => {
        return (
          <div key={collection.id} className="collection">
            <span className="collectionTitle">{collection.name}</span>
            <br />
            <br />
            <div className="dropUrl" onDragOver={onDragOver} onDrop={onDrop}>
              Drop Url Here
            </div>

            {/* <button>Add new</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default MainBoard;
