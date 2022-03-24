import featuresStyle from './features.module.css'
import { FiTruck,FiCheckCircle,FiTrendingUp } from "react-icons/fi";
import { FaRegMoneyBillAlt,FaBroadcastTower } from "react-icons/fa";
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
                    <center><div className={featuresStyle.shine}></div></center>
                    <div className={featuresStyle.iconbox1}><FaBroadcastTower /></div>
                </Tilty>  
                <p className={featuresStyle.titlebox}>Free Worldwide shipping</p>
                <p className={featuresStyle.boxdescribtion}>I serve remotely all over the world full time.</p>
            </div>

            <div className={featuresStyle.featuresbox2}>
                <Tilty className={featuresStyle.boxhero2} glare scale={1.05} maxGlare={0.5}>
                <center><div className={featuresStyle.shine}></div></center>
                    <div className={featuresStyle.iconbox2}><FiCheckCircle /></div>
                </Tilty>    
                <p className={featuresStyle.titlebox}>Best Quality Product</p>
                <p className={featuresStyle.boxdescribtion}>I will make your project with the best quality and the most up-to-date technologies for the development of your business.</p>
            </div>

            <div className={featuresStyle.featuresbox3}>
            <Tilty className={featuresStyle.boxhero3} glare scale={1.05} maxGlare={0.5}>
            <center><div className={featuresStyle.shine}></div></center>
            <div className={featuresStyle.iconbox3}><FaRegMoneyBillAlt /></div>
            </Tilty>
                <p className={featuresStyle.titlebox}>Very Affordable Pricing</p>
                <p className={featuresStyle.boxdescribtion}>With me, you can have quality projects and websites at reasonable prices.</p>
            </div>
            </div>
        </div>
    )
}