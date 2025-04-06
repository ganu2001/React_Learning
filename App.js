import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello Ganesh By React ");

// in this {}  we can give the attributs to the our element
// in this the value  in the {}and next is a props and the inside is props and the second is a children

// console.log(heading) // object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//     "div",
//     { id: "parent1" },
//     React.createElement(
//         "div",
//         { id: "children" },
//         React.createElement("h1", {}, "I am h1 ")
//     )
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ya mule jsx ala

// const jsxHeading = ()=>{
// <h1 id="heading">Hii Ganesh</h1>
// };

// // console.log(jsxHeading);

// const headingComponent = () =>{
//     <jsxHeading/>
//     return <h1>Hii React Component</h1>
// } ;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(jsxHeading);

// root.render(<headingComponent/>)

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Ffood-logo%2F&psig=AOvVaw16RNiBfgLdgo92sRhAsDzJ&ust=1744023006846000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiut5Cew4wDFQAAAAAdAAAAABAJ" />
      </div>
      <div className="nav-items">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li> 
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
    <Header/>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
