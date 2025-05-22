import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'

const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data?.users || [])
            })
            .catch((err) => {
                console.error(err)
                setError("Something went wrong while fetching users.")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (error) {
        return (
            <div className='text-center text-red-500 font-semibold text-lg mt-10'>
                {error}
            </div>
        )
    }

    return (
        <div className='bg-gray-50 min-h-screen py-10'>
  

            {/* Loading Skeleton */}
            {loading ? (
                <Skeleton count={8} />
            ) : (
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className='bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-md'
                        >
                            <img
                                className='w-28 h-28 rounded-full border-2 border-gray-300 object-cover'
                                src={user.image}
                                alt={user.firstName}
                            />
                            <h3 className='mt-4 text-xl font-semibold text-gray-900'>
                                {user.firstName} {user.lastName}
                            </h3>
                            <p className='text-sm text-gray-500'>
                                {user.company?.title || "Frontend Developer"}
                            </p>

                            <div className='text-center mt-4 w-full text-sm text-gray-600 space-y-1'>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Location:</strong> {user.address?.city || "Tashkent"}</p>
                            </div>

                            <div className='mt-6 flex gap-3 w-full justify-center'>
                                <button className='px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition'>
                                    Edit
                                </button>
                                <button className='px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition'>
                                    Message
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Users
