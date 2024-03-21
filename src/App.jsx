import './App.css'
import Header from './components/Header';
import Article from './components/Article/index'


const nama = 'Rizqi';
function App() {
  

  return (
    <>
    <Header title=""/>
    <p className='font-bold'>Hello world</p>
    <h1>{90*3+9-2}</h1>
    <h1>10</h1>
    <p>nama saya {nama}</p>
    <Article/>
    </>
  )
}

export default App
