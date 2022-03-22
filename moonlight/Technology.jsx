import { Image } from '@chakra-ui/image'
import techStyle from './tech.module.css'
import { Button } from '@mantine/core';

export function Technology(){
    return(
        <div>
        <div className={techStyle.tech}>
            <p className={techStyle.techtitle}>Which <i style={{color:'#0ff'}}>technologies</i> do I use?</p>
            <center>
            <p className={techStyle.techdescribtions}><span style={{color:'#0ff'}}>+2</span> years experiences with <u style={{color:'#0ff'}}>Node js</u> for backend</p>
            <p className={techStyle.techdescribtions}><span style={{color:'#0ff'}}>+2</span> years experiences with <u style={{color:'#0ff'}}>Next js</u> and <u style={{color:'#0ff'}}>React js</u> for frontend</p>
            <Button variant="outline" color="cyan" style={{marginTop:'1rem',marginBottom:'3rem'}}>Hire me</Button>
            <Button variant="outline" color="cyan" style={{marginTop:'1rem',marginLeft:'3rem'}}>contact me</Button>
            </center>
        </div>
        <div className={techStyle.techcontainer}>
          <div className={techStyle.techbox1}>
              <div className={techStyle.techcontent}><Image className={techStyle.techImage} src='/download.jpg' alt='Image'/></div>
          </div>

          <div className={techStyle.techbox2}>
            <div className={techStyle.techcontent}>
              <Image className={techStyle.techImage} src='/nextjs-cover.jpg' alt='Image'/>
            </div>
         </div>
          <div className={techStyle.techbox3}>
            <div className={techStyle.techcontent}>
              <Image className={techStyle.techImage} src='/ezgif.com-gif-maker.png' alt='Image'/>
            </div>  
        </div>
        </div>
        </div>
    )
}