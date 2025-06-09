
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Video, BarChart3, Mail, Users, Search, ShoppingCart } from 'lucide-react';

const Services = () => {
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
      ]
    },
    {
      icon: <Globe className="h-16 w-16 text-emerald-600" />,
      title: "Website Design & Development",
      description: "Custom, conversion-focused websites built on Shopify, Wix, WordPress and more. Whether you're launching a product or scaling a store—we build for performance.",
      services: [
        "Shopify store design & marketing",
        "Wix website development",
        "WordPress custom sites",
        "Landing page optimization",
        "E-commerce solutions",
        "SEO-ready builds"
      ]
    },
    {
      icon: <Video className="h-16 w-16 text-emerald-600" />,
      title: "Video Marketing & YouTube Growth",
      description: "Create scroll-stopping content that converts. We help you plan, edit, optimize, and promote video content for YouTube and beyond.",
      services: [
        "Professional video editing",
        "YouTube channel setup & optimization",
        "Content strategy planning",
        "Thumbnail design",
        "YouTube SEO optimization",
        "Monetization strategy"
      ]
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
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Mail className="h-8 w-8 text-emerald-600" />,
      title: "Email Marketing",
      description: "Automated campaigns that convert"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Social Media Management",
      description: "Build your community and engagement"
    },
    {
      icon: <Search className="h-8 w-8 text-emerald-600" />,
      title: "Google Ads",
      description: "Targeted campaigns for maximum ROI"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
      title: "E-commerce Setup",
      description: "Complete online store solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to grow your brand, increase visibility, and drive results. 
            From strategy to execution, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">{category.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl">
                    <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized solutions for specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver results for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
              { step: "02", title: "Strategy", description: "We develop a custom plan tailored to your specific needs" },
              { step: "03", title: "Execute", description: "We implement the strategy with precision and attention to detail" },
              { step: "04", title: "Optimize", description: "We continuously monitor and improve performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss your project and create a custom strategy that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
                Request a Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
