import React, { useContext, useEffect, useState } from 'react'
import { SubscriptionContext } from '../SubscriptionContext';

const Subscription = () => {
    const {isSubscribed, toggleSubcription} = useContext(SubscriptionContext);
    const [message, setMessage] = useState('');

    useEffect( () => {
        setMessage(
            isSubscribed 
                ? "🛋️ Cozy nights, 😂 endless laughs, 🔄 thrilling twists — it's all here, waiting for you."
                : "Unsubscribed! 🎬 But your watchlist will miss you dearly. 👉 Subscribe now and treat yourself to a 🌍 world of stories!"
        )
    },[isSubscribed])
  return (
    <div className='subscription'>
        <h3>{isSubscribed 
                ? "🎉 Your perfect weekend is calling!" 
                : "😢 Don't leave us just yet!"
            }
        </h3>
        <p>
            {message}
        </p>
        <button onClick={toggleSubcription}>{isSubscribed ? 'Un' : ''}Subscribe</button>
    </div>
  )
}

export default Subscription