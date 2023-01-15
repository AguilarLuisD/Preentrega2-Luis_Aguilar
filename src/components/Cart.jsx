import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, sumaTotal, cartTotal} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            ¡no se encontroron Productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-warning text-center" >volver a Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">

        <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn btn-secondary"> Vaciar Carrito </Link></th>
                        </tr>

                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col">cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (

                            <tr key={item.id}>
                                <td> <img src={item.imagen} alt={item.nombre} width={32} /></td>
                                <td className="aling-middle">{item.nombre} </td>
                                <td className="aling-middle">{item.quantity} </td>
                                <td className="aling-middle">${item.quantity * item.precio} </td>
                                <td className="text-end aling-middle"><Link onClick={() => {removeItem(item.id)}} > <img src={"images/trash.svg"} alt={"eliminar Producto"} /></Link></td>
                            </tr>
                            
                        ))}

                        <tr>
                            
                            <td colSpan={2}>&nbsp;</td>
                            <td>Suma Total</td>
                            <td>${sumaTotal()} </td>   
                            <th className="text-end"><Link to={"/checkout"} className="btn btn-secondary"> Finalizar Compra </Link></th>
                                
                        </tr>
                    </tbody>
                    </table>

         </div>                   

        

    )
}

export default Cart;