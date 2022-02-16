import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export default function SecondDemo() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="first" element={<First />} />
                    <Route path="second" element={<Second />} />
                    <Route path="*" element={
                         <h3>Sorry! Page Not Found!!!</h3>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


function Home() {
    return <h2>Home Page</h2>;
}


function First() {
    return <h2>First Page</h2>;
}

function Second() {
    return <h2>Second Page</h2>;
}

function Layout() {
    return (
        <div className="container-fluid">
            <h2>Routing Demo</h2>
            [<Link to="/">Home</Link>]
            [<Link to="/first">First</Link>]
            [<Link to="/second">Second</Link>]
            
            <Outlet />
           
        </div>
    )
}