import React from "react";
import ReactDOM from "react-dom";



const parent = React.createElement(
    "div", {id: "parent"}, "Hell world"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// const ResturantCard = () => {
//     return (
//         <div className="res-card" style={{background: "#f0f0f0"}}>
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F008%2F687%2F818%2Fsmall%2Ffood-delivery-logo-free-vector.jpg&tbnid=OpTq5T86EOL-qM&vet=12ahUKEwiF2Zvq6sGEAxUISGwGHQPIBZgQMygCegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Ffood-delivery-logo&docid=MefSnqa_f0w7iM&w=200&h=200&q=food%20delivery%20app%20logo&ved=2ahUKEwiF2Zvq6sGEAxUISGwGHQPIBZgQMygCegQIARBw"
//             />
//             <h3>Meghana Foods</h3>
//             <h4>biryani, North Indian, Asian</h4>
//             <h4>4.4 start</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 <ResturantCard />
//                 <ResturantCard />
//             </div>
//         </div>
//     )
// }