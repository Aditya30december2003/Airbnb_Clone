import React , {useState , useEffect} from 'react'
import Navbar from './components/Navbar' 
import Tab from './components/Tab'
import Navbar2 from './components/Navbar2'
const NavbarUltimate = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY>0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div  className='w-full  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
    <div className='fixed w-full bg-white z-10 top-0 left-0'>
      <Navbar />
      {!scrollPosition && (<Tab />)}
      <hr className='mt-5 w-full h-[0.1rem] bg-gray-200'/>
      <Navbar2 className={!scrollPosition?'shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]':''}/>
    </div>
    </div>
  )
}

export default NavbarUltimate
