
import './App.css';
import ClientCard from './Client/Component/ClientCard';
import pic from './pic.png'
function App() {
  return (
    <div className="App">
      
      <div className='Appcon'>
      <ClientCard name='Mouna' profe='developpeur applications' bio='Developper  fullstack'>
        <img src={pic} alt="" />
      </ClientCard>
      </div>
      
    </div>
  );
}

export default App;
