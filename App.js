const heading = React.createElement(
  "h1", // tag we want to creae
  { id: "heading" }, //addding attribute for tag we create ,can add css
  // it  go as attributes as key value pair in props
  "Hello World using React" //innerHTML we wantto add for that tag //childeren in props
);

console.log(heading);
// heading is a react element which is a Javacsript object
//when we pass it to render then this will be converted to h1 tag and put on DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
//this available in second link we used using CDN

root.render(heading); //it takes react element(Javascript Object) and render on DOM
