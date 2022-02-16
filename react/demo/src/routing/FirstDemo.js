import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function FirstDemo() {
    return (
        <BrowserRouter>
            <h1>Routing Demo</h1>
            <div>
                [<Link to="/">Home</Link>]
                [<Link to="/about">About</Link>]
                [<Link to="/users">Users</Link>]
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Users() {
    return <h2>Users Page</h2>;
}