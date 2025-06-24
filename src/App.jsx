import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <h1 className="text-8xl text-amber-300">Welcome to My App</h1>
    </main>
  )
}

export default App