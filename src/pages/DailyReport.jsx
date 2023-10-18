import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import axios from 'axios';

const DailyReport = () => {
    const [topSales, setTopSales] = useState([]);
    const [totalRev, setTotalRev] = useState(0)
    useEffect(() => {
        //  update the active element and highlight 'Top Sales' in the Navbar

        // eslint-disable-next-line
        const elements = document.querySelectorAll('.' + 'active');
        elements.forEach(element => {
            element.classList.remove('active');
        });

        const element = document.getElementById('reg');
        if (element) {
            element.classList.add('active');
        }

        // Fetch and set the data when the component mounts

        SetData();
         // eslint-disable-next-line
    }, []);

    // Function to set the top sales data and total revenue
    async function SetData() {
        try {
            const resp = await axios.get('https://sales-backend-fs9g.onrender.com/api/sales', {
                headers: {
                    'access_token': JSON.parse(localStorage.getItem('user'))?.token
                }
            })
            setTotalRev(() => GetTotalRevenue(resp.data))
            const data = resp.data?.sort((a, b) => b.sale_amount - a.sale_amount);
            setTopSales(data.slice(0, 5));
        } catch (error) {
            setTopSales([]);

        }




    }
    // Sort the data by sale_amount in descending order
    function GetTotalRevenue(data) {
        let totalAmount = 0;

        // Iterate over the data and sum the sale amounts
        for (let i = 0; i < data.length; i++) {
            totalAmount += data[i].sale_amount;
        }

        return totalAmount;
    }
    return (
        <div className='container-fluid '>
            <h4 className='text-center'>Todays Revenue</h4>
            <h3 className='text-center mb-5'> Rs. {totalRev}</h3>

            <h4 className='text-center'>Top 5 Sales</h4>
            {/* Render the Table component with the top sales data */}
            <Table data={topSales} />
        </div>
    );
}

export default DailyReport;
