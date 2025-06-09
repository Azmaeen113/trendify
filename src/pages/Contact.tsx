
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      content: "trendifybuzz@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      title: "Phone",
      content: "+234 902 292 1994",
      description: "Call us during business hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
      title: "WhatsApp",
      content: "+234 902 292 1994",
      description: "Quick response via WhatsApp"
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      title: "Social Media",
      content: "@trendifybuzz",
      description: "Follow us on all platforms"
    }
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/trendifybuzz", color: "bg-pink-500" },
    { name: "Facebook", url: "https://facebook.com/TrendifyBuzz", color: "bg-blue-600" },
    { name: "WhatsApp", url: "https://wa.me/2349022921994", color: "bg-green-500" },
    { name: "Twitter", url: "https://twitter.com/trendifybuzz", color: "bg-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's chat and bring your vision to life. 
            We're here to help you succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg bg-emerald-600 text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Let's Start a Conversation</h3>
                  <p className="opacity-90 mb-4">
                    Ready to take your business to the next level? We're here to help you succeed.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Response within 24 hours</span>
                  </div>
                </CardContent>
              </Card>

              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-emerald-600 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-600">Follow us on social media for updates and tips</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-4 rounded-full hover:opacity-80 transition-opacity`}
              >
                <Users className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope, but most websites take 2-4 weeks, while marketing campaigns can show results within the first month."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to established enterprises. We tailor our solutions to fit your budget and goals."
              },
              {
                question: "What's included in your digital marketing services?",
                answer: "Our digital marketing includes social media management, paid advertising, content creation, email marketing, SEO, and comprehensive analytics and reporting."
              },
              {
                question: "Can you help with existing websites?",
                answer: "Yes! We can optimize, redesign, or completely rebuild your existing website to improve performance, user experience, and conversions."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Don't wait any longer. Let's discuss your goals and create something amazing together.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
