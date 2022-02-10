
export default function Product(props) {
    // console.log(props)

    function showPrice() {
        alert("Price : " + props.product.price)
    }
    return (
        <>
            <div style={{ backgroundColor: 'lightgray' }}>
                <h2>{props.product.name}</h2>
                <button onClick={showPrice}>Show Price</button>
            </div>
        </>

    )

}