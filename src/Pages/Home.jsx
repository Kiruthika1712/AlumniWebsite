import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import NewsCard from '../Components/NewsCard'
import ImageSlider from '../Components/ImageSlider'

const Home = () => {
  return (
    <div className='pt-16'>
      <ImageSlider/>
      <Hero/>
      <NewsCard/>
    </div>
  )
}

export default Home
