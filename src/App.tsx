import React, { useState } from 'react';
import Logo from './components/Logo';
import { 
  Home, 
  Sparkles, 
  Shield, 
  Clock, 
  Users, 
  Leaf, 
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" variant="horizontal" />
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre Nós</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contacto</a>
            </nav>
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Contactar
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    Nova empresa familiar de <span className="text-blue-600">limpeza doméstica</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Começamos com paixão pelo detalhe e dedicação total à sua satisfação.
                  </p>
                  <p className="text-lg text-gray-500 font-medium">
                    Qualidade, fiabilidade e cuidado em cada canto da sua casa.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contacto" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl">
                    Contacte-nos Hoje
                  </a>
                  <a href="#servicos" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-center">
                    Ver Serviços
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                  <Logo size="xl" variant="vertical" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Os Nossos Serviços</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções completas de limpeza doméstica adaptadas às suas necessidades específicas, 
                garantindo que cada espaço fica impecável e desinfetado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Limpeza Geral",
                  description: "Limpeza completa de toda a casa incluindo cozinha, casas de banho, quartos e salas.",
                  icon: Home
                },
                {
                  title: "Limpeza Profunda", 
                  description: "Limpeza intensiva incluindo locais de difícil acesso e desinfeção detalhada.",
                  icon: Sparkles
                },
                {
                  title: "Manutenção Regular",
                  description: "Serviços de limpeza programados para manter a sua casa sempre limpa e bem cuidada.",
                  icon: Calendar
                },
                {
                  title: "Limpeza de Vidros",
                  description: "Limpeza cristalina de janelas e vidros para uma transparência perfeita.",
                  icon: Star
                },
                {
                  title: "Limpeza Pós-Mudança",
                  description: "Limpeza completa para entradas e saídas de casa, preparação para novos ocupantes.",
                  icon: Home
                },
                {
                  title: "Limpeza de Fim de Semana",
                  description: "Serviço especial para fins de semana, ideal para preparar a casa para a nova semana.",
                  icon: Clock
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Marinha Limpezas</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A Marinha Limpezas é um novo negócio familiar dedicado a fornecer serviços de limpeza doméstica excepcionais. 
                    Com paixão pelo detalhe e compromisso com a qualidade, estamos aqui para fazer a diferença na sua casa.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Utilizamos produtos ecológicos e equipamentos profissionais para entregar resultados impecáveis. 
                    Cada casa é tratada com o máximo cuidado e atenção, porque compreendemos que uma casa limpa é essencial 
                    para o seu bem-estar e tranquilidade.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "100%", label: "Dedicação", icon: CheckCircle },
                    { value: "Nova", label: "Empresa Familiar", icon: Users },
                    { value: "Eco", label: "Produtos Amigáveis", icon: Leaf },
                    { value: "24/7", label: "Disponível", icon: Clock }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Porquê Escolher-nos</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Paixão pelo Detalhe",
                        description: "Dedicamos tempo e atenção a cada espaço, garantindo que todos os detalhes ficam impecáveis.",
                        icon: Sparkles
                      },
                      {
                        title: "Totalmente Seguros", 
                        description: "Contamos com seguro completo e utilizamos apenas produtos seguros e ecológicos.",
                        icon: Shield
                      },
                      {
                        title: "Flexibilidade Total",
                        description: "Adaptamos os nossos horários e serviços às suas necessidades específicas.",
                        icon: Clock
                      },
                      {
                        title: "Atendimento Pessoal",
                        description: "Como negócio familiar, oferecemos um serviço personalizado e direto.",
                        icon: Users
                      },
                      {
                        title: "Produtos Ecológicos",
                        description: "Utilizamos produtos de limpeza ecológicos e sustentáveis.",
                        icon: Leaf
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Pronto para Começar!</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Estamos preparados para oferecer serviços de limpeza de qualidade superior. 
              Contacte-nos para saber mais sobre como podemos ajudar.
            </p>
            <a href="#contacto" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center shadow-lg hover:shadow-xl">
              Contacte-nos Hoje
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Contacte-nos</h2>
              <p className="text-xl text-gray-600">
                Estamos prontos para oferecer serviços de limpeza de qualidade. Contacte-nos para um orçamento personalizado!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Informações de Contacto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: Phone, label: "Telefone", value: "+351 932 683 051" },
                    { icon: Mail, label: "Email", value: "vaniamarinha0412@gmail.com" },
                    { icon: MapPin, label: "Localização", value: "Póvoa de Lanhoso, Braga" },
                    { icon: Clock, label: "Disponibilidade", value: "Seg-Sáb: 08:00 - 18:00" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-lg">{contact.label}</div>
                        <div className="text-gray-600 text-lg">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2 space-y-6">
                <div className="text-white">
                  <Logo size="md" variant="horizontal" />
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Nova empresa familiar de limpeza doméstica. Começamos com paixão pelo detalhe e dedicação total à sua satisfação.
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Serviços</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza Geral</a></li>
                  <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza Profunda</a></li>
                  <li><a href="#servicos" className="hover:text-white transition-colors">Manutenção Regular</a></li>
                  <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza de Vidros</a></li>
                  <li><a href="#servicos" className="hover:text-white transition-colors">Limpeza Pós-Mudança</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contactos</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +351 932 683 051
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    vaniamarinha0412@gmail.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Póvoa de Lanhoso, Braga
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Seg-Sáb: 08:00 - 18:00
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Marinha Limpezas. Todos os direitos reservados. Nova empresa de limpeza doméstica em que pode confiar.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;