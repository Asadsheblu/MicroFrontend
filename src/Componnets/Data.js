import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Data = () => {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedData, setEditedData] = useState({ apiEndpoint: '', apiKey: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://microex.onrender.com/api");
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('Failed to fetch data from the server');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleEdit = (index, output) => {
        setEditingId(index);
        setEditedData(output);
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`https://microex.onrender.com/api/${editedData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedData)
            });
            
            if (response.ok) {
                toast.success('Data updated successfully');
                fetchData(); // Refresh data after successful update
                setEditingId(null);
            } else {
                toast.error('Failed to update data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this data?')) {
            try {
                const response = await fetch(`https://microex.onrender.com/api/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    toast.success('Data deleted successfully');
                    fetchData(); // Refresh data after successful delete
                } else {
                    toast.error('Failed to delete data:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    return (
        <div>
            <h1 className='text-center'>Your Uploaded Data</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>API Endpoint</th>
                        <th>API Key</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((output, index) => (
                        <tr key={index}>
                            <td>{editingId === index ? <input type="text" name="apiEndpoint" value={editedData.apiEndpoint} onChange={handleInputChange} /> : output.apiEndpoint}</td>
                            <td>{editingId === index ? <input type="text" name="apiKey" value={editedData.apiKey} onChange={handleInputChange} /> : output.apiKey}</td>
                            <td>
                                {editingId === index ? (
                                    <button className='btn btn-success' onClick={() => handleSave()}>Save</button>
                                ) : (
                                    <>
                                        <button className='btn btn-primary' onClick={() => handleEdit(index, output)}>Edit</button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleDelete(output._id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer/>
        </div>
    );
};

export default Data;
