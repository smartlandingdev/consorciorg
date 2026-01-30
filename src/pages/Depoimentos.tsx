import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function Depoimentos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = '554133235806'
  const getWhatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  const depoimentos = [
    {
      nome: 'Cliente',
      descricao: 'Venda de cota contemplada com valorização patrimonial.',
      videoId: 'P-wB2_R8Wnw',
    },
    {
      nome: 'Cliente',
      descricao: 'Experiência do consórcio como investimento.',
      videoId: 'gY67LpVtAn8',
    },
    {
      nome: 'Cliente',
      descricao: 'Investimento em imóveis.',
      videoId: 'lUqHINOQhgk',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <Link to="/">
                <img
                  alt="RG Consórcios & Investimentos"
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                  src="/logo.png"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                to="/"
                className="text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer text-gray-700 hover:text-[#0A4D68]"
              >
                Início
              </Link>
              <Link
                to="/depoimentos"
                className="text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer text-[#0A4D68]"
              >
                Depoimentos
              </Link>
              <a
                href={getWhatsappLink('Olá! Gostaria de saber mais sobre consórcio imobiliário.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-[#0A4D68] text-white text-sm lg:text-base font-semibold rounded-lg hover:bg-[#05668D] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg lg:text-xl"></i>
                <span className="hidden lg:inline">Falar com Consultor</span>
                <span className="lg:hidden">WhatsApp</span>
              </a>
            </div>
            <button
              className="md:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`text-2xl text-gray-900 ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-700 hover:text-[#0A4D68] px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/depoimentos"
                  className="text-base font-medium text-[#0A4D68] px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </Link>
                <a
                  href={getWhatsappLink('Olá! Gostaria de saber mais sobre consórcio imobiliário.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A4D68] text-white text-base font-semibold rounded-lg hover:bg-[#05668D] transition-all duration-300 shadow-md"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  Falar com Consultor
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0A4D68]/10 text-[#0A4D68] rounded-full text-xs sm:text-sm font-semibold">
                <i className="ri-video-line text-base sm:text-lg"></i>
                Histórias Reais
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Depoimentos
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
              Veja como nossos clientes transformaram seus planos em conquistas reais através do consórcio.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#0A4D68] hover:shadow-xl transition-all duration-300"
              >
                {/* Video Container */}
                <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full border-0"
                    src={`https://www.youtube-nocookie.com/embed/${depoimento.videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1&iv_load_policy=3&fs=0`}
                    title={`Depoimento ${depoimento.nome}`}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={false}
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                    {depoimento.nome}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {depoimento.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A4D68] to-[#05668D] rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 text-white text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-lg sm:rounded-xl mx-auto mb-4 sm:mb-6">
              <i className="ri-shield-star-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Resultados que falam por si
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <i className="ri-user-star-line text-2xl sm:text-3xl"></i>
                <p className="text-sm sm:text-base font-medium">Clientes satisfeitos</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <i className="ri-home-heart-line text-2xl sm:text-3xl"></i>
                <p className="text-sm sm:text-base font-medium">Imóveis conquistados</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <i className="ri-hand-heart-line text-2xl sm:text-3xl"></i>
                <p className="text-sm sm:text-base font-medium">Sonhos realizados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Quer ser o próximo a conquistar seu imóvel?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nosso consultor e descubra o plano ideal para o seu objetivo.
          </p>
          <a
            href={getWhatsappLink('Olá! Vi os depoimentos e gostaria de saber mais sobre consórcio imobiliário.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0A4D68] text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl hover:bg-[#05668D] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            Falar com Consultor
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong>*Valores ilustrativos.</strong> As parcelas podem variar conforme plano, prazo,
              taxa administrativa e fundo de reserva. A contemplação ocorre por sorteio ou lance,
              conforme regulamento do grupo. Não há garantia de contemplação imediata.
            </p>
          </div>

          <div className="text-center mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-300">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Uma empresa da <strong>RG Holding Investimentos</strong>
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Licenciado <strong>Ademicon Consórcios e Investimentos</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center">
              <Link to="/">
                <img
                  alt="RG Consórcios & Investimentos"
                  className="h-12 sm:h-14 w-auto"
                  src="/logo.png"
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 text-center order-3 sm:order-2">
              © {new Date().getFullYear()} RG Consórcios & Investimentos. Todos os direitos
              reservados.
            </p>
            <a
              href="https://www.smartlanding.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-500 hover:text-[#0A4D68] transition-colors duration-300 cursor-pointer order-2 sm:order-3"
            >
              Desenvolvido por SmartLanding
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Depoimentos
