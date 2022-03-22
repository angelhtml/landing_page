import {Image} from '@chakra-ui/react'
import moonStyle from '../moonlight/moonlight.module.css'
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';

function Moonlight(){
    return(
        <div style={{overflow:'hidden'}}>
            <div className={moonStyle.bg}>
            <div className={moonStyle.meteors}>
  <div className={moonStyle.meteor}></div>
</div>
            <ParallaxProvider>
            <Parallax speed={-40} >
                <Image src='moon-png-44661.png' className={moonStyle.moon}/>
            
              
            <div className={moonStyle.star}></div>
            <div className={moonStyle.star1}></div>
            <div className={moonStyle.star2}></div>
            <div className={moonStyle.starA1}></div>
            <div className={moonStyle.starA2}></div>
            <div className={moonStyle.starA3}></div>
            <div className={moonStyle.starA4}></div>
            <div className={moonStyle.starA5}></div>
            <div className={moonStyle.starA6}></div>
            <div className={moonStyle.starA7}></div>
            <div className={moonStyle.starA8}></div>
            <div className={moonStyle.starA9}></div>
            <div className={moonStyle.starA10}></div>
            <div className={moonStyle.starA11}></div>
            <div className={moonStyle.starA12}></div>
            <div className={moonStyle.starA13}></div>
            <div className={moonStyle.starA14}></div>
            <div className={moonStyle.starA15}></div>
            </Parallax>
            <Image src='bgTree.png' className={moonStyle.tree}/>
            </ParallaxProvider> 
            </div>
        </div>
    )
}
export default Moonlight;