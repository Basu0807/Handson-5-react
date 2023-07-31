
import './App.css';
import PureCompo from './components/PureCompo';
import Counter from './components/Counter';
import WithMultiply from './components/WithMultiply';
import "./components/Style.css"

const EnhancedCounter = WithMultiply(Counter);

function App() {
  return (
    <div className='container'>
    <PureCompo/>
    <EnhancedCounter/>
    </div>
    
  )
}

export default App;
