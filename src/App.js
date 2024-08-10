import React, { useState, useRef } from 'react';
import { Menu, DollarSign, Users, ShieldCheck, BarChart } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">BizSourceFi</h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-blue-200">Home</a></li>
          <li><a href="#how-it-works" className="hover:text-blue-200">How It Works</a></li>
          <li><a href="#about" className="hover:text-blue-200">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-200">Services</a></li>
        </ul>
      </nav>
      <button className="md:hidden">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

const Hero = ({ scrollToForm }) => (
  <section id="home" className="bg-blue-500 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Connect with Top Business Funding Experts</h2>
      <p className="text-xl mb-8">We match you with brokers who have extensive networks of lenders and in-house consultants</p>
      <button 
        onClick={scrollToForm}
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300"
      >
        Get Matched Now
      </button>
    </div>
  </section>
);

const Features = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose BizSourceFi</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <DollarSign size={48} className="mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Multiple Funding Options</h3>
          <p>Access a wide range of funding solutions through our broker network</p>
        </div>
        <div className="text-center">
          <Users size={48} className="mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
          <p>Work with experienced consultants to find the best funding for your needs</p>
        </div>
        <div className="text-center">
          <ShieldCheck size={48} className="mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Trusted Partners</h3>
          <p>Our broker partners are vetted for reliability and expertise</p>
        </div>
        <div className="text-center">
          <BarChart size={48} className="mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
          <p>Get funding options customized to your business profile and goals</p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
          <h3 className="text-xl font-bold mb-2">Complete Our Form</h3>
          <p>Provide basic information about your business and funding needs</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
          <h3 className="text-xl font-bold mb-2">Get Matched</h3>
          <p>We'll connect you with a broker specializing in your business type and funding needs</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
          <h3 className="text-xl font-bold mb-2">Receive Expert Guidance</h3>
          <p>Work with your matched broker to explore options and secure the best funding</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">About BizSourceFi</h2>
      <p className="mb-6">At BizSourceFi, we believe that every small business deserves the opportunity to thrive. Our mission is to simplify the process of finding and securing business funding, empowering entrepreneurs to focus on what they do best – running their businesses.</p>
      <p className="mb-6">Founded by a team of financial experts and small business advocates, we understand the challenges that come with seeking funding. That's why we've created a platform that cuts through the complexity, offering:</p>
      <ul className="list-disc list-inside mb-6">
        <li>A wide range of funding options to suit diverse business needs</li>
        <li>A straightforward, no-obligation application process</li>
        <li>Transparent information about rates, terms, and fees</li>
        <li>Personalized guidance from funding experts</li>
      </ul>
      <p>We're more than just a lead generation company – we're your partners in growth. Let us help you navigate the world of business funding and find the solution that's right for you.</p>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Business Term Loans"
          description="Secure a lump sum with predictable repayment terms."
          features={[
            "Amounts from $5,000 to $500,000",
            "Terms from 3 months to 5 years",
            "Competitive interest rates"
          ]}
        />
        <ServiceCard
          title="Lines of Credit"
          description="Flexible funding when you need it."
          features={[
            "Credit lines up to $250,000",
            "Draw funds as needed",
            "Only pay interest on what you use"
          ]}
        />
        <ServiceCard
          title="Equipment Financing"
          description="Upgrade your equipment without straining your cash flow."
          features={[
            "Finance up to 100% of equipment value",
            "Fixed monthly payments",
            "Potential tax benefits"
          ]}
        />
        <ServiceCard
          title="Invoice Factoring"
          description="Turn unpaid invoices into immediate cash."
          features={[
            "Advance rates up to 90% of invoice value",
            "Improve cash flow",
            "No long-term debt"
          ]}
        />
        <ServiceCard
          title="SBA Loans"
          description="Government-backed loans with favorable terms."
          features={[
            "Amounts up to $5 million",
            "Lower down payments",
            "Longer repayment terms"
          ]}
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <ul className="list-disc list-inside mb-4">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
      Get Matched
    </button>
  </div>
);

const LeadForm = ({ formRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fundingAmount: '',
    industry: '',
    creditScore: '',
    yearsInBusiness: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server or API
  };

  return (
    <section ref={formRef} className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get Matched with a Funding Expert</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fundingAmount" className="block mb-2">Desired Funding Amount</label>
            <select
              id="fundingAmount"
              name="fundingAmount"
              value={formData.fundingAmount}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select amount</option>
              <option value="<$10,000">Less than $10,000</option>
              <option value="$10,000-$50,000">$10,000 - $50,000</option>
              <option value="$50,000-$100,000">$50,000 - $100,000</option>
              <option value="$100,000-$200,000">$100,000 - $200,000</option>
              <option value="$200,000+">$200,000+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="industry" className="block mb-2">Business Industry</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select industry</option>
              <option value="Retail">Retail</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Construction">Construction</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="creditScore" className="block mb-2">Credit Score</label>
            <select
              id="creditScore"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select credit score</option>
              <option value="<600">Below 600</option>
              <option value="600-650">600 - 650</option>
              <option value="650-700">650 - 700</option>
              <option value="700-750">700 - 750</option>
              <option value="750+">750+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="yearsInBusiness" className="block mb-2">Years in Business</label>
            <select
              id="yearsInBusiness"
              name="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select years</option>
              <option value="<1">Less than 1 year</option>
              <option value="1-2">1 - 2 years</option>
              <option value="2-5">2 - 5 years</option>
              <option value="5-10">5 - 10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Get Matched Now
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 BizSourceFi. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero scrollToForm={scrollToForm} />
        <Features />
        <HowItWorks />
        <LeadForm formRef={formRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
