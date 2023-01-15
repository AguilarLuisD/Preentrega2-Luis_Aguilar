import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
       addItem(item, quantity);   
    }

    return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio} </p>
                    
                </div>
                <div>
                <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
                
            </div>    
    )
 
}


export default ItemDetail;