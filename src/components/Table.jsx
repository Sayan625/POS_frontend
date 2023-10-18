import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const Table = ({ data }) => {
    const [allData,setAllData]=useState([])

    useEffect(()=>{
        setAllData(()=>data)
    },[data])


    return (
        <div className="container" >
            {/* Create a Bootstrap table */}
            <div className="table-responsive">
                <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            {/* Table headers */}
                            <th className='px-1 text-center' scope="col">#</th>
                            <th className='px-1 text-center' scope="col">Product ID </th>
                            <th className='px-1 text-center' scope="col">Product Name</th>
                            <th className='px-1 text-center' scope="col">Quantity</th>
                            <th className='px-1 text-center' scope="col">Sale Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData?.map((item, index) => (
                            <TableRow item={item} index={index}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
