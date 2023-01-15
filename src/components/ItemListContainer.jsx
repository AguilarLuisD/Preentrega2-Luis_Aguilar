import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams ();

  
    // consultar la coleccion de productos
    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, 
        where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false)
        })
        
    }, [id])

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ItemList item={item} />}    
            </div>
        </div>       
    )
}

export default ItemListContainer;