import React from "react";
import { Link, useParams } from "react-router-dom";

const Thankyou = () => {
    const {id} = useParams();

    return(
        
        <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-warning" role="alert">
                            <h1>¡Gracias por tu compra!</h1>
                            <p>Tu condigo de pedido es: <b>{id}</b></p>
                        </div>
                        <Link to={"/"} className="btn btn-warning text-center" >volver a Inicio</Link>
                    </div>
                </div>
        </div>
    )
}

export default Thankyou;