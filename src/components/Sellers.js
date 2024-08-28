import React,{useState, useEffect}from 'react'
import axios from 'axios'

const Sellers = () => {
    const[sellers, setSellers] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8080/getAllSellers')
        .then(response =>{
            setSellers(response.data)
        })
    },[])

  return (
    <div>
        <h2>Sellers</h2>
        <div className='container mt-5'>
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Review</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {sellers !== null ? (
                            sellers.map(seller => (
                                <tr key={seller.id}>
                                    <td>{seller.id}</td>
                                    <td>{seller.name}</td>
                                    <td>{seller.rating}</td>
                                    <td>{seller.review}</td>
                                    <td>
                                        <button className='btn btn-primary me-2'>Actions</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            // Render the loading state within a table row and column
                            <tr>
                                <td colSpan="4" className="text-center">Loading...</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Sellers