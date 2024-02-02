import { useState, useEffect } from 'react';
import api from '../api';
import './Dashboard.css'

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        product: '',
        price: '',
        quantity: '',
        description: '',
        image: '',
        category: '',
    });

    const fetchProjects = async () => {
        const response = await api.get('/app/project/');
        setProjects(response.data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post('/app/project/', formData);
        fetchProjects();
        setFormData({
            product: '',
            price: '',
            quantity: '',
            description: '',
            image: '',
            category: '',
        });
    };

    return (
        <>
                 <h2>E-commerce</h2>
                <ul className='navbar-nav'>
                    <li><a href='#'>Home </a></li>
                    <li><a href='#'>Products </a></li>
                    <li><a href='#'>Cart </a></li>
                    <li><a href='#'>Login </a></li>
                    <li><a href='#'>Register </a></li>
                </ul>
            <div className='container'>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="product" className="form-label">Product</label>
                        <input name="product" value={formData.product} onChange={handleInputChange} placeholder="Product" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input name="image" value={formData.image} onChange={handleInputChange} placeholder="Image" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <h1>Products</h1>
            <br/>

            <div className='container'>
                <div className='row'>
                    {projects.map((project) => (
                        <div key={project.id} className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{project.product}</h5>
                                    <h6 className='card-subtitle mb-2 text-muted'>{project.price}</h6>
                                    <p className='card-text'>Description: {project.description}</p>
                                    <p className='card-text'>{project.category}</p>
                                    <p className='card-text'>{project.quantity}</p>
                                    <img src={project.image} alt='product' style={{width: '30%', height: '30%'}}/>
                                    <button className='button'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;