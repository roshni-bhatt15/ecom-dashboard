import { useState } from 'react';
import Header from './Header'
import {useNavigate} from 'react-router-dom';


function AddProduct(){
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    let [file,setFile]=useState('');
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        file = event.target.files[0];
        //setFile(event.target.files[0]);
    };
    async function addProduct(){
        const product = {name,price,description,file};
        console.log(product);
        const formdata = new FormData();
        formdata.append('file',file);
        formdata.append('name',name);
        formdata.append('price',price);
        formdata.append('description',description);

        let result = await fetch('http://127.0.0.1:8000/api/addproduct',{
            method:'POST',
            // headers:{
            //     'Content-Type':'application/json',
            //     'Accept':'application/json',
            // },
            body:formdata
        });
    
        result = await result.json();
        console.log(result);
        if(result){
            navigate('/')
        }
    }
    return(
        <div>
            <Header />
            <h1>Add Product</h1>
            
            <div className="col-md-4 m-auto">
                <input type="text" placeholder="Enter name" className="form-control" value={name}  
                onChange={(e)=>setName(e.target.value)} />
                <br />

                <input type="text" placeholder="Enter Description" className="form-control" value={description}  
                onChange={(e)=>setDescription(e.target.value)} />
                <br />

                <input type="nuber" placeholder="Enter price" className="form-control" value={price}  
                onChange={(e)=>setPrice(e.target.value)} />
                <br />

                <input type="file" placeholder="Enter file" className="form-control" value={file}  
                onChange={handleFileChange  } />
                <br />

                <button className="btn btn-primary" onClick={addProduct}>Submit</button>
            </div>
        </div>
    )
}

export default AddProduct;
