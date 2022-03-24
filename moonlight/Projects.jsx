import projectsStyle from './projects.module.css'
import { Image } from '@mantine/core'

export function Projects(){
    return(
        <div>
            <center><h1 className={projectsStyle.title} id='projects'>My last Projects</h1></center>
            <div className={projectsStyle.projectscontainer}>
            <div className={projectsStyle.projectsbox1}>
              <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='Screenshot_2021-10-12-22-10-34-1-1.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Cryptomoonshots</h1><p>Technologies: React Js & Node Js</p><a href='cryptomoonshots.site' target='_blank'>cryptomoonshots.site</a></div>
              </div>
            </div>

            <div className={projectsStyle.projectsbox2}>
            <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='IMG_20220301_233555.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Christmas Event</h1><p>Technologies: Next Js</p><a href='https://loving-kepler-ae4567.netlify.app/' target='_blank'>netlify.app/</a></div>
              </div>
            </div>
            </div>

            <div className={projectsStyle.projectscontainer}>
            <div className={projectsStyle.projectsbox1}>
              <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='68747470733a2f2f69696c692e696f2f37356b7a666a2e6a7067.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Autos</h1><p>Technologies: React Js</p><a href='https://angelhtml.github.io/autos/' target='_blank'>Github/angelhtml</a></div>
              </div>
            </div>

            <div className={projectsStyle.projectsbox2}>
            <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='68747470733a2f2f69696c692e696f2f376430506c522e706e67.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Crypto home</h1><p>Technologies: Next Js</p><a href='https://distracted-mestorf-55ac92.netlify.app/' target='_blank'>netlify.app/</a></div>
              </div>
            </div>
            </div>

            <div className={projectsStyle.projectscontainer}>
            <div className={projectsStyle.projectsbox1}>
              <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='Capture.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Estate</h1><p>Technologies: React Js</p><a href='https://angelhtml.github.io/react1/' target='_blank'>Github/angelhtml</a></div>
              </div>
            </div>

            <div className={projectsStyle.projectsbox2}>
            <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='Capturegam.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Gamfa Web</h1><p>Technologies: React Js</p><a href='https://angelhtml.github.io/gamfa/' target='_blank'>Github/angelhtml</a></div>
              </div>
            </div>
            </div>

            <div className={projectsStyle.projectscontainer}>
            <div className={projectsStyle.projectsbox1}>
              <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='Capture777.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>Icon snipergamer</h1><p>Technologies: React Js</p><a href='https://angelhtml.github.io/Iconsnipergamer/' target='_blank'>Github/angelhtml</a></div>
              </div>
            </div>

            <div className={projectsStyle.projectsbox2}>
            <div className={projectsStyle.projectcontainer}>
                <div className={projectsStyle.projectbox1}><Image className={projectsStyle.pic} src='screenshot_2022-01-27-14-51-43-0000.webp' alt='img'/></div>
                <div className={projectsStyle.projectbox2}><h1>The Clan</h1><p>Technologies: Next Js</p><a href='https://theclanproject.netlify.app/' target='_blank'>netlify.app/</a></div>
              </div>
            </div>
            </div>
        </div>
    )
}