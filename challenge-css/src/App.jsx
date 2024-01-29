import './App.scss'
import Perroquet from "./assets/perroquet.jpg"
import Puissance from "./assets/puissance.png"

function App() {

  

  return (
    <>
    <div className='coucou'>
      <img className="perroquet" src={Perroquet} alt="img perroquet" />
      <h1>Perroquet</h1>
      <img className="barre" src={Puissance} alt="barre étoile" />
      <div className='subtitle'>
        <h2 className='title2'>Espèce de piaf :</h2>
        <p>• Psittaciformes</p>
      </div>
      <div className='attaque'>
        <h2 className='atq'>Attaque :</h2>
        <div className='display'>
        <h4 className='picotement'>Picotement 10</h4>
        <h4 className='claque'>Claque ailée 20</h4>
        </div>
      </div>
      </div>
      </>
      
  )
}

export default App
