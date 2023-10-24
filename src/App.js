import './App.css'
// importiamo il foglio CSS di bootstrap, UNA VOLTA SOLA in App.js
import 'bootstrap/dist/css/bootstrap.min.css'

// importiamo i componenti da noi scritti
// senza { } perchè tutti i miei componenti li esporto come "default"
import CustomNavbar from './components/CustomNavbar'

// che cos'è un componente React a funzione?
// È una funzione che ritorna del JSX

function App() {
  return (
    <div>
      {/* voglio aggiungere un sottotitolo alla mia navbar, personalizzato! */}
      <CustomNavbar additionalText="I migliori piatti del web!" />
    </div>
  )
}

export default App
