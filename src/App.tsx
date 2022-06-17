import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
            </main>
            <Footer />
        </>
    )
}
