import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const plans = [
    { value: 'R$ 80.000', price: 'R$ 270,00*', message: 'Olá! Gostaria de adquirir um consórcio de 80 mil.' },
    { value: 'R$ 100.000', price: 'R$ 337,00*', message: 'Olá! Gostaria de adquirir um consórcio de 100 mil.' },
    { value: 'R$ 200.000', price: 'R$ 679,00*', message: 'Olá! Gostaria de adquirir um consórcio de 200 mil.' },
    { value: 'R$ 250.000', price: 'R$ 849,00*', message: 'Olá! Gostaria de adquirir um consórcio de 250 mil.' },
    { value: 'R$ 300.000', price: 'R$ 1.020,00*', message: 'Olá! Gostaria de adquirir um consórcio de 300 mil.' },
    { value: 'R$ 400.000', price: 'R$ 1.357,00*', message: 'Olá! Gostaria de adquirir um consórcio de 400 mil.' },
    { value: 'R$ 500.000', price: 'R$ 1.827,00*', message: 'Olá! Gostaria de adquirir um consórcio de 500 mil.' },
    { value: 'R$ 1 milhão', price: 'R$ 5.550,00*', message: 'Olá! Gostaria de adquirir um consórcio de 1 milhão.' },
  ]

  const whatsappNumber = '554133235806'
  const getWhatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <Link to="/">
                <img
                  alt="RG Consórcios & Investimentos"
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                  src="/logo.png"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                to="/"
                className={`text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled ? 'text-gray-800 hover:text-[#0A4D68]' : 'text-white hover:text-gray-200'
                }`}
              >
                Início
              </Link>
              <Link
                to="/sobre-consultor"
                className={`text-sm lg:text-base font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled ? 'text-gray-800 hover:text-[#0A4D68]' : 'text-white hover:text-gray-200'
                }`}
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
              <i className={`text-2xl ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'} ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
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
                  className="text-base font-medium text-gray-700 hover:text-[#0A4D68] px-2 py-2"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A4D68]/40 via-[#0A4D68]/30 to-[#0A4D68]/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Consórcio Imobiliário de R$ 80.000 com parcelas a partir de{' '}
              <span className="text-[#0A4D68]">R$ 270,00*</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
              Poupe todo mês, sem juros, e conquiste seu imóvel com planejamento e segurança.
            </p>
            <a
              href={getWhatsappLink('Olá! Gostaria de saber mais sobre consórcio imobiliário.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#0A4D68] hover:bg-[#083D52] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              <i className="ri-whatsapp-fill text-xl sm:text-2xl"></i>
              <span className="hidden sm:inline">Falar no WhatsApp agora</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68]/10 rounded-full">
                  <i className="ri-percent-line text-xl sm:text-2xl text-[#0A4D68]"></i>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">Sem juros</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68]/10 rounded-full">
                  <i className="ri-bank-line text-xl sm:text-2xl text-[#0A4D68]"></i>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">Regulamentado pelo BC</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68]/10 rounded-full">
                  <i className="ri-smartphone-line text-xl sm:text-2xl text-[#0A4D68]"></i>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">100% online</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68]/10 rounded-full">
                  <i className="ri-shield-check-line text-xl sm:text-2xl text-[#0A4D68]"></i>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">Licenciada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Você trabalha, paga aluguel e o dinheiro nunca sobra?
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              <p className="font-medium">Todo mês o dinheiro sai da sua conta.</p>
              <p className="font-medium">O aluguel não volta.</p>
              <p className="font-medium">O financiamento cobra juros altos.</p>
            </div>
            <div className="mt-8 sm:mt-12 p-5 sm:p-8 bg-[#0D9488]/5 rounded-xl sm:rounded-2xl border-2 border-[#0D9488]/20">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                Enquanto isso, o sonho do imóvel próprio fica cada vez mais distante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16">
            Financiamento ou Consórcio: entenda a diferença
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-red-100 rounded-full">
                  <i className="ri-close-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Financiamento</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-up-line text-lg sm:text-xl text-red-600 mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Juros altos</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-time-line text-lg sm:text-xl text-red-600 mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Dívida longa</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-bank-line text-lg sm:text-xl text-red-600 mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Banco ganha primeiro</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0A4D68]/5 border-2 border-[#0A4D68] rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68]/20 rounded-full">
                  <i className="ri-check-line text-xl sm:text-2xl text-[#0A4D68]"></i>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Consórcio</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <i className="ri-percent-line text-lg sm:text-xl text-[#0A4D68] mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Sem juros</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-calendar-check-line text-lg sm:text-xl text-[#0A4D68] mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Poupança mensal</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-user-smile-line text-lg sm:text-xl text-[#0A4D68] mt-0.5 sm:mt-1"></i>
                  <span className="text-base sm:text-lg font-medium text-gray-800">Você constrói patrimônio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-10">
              O consórcio é uma forma inteligente de comprar um imóvel
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
              <p>
                Com o consórcio você transforma a parcela mensal em <strong>patrimônio</strong>.
              </p>
              <p>Você não paga juros e se organiza para conquistar seu bem no tempo certo.</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A4D68] mt-6 sm:mt-8">
                É ideal para quem quer poupar com objetivo.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mt-10 sm:mt-16">
              {[
                { icon: 'ri-home-smile-line', label: 'Planejamento' },
                { icon: 'ri-shield-check-line', label: 'Segurança' },
                { icon: 'ri-percent-line', label: 'Sem juros' },
                { icon: 'ri-line-chart-line', label: 'Patrimônio' },
                { icon: 'ri-calendar-check-line', label: 'Organização' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0A4D68]/10 rounded-full">
                    <i className={`${item.icon} text-2xl sm:text-3xl text-[#0A4D68]`}></i>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Escolha o Consórcio Ideal para Você
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">Planos a partir de R$ 270,00 mensais</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedPlan === index
                      ? 'border-[#0A4D68] bg-[#0A4D68]/5 shadow-lg'
                      : 'border-gray-200 hover:border-[#0A4D68]/50'
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <div className="text-center mb-3 sm:mb-4">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{plan.value}</p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">a partir de</p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#0A4D68] mb-2 sm:mb-4">{plan.price}</p>
                  </div>
                  <a
                    href={getWhatsappLink(plan.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 sm:gap-2 bg-[#0A4D68] hover:bg-[#083D52] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer w-full"
                  >
                    <i className="ri-whatsapp-fill text-base sm:text-lg"></i>
                    <span className="hidden sm:inline">Quero este</span>
                    <span className="sm:hidden">Quero</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 sm:mb-4">
                Você pode adquirir Casa, apartamento, reforma ou Vender sua carta contemplada com Lucro.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700">Ideal para quem quer:</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              {[
                { icon: 'ri-door-open-line', label: 'Sair do aluguel' },
                { icon: 'ri-home-heart-line', label: 'Comprar imóvel' },
                { icon: 'ri-hammer-line', label: 'Construir' },
                { icon: 'ri-line-chart-line', label: 'Investir' },
                { icon: 'ri-safe-line', label: 'Poupar todo mês' },
                { icon: 'ri-building-line', label: 'Realizar sonhos' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-[#0A4D68]/5 to-[#0A4D68]/10 rounded-lg sm:rounded-xl border border-[#0A4D68]/20 hover:border-[#0A4D68] transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0A4D68] rounded-full flex-shrink-0">
                    <i className={`${item.icon} text-lg sm:text-2xl text-white`}></i>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0A4D68] to-[#083D52] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-center text-white shadow-2xl">
              <p className="text-base sm:text-xl lg:text-2xl text-white/90 mb-2 sm:mb-4">Plano selecionado:</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{plans[selectedPlan].value}</p>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
                Parcelas a partir de <span className="text-3xl sm:text-5xl lg:text-6xl">{plans[selectedPlan].price}</span>
              </p>
              <a
                href={getWhatsappLink(plans[selectedPlan].message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#0A4D68] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-xl sm:text-2xl"></i>
                <span className="hidden sm:inline">Quero simular no WhatsApp</span>
                <span className="sm:hidden">Simular</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Também indicado para empresários e investidores
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Muitos empresários utilizam o consórcio para adquirir{' '}
                    <strong>diversas cartas de R$ 100.000</strong>, elaborando estratégias patrimoniais de
                    médio e longo prazo.
                  </p>
                  <p className="font-semibold text-[#0D9488] text-lg sm:text-xl">
                    Cada plano é elaborado de forma personalizada.
                  </p>
                </div>
                <a
                  href={getWhatsappLink('Olá! Sou empresário e gostaria de saber mais sobre estratégias patrimoniais com consórcio.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-[#0D9488] hover:bg-[#0F766E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mt-6 sm:mt-8 cursor-pointer"
                >
                  <i className="ri-user-star-line text-lg sm:text-xl"></i>
                  Falar com especialista
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { icon: 'ri-briefcase-line', label: 'Estratégia patrimonial', color: 'bg-blue-500' },
                  { icon: 'ri-line-chart-line', label: 'Múltiplas cartas', color: 'bg-green-500' },
                  { icon: 'ri-calendar-line', label: 'Médio e longo prazo', color: 'bg-purple-500' },
                  { icon: 'ri-user-settings-line', label: 'Plano personalizado', color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${item.color} rounded-lg sm:rounded-xl mb-3 sm:mb-4`}>
                      <i className={`${item.icon} text-2xl sm:text-3xl text-white`}></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16">
            Por que escolher a RG Consórcios & Investimentos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'ri-award-line',
                title: 'Administradora Licenciada',
                description: 'Autorizada pela Ademicon com mais de 30 anos de mercado',
              },
              {
                icon: 'ri-bank-line',
                title: 'Regulamentada',
                description: 'Regulamentada pelo Banco Central do Brasil',
              },
              {
                icon: 'ri-customer-service-line',
                title: 'Atendimento Consultivo',
                description: 'Atendimento transparente e personalizado',
              },
              {
                icon: 'ri-map-pin-line',
                title: 'Atuação Nacional',
                description: 'Atendemos em todo o Brasil',
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Segurança',
                description: 'Transparência e confiança em cada etapa',
              },
              {
                icon: 'ri-smartphone-line',
                title: '100% Online',
                description: 'Atendimento digital completo',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#0A4D68] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#0A4D68] rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                  <i className={`${item.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-br from-[#0A4D68] to-[#083D52] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Pare de pagar juros. Comece a poupar agora.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12">
              <p className="font-medium">Quanto mais você adia, mais tempo perde.</p>
              <p className="font-semibold text-xl sm:text-2xl lg:text-3xl">Comece hoje a construir seu patrimônio.</p>
            </div>
            <a
              href={getWhatsappLink('Olá! Quero começar a construir meu patrimônio com consórcio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 bg-white hover:bg-gray-100 text-[#0A4D68] px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full text-base sm:text-xl lg:text-2xl font-bold transition-all duration-300 shadow-2xl transform hover:scale-105 cursor-pointer"
            >
              <i className="ri-whatsapp-fill text-2xl sm:text-3xl"></i>
              <span className="hidden sm:inline">Quero falar no WhatsApp agora</span>
              <span className="sm:hidden">WhatsApp agora</span>
            </a>
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm lg:text-base font-medium">Resposta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm lg:text-base font-medium">Atendimento seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-customer-service-line text-lg sm:text-xl"></i>
                <span className="text-xs sm:text-sm lg:text-base font-medium">Consultoria gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong>*Valores ilustrativos.</strong> As parcelas podem variar conforme plano, prazo, taxa
              administrativa e fundo de reserva. A contemplação ocorre por sorteio ou lance, conforme
              regulamento do grupo. Não há garantia de contemplação imediata.
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
                  className="h-8 sm:h-10 w-auto"
                  src="/logo.png"
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 text-center order-3 sm:order-2">
              © {new Date().getFullYear()} RG Consórcios & Investimentos. Todos os direitos reservados.
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

export default App
