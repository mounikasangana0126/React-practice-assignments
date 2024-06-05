
import './App.css'
import Card from './Card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {

  return (
    <>
      <h1>List Of Cards</h1>
      <div className='card-list'>

        <Card title="Product 1" description='This is a description for product 1.' image={img1}/>
        <Card title="Product 2" description='This is a description for product 2.' image={img2}/>
        <Card title="Product 3" description='This is a description for product 3.' image={img3}/>
        <Card title="Product 4" description='This is a description for product 4.' image={img2}/>
        <Card title="Product 5" description='This is a description for product 5.' image={img3}/>
        <Card title="Product 6" description='This is a description for product 6.' image={img1}/>

      </div>
    </>
  )
}

export default App
