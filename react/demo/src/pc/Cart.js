
import React, { useState } from 'react'

export default function Cart() {
    const initialCart = {
        items: [
            { title: 'Product 1', qty: 1, price: 10000 },
            { title: 'Product 2', qty: 1, price: 20000 },
            { title: 'Product 3', qty: 2, price: 5000 }
        ]
    }

    const [cart, setCart] = useState(initialCart)

    return (
        <>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

            </table>
        </>
    )
}
