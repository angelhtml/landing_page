import seoStyle from './seo.module.css'
import { Image } from '@mantine/core'
import { Check } from 'tabler-icons-react';

export function Seo(){
    return(
        <div>
            <div className={seoStyle.seocontainer}>
            <div className={seoStyle.seobox1}><Image src='unknown-2-1-1.webp' alt='img' className={seoStyle.Image}/></div>
            <div className={seoStyle.seobox2}>
                <h1>Why I care about SEO ?</h1>
                <span><Check size='150px' className={seoStyle.check}/>well,As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience.These visitors can then potentially be converted into customers.</span>
                <span><Check size='40px' className={seoStyle.check}/>So I use the latest technology to help you get to the first pages of search engines with the least traffic</span>
            </div>
            </div>
        </div>
    )
}