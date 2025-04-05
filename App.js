
// const heading = React.createElement("h1", { id: "heading" }, "Hello Ganesh By React ");

// in this {}  we can give the attributs to the our element
// in this the value  in the {}and next is a props and the inside is props and the second is a children

// console.log(heading) // object 
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


const parent = React.createElement(
    "div",
    { id: "parent1" },
    React.createElement(
        "div",
        { id: "children" },
        React.createElement("h1", {}, "I am h1 ")
    )
);
console.log(parent);


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// ya mule jsx ala 




