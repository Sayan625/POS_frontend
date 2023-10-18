import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ item, index }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);

    // Update the local 'data' state when the 'item' prop changes
    useEffect(() => {
        setData(item);
    }, [item]);

    // Function to handle saving changes
    async function HandleSave(id) {
        setEdit(() => false);
        // Extract unnecessary fields (e.g., _id, createdAt, updatedAt) and send the remaining data
        const { _id, createdAt, updatedAt, ...others } = data;
        await axios.put('https://sales-backend-fs9g.onrender.com/api/sales/' + id, others, {
            headers: {
                'access_token': JSON.parse(localStorage.getItem('user'))?.token
            }
        });
    }

    // Function to handle deleting the item
    async function HandleDelete(id) {
        try {
            await axios.delete(
                'https://sales-backend-fs9g.onrender.com/api/sales/' + id, {
                    headers: {
                        'access_token': JSON.parse(localStorage.getItem('user'))?.token
                    }
                }
            );
            navigate(0);
        } catch (error) {
           console.log(error)
        }
    }

    return (
        <tr className='w-auto'>
            <td className='px-1 py-2 text-center'>{index + 1}</td>
            <td className='px-1 py-2 text-center'>
                {edit ? (
                    <input
                        type="text"
                        size={15}
                        value={data?.productId}
                        onChange={(e) =>
                            setData((prev) => ({ ...prev, productId: e.target.value }))
                        }
                        className='form-control-sm text-center'
                    />
                ) : (
                    data?.productId
                )}
            </td>
            <td className='px-1 py-2 text-center'>
                {edit ? (
                    <input
                        type="text"
                        size={15}
                        value={data?.name}
                        onChange={(e) =>
                            setData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className='form-control-sm text-center'
                    />
                ) : (
                    data?.name
                )}
            </td>
            <td className='px-1 py-2 text-center'>
                {edit ? (
                    <input
                        type="text"
                        size={15}
                        value={data?.quantity}
                        onChange={(e) =>
                            setData((prev) => ({ ...prev, quantity: e.target.value }))
                        }
                        className='form-control-sm text-center'
                    />
                ) : (
                    data?.quantity
                )}
            </td>
            <td className='px-1 py-2 text-center'>
                {edit ? (
                    <input
                        type="text"
                        size={15}
                        value={data?.sale_amount}
                        onChange={(e) =>
                            setData((prev) => ({ ...prev, sale_amount: e.target.value }))
                        }
                        className='form-control-sm text-center'
                    />
                ) : (
                    // eslint-disable-next-line
                    'Rs.' + ' ' + data?.sale_amount
                )}
            </td>
            <td className='px-1 py-2 text-end'>
                {edit ? (
                    <button className='btn btn-success' onClick={() => HandleSave(data._id)}>
                        Save
                    </button>
                ) : (
                    <button className='btn btn-primary' onClick={() => setEdit(() => true)}>
                        Edit
                    </button>
                )}
            </td>
            <td className='px-1 py-2 text-end'>
                <button className='btn btn-danger' onClick={() => HandleDelete(data._id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
