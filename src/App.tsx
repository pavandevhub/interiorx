import { useEffect, useState } from 'react';
import { Home, Clock, DollarSign, CheckCircle2, Phone, MessageCircle, Mail, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import LeadForm from './components/LeadForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#D94C50] rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">InteriorX</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#D94C50] transition-colors">Home</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-[#D94C50] transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-[#D94C50] transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#D94C50] transition-colors">Reviews</button>
              <a href="tel:+919154658651" className="bg-[#D94C50] text-white px-6 py-2.5 rounded-lg hover:bg-[#c43d41] transition-all shadow-lg hover:shadow-xl">
                Contact Us
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#D94C50] transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-[#D94C50] transition-colors text-left">Why Us</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-[#D94C50] transition-colors text-left">Portfolio</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#D94C50] transition-colors text-left">Reviews</button>
                <a href="tel:+919154658651" className="bg-[#D94C50] text-white px-6 py-2.5 rounded-lg hover:bg-[#c43d41] transition-all text-center">
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                End-to-End Home Interiors in <span className="text-[#D94C50]">Hyderabad</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Design. Execution. Installation. All hassle-free & on time.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#D94C50]" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#D94C50]" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#D94C50]" />
                  <span>45-Day Delivery</span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium interior design services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-[#D94C50]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D94C50] transition-all">
                <Home className="w-8 h-8 text-[#D94C50] group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Stop Design & Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                From conceptualization to installation, we handle everything. No need to coordinate with multiple vendors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-[#D94C50]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D94C50] transition-all">
                <Clock className="w-8 h-8 text-[#D94C50] group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We value your time. Our projects are completed within 45 days with a commitment to meeting deadlines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-[#D94C50]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D94C50] transition-all">
                <DollarSign className="w-8 h-8 text-[#D94C50] group-hover:text-white transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden costs. Get a detailed breakdown of expenses with our transparent pricing policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Our Recent Projects</h2>
            <p className="text-xl text-gray-600">Stunning transformations across Hyderabad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', title: '3BHK, Gachibowli', subtitle: 'Modern Minimal Design' },
              { img: 'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modular Kitchen, Jubilee Hills', subtitle: 'Contemporary Style' },
              { img: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Master Bedroom, Banjara Hills', subtitle: 'Luxury Design' },
              { img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Living Room, Madhapur', subtitle: 'Scandinavian Theme' },
              { img: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Full Home, Kondapur', subtitle: 'Industrial Chic' },
              { img: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Dining Area, Hitech City', subtitle: 'Classic Elegance' }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from real homeowners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ramesh Kumar',
                location: 'Gachibowli, Hyderabad',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
                text: 'Our dream home turned out better than expected! The team was professional, punctual, and delivered exactly what was promised. Highly recommend!'
              },
              {
                name: 'Priya Sharma',
                location: 'Jubilee Hills, Hyderabad',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
                text: 'Amazing work on our modular kitchen. The design is both functional and beautiful. The entire process was smooth and stress-free.'
              },
              {
                name: 'Vikram Reddy',
                location: 'Banjara Hills, Hyderabad',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
                text: 'Transparent pricing, on-time delivery, and outstanding quality. We are extremely happy with our new home interiors. Worth every penny!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D94C50]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Design Your Dream Home</h2>
            <p className="text-xl text-gray-300">Get a Free Consultation!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <LeadForm variant="compact" />
            </div>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-6">Or reach us directly:</h3>
              </div>

              <a
                href="https://wa.me/919154658651?text=Hi,%20I'm%20interested%20in%20home%20interior%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-xl font-semibold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-2xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">WhatsApp Us</span>
              </a>

              <a
                href="tel:+919154658651"
                className="flex items-center justify-center gap-4 bg-[#D94C50] text-white px-8 py-5 rounded-xl font-semibold hover:bg-[#c43d41] transition-all shadow-lg hover:shadow-2xl group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Call Now: +91 91546 58651</span>
              </a>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-center text-lg">
                  <span className="font-semibold">Available:</span> Mon - Sat, 9 AM - 7 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#D94C50] rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">InteriorX</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming houses into dream homes with innovative design and flawless execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start gap-2">
                  <Home className="w-5 h-5 text-[#D94C50] mt-1 flex-shrink-0" />
                  <span>Road No. 36, Jubilee Hills<br />Hyderabad, Telangana</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#D94C50]" />
                  <a href="tel:+919154658651" className="hover:text-[#D94C50] transition-colors">+91 91546 58651</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#D94C50]" />
                  <a href="mailto:pavankalyanchowdary9154@gmail.com" className="hover:text-[#D94C50] transition-colors break-all">
                    pavankalyanchowdary9154@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D94C50] transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D94C50] transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D94C50] transition-all">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InteriorX. All rights reserved. Crafted with excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
