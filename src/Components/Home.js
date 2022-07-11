import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home({email}) {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log('Auth Token', authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcome {email}</h3>    
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}
