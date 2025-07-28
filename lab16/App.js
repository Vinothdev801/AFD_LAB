import './App.css';
import Subscription from './components/Subscription';
import { SubscriptionProvider } from './SubscriptionContext';

function App() {
  return (
    <div className="App">
      <h1>Subscription Toggle Demo </h1>
      <SubscriptionProvider>
        <Subscription />
      </SubscriptionProvider>
    </div>
  );
}

export default App;
