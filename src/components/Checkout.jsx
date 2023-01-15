import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumaTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] =useState("")

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumaTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }
    
    return (
        <div className="container">
            <div className="row">
                < div className="col">
                    <form >

                        <div className="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>

                        <div className="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" placeholder="Ingrese su email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>

                        <div className="mb-3">
                            <label for="telefono" class="form-label">Telefono</label>
                            <input type="text" class="form-control" id="telefono" placeholder="Ingrese su Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>

                        <button type="button" onClick={generarOrden} class="btn btn-success">Generar Orden</button>

                    </form>

            </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td> <img src={item.imagen} alt={item.nombre} width={32} /></td>
                                    <td className="aling-middle">{item.nombre} </td>
                                    <td className="aling-middle">{item.quantity} </td>
                                    <td className="aling-middle">${item.quantity * item.precio} </td>
                                </tr>

                            ))}
                            <tr>
                                
                                <td colSpan={3}>total a pagar</td>
                                <td>${sumaTotal()} </td> 
                                
                                
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>


        </div>
    )
}

export default Checkout;