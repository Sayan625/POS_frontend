import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import SaleForm from '../components/SaleForm';
import axios from 'axios';

const AllSales = () => {
    // Update the active element and highlight 'All Sales' in the Navbar
    useEffect(() => {
         // eslint-disable-next-line
        const elements = document.querySelectorAll('.' + 'active');
        elements.forEach(element => {
            element.classList.remove('active');
        });

        const element = document.getElementById('allsale');
        if (element) {
            element.classList.add('active');
        }
    }, []);

    // State to store all sales data
    const [allSales, setAllSales] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        setData();
    }, []);

    // Function to set the data to the state
    async function setData() {
        try {
            const resp=await axios.get('https://sales-backend-fs9g.onrender.com/api/sales',{headers:{
                'access_token':JSON.parse(localStorage.getItem('user'))?.token
            }})
        setAllSales(resp.data); 

        } catch (error) {
            setAllSales([]); 

        }


    }
console.log(allSales)
    return (<div className="container-fluid text-end">
        <SaleForm data={null} type='add sale'/>
        <Table data={allSales} /> 
    </div>
    );
}

export default AllSales;
