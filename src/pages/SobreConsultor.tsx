import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function SobreConsultor() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = '554133235806'
  const getWhatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

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
                to="/sobre-consultor"
                className="text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer text-[#0A4D68]"
              >
                Sobre o Consultor
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
                  to="/sobre-consultor"
                  className="text-base font-medium text-[#0A4D68] px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre o Consultor
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
                <i className="ri-shield-check-line text-base sm:text-lg"></i>
                Licenciado Ademicon
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Rafael Garcia
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium mb-8 sm:mb-12">
              Consultor Licenciado Ademicon
            </p>

            {/* Avatar Placeholder */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#0A4D68] to-[#05668D] flex items-center justify-center shadow-2xl">
                <i className="ri-user-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/90"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Sobre o Consultor
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="text-lg sm:text-xl font-medium text-gray-900">
                Sou Rafael Garcia, Licenciado Ademicon.
              </p>
              <p>
                Meu papel não é vender consórcio, mas{' '}
                <strong>ajudar você a entender se essa estratégia faz sentido</strong> para seu
                patrimônio pessoal ou empresarial.
              </p>
              <p>
                Trabalho com uma <strong>abordagem consultiva e educacional</strong>, focada em
                planejamento patrimonial de médio e longo prazo. Não uso linguagem de vendedor
                porque não estou aqui para empurrar produtos — estou aqui para apresentar uma
                ferramenta estratégica que pode ou não fazer sentido para você.
              </p>
              <p>
                Se fizer sentido, vamos conversar. Se não fizer, sem problema.{' '}
                <strong>Transparência e clareza são os pilares do meu trabalho.</strong>
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#0A4D68] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0A4D68] rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <i className="ri-lightbulb-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Abordagem Consultiva
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Foco em educação financeira e planejamento estratégico, não em vendas agressivas.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#0A4D68] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0A4D68] rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <i className="ri-eye-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Transparência Total
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Informações claras e honestas sobre vantagens, limitações e adequação ao seu perfil.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#0A4D68] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0A4D68] rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <i className="ri-line-chart-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Visão de Longo Prazo
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Planejamento patrimonial estratégico pensando no seu futuro financeiro.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#0A4D68] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0A4D68] rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <i className="ri-user-heart-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Atendimento Personalizado
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Cada cliente tem necessidades únicas. Meu trabalho é entender a sua realidade.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-gradient-to-br from-[#0A4D68] to-[#05668D] rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 text-white">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-lg sm:rounded-xl flex-shrink-0">
                <i className="ri-award-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Credenciais Profissionais</h3>
                <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                    <span>
                      <strong>Licenciado Ademicon</strong> - Administradora com mais de 30 anos de
                      mercado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                    <span>
                      <strong>Regulamentação Banco Central</strong> - Atuação dentro das normas do
                      sistema financeiro nacional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                    <span>
                      <strong>Especialização em Planejamento Patrimonial</strong> - Foco em
                      estratégias de médio e longo prazo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Vamos conversar sobre seu planejamento?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa sem compromisso para entender se o consórcio é a estratégia certa
            para você.
          </p>
          <a
            href={getWhatsappLink('Olá Rafael! Gostaria de conversar sobre planejamento patrimonial.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0A4D68] text-white text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl hover:bg-[#05668D] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            Falar com Rafael Garcia
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

export default SobreConsultor
