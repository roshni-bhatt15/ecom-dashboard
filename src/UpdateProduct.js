import { useEffect, useState } from 'react';
import Header from './Header'
import {useParams} from 'react-router-dom'

function UpdateProduct(props){
    let params = useParams();
    let id = params.id;
    let [product,setProduct]=useState({});
    useEffect(()=>{
        getProduct(id);
    },[])
    async function getProduct(id) {
        let request = await fetch('http://127.0.0.1:8000/api/getproduct/'+id);
        let result = await request.json();
        if(result){
            setProduct(result.data)
        }
    }

  
    return(
        <div>
            <Header />
            <h1>Update Product</h1>
            <div className="col-md-4 m-auto">
                <input type="text" placeholder="Enter name" className="form-control" defaultValue={product.name}  
                 />
                <br />

                <input type="text" placeholder="Enter Description" className="form-control" defaultValue={product.description}  
                 />
                <br />

                <input type="nuber" placeholder="Enter price" className="form-control" defaultValue={product.price}  
                 />
                <br />

                <input type="file" placeholder="Enter file" className="form-control" defaultValue={product.file}  
                 />
                <br />
                <img src={"http://127.0.0.1:8000/"+product.file_path} style={{width:150}}/>
                <br />
                <button className="btn btn-primary" >Submit</button>
            </div>
        </div>
    )
}

export default UpdateProduct;
