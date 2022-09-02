import React, {useState} from 'react';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    const [user, setUser] = useState(false)
    return (<GithubContext.Provider value={
        {user}
    }>{children}
    </GithubContext.Provider>)
};

export {GithubProvider, GithubContext}