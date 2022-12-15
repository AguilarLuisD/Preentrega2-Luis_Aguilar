import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    return (
 
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio} </p>
                    
                </div>
                <div>
                <ItemCount stockItems={10} />
                </div>
                
            </div>    
    )
 
}


export default ItemDetail;