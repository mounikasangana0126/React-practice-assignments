
import './App.css'
import Card from './Card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {
  const data=[
    {
      title: 'Product 1',
      description: 'This is a description for product 1.',
      image: img1,
    },
    {
      title: 'Product 2',
      description: 'This is a description for product 2.',
      image: img2,
    },
    {
      title: 'Product 3',
      description: 'This is a description for product 3.',
      image: img3,
    },
  ];

  return (
    <>
      <h1>List Of Cards</h1>
      <div className='card-list'>
      {data.map((item)=>(
        <Card title={item.title} description={item.description} image={item.image}/>
      ))}
      </div>
    </>
  )
}

export default App
