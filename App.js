import React from "react";
import ReactDOM from "react-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="-container">
                <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=338&ext=jpg&ga=GA1.1.1319243779.1708732800&semt=ais" alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};


// const styleCard = {
//     bodycolor: "#f0f0f0",
// };

const ResturantCard = () => {
    return (
        <div className="res-card" style={{background: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2ba0ecc76a854c73dfd67be6b86ed0aa"
            />
            <h3>Meghana Foods</h3>
            <h4>biryani, North Indian, Asian</h4>
            <h4>4.4 start</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div class="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// const parent = React.createElement(
//     "div", {id: "parent"}, "Hell world"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);





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