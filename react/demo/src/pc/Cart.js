
import React, { useState } from 'react'


function AddItem() {
    return (
        <form>
            <h2>Add Item</h2>
        </form>
    )
}

function CartItem(props) {
    function deleteCartItem(index) {
        if (window.confirm("Do you want to delete item?")) {
            props.deleteItem(index)
        }
    }

    return (
        <tr>
            <td>{props.item.title}</td>
            <td>{props.item.qty}</td>
            <td>{props.item.price}</td>
            <td>{props.item.qty * props.item.price}</td>
            <td><button className="btn-danger"
                onClick={() => deleteCartItem(props.index)}>Delete</button></td>
        </tr>

    )
}

export default function Cart() {
    const initialCart = {
        items: [
            { title: 'Product 1', qty: 1, price: 10000 },
            { title: 'Product 2', qty: 1, price: 20000 },
            { title: 'Product 3', qty: 2, price: 5000 }
        ]
    }

    const [cart, setCart] = useState(initialCart)

    function deleteItem(index) {
        // Select all items except item to be deleted using filter() 
        let newItems = cart.items.filter((item, idx) => idx !== index)
        console.log(newItems)
        setCart({ items: newItems })
    }

    return (
        <>
            <div className="container">
                <h1>Cart</h1>
   
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map(
                            (item, index) => <CartItem item={item} key={index} index={index}
                                deleteItem={deleteItem} />
                        )}
                    </tbody>
                </table>
                <p></p>
                <AddItem />
            </div>
        </>
    )
}
