import React, { useEffect } from 'react'
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { Link } from 'react-router-dom';


const Logout = () => {
    const { oidcUser,logout } = useReactOidc();
    useEffect(() => {
        if(!!oidcUser)
        logout();
    },[])
    return (
        <main>

            <Link to="/home">
                <div
                    style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 24,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Home
                </div>
            </Link>

        </main>
    )
}

export default Logout
