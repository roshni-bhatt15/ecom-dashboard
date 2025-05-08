import Header from './Header';
import { React, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Products() {
    const [data,setData]=useState([{}]);
   // console.log(data.length)
    useEffect(()=>{
       

        func();
    },[]);

    async function func() {
        try{
            const fetchData = await fetch('http://127.0.0.1:8000/api/list');
            const jsonFetch = await fetchData.json();
            //console.log(jsonFetch)
                setData(jsonFetch);
              
              console.log(data)
        } catch (err){console.log(err)}; 
    }
        
    //console.log(result)
    async function DeleteProduct(id){
        try{
            const fetchData = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
                method:'DELETE'
            });
            const jsonFetch = await fetchData.json();
            console.log(jsonFetch);
            if(jsonFetch.status){
                func();
            }
        } catch (err){console.log(err)}; 
    }
    //console.log(data)
    return (
        <div>
            <Header />
            <h1>Product Page</h1>
            <div className="col-md-8 m-auto pt-5">
            
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        data   ?  ( 
                            data.map((item, index)=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={"http://127.0.0.1:8000/"+item.file_path} style={{width:150}} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Link to={"update/"+item.id} className="btn btn-warning">Edit</Link>
                                        &nbsp;
                                        <button onClick={()=>DeleteProduct(item.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                             ): (
                            <tr><td>Loading...</td></tr> )
                    }
                    </tbody>  

                   
                </Table>
            </div>
        </div>
    )
}

export default Products;