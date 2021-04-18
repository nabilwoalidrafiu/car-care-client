import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
          }
          console.log(data)
          const url = `https://agile-anchorage-30388.herokuapp.com/addService`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then( res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '28d433b6f4654fd0705648fdfc4616be')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
        }
    return (
        <div>
             <div className="text-center ship-form">
            <h3 className="text-center">Add Product</h3>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="row formStyle">
                    <div className="col-md-6">
                        <h5>Product Name</h5>
                        <input name="name" placeholder="Service" id='cycle'  {...register("name")} />
                    </div>
                    <div className="col-md-6">
                        <h5>Price</h5>
                        <input id="price" name="price" defaultValue="price" placeholder="Price" type="number"  {...register("price")} />
                    </div>
                    <div className="col-md-6">
                        <h5>Description</h5>
                        <input placeholder="Description" name="Description" {...register("description")} />
                    </div>
                    <div className="col-md-6">
                        <h5>Photo</h5>
                        <input  type="file" id='file' onChange={handleImageUpload}/>
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <input className="s-btn" type="submit" value="Add Product"/>
                </div>
            
            </form>
        </div>
        </div>
    );
};

export default AddService;