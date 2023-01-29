import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import './Admin.css';
import { jsx } from '@emotion/react';

const Admin = () => {
    const [productData, setProductData] = useState({
        productType : String,
        productFor : String,
        Title : String,
        Description : String,
        Image : String,
        Price : Number
    });

    function handleChange(e){
        const {name , value} = e.target;
        setProductData(prevValues => {
            if (name === "productType") {
                return {
                    productType : value,
                    productFor : prevValues.productFor,
                    Title : prevValues.Title,
                    Description : prevValues.Description,
                    Image : prevValues.Image,
                    Price : prevValues.Price
                }
            }
            if (name === "productFor") {
                return {
                    productType : prevValues.productType,
                    productFor : value,
                    Title : prevValues.Title,
                    Description : prevValues.Description,
                    Image : prevValues.Image,
                    Price : prevValues.Price
                }
            }
            if (name === "title") {
                return {
                    productType : prevValues.productType,
                    productFor : prevValues.productFor,
                    Title : value,
                    Description : prevValues.Description,
                    Image : prevValues.Image,
                    Price : prevValues.Price
                }
            }
            if (name === "description") {
                return {
                    productType : prevValues.productType,
                    productFor : prevValues.productFor,
                    Title : prevValues.Title,
                    Description : value,
                    Image : prevValues.Image,
                    Price : prevValues.Price
                }
            }

            if (name === "image") {
                return {
                    productType : prevValues.productType,
                    productFor : prevValues.productFor,
                    Title : prevValues.Title,
                    Description : prevValues.Description,
                    Image : value,
                    Price : prevValues.Price
                }
            }

            if (name === "price") {
                return {
                    productType : prevValues.productType,
                    productFor : prevValues.productFor,
                    Title : prevValues.Title,
                    Description : prevValues.Description,
                    Image : prevValues.Image,
                    Price : value
                }
            }
        });
    }


    async function handleSubmit(e){
        e.preventDefault();
        const {productType, productFor, Title, Description, Image, Price} = productData;
        console.log(productType, productFor, Title, Description, Image, Price);
        await fetch("http://localhost:5000/admin", {
            method : "POST", 
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                productType, productFor, Title, Description, Image, Price
            })
        })
        .then(res => res.json())
        .catch((err) => {
            console.log(err)
        });
        // const {productType, productFor, Title, Description, Image, Price} = productData;
        // console.log(productType, productFor, Title, Description, Image, Price);
    }

    return (
        <div className="admin-page">
            <Form className="product-upload" method="POST" onSubmit={handleSubmit}>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Select name="productType" onChange={handleChange}>
                        <option>Select the type</option>
                        <option value="clothing">Clothing</option>
                        <option value="jewllery">Jewllery</option>
                        <option value="toys">Toys</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Select name="productFor" onChange={handleChange}>
                        <option>For who</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Control type="text" name="title" placeholder="Title" value={productData.Title} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="description" rows={3} placeholder="Description" value={productData.Description} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Control type="file" name="image" placeholder="upload image" value={productData.Image} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Control type="number" name="price" placeholder="Price" value={productData.Price} onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Admin