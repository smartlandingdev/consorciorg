import { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [heroVisible, setHeroVisible] = useState(true)

  // Observa quando o hero está visível para esconder/mostrar o header
  useEffect(() => {
    const heroElement = document.getElementById('hero')
    if (!heroElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.intersectionRatio > 0.7)
      },
      {
        threshold: [0, 0.7, 1],
      }
    )

    observer.observe(heroElement)
    return () => observer.disconnect()
  }, [])

  const whatsappNumber = '5541332358906'
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre consórcio imobiliário.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        heroVisible ? 'bg-transparent shadow-none' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Ademicon"
              className="h-20 md:h-32 w-auto"
              src="/logo-ademicon.png"
            />
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-emerald-700 text-white hover:bg-emerald-800"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Planejamento Imobiliário"
            className="w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Consórcio imobiliário como estratégia de planejamento patrimonial
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Planejamento imobiliário sem juros, com visão de longo prazo e atendimento direto com licenciado Ademicon.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-700 text-white text-lg font-medium rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            Conversar com calma no WhatsApp
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-sm font-medium">Role para saber mais</span>
            <i className="ri-arrow-down-line text-2xl animate-bounce"></i>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Você trabalha, paga contas… mas sente que o futuro está sempre ficando para depois?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Não é falta de esforço. Você acorda cedo, trabalha duro, cumpre suas obrigações. Mas no fim do mês, o dinheiro vai embora e a sensação é sempre a mesma: <strong>o patrimônio não cresce</strong>.
            </p>
            <p>
              O problema não é você. É a <strong>falta de uma estratégia clara</strong> que organize seu dinheiro de forma previsível e construa algo sólido ao longo do tempo.
            </p>
            <p>
              Muitas pessoas vivem no piloto automático financeiro: ganham, gastam, pagam contas… e o sonho da casa própria ou de um patrimônio consolidado fica sempre para "um dia".
            </p>
            <p className="text-xl font-semibold text-emerald-700 mt-8">
              E se existisse uma forma de planejar isso com clareza, sem juros e sem pressão?
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Consórcio imobiliário não é dívida. É ferramenta.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Muita gente confunde consórcio com financiamento. Mas a diferença é fundamental: <strong>consórcio é planejamento</strong>, não endividamento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-700 text-white rounded-lg mb-5">
                <i className="ri-percent-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sem juros</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Você paga apenas o valor do bem mais a taxa administrativa. Nada de juros compostos que dobram o valor ao longo dos anos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-700 text-white rounded-lg mb-5">
                <i className="ri-calendar-check-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Planejamento previsível</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Parcelas fixas que cabem no seu orçamento. Você sabe exatamente quanto vai pagar e por quanto tempo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-700 text-white rounded-lg mb-5">
                <i className="ri-line-chart-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Construção de patrimônio</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Cada parcela é um passo em direção ao seu objetivo. É disciplina financeira transformada em ativo real.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-700 text-white rounded-lg mb-5">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Segurança e transparência</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Regulamentado pelo Banco Central, com regras claras e proteção ao consorciado.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>O consórcio não é para quem quer resolver tudo amanhã.</strong> É para quem entende que patrimônio se constrói com estratégia, disciplina e visão de longo prazo. É para quem prefere pagar menos e planejar melhor.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Quem vai conversar com você
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-lg overflow-hidden bg-gray-200 flex flex-col items-center justify-center">
                  <i className="ri-user-line text-6xl text-gray-400"></i>
                  <span className="text-sm text-gray-400 mt-2">Sem foto</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Rafael Bernardo Garcia - Licenciado Ademicon
                </h3>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed mt-6">
                  <p>
                    Atuação focada em <strong>planejamento imobiliário</strong> e construção de patrimônio no longo prazo. Não trabalho com venda agressiva ou promessas vazias.
                  </p>
                  <p>
                    Meu papel é <strong>ouvir, entender sua realidade e apresentar caminhos</strong> que façam sentido para o seu momento de vida e seus objetivos.
                  </p>
                  <p>
                    Atendimento direto, transparente, sem empurrar produto. Se o consórcio não for a melhor opção para você agora, vou dizer isso com clareza.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-700 text-white rounded-lg">
                    <i className="ri-whatsapp-line text-xl"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">WhatsApp direto</p>
                    <p className="text-lg font-semibold text-gray-900">(41) 3323-5806</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Para quem essa conversa faz sentido
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Esta não é uma página de venda agressiva. É um convite para uma conversa estratégica sobre planejamento patrimonial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-compass-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Busca planejamento e previsibilidade financeira
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-home-heart-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Quer construir patrimônio sem pagar juros
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-book-open-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Prefere entender antes de decidir
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-time-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Valoriza visão de longo prazo
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-user-heart-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Aprecia atendimento humano e transparente
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-lg flex-shrink-0">
                <i className="ri-shield-star-line text-xl"></i>
              </div>
              <p className="text-base text-gray-800 leading-relaxed pt-2">
                Busca segurança e solidez nas decisões
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-gray-400">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Se você se identificou com esses pontos</strong>, vale a pena conversarmos. Não há compromisso, não há pressão. Apenas uma conversa clara sobre possibilidades reais de planejamento imobiliário.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sem compromisso. Sem pressão.
          </h2>
          <p className="text-xl text-white/95 mb-4 leading-relaxed">
            Vamos conversar com calma sobre planejamento imobiliário e ver se faz sentido para você.
          </p>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Não há obrigação de fechar nada. É apenas uma conversa transparente sobre possibilidades reais.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-3xl"></i>
            Chamar no WhatsApp
          </a>
          <div className="mt-10 flex items-center justify-center gap-3 text-white/90">
            <i className="ri-time-line text-2xl"></i>
            <p className="text-base">Resposta rápida e atendimento direto com Rafael</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <img
                alt="Ademicon"
                className="h-28 w-auto mb-4"
                src="/logo-ademicon.png"
              />
              <p className="text-base text-gray-400 leading-relaxed">
                Planejamento imobiliário com visão de longo prazo e atendimento transparente.
              </p>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <i className="ri-user-line text-emerald-400 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold">Rafael Bernardo Garcia - Licenciado Ademicon</p>
                  </div>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  <span className="font-medium">(41) 3323-5806</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-bold mb-4">Sobre o Consórcio</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-400 mt-1"></i>
                  <span>Sem juros</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-400 mt-1"></i>
                  <span>Planejamento de longo prazo</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-400 mt-1"></i>
                  <span>Regulamentado pelo Banco Central</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-400 mt-1"></i>
                  <span>Atendimento transparente</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-base text-gray-400 text-center md:text-left">
                <strong className="text-emerald-400">Consórcio é planejamento. Não promessa.</strong>
              </p>
              <div className="text-sm text-gray-500 text-center md:text-right">
                <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
                <p className="mt-1">
                  Desenvolvido por{' '}
                  <a
                    href="https://www.smartlanding.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    SmartLanding
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
