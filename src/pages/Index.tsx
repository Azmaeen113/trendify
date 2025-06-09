import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, Globe, Video, TrendingUp, Users, Target, Mail, Phone, Search, Sparkles, Zap, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect, useCallback } from 'react';

const Index = () => {
  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-emerald-600" />,
      title: "Digital Marketing",
      description: "Social media, ads, email campaigns, and more to grow your online presence.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Globe className="h-12 w-12 text-teal-600" />,
      title: "Website Design & Development",
      description: "Custom websites built on Shopify, Wix, and WordPress for maximum impact.",
      gradient: "from-teal-500 to-slate-600"
    },
    {
      icon: <Video className="h-12 w-12 text-slate-600" />,
      title: "Video Marketing & YouTube Growth",
      description: "Professional video editing and YouTube channel optimization.",
      gradient: "from-slate-500 to-emerald-600"
    }
  ];

  const serviceCategories = [
    {
      icon: <TrendingUp className="h-16 w-16 text-emerald-600" />,
      title: "Digital Marketing",
      description: "From Facebook Ads to email funnels, we handle the full spectrum of online marketing. Platforms we cover: Instagram, TikTok, Twitter, LinkedIn, Pinterest, Discord, YouTube, and more.",
      services: [
        "Social media management",
        "Paid advertising (Facebook, Google, Instagram)",
        "Email marketing campaigns",
        "Google Ads optimization",
        "Game marketing strategies",
        "Campaign strategy & analytics"
      ],
      gradient: "from-emerald-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Globe className="h-16 w-16 text-teal-600" />,
      title: "Website Design & Development",
      description: "Custom, conversion-focused websites built on Shopify, Wix, WordPress and more. Whether you're launching a product or scaling a store—we build for performance.",
      services: [
        "Shopify store design & marketing",
        "Wix website development",
        "WordPress custom sites",
        "Landing page optimization",
        "E-commerce solutions",
        "SEO-ready builds"
      ],
      gradient: "from-teal-400 to-slate-500",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Video className="h-16 w-16 text-slate-600" />,
      title: "Video Marketing & YouTube Growth",
      description: "Create scroll-stopping content that converts. We help you plan, edit, optimize, and promote video content for YouTube and beyond.",
      services: [
        "Professional video editing",
        "YouTube channel setup & optimization",
        "Content strategy planning",
        "Thumbnail design",
        "YouTube SEO optimization",
        "Monetization strategy"
      ],
      gradient: "from-slate-400 to-emerald-500",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-emerald-600" />,
      title: "SEO & Analytics",
      description: "Don't just be online—be visible. We help your brand show up in the right searches with powerful SEO strategies.",
      services: [
        "On-page & technical SEO",
        "Keyword research & strategy",
        "Google ranking optimization",
        "Traffic tracking & reporting",
        "Competitor analysis",
        "Local SEO optimization"
      ],
      gradient: "from-emerald-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const additionalServices = [
    {
      icon: <Mail className="h-8 w-8 text-emerald-600" />,
      title: "Email Marketing",
      description: "Automated campaigns that convert",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Social Media Management",
      description: "Build your community and engagement",
      gradient: "from-teal-400 to-slate-500"
    },
    {
      icon: <Search className="h-8 w-8 text-slate-600" />,
      title: "Google Ads",
      description: "Targeted campaigns for maximum ROI",
      gradient: "from-slate-400 to-emerald-500"
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "E-commerce Setup",
      description: "Complete online store solutions",
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  const teamMembers = [
    {
      name: "Mufatu Hammed Opeyemi",
      role: "Founder & Creative Director",
      description: "Visionary leader with 3+ years in digital strategy and brand development.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      name: "Oyedele Abdulateef Folashayo",
      role: "Website Designer/Developer",
      description: "Full-stack developer expert in modern web technologies and e-commerce platforms.",
      gradient: "from-teal-400 to-slate-500"
    },
    {
      name: "Aboderin Abolaji Ridwanullah",
      role: "Head of Marketing",
      description: "Marketing strategist specializing in multi-platform campaigns and growth hacking.",
      gradient: "from-slate-400 to-emerald-500"
    },
    {
      name: "Olatunji Emmanuel",
      role: "Video Production/Youtube Expert & Manager",
      description: "Creative video specialist with expertise in YouTube growth and content monetization.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      name: "Abdul Kabir Adewale Quadir",
      role: "SEO/Social Media Marketing & Management",
      description: "Data-driven specialist in search optimization and social media growth strategies.",
      gradient: "from-teal-400 to-slate-500"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Sparkles className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "3+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Star className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      text: "Trendify transformed our digital presence. Our website traffic increased by 300% in just 3 months!",
      gradient: "from-emerald-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      mockupImage: "/lovable-uploads/23bfdd6a-b550-42d2-8d9f-a73abe122dc1.png",
      projectType: "Website Redesign"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store",
      text: "The team's expertise in Shopify development helped us launch our store successfully. Highly recommended!",
      gradient: "from-teal-400 to-slate-500",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      mockupImage: "/lovable-uploads/557243f6-b538-411c-8f80-effe45265f3e.png",
      projectType: "E-commerce Platform"
    },
    {
      name: "Emily Rodriguez",
      company: "Content Creator",
      text: "Their YouTube marketing strategy doubled our subscriber count. Professional and results-driven!",
      gradient: "from-slate-400 to-emerald-500",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      mockupImage: "/lovable-uploads/dc38df3c-9024-44c8-998e-070a81d59a1d.png",
      projectType: "YouTube Channel"
    },
    {
      name: "David Thompson",
      company: "Digital Agency",
      text: "Outstanding work on our brand redesign. The team understood our vision perfectly and delivered beyond expectations.",
      gradient: "from-emerald-500 to-slate-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      mockupImage: "/lovable-uploads/e6127017-fdd4-4b83-8559-97021d25ca53.png",
      projectType: "Brand Identity"
    },
    {
      name: "Lisa Wang",
      company: "Fashion Brand",
      text: "Their social media strategy helped us reach a younger audience. Sales increased by 250% in 6 months!",
      gradient: "from-teal-500 to-emerald-400",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "James Wilson",
      company: "Restaurant Chain",
      text: "The website redesign and SEO optimization brought us 400% more online orders. Incredible results!",
      gradient: "from-slate-500 to-teal-400",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  // Performance optimization: Reduce particles for better performance
  const [particleCount, setParticleCount] = useState(15);

  useEffect(() => {
    // Adjust particle count based on device performance
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency < 4;
    
    if (isMobile || isLowEnd) {
      setParticleCount(8);
    } else {
      setParticleCount(15);
    }
  }, []);

  // Debounced scroll function for better performance
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Particle Background - Optimized */}
      <div className="particles">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section with Enhanced Aesthetic Colors */}
      <section id="home" className="relative py-20 min-h-screen flex items-center overflow-hidden">
        {/* Multi-layered Background for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/80 via-teal-600/60 to-slate-700/80"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-600/40 to-slate-800/60"></div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-300/20 to-slate-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-once="true"
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white drop-shadow-2xl">Your Digital Success Partner</span>
                <span className="block mt-2 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg"> Starts Here</span>
              </h1>
            </div>
            <p 
              className="text-xl md:text-2xl text-emerald-50/95 mb-12 leading-relaxed drop-shadow-lg max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              We help brands grow through smart digital marketing, video strategies, and custom websites. 
              Turn your vision into results with our expert team.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-aos="fade-up" 
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Button 
                size="lg" 
                className="bg-white/95 backdrop-blur-sm text-emerald-700 hover:bg-white hover:text-emerald-800 text-lg px-10 py-6 rounded-full hover-lift shadow-2xl transform transition-all duration-300 hover:scale-105 border-0 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Let's Work Together
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white/20 hover:border-white/80 text-lg px-10 py-6 rounded-full transform transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
                onClick={() => scrollToSection('services')}
              >
                View Our Work
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/10 to-transparent"></div>
      </section>

      {/* About Highlight with Logo Colors */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              About <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-600 bg-clip-text text-transparent">Trendify</span>
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Trendify is a team of creatives, marketers, and developers helping brands turn attention into results. 
              We combine design, data, and digital strategy to fuel brand growth.
            </p>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
              <Button 
                variant="outline" 
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                Learn More About Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services with Logo Colors */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Our Core <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p 
              className="text-xl md:text-2xl text-emerald-100"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Everything you need to grow your digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="true"
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-xl text-center p-8 hover-lift border border-white/20 shadow-2xl rounded-3xl overflow-hidden relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Service Image */}
                  <div className="relative z-10 mb-6">
                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-white/5 backdrop-blur-sm">
                      <img 
                        src={
                          index === 0 
                            ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            : index === 1 
                            ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            : "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        }
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex justify-center">
                      <div className="floating-icon p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm shadow-lg border border-white/30">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-emerald-100 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white rounded-full px-6 py-2 transform transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
                      onClick={() => scrollToSection('services')}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Logo Colors */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                data-aos-once="true"
                className="group"
              >
                <div className="floating-icon mb-4 flex justify-center p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-16 h-16 mx-auto items-center">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 text-white">{stat.number}</div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Clean Background */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Why Choose <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-600 bg-clip-text text-transparent">Trendify?</span>
            </h2>
            <p 
              className="text-xl md:text-2xl text-gray-600"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              We deliver results that matter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 className="h-16 w-16 text-emerald-600" />,
                title: "Results-Driven Strategies 📈",
                description: "Data-backed approaches that deliver measurable growth and ROI.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: <Users className="h-16 w-16 text-teal-600" />,
                title: "Proven Team of Experts 🧠",
                description: "Experienced professionals dedicated to your success.",
                gradient: "from-teal-500 to-slate-500"
              },
              {
                icon: <Target className="h-16 w-16 text-slate-600" />,
                title: "Tailored Solutions 🛠",
                description: "Custom strategies designed specifically for your brand and goals.",
                gradient: "from-slate-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="true"
                className="text-center group"
              >
                <div className="glass-card p-8 rounded-3xl hover-lift group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  <div className="floating-icon mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Logo Colors */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-600 via-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              What Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p 
              className="text-xl md:text-2xl text-white/90"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Card className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-2xl rounded-3xl hover-lift group overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <CardContent className="pt-6 relative z-10">
                    {/* Project Mockup Image - Only show if mockupImage exists */}
                    {testimonial.mockupImage && (
                      <div className="mb-6">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                          <img
                            src={testimonial.mockupImage}
                            alt={`${testimonial.projectType} for ${testimonial.name}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                            {testimonial.projectType}
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-white/90 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full mr-4 shadow-lg overflow-hidden border-2 border-white/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to gradient circle with initial if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center hidden`}>
                          <span className="text-white font-bold text-xl">{testimonial.name[0]}</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-white/70">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Logo Colors */}
      <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p 
              className="text-xl md:text-2xl text-emerald-100"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Comprehensive digital solutions to grow your brand
            </p>
          </div>
          
          <div className="space-y-32">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-center lg:justify-start mb-8">
                    <div className="floating-icon p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/20">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white ml-6">{category.title}</h3>
                  </div>
                  <p className="text-lg md:text-xl text-emerald-100 mb-10 leading-relaxed text-center lg:text-left">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-center lg:justify-start group">
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-emerald-100 text-lg">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center lg:text-left">
                    <Button 
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full hover-lift pulse-glow transform transition-all duration-300 hover:scale-105 border-0"
                      onClick={() => scrollToSection('contact')}
                    >
                      Get Started
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${category.gradient} p-1 rounded-3xl shadow-2xl`}>
                    <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                Additional <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
              </h3>
              <p 
                className="text-xl text-emerald-100"
                data-aos="fade-up" 
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              >
                Specialized solutions for specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Card className="bg-white/10 backdrop-blur-xl p-8 text-center hover-lift border border-white/20 shadow-2xl rounded-3xl group overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="floating-icon p-3 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-emerald-100 text-lg">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <h3 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                Our Proven <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Process</span>
              </h3>
              <p 
                className="text-2xl text-emerald-100 max-w-3xl mx-auto"
                data-aos="fade-up" 
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              >
                A systematic approach to delivering exceptional results for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  description: "We dive deep into understanding your business, target audience, and goals. Through detailed analysis, we identify opportunities and challenges.",
                  features: ["Market Analysis", "Goal Setting", "Audience Research"],
                  gradient: "from-emerald-400 to-teal-500",
                  icon: "🎯"
                },
                { 
                  step: "02", 
                  title: "Strategy", 
                  description: "We craft a comprehensive, data-driven plan tailored to your unique needs, ensuring every action aligns with your objectives.",
                  features: ["Custom Planning", "Resource Allocation", "Timeline Creation"],
                  gradient: "from-emerald-400 to-teal-500",
                  icon: "📊"
                },
                { 
                  step: "03", 
                  title: "Execute", 
                  description: "Our expert team brings the strategy to life with precision and creativity, implementing best practices across all channels.",
                  features: ["Implementation", "Quality Control", "Progress Tracking"],
                  gradient: "from-emerald-400 to-teal-500",
                  icon: "⚡"
                },
                { 
                  step: "04", 
                  title: "Optimize", 
                  description: "We continuously monitor performance, analyze data, and make data-driven adjustments to maximize your ROI.",
                  features: ["Performance Analysis", "Data-Driven Updates", "Growth Scaling"],
                  gradient: "from-emerald-400 to-teal-500",
                  icon: "📈"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover-lift group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-white/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-2xl floating-icon group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      
                  <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-emerald-100 text-lg leading-relaxed mb-6">{item.description}</p>
                      
                      <div className="space-y-2">
                        {item.features.map((feature, i) => (
                          <div 
                            key={i} 
                            className="flex items-center justify-center text-emerald-200 group-hover:text-white transition-colors duration-300"
                          >
                            <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-br ${item.gradient}`}></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Clean Banner */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              About <span className="text-gradient">Trendify</span>
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              We're not just a digital agency—we're your strategic growth partners. At Trendify, we blend creativity, 
              analytics, and strategy to create campaigns that don't just look good—they work.
            </p>
          </div>

          <div className="mb-20" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto text-xl leading-relaxed">
              To help brands stand out, scale faster, and succeed online using tailored digital strategies and creative execution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Clean Banner */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Contact <span className="text-gradient">Us</span>
            </h2>
            <p 
              className="text-xl md:text-2xl text-gray-600"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Have a project in mind? Let's chat and bring your vision to life.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <form className="space-y-8 mb-16 glass-card p-10 rounded-3xl shadow-2xl">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 text-lg rounded-2xl transform transition-all duration-300 hover:scale-105 shadow-2xl">
                  Send Message
                  <Mail className="ml-3 h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Mail className="h-6 w-6 text-emerald-600" />, text: "trendifybuzz@gmail.com", gradient: "from-emerald-400 to-teal-500" },
                { icon: <Phone className="h-6 w-6 text-teal-600" />, text: "+234 902 292 1994", gradient: "from-teal-500 to-slate-500" },
                { icon: <span className="text-emerald-600 text-xl">@</span>, text: "@trendifybuzz", gradient: "from-emerald-400 to-teal-500" }
              ].map((contact, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 200)}
                  data-aos-duration="800"
                  data-aos-once="true"
                  className="group"
                >
                  <div className="flex items-center justify-center p-6 glass-card rounded-2xl hover-lift group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="floating-icon mr-4">
                      {contact.icon}
                    </div>
                    <span className="text-gray-700 text-lg relative z-10">{contact.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Clean Banner */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-slate-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Ready to grow your digital presence?
          </h2>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Let's discuss how we can help you achieve your business goals with our proven strategies.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => scrollToSection('contact')}
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section with Clean Banner */}
      <div className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50" id="team">
        {/* Simplified animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <span className="text-emerald-600 font-semibold text-lg mb-4 block">The Faces Behind Our Success</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to delivering exceptional results and driving your digital success.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Mufatu Hammed Opeyemi",
                image: "/lovable-uploads/1.jpg",
                role: "Founder & Creative Director",
                delay: 0,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                name: "Oyedele Abdulateef Folashayo",
                image: "/lovable-uploads/2.jpg",
                role: "Website Designer/Developer",
                delay: 100,
                gradient: "from-teal-500 to-slate-500"
              },
              {
                name: "Aboderin Abolaji Ridwanullah",
                image: "/lovable-uploads/3.jpg",
                role: "Head of Marketing",
                delay: 200,
                gradient: "from-slate-500 to-emerald-500"
              },
              {
                name: "Olatunji Emmanuel",
                image: "/lovable-uploads/4.jpg",
                role: "Video Production/Youtube Expert & Manager",
                delay: 300,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                name: "Abdul Kabir Adewale Quadir",
                image: "/lovable-uploads/5.jpg",
                role: "SEO/Social Media Marketing & Management",
                delay: 400,
                gradient: "from-teal-500 to-slate-500"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={member.delay}
                data-aos-duration="800"
                data-aos-once="true"
                className="group perspective"
              >
                <div className="relative transform transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of the card */}
                  <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                         style={{
                           backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                           '--tw-gradient-from': '#10B981',
                           '--tw-gradient-to': '#0EA5E9'
                         }}></div>
                    <div className="relative">
                      <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/30 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="relative z-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                        <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <a href="https://www.facebook.com/share/1CCu1qQt2U/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                          </a>
                          <a href="https://www.instagram.com/trendifybuzz?igsh=MXI5M2loejNvcDc1OA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Back of the card */}
                    <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full text-white">
                        <h4 className="text-2xl font-bold mb-4">{member.name}</h4>
                        <p className="text-lg font-medium mb-6">{member.role}</p>
                        <div className="space-y-4 text-center">
                          <p className="text-emerald-100">"{member.name.split(' ')[0]} brings exceptional expertise in digital innovation and strategic growth."</p>
                          <div className="flex justify-center space-x-4 mt-6">
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Strategy</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Innovation</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Leadership</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View with Swiper */}
          <div className="md:hidden">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination, Navigation]}
              className="w-[280px] h-[450px]"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              speed={600}
              lazy={true}
              preloadImages={false}
            >
              {[
                {
                  name: "Mufatu Hammed Opeyemi",
                  image: "/lovable-uploads/1.jpg",
                  role: "Founder & Creative Director",
                  gradient: "from-emerald-500 to-teal-500",
                  quote: "Leading innovation in digital marketing"
                },
                {
                  name: "Oyedele Abdulateef Folashayo",
                  image: "/lovable-uploads/2.jpg",
                  role: "Website Designer/Developer",
                  gradient: "from-teal-500 to-slate-500",
                  quote: "Building the future of web technology"
                },
                {
                  name: "Aboderin Abolaji Ridwanullah",
                  image: "/lovable-uploads/3.jpg",
                  role: "Head of Marketing",
                  gradient: "from-slate-500 to-emerald-500",
                  quote: "Driving growth through data-driven strategies"
                },
                {
                  name: "Olatunji Emmanuel",
                  image: "/lovable-uploads/4.jpg",
                  role: "Video Production/Youtube Expert & Manager",
                  gradient: "from-emerald-500 to-teal-500",
                  quote: "Creating visual stories that inspire"
                },
                {
                  name: "Abdul Kabir Adewale Quadir",
                  image: "/lovable-uploads/5.jpg",
                  role: "SEO/Social Media Marketing & Management",
                  gradient: "from-teal-500 to-slate-500",
                  quote: "Creating content that connects"
                }
              ].map((member, index) => (
                <SwiperSlide key={member.name}>
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-20 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-emerald-400 font-medium mb-3">{member.role}</p>
                      <p className="text-cyan-200 text-sm italic mb-4">"{member.quote}"</p>
                      <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com/share/1CCu1qQt2U/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/trendifybuzz?igsh=MXI5M2loejNvcDc1OA==" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
