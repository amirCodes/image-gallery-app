import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ImageCard from './components/Card'
import ImageSearch from './components/ImageSearch'
function App () {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=34692317-a9a4f23bddcc7d08867505444&q=${term}+flowers&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setImages(data.hits)
      })
      .catch(err => console.log(err))
  }, [term])
  // console.log(term)
  return (
    <div className=''>
      <Header />
      <main className='mt-20 pt-10 m-6'>
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1> }
        {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>:
        <div className='grid grid-cols-3 gap-4'>
          {images.map(image => (
            <ImageCard image={image} key={image.id} />
          ))}
        </div>}
      </main>
      <Footer />
    </div>
  )
}

export default App
