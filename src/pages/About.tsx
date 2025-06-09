
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Mufatu Hammed Opeyemi",
      role: "Founder & Creative Director",
      description: "Visionary leader with 5+ years in digital marketing and brand strategy. Mufatu drives creative excellence and oversees all client relationships, ensuring every project exceeds expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Aboderin Abolaji Ridwanullah",
      role: "Head of Marketing",
      description: "Strategic marketing expert specializing in multi-platform campaigns. Abolaji has generated over $2M in revenue for clients through data-driven marketing strategies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Oyedele Abdulateef Folashayo",
      role: "Lead Developer & Designer",
      description: "Full-stack developer and UI/UX designer with expertise in modern web technologies. Folashayo creates stunning, conversion-focused websites that drive results.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Olatunji Emmanuel",
      role: "Video Production Manager",
      description: "Award-winning video producer and YouTube specialist. Emmanuel has helped channels grow from 0 to 100K+ subscribers and creates viral content across platforms.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "AbdulKabir Adewale Quadir",
      role: "SEO & Social Media Strategist",
      description: "SEO expert and social media guru with proven track record of ranking websites on Google's first page. Quadir specializes in organic growth and engagement strategies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of digital trends and constantly evolve our strategies to deliver cutting-edge solutions."
    },
    {
      title: "Results",
      description: "Every strategy we implement is measurable and designed to deliver tangible business growth."
    },
    {
      title: "Collaboration",
      description: "We work as an extension of your team, maintaining transparent communication throughout every project."
    },
    {
      title: "Excellence",
      description: "We never settle for good enough. Every deliverable meets our high standards for quality and impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">Trendify</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a digital agency—we're your strategic growth partners. 
            At Trendify, we blend creativity, analytics, and strategy to create campaigns that don't just look good—they work.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded with a mission to democratize digital success, Trendify emerged from the vision 
                  of creating a full-service agency that truly understands the modern digital landscape.
                </p>
                <p>
                  Our journey began when our founder, Mufatu Hammed Opeyemi, recognized the gap between 
                  traditional marketing approaches and the dynamic needs of today's businesses. We set out 
                  to build a team that combines technical expertise with creative innovation.
                </p>
                <p>
                  Today, we're proud to have helped over 100+ businesses transform their digital presence 
                  and achieve sustainable growth through our comprehensive suite of services.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl">
              <div className="aspect-square bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">T</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Trendify</p>
                  <p className="text-emerald-600">Est. 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To help brands stand out, scale faster, and succeed online using tailored digital strategies 
                  and creative execution. We believe every business deserves access to world-class digital marketing, 
                  regardless of size or budget.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg bg-emerald-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  A world where every brand, big or small, can harness the power of digital tools to grow, 
                  connect, and convert. We envision being the go-to partner for businesses ready to transform 
                  their digital presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold text-2xl">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100">Numbers that tell our story</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-emerald-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our team can help you achieve your digital marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
