import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <div className="cards">
        <Card nome="Java" imagem='https://www.salvatore.academy/devmon/1_java.png' />
        <Card nome="Kotlin" imagem='https://www.salvatore.academy/devmon/2_kotlin.png'/>
        <Card nome="Android" imagem= 'https://www.salvatore.academy/devmon/3_android.png'/>
      </div>
    </>
  )
}

export default App
