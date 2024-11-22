import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { ConvertKitForm } from "./components/ConvertKitForm"

interface Speaker {
  name: string
  organization: string
  image: string
  linkedIn: string
  darkBg?: boolean
}

const speakers: Speaker[] = [
  {
    name: "Regina Pedroso",
    organization: "ABToken",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/regina_pedroso_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/regina-pedroso-991a3b33/"
  },
  {
    name: "Pedro Eroles",
    organization: "Eroles Advogados",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/eroles_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/pedro-eroles-a18224151/"
  },
  {
    name: "Fabio Araújo",
    organization: "Central Bank of Brazil",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/fabio_araujo_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/fabio-araujo-5922274/",
    darkBg: true
  },
  {
    name: "Diego Rodriguez",
    organization: "A/C/R Legal in Chile",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/diego_rodriguez_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/diego-rodr%C3%ADguez-vald%C3%A9s/",
    darkBg: true
  },
  {
    name: "Daniel Levi",
    organization: "Beccar Varela in Argentina",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/daniel_levi_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/daniel-a-levi/",
    darkBg: true
  },
  {
    name: "Juan Carlos Ollivier",
    organization: "Creel in Mexico",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/juan_carlos_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/juan-carlos-ollivier-39b8331/",
    darkBg: true
  },
  {
    name: "Jorge Sánchez",
    organization: "Brigard Urrutia in Colombia",
    image: "https://letsmediahub.com.br/wp-content/uploads/2024/11/jorge_alberto_perfil.jpeg",
    linkedIn: "https://www.linkedin.com/in/jorgealbertopadillasanchez/",
    darkBg: true
  }
]

export function App() {
  const speakersRef = useRef<HTMLElement>(null)
  const registerRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate')
    heroElements.forEach((el, index) => {
      el.classList.add('opacity-0')
      setTimeout(() => {
        el.classList.remove('opacity-0')
        el.classList.add('opacity-100')
      }, index * 300)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img
                  src="https://letsmediahub.com.br/wp-content/uploads/2024/11/logo.png"
                  alt="Eroles Advogados"
                  className="h-10 w-auto"
                />
                <div className="hidden md:block h-8 w-px bg-gray-200"></div>
                <p className="hidden md:block text-sm text-gray-600 font-medium">Webinar by Eroles Advogados</p>
              </div>
            </div>
            <nav>
              <ul className="flex items-center space-x-8">
                <li><a href="https://www.erolesadvogados.com.br/index.aspx" className="text-sm font-medium text-gray-600 hover:text-[#00A7E1] transition-colors">About</a></li>
                <li><button onClick={() => scrollToSection(speakersRef)} className="text-sm font-medium text-gray-600 hover:text-[#00A7E1] transition-colors">Speakers</button></li>
                <li><button onClick={() => scrollToSection(registerRef)} className="text-sm font-medium text-white bg-[#00A7E1] hover:bg-[#0086b3] px-4 py-2 rounded-full transition-colors">Register Now</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-[#00142F] text-white pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://letsmediahub.com.br/wp-content/uploads/2024/11/photo-1451187580459-43490279c0fa.avif')"
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-[#00A7E1] hero-animate transition-opacity duration-1000">
                Expert Panel Discussion
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl hero-animate transition-opacity duration-1000">
                <span className="block text-white">Digital Assets</span>
                <span className="block text-[#00A7E1]">around Latam</span>
                <span className="block text-white/90 text-2xl mt-8 font-light leading-relaxed tracking-normal">
                  Expert Analysis of Current Regulations<br className="hidden md:block" /> and Market Development
                </span>
              </h1>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center hero-animate transition-opacity duration-1000 delay-500">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3">
                  <CalendarDays className="h-5 w-5 text-[#00A7E1]" />
                  <span className="text-lg">November 26, 2024</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="h-5 w-5 text-[#00A7E1]" />
                  <span className="text-lg">16:00 (BRT)</span>
                </div>
              </div>
              <Button 
                onClick={() => scrollToSection(registerRef)}
                className="bg-[#00A7E1] hover:bg-[#0086b3] text-white rounded-full px-8 py-6 text-lg font-medium inline-flex items-center gap-2 group"
              >
                Register for Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section ref={speakersRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Organizers</h2>
          <div className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              {speakers.slice(0, 2).map((speaker) => (
                <a 
                  key={speaker.name} 
                  href={speaker.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:-translate-y-1"
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex items-center gap-6 p-6">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-[120px] h-[120px] rounded-full ring-4 ring-[#00A7E1]/10"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                        <p className="text-[#00A7E1] font-medium">{speaker.organization}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00142F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Featured Speakers</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Join our distinguished panel of experts from leading institutions across Latin America
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {speakers.slice(2).map((speaker) => (
              <a
                key={speaker.name}
                href={speaker.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:-translate-y-1"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-[80px] h-[80px] rounded-full ring-2 ring-[#00A7E1]/30"
                  />
                  <div>
                    <h3 className="font-bold text-white text-lg">{speaker.name}</h3>
                    <p className="text-[#00A7E1]">{speaker.organization}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Topics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Regulatory Framework",
                description: "Current regulatory landscape for digital assets in Latin America",
                icon: "📋"
              },
              {
                title: "Market Trends",
                description: "Market developments and trends across the region",
                icon: "📈"
              },
              {
                title: "Compliance",
                description: "Compliance challenges and solutions",
                icon: "✓"
              },
              {
                title: "Future Outlook",
                description: "Future outlook and opportunities",
                icon: "🔮"
              }
            ].map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={registerRef} className="py-20 bg-[#00142F]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <ConvertKitForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#00142F] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://letsmediahub.com.br/wp-content/uploads/2024/11/logo_branco.png"
              alt="Eroles Advogados"
              className="h-10 w-auto"
            />
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Eroles Advogados. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}