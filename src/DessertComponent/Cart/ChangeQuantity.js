const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const changeQuantity = quantity - 1;
        setQuantity(changeQuantity)
    }
    return(
        <div>
            <button className="btn" onClick={addQuantity}>+</button>
              <span>{quantity}</span>
            <button className="btn" onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;