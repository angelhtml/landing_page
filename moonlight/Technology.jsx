import { Image } from '@mantine/core'
import techStyle from './tech.module.css'
import { Button } from '@mantine/core';
import { Parallax ,ParallaxProvider} from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { useRouter } from 'next/router'

export function Technology(){
  const router = useRouter()
    return(
        <div>
          <ParallaxProvider>
            <Parallax speed={-5} >
            <AnimationOnScroll animateIn="animate__fadeIn" offset='200' duration={2}>
        <div className={techStyle.tech}>
            <p id='aboutme' className={techStyle.techtitle}>Which <i style={{color:'#0ff'}}>technologies</i> do I use?</p>
            <center>
            <p className={techStyle.techdescribtions}><span style={{color:'#0ff'}}>+2</span> years experiences with <u style={{color:'#0ff'}}>Node js</u> for backend</p>
            <p className={techStyle.techdescribtions}><span style={{color:'#0ff'}}>+2</span> years experiences with <u style={{color:'#0ff'}}>Next js</u> and <u style={{color:'#0ff'}}>React js</u> for frontend</p>
            <Button variant="outline" color="cyan" style={{marginTop:'1rem',marginBottom:'3rem'}} onClick={() => router.push('https://twitter.com/Angel14206324?s=09')}>Hire me</Button>
            <Button variant="outline" color="cyan" style={{marginTop:'1rem',marginLeft:'3rem'}} onClick={() => router.push('https://twitter.com/Angel14206324?s=09')}>contact me</Button>
            </center>
        </div>
        </AnimationOnScroll>
        </Parallax>
        </ParallaxProvider>
        
        <div className={techStyle.techcontainer}>
          <div className={techStyle.techbox1}>
              <div className={techStyle.techcontent}><Image alt='node' className={techStyle.techImage} src='/download.webp' alt='Image'/></div>
          </div>

          <div className={techStyle.techbox2}>
            <div className={techStyle.techcontent}>
              <Image className={techStyle.techImage} alt='next' src='/nextjs-cover.webp' alt='Image'/>
            </div>
         </div>
          <div className={techStyle.techbox3}>
            <div className={techStyle.techcontent}>
              <Image className={techStyle.techImage}  src='/ezgif.com-gif-maker.webp' alt='Image'/>
            </div>  
        </div>
        </div>
        
        </div>
    )
}