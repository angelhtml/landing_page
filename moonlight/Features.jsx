import featuresStyle from './features.module.css'
import { FiTruck,FiCheckCircle,FiTrendingUp } from "react-icons/fi";
import dynamic from 'next/dynamic';
const Tilty = dynamic(() => import("react-tilty"), {
    ssr: false
    });

export function Features(){
    return(
        <div>
            <div className={featuresStyle.features}>
            <div className={featuresStyle.featuresbox1}>
                <Tilty className={featuresStyle.boxhero1} glare scale={1.05} maxGlare={0.5}>
                    <div className={featuresStyle.iconbox1}><FiTruck /></div>
                </Tilty>  
                <p className={featuresStyle.titlebox}>Free Worldwide shipping</p>
                <p className={featuresStyle.boxdescribtion}>As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.</p>
            </div>

            <div className={featuresStyle.featuresbox2}>
                <Tilty className={featuresStyle.boxhero2} glare scale={1.05} maxGlare={0.5}>
                    <div className={featuresStyle.iconbox2}><FiCheckCircle /></div>
                </Tilty>    
                <p className={featuresStyle.titlebox}>Best Quality Product</p>
                <p className={featuresStyle.boxdescribtion}>Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.</p>
            </div>

            <div className={featuresStyle.featuresbox3}>
            <Tilty className={featuresStyle.boxhero3} glare scale={1.05} maxGlare={0.5}>
            <div className={featuresStyle.iconbox3}><FiTrendingUp /></div>
            </Tilty>
                <p className={featuresStyle.titlebox}>Very Affordable Pricing</p>
                <p className={featuresStyle.boxdescribtion}>Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.</p>
            </div>
            </div>
        </div>
    )
}