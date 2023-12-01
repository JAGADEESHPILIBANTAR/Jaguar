import React,{useRef, useState} from 'react'
import '../Content/Content.css'
import { LuPauseCircle ,LuPlayCircle} from 'react-icons/lu';
import { RiSteering2Fill} from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight,MdOutlineCarCrash,MdOutlineDirectionsCarFilled} from 'react-icons/md';
import { PiBookOpen } from 'react-icons/pi';
import Image from '../Images/Img1.png'

export default function Content() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
        <div id='maincontent'>
      <div id='content'>
        <video ref={videoRef} autoPlay loop>
          <source src="/videos/Vid2.mp4" type="video/mp4" />
        </video>
        <button id='playPauseButton' onClick={togglePlayPause}>
          {isPlaying ? <LuPauseCircle/> : <LuPlayCircle/>}
        </button>
      </div>
      <div>
        <h1 id='text'>THE NEW ERA</h1>
      </div>
      <div id='text1'>
        <div>
          <div><RiSteering2Fill/></div>
          <a href='https://www.google.com/'><MdOutlineKeyboardArrowRight/>BOOK A TEST DRIVE</a><br/>
          <dl>Arrange a test drive through your nearest Retailer</dl>
        </div>
        <hr id='line'/>
        <div>
          <div><MdOutlineCarCrash/></div>
          <a href='https://www.google.com/'><MdOutlineKeyboardArrowRight/>DESIGN YOURS</a><br/>
          <dl>Bring your Jaguar to life</dl>
        </div>
        <hr id='line'/>
        <div>
          <div><PiBookOpen/></div>
          <a href='https://www.google.com/'><MdOutlineKeyboardArrowRight/>VIEW PRICE</a><br/>
          <dl>View vehicle prices online</dl>
        </div>
        <hr id='line' />
        <div>
          <div><MdOutlineDirectionsCarFilled/></div>
          <a href='https://www.google.com/'><MdOutlineKeyboardArrowRight/>RESERVE ONLINE</a><br/>
          <dl>Reserve your Jaguar online</dl>
        </div>
      </div>
      <div>
         <img id='image1' src={Image} alt="href='https://www.google.com/'" />
      </div>
      <div>
        <p>Jaguar's new era begins with an all-electric four-door GT to be introduced in selected markets in 2024, with client deliveries following in 2025.</p>
      </div>
      <div>
        <a id='text2' href='https://www.google.com/'><MdOutlineKeyboardArrowRight/>Keep me Informed</a>
      </div>
    </div>
    <div id='secondmain'>
      <div>
        <p id='text3'>THE 2023 COLLECTION</p>
      </div>
    </div>
    </>
  )
}
