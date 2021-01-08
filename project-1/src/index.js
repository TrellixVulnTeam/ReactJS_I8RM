// Globals
import React from "react"; // component building
import ReactDom from "react-dom"; // rendering
// import { BrowserRouter } from "react-router-dom";
import "./App.scss"; // S
// Compontent
const Root = document.getElementById("root");
// image, headline, kicker, body
// image - 1920, 1366, 1280, 1020, 768
// body - richtext
const contents = [
  { id: 1, name: "intro", title: "intro", image: [] },
  { id: 2, name: "brands", title: "brands", image: [] },
  { id: 3, name: "fifa", title: "fifa", image: [] },
  { id: 4, name: "astellas", title: "astellas", image: [] },
  { id: 5, name: "toms", title: "toms", image: [] },
  { id: 6, name: "empire magazine", title: "empire magazine", image: [] },
  { id: 7, name: "spark conference", title: "spark conference", image: [] },
];
// Component : Static
function Slide(props) {
  const { id, name, title } = props;
  return (
    <article id={id} className="slide">
      <h2>{name}</h2>
      <p>{title}</p>
    </article>
  );
}

// Component : Dynamic
function Slides() {
  return (
    <section>
      {contents.map((content) => {
        return <Slide key={content.id} {...content}></Slide>;
      })}
    </section>
  );
}

// Rendering
// components being rendered must have a closing tag
ReactDom.render(<Slides />,Root);
