import { createContext, useState } from 'react'

// creating the context to store values
export const SubscriptionContext = createContext();

// creating the provider component
export const SubscriptionProvider = ({children}) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const toggleSubcription = () => {
        setIsSubscribed(!isSubscribed);
    }

    return (
        <SubscriptionContext.Provider value={{isSubscribed, toggleSubcription}}>
          {children}
        </SubscriptionContext.Provider>
    );
}