/*
want to creat this html structure using React.createElement
<div id="parent">
  <div id="child">
     <h1></h1>
  </div>
 </div>       
  

*/

const heading = React.createElement(
  "div",
  { id: "parent" }, // one layer of child
  React.createElement(
    "div",
    { id: "child1" }, // another layer of child
    [
      React.createElement("h1", {}, "h1 tag"),
      React.createElement("h2", {}, "h2 tag"), //react will give warning for this
      //react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
    ]
    //what if we passs array of ["",""] in children
  ), // one layer of child
  React.createElement(
    "div",
    { id: "child2" }, // another layer of child
    [
      "content 1",
      "content 2", //react will give warning for this
      //react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
    ]
    //what if we passs array of ["",""] in children
  )
);

console.log(heading);
// heading is a react element which is a Javacsript object
//when we pass it to render then this will be converted to h1 tag and put on DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
//this available in second link we used using CDN

root.render(heading); //it takes react element(Javascript Object) and render on DOM
