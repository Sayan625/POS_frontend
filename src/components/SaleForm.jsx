import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SaleForm = () => {
    const navigate = useNavigate();
    const [sale, setSale] = useState({
        productId: "",
        name: "",
        quantity: 0,
        sale_amount: 0
    });


    // Function to handle form submission
    async function HandleSubmit() {
        try {
            // Send a POST request to the API with sale data
            await axios.post('https://sales-backend-fs9g.onrender.com/api/sales', sale, {
                headers: {
                    'access_token': JSON.parse(localStorage.getItem('user')).token
                }
            });
            // refresh
            navigate(0);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Sale
            </button>

            <div className="modal fade text-start" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sale Details</h1>
                        </div>
                        <div className="modal-body">
                            <div className=''>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputFisrtName1" className="form-label">Product Id</label>
                                    <input value={sale.productId} onChange={(e) => setSale((prev) => ({ ...prev, productId: e.target.value }))} type="text" className="form-control" id="exampleInputFisrtName1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputFisrtName1" className="form-label">Product name</label>
                                    <input value={sale.name} onChange={(e) => setSale((prev) => ({ ...prev, name: e.target.value }))} type="text" className="form-control" id="exampleInputFisrtName1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputlastName1" className="form-label">Quantity</label>
                                    <input value={sale.quantity} onChange={(e) => setSale((prev) => ({ ...prev, quantity: e.target.value }))} type="number" className="form-control" id="exampleInputlastName1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputlastName1" className="form-label">Sale amount</label>
                                    <input value={sale.sale_amount} onChange={(e) => setSale((prev) => ({ ...prev, sale_amount: e.target.value }))} type="number" className="form-control" id="exampleInputlastName1" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={() => HandleSubmit()} className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleForm;
