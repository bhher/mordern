import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ArrowRight, Code, Layout, Smartphone, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
                  Build faster with <span className="text-primary">React & Tailwind</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-8">
                  Create stunning, responsive web applications with a clean, modern architecture. 
                  Designed for performance and scalability.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="primary" className="gap-2">
                    Get Started <ArrowRight size={18} />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              
              {/* Hero Image / Illustration */}
              <div className="mt-16 relative">
                 <div className="rounded-xl overflow-hidden shadow-2xl bg-slate-800 aspect-[16/9] flex items-center justify-center text-slate-400">
                    <img 
                      src="https://picsum.photos/1200/600" 
                      alt="Modern Dashboard Interface" 
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                 </div>
              </div>
            </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  We craft digital experiences
                </h3>
                <p className="mt-4 text-lg text-slate-500">
                  We are a team of passionate developers and designers dedicated to building high-quality web solutions.
                  Our philosophy centers on user experience, clean code, and modern aesthetics.
                </p>
                
                <div className="mt-8 space-y-4">
                  {[
                    "Expert team of engineers",
                    "Agile development methodology",
                    "Focus on performance & SEO",
                    "24/7 dedicated support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/600/500" 
                  alt="Team working together" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What we can do for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Layout className="h-8 w-8 text-white" />, 
                  title: "Web Design", 
                  desc: "Beautiful, pixel-perfect layouts designed to engage your audience and reflect your brand identity." 
                },
                { 
                  icon: <Code className="h-8 w-8 text-white" />, 
                  title: "Web Development", 
                  desc: "Robust, scalable, and secure web applications built using the latest technologies like React and Node.js." 
                },
                { 
                  icon: <Smartphone className="h-8 w-8 text-white" />, 
                  title: "Mobile Solutions", 
                  desc: "Responsive designs that look great on any device, ensuring a seamless experience for mobile users." 
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-slate-100">
                  <div className="inline-flex items-center justify-center p-3 bg-primary rounded-lg shadow-lg mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portfolio</h2>
               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                 Our recent work
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer">
                  <img 
                    src={`https://picsum.photos/400/300?random=${item}`} 
                    alt={`Project ${item}`} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-medium text-sm">Category</span>
                    <h3 className="text-white text-xl font-bold">Project Title {item}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline">View All Projects</Button>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Contact Info */}
                <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                    <p className="text-slate-300 mb-8">
                      Ready to start your next project? Fill out the form or reach out to us directly.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="mt-1 text-primary" />
                        <span>123 Innovation Drive<br/>Tech City, TC 90210</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="text-primary" />
                        <span>hello@moderntech.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12">
                     <p className="text-sm text-slate-400">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-10">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;