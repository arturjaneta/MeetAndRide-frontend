import React, { useEffect, useState } from 'react';

import { authenticationService } from './components/Auth/AuthService';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './components/Auth/AuthPage';
import 'bulma'

const App = () => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        authenticationService.currentUser.subscribe(x => setCurrentUser(x));
      }, [])

        return (
            <div>
                {currentUser ? <MainPage/>:<AuthPage/>}
            </div>
        );
    
}

export default App; 
