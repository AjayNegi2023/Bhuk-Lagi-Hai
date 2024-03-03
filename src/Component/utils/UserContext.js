import React from "react";

const UserContext= React.createContext({
    logginInUser : "Default User"
});

const UserProvider = UserContext.Provider;
export  {UserContext,UserProvider};