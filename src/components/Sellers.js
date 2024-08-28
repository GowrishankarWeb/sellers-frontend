import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sellers = () => {
    const [sellers, setSellers] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [filteredSellers, setFilteredSellers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getAllSellers')
            .then(response => {
                setSellers(response.data);
                setFilteredSellers(response.data); // Initialize filteredSellers with all sellers
            });
    }, []);

    useEffect(() => {
        if (sellers !== null) {
            // Filter sellers based on search term
            const filtered = sellers.filter(seller =>
                seller.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredSellers(filtered);
        }
    }, [searchTerm, sellers]); // Update filtered sellers whenever search term or sellers change

    return (
        <div>
            <h2>Sellers</h2>
            
            <div className='container mt-5'>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                />

                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Rating</th>
                            <th scope='col'>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSellers.length > 0 ? (
                            filteredSellers.map(seller => (
                                <tr key={seller.id}>
                                    <td>{seller.id}</td>
                                    <td>{seller.name}</td>
                                    <td>{seller.rating}</td>
                                    <td>{seller.review}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No sellers found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sellers;