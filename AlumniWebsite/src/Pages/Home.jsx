import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import NewsCard from '../Components/NewsCard'
import ImageSlider from '../Components/ImageSlider'
import EventsHome from '../Components/EventsHome'

const Home = () => {
  return (
    <div className='pt-16'>
      <ImageSlider/>
      <Hero/>
      <EventsHome/>
      <NewsCard/>
    </div>
  )
}

export default Home
