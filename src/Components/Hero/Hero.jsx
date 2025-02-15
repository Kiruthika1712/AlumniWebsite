import './Hero.css'

const Hero = ({heroData, setHeroCount, heroCount}) => {
  return (
    <div className='hero'>
      
      <div className="hero-explore">
        <img src = {"E:/arrow_button.png"} alt = "" />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={()=>setHeroCount(0)} className = {heroCount === 0?"hero-dot blue":"hero-dot"}> </li>
          <li onClick={()=>setHeroCount(1)} className = {heroCount === 1?"hero-dot blue":"hero-dot"}> </li>
          <li onClick={()=>setHeroCount(2)} className = {heroCount === 2?"hero-dot blue":"hero-dot"}> </li>
        </ul>
      </div>

    </div>
  )
}

export default Hero
