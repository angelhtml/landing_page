
import { Description } from '../moonlight/Description';
import { Features } from '../moonlight/Features';
import Header from '../moonlight/Header';
import Moonlight from '../moonlight/Moonlight';
import { Technology } from '../moonlight/Technology';
import { Seo } from '../moonlight/Seo';
import { Projects } from '../moonlight/Projects';
import { Footer } from '../moonlight/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
//import dynamic from 'next/dynamic';
/*const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false
    });<AnimatedCursor color='0, 255, 251'   outerAlpha={0.2}  innerSize={15} outerSize={15} innerScale={0.7} outerScale={5}/>
*/
function App(){
  return(
    <div>
      <Header />
      <Moonlight />
      <AnimationOnScroll animateIn="animate__fadeIn" offset='200' duration={2}>
      <Features />
      </AnimationOnScroll>
      <Technology />
      <Description />
      <Seo />
      <Projects />
      <AnimationOnScroll animateIn="animate__backInUp" offset='500' duration={1}>
      <Footer />
      </AnimationOnScroll>
    </div>
  )
}
export default App



  