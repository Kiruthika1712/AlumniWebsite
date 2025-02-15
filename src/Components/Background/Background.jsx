import './Background.css'


const Background = ({playStatus, heroCount}) => {
    if (playStatus){
        return (
        <video className='background' autoPlay loop muted>
            <source src={"src/assets/video1.mp4"} type="video/mp4"/>
        </video>
        )
    }
    else if (heroCount === 0){
        return <img src={"src/assets/cs2.jpg"} alt="" className="background"/>
    }

    else if (heroCount === 1){
        return <img src={"src/assets/cs1.jpg"} alt="" className="background"/>
    }

    else if (heroCount === 2){
        return <img src={"https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg"} alt="" className="background"/>
    }
}

export default Background
