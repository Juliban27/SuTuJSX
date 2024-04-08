import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNk6VpgQ1B-regqkbwrPxYQVHcnANaCM8",
    authDomain: "sutu-8f7bd.firebaseapp.com",
    projectId: "sutu-8f7bd",
    storageBucket: "sutu-8f7bd.appspot.com",
    messagingSenderId: "1003746539441",
    appId: "1:1003746539441:web:77946e64f9045e56632f90"
};

const app = initializeApp(firebaseConfig);
//Consultar la BDD
const bdd = getFirestore();

/*
    C   REATE
    R   EAD
    U   UPDATE
    D   DELETE
    READ - UPDATE - DELETE - CREATE 


*/

//Crear productos

const prods = [
    {

        "nombre":"4080ti Founders Edition",
        "marca":"nvidia",
        "precio":5133440,
        "tipo": "gpu",
        "stock":20,
        "img": "https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/4080FE.jpg?alt=media&token=f1025553-69ee-4676-b3dd-f7ceaa7e1432"
    },
    {

        "nombre":"7900xtx 24gb",
        "marca":"amd",
        "precio":3679163,
        "tipo": "gpu",
        "stock":17,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/7900xtx.jpg?alt=media&token=eba1c69e-d5bb-4f4d-8ce9-26a65b281339"
    },
    {

        "nombre":"NZXT Kraken Elite",
        "marca":"nzxt",
        "precio":1023526,
        "tipo": "cooler",
        "stock":13,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/NZXTKraken.jpg?alt=media&token=fa1e6153-f353-4031-b5b0-d06560961283"
    },
    {

        "nombre":"iCUE H150i Elite",
        "marca":"corsair",
        "precio":711133,
        "tipo": "cooler",
        "stock":13,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/ICUEH150i.jpg?alt=media&token=e683ace4-a53a-4bec-ada0-3344454731ea"
    },
    {

        "nombre":"VENGEANCE DDR5 RAM",
        "marca":"corsair",
        "precio":272676,
        "tipo": "ram",
        "stock":14,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/ramcorsair.jpg?alt=media&token=305745ca-aa38-431e-b0f1-cd5c989745c8"
    },
    {

        "nombre":"Patriot Viper Venom DDR5 RAM",
        "marca":"patriot",
        "precio":264773,
        "tipo": "ram",
        "stock":7,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/ramviper.jpg?alt=media&token=5db9cd6f-177d-4ab5-87a5-8e018fcec9d7"
    },
    {

        "nombre":"Intel Core i9-13900K",
        "marca":"intel",
        "precio":2078667,
        "tipo": "cpu",
        "stock":18,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/corei9.jpg?alt=media&token=cf6396f9-cfb1-4819-abf1-398e76978637"
    },
    {

        "nombre":"AMD Procesador de escritorio Ryzen 7 7800X3D",
        "marca":"amd",
        "precio":1521458,
        "tipo": "cpu",
        "stock":14,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/7800X3D.jpg?alt=media&token=818b7cb4-3089-4d94-9a54-568d5aede3ea"
    },
    {

        "nombre":"be quiet! Dark Power 13 1000W",
        "marca":"bequiet!",
        "precio":865452,
        "tipo": "psu",
        "stock":17,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/bequiet!.jpg?alt=media&token=d9dbd57b-297f-4fc7-84bc-79dd41679b24"
    },
    {

        "nombre":"NZXT PSU C850",
        "marca":"nzxt",
        "precio":667860,
        "tipo": "psu",
        "stock":9,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/nzxt850.jpg?alt=media&token=10052444-63a4-4c82-a37d-c39d329bd6e8"
    },
    {

        "nombre":"Asus ROG MAXIMUS Z690 HERO EVA",
        "marca":"asus",
        "precio":2394815,
        "tipo": "motherboard",
        "stock":27,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/AsusZ690.jpg?alt=media&token=1d19a447-5679-4877-a9bb-3a235329bad4"
    },
    {

        "nombre":"ASUS ROG Maximus Z790 Hero EVA-02A",
        "marca":"asus",
        "precio":3394815,
        "tipo": "motherboard",
        "stock":5,
        "img":"https://firebasestorage.googleapis.com/v0/b/sutu-8f7bd.appspot.com/o/asusZ790.jpg?alt=media&token=52d752f0-fa30-4af9-b570-4fad515df95a"
    }
]
export const createProducts = async() =>{

    prods.forEach(async(prod) => {
        await addDoc(collection(bdd,"productos"),{
        nombre : prod.nombre,
        marca: prod.marca,
        precio: prod.precio,
        tipo: prod.tipo,
        stock: prod.stock,
        img:prod.img
        })
    });
}

export const getProducts = async () =>{
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod =>{ return {...prod.data(), id: prod.id}})
    return items
}

export const getProduct = async (id) =>{
    const producto = await getDoc(doc(bdd, "productos", id))
    const item =  {...producto.data(), id: producto.id}
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) =>{
    const ordenCompra = await addDoc(collection(bdd, 'ordenesCompra'),{
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha:fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) =>{
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}