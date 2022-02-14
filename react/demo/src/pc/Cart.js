
import React, { useState } from 'react'


function AddItem(props) {
    const [title, setTitle] = useState('Product 1,10000')
    const [qty, setQty] = useState(1)

    function addItem(event) {
        const [name, price] = title.split(',')
        props.addItem({ title: name, qty: qty, price: price })
        event.preventDefault()
    }

    function handleQtyChange(event) {
        setQty(event.target.value)
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    return (
        <form>
            <h3>Add Item</h3>
            Select Product : <br />
            <select value={title} style={{ width: '200px' }}
                onChange={handleTitleChange}>
                <option value="Product 1,10000">Product 1</option>
                <option value="Product 2,20000">Product 2</option>
                <option value="Product 3,5000">Product 3</option>
            </select>
            <p></p>
            Quantity : <br />
            <input type="number" style={{ width: '200px' }} value={qty}
                onChange={handleQtyChange} />
            <p></p>
            <button onClick={addItem}>Add Item</button>
        </form>
    )
}

function CartItem(props) {
    function deleteCartItem(index) {
        //  if (window.confirm("Do you want to delete item?")) {
        props.deleteItem(index)
        //}
    }

    return (
        <tr className="text-center">
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
    //const [total, setTotal] = useState(0)

    const initialCart = {
        items: [
            { title: 'Product 1', qty: 1, price: 10000 },
            { title: 'Product 2', qty: 1, price: 20000 },
            { title: 'Product 3', qty: 2, price: 5000 }
        ]
    }

    const [cart, setCart] = useState(initialCart)

    function getTotal() {
        var total = 0;

        cart.items.forEach((item) => total += item.price * item.qty)
        return total;
    }

    function deleteItem(index) {
        // Select all items except item to be deleted using filter() 
        let newItems = cart.items.filter((item, idx) => idx !== index)
        console.log(newItems)
        setCart({ items: newItems })
    }

    function addItemToCart(newItem) {

        // if product is already present then add to existing qty  otherwise add it as new item 
        const newItems = cart.items
        let found = false; 
        for (var item of newItems) {
            if (item.title === newItem.title) {
                item.qty = parseInt(item.qty) + parseInt(newItem.qty);
                found = true;
                break;
            }
        }

        if (!found)
            newItems.push(newItem)

        // const newItems = [...cart.items, item]
        setCart({ items: newItems })
    }
    return (
        <>
            <div className="container">
                <h1>Cart</h1>
                {cart.items.length > 0 ?
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-center">
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.items.map(
                                        (item, index) =>
                                            <CartItem item={item} key={index} index={index}
                                                deleteItem={deleteItem} />

                                    )
                                }
                            </tbody>
                        </table>
                        <h4>Total : <span className="text-primary">{getTotal()} </span></h4>
                        <hr />
                    </div>
                    : <div>
                        <h3>Cart is empty!!!</h3>
                        <hr />
                      </div>
                }
                <AddItem addItem={addItemToCart} />
            </div>
        </>
    )
}
