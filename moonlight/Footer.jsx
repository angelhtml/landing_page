import footerStyle from './footer.module.css'
import { FaGithubSquare,FaTwitterSquare } from "react-icons/fa";
import { useRouter } from 'next/router'


export function Footer(){
    const router = useRouter()
    return(
        <div>

            <footer className={footerStyle.footer}>
                <div className={footerStyle.footerbox1}><p>&copy; Angel {new Date().getFullYear()}</p></div>
                <div className={footerStyle.footerbox2}><div className={footerStyle.icons}><FaGithubSquare onClick={() => router.push('https://github.com/angelhtml')} className={footerStyle.icon}/><FaTwitterSquare onClick={() => router.push('https://twitter.com/Angel14206324?s=09')} className={footerStyle.icon}/></div></div>
            </footer>

        </div>
    )
}