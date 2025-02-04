import React from 'react';
import { Briefcase, Phone, Shield, DollarSign, TestTube, Facebook, Twitter, Instagram, Mail, Clock, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <header className="bg-white shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-6 py-4 w-[90%] max-w-4xl backdrop-blur-md bg-opacity-75">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded">
              <span id="logo-m" className="text-xl font-bold relative -right-0">m</span>
            </div>
            <span className="text-xl font-bold">mobilhandel</span>
          </div>
          <nav className="md:flex space-x-8">
            <a href="https://www.finn.no/profile/ads?userId=863791344" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">Se Produkter</a>
            <a href="#aboutUs" className="text-gray-600 hover:text-black" onClick={(e) => {e.preventDefault(); document.getElementById('aboutUs').scrollIntoView({ behavior: 'smooth' });}}>Om Oss</a>
            <a href="#contact" className="text-gray-600 hover:text-black" onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });}}>Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Mobiler,<br />Uslåelige Priser
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Oppdag brukte smarttelefoner som ser og føles som nye.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <a href="https://www.finn.no/profile/ads?userId=863791344" target="_blank" rel="noopener noreferrer">
              Se våre produkter på finn.no
            </a>
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=80" 
              alt="Populære Smarttelefoner" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - unchanged */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ordentlig Testing</h3>
              <p className="text-gray-600">Hver telefon er grundig testet og sjekket for å sikre at de er feilfrie.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Konkurransedyktige Priser</h3>
              <p className="text-gray-600">Få toppmodeller til en brøkdel av originalprisen.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <TestTube className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pålitelig kundeservice</h3>
              <p className="text-gray-600">Vi svarer raskt og sender mobilen innen 1 virkedag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - updated */}
      <section id="aboutUs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Om Oss</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Vår Historie</h3>
              <p className="text-gray-600 leading-relaxed">
                Mobilhandel har etablert seg som en pålitelig aktør i markedet for brukte 
                smarttelefoner, vi har gjennom tiden fått flere vellykkede salg og fornøyde kunder på Finn.no. 
                Vår suksess er bygget på et solid fundament av kundetilfredshet og ekspertise 
                innen mobilteknologi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Med en imponerende samling av femstjerners anmeldelser og positive tilbakemeldinger, 
                har vi bevist vårt engasjement for kvalitet og kundeservice. Vår lidenskap for 
                teknologi og bærekraft driver oss til å gi hver eneste mobiltelefon et nytt liv, 
                samtidig som vi bidrar til å redusere elektronisk avfall.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                alt="Mobiltelefon service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hva Våre Kunder Sier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Trond C.', text: 'Fantastisk kjøper, seriøs og trygg.' },
              { name: 'Ronja M.', text: 'Helt fantastisk! Hyggelig og kjapp! Anbefales på det sterkeste! Alt kom like hel frem også :D' },
              { name: 'Christian S.', text: 'Tipp topp, akkurat som beskrevet! :)' },
            ].map((testimonial, index) => (
              <blockquote key={index} className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <footer className="font-semibold">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
         <p className="text-sm text-gray-500 text-center mt-4">*Anmeldelser hentet fra <a href='https://www.finn.no/profile/reviews?userId=863791344' className='underline text-gray-600 hover:text-gray-800' target='_blank' rel='noopener noreferrer'>finn.no</a></p>
      </section>

      {/*Footer*/}
      <footer id="contact" className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt Oss</h3>
              <div className="space-y-2">
                <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> mobilforhandleren@gmail.com</p>
                <p className="flex items-center"><Briefcase className="h-5 w-5 mr-2" />Org. nr: 834959852</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Om Mobilhandel</h3>
              <p className="text-gray-400">
                Vi spesialiserer oss i brukte smarttelefoner av høy kvalitet til rimelige priser.  
                Vårt mål er å gi deg en trygg og enkel mobilhandel med rask levering og god kundeservice.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
             Mobilhandel {new Date().getFullYear()}
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;