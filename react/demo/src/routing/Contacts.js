import React from "react";
import { getContacts, getContact } from './data'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";


export default function Contacts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="list" element={<List />} />
                    <Route path="details/:contactName" element={<ContactDetails />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function NoPage() {
    return (
        <h3> Sorry! Page Not Found!!! </h3>
    )
}

function Home() {
    return (
        <>
            <h2>Contacts Application</h2>
            <div>
                This application provides contact details of authors of programming languages.
            </div>
        </>
    )
}


function List() {
    let contacts = getContacts();
    return (
        <>
            <h2>Contacts</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Mobile</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((c, idx) =>
                        <tr key={idx}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.mobile}</td>
                            <td>
                                <Link to={`/details/${c.name}`}>Details </Link>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </>

    )
}

function ContactDetails() {
    let params = useParams()   // Route params 
    let name = params.contactName 
    let contact = getContact(name)
    return (
        <div className="row">
            <div className="col-sm-6">
                <h3>{contact.name}</h3>
                <h5>{contact.email}</h5>
                <h5>{contact.mobile}</h5>
                <div>{contact.bio}</div>
            </div>
            <div className="col-sm-6 text-center">
                <img className="rounded img-fluid  mx-auto border border-3 border-primary"
                    alt=""
                    src={`/images/${contact.image}`} />
            </div>
        </div>
    )
}

function Layout() {
    return (
        <div>
            <h2>Contacts</h2>
            [<Link to="/home">Home</Link>]
            [<Link to="/list">List</Link>]
            [<Link to="/about">About</Link>]
            <hr />
            <Outlet />

        </div>
    )
}