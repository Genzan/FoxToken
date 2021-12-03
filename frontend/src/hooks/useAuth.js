// Import external libraries
import { useState } from 'react';

const useAuth = () => {
    // State Variables
    const [auth, setAuth] = useState(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        let exisToken
        (accessToken)
        ? exisToken=true
        : exisToken=false
        return exisToken
    });

    return auth;
}

export default useAuth;
