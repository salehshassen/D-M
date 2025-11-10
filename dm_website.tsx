import React, { useState } from 'react';
import { Menu, X, ChevronRight, MapPin, DollarSign, Calendar, Briefcase, Users, Target, Zap, Award, Mail, Check } from 'lucide-react';

const DMWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="text-4xl font-bold text-red-600">D&M</div>
              <div className="ml-3 text-sm text-gray-600 hidden sm:block">
                Where Ideas Turn Into Reality
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'home'
                    ? 'text-red-600 bg-red-50 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'about'
                    ? 'text-red-600 bg-red-50 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'careers'
                    ? 'text-red-600 bg-red-50 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Careers
              </button>
              <button
                onClick={() => setActiveTab('newsletter')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'newsletter'
                    ? 'text-red-600 bg-red-50 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Newsletter
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  activeTab === 'home' ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  activeTab === 'about' ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-700'
                }`}
              >
                About
              </button>
              <button
                onClick={() => { setActiveTab('careers'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  activeTab === 'careers' ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Careers
              </button>
              <button
                onClick={() => { setActiveTab('newsletter'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  activeTab === 'newsletter' ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Newsletter
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'careers' && <CareersPage />}
        {activeTab === 'newsletter' && <NewsletterPage email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} subscribed={subscribed} />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-4">D&M</div>
              <p className="text-gray-400">
                Where Ideas Turn Into Reality
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => setActiveTab('about')} className="block text-gray-400 hover:text-white">
                  About Us
                </button>
                <button onClick={() => setActiveTab('careers')} className="block text-gray-400 hover:text-white">
                  Careers
                </button>
                <button onClick={() => setActiveTab('newsletter')} className="block text-gray-400 hover:text-white">
                  Newsletter
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400">
                Laysen Valley, Building 23<br />
                careers@dm-manufacturing.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 D&M Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ setActiveTab }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Where Ideas Turn Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transforming concepts into market-ready products with clarity, innovation, and precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveTab('about')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Strengths</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence in manufacturing through innovation, precision, and diversity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We foster creativity at every level, encouraging employees to think boldly and share ideas freely in a dynamic, growth-oriented environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision</h3>
            <p className="text-gray-600">
              Every product meets the highest standards of quality. Our commitment to precision and accountability is the foundation of our success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Diversity</h3>
            <p className="text-gray-600">
              Our 30-person team brings together diverse nationalities, backgrounds, and perspectives, creating innovative solutions through varied thinking.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive manufacturing and product development solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Additive Manufacturing',
              'Subtractive Machining',
              'Quality Control & Testing',
              'Product Development',
              'Mechanical Engineering',
              'Business Analysis',
              'Design Services',
              'R&D Solutions',
              'Supply Chain Management'
            ].map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex items-center">
                <Check className="text-red-600 mr-3 flex-shrink-0" size={24} />
                <span className="font-semibold text-gray-900">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8 text-red-100">
            Join us in creating the next generation of innovative, market-ready products
          </p>
          <button
            onClick={() => setActiveTab('careers')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center"
          >
            Explore Opportunities
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About D&M</h1>
        <p className="text-2xl text-red-600 font-semibold">Where Ideas Turn Into Reality</p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl leading-relaxed">
          To turn ideas into high-quality, market-ready products with clarity, innovation, and precision. We believe success exists through the seamless integration of creativity and technical excellence, delivered by a diverse, collaborative team.
        </p>
      </div>

      {/* Company Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            D&M is a manufacturing and product development company established in 2024 by PSU students who share a vision of transforming innovative concepts into tangible, market-ready solutions. From day one, we have emphasized diversity, precision, and creativity as the pillars of our organizational identity.
          </p>
          <p>
            With 30 employees spanning operations, manufacturing, R&D, finance, HR, and supply chain management, we bring together professionals from diverse nationalities, educational backgrounds, and experience levels—from college interns to industry veterans with 15+ years of expertise.
          </p>
          <p>
            What sets us apart is our deep-level diversity: employees who think differently, work differently, and solve problems differently. This cognitive and cultural variety allows us to innovate rapidly and maintain a competitive edge in a demanding industry.
          </p>
        </div>
      </div>

      {/* Organizational Structure */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Structure</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Matrix Organization Design</h3>
          <p className="text-gray-700 mb-6">
            D&M employs a Matrix organizational structure that combines functional excellence with project-based agility. This approach ensures every product moves seamlessly from concept to market-ready reality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border-l-4 border-red-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Product Division</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Additive Manufacturing</li>
                <li>• Subtractive Machining</li>
                <li>• Quality Check</li>
                <li>• Business Analysis</li>
                <li>• Design</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Functional Departments</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Product Development</li>
                <li>• Mechanical Engineering</li>
                <li>• Quality Management</li>
                <li>• Data Science</li>
                <li>• Finance</li>
                <li>• Marketing</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Matrix?</h4>
            <p className="text-gray-700">
              Unlike traditional matrix structures that create conflicting dual reporting lines, D&M maintains clear, distinct accountability. This enables effective cross-functional collaboration without ambiguity, allowing us to respond swiftly to client needs while maintaining our high standards for quality and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Culture */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Award className="text-red-600 mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creativity & Innovation</h3>
            <p className="text-gray-700">
              We encourage every employee to think creatively, take initiative, and share ideas freely. This culture of innovation creates a dynamic, growth-oriented work environment where breakthrough solutions emerge naturally.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <Target className="text-red-600 mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Precision & Accountability</h3>
            <p className="text-gray-700">
              Attention to detail and personal accountability are pillars of our identity. Every product must meet rigorous quality standards, and every team member feels responsible for the outcomes they contribute to.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <Users className="text-red-600 mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collaboration & Teamwork</h3>
            <p className="text-gray-700">
              Projects are completed through cross-functional teams where designers, engineers, and specialists work together toward shared goals. This creates unity, cohesion, and a sense of belonging across the organization.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <Briefcase className="text-red-600 mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ethics & Sustainability</h3>
            <p className="text-gray-700">
              We operate with honesty, transparency, and fairness in all relationships. Our commitment to sustainable materials and environmentally friendly processes reflects our belief that success must be achieved with integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Diversity */}
      <div className="bg-gray-100 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Diversity as Competitive Advantage</h2>
        <p className="text-lg text-gray-700 mb-6">
          From our founding, D&M has viewed diversity not as a checkbox but as a strategic imperative. Our 30-person team includes Saudi Arabian and international employees, men and women, ranging from recent graduates to seasoned professionals.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          More importantly, we emphasize deep-level diversity—differences in cognitive styles, problem-solving approaches, and perspectives. This diversity drives:
        </p>
        <ul className="space-y-3 text-lg text-gray-700">
          <li className="flex items-start">
            <Check className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <span><strong>Enhanced creativity:</strong> Ideas flow from multiple directions, giving us an edge over competitors</span>
          </li>
          <li className="flex items-start">
            <Check className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <span><strong>Superior problem-solving:</strong> Different minds tackling challenges produce efficient, high-quality solutions</span>
          </li>
          <li className="flex items-start">
            <Check className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <span><strong>Employee satisfaction:</strong> Extremely low turnover as employees feel valued and heard</span>
          </li>
          <li className="flex items-start">
            <Check className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <span><strong>Customer understanding:</strong> Diverse perspectives lead to deeper insights into varied customer needs</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Careers at D&M</h1>
          <p className="text-lg text-gray-600">Join us in turning ideas into reality</p>
        </div>

        {/* Job Listing Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Job Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
            <h2 className="text-3xl font-bold text-white mb-2">Mechanical Design Engineer</h2>
            <div className="flex flex-wrap items-center gap-4 text-red-50">
              <span className="flex items-center">
                <Briefcase size={18} className="mr-2" />
                D&M Manufacturing
              </span>
              <span className="flex items-center">
                <MapPin size={18} className="mr-2" />
                Laysen Valley, Building 23
              </span>
              <span className="flex items-center">
                <Users size={18} className="mr-2" />
                1–3 years experience
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Apply Button */}
              <div>
                <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all">
                  Apply Now
                </button>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are seeking a talented Mechanical Design Engineer to join our innovative team at D&M. In this role, you will contribute to transforming creative concepts into precision-engineered, market-ready products. You will work in a collaborative, matrix-structured environment alongside designers, R&D specialists, and manufacturing experts.
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Develop detailed 3D models and technical drawings using advanced CAD software</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Support prototyping and testing phases to validate design concepts and functionality</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Ensure all designs meet D&M's rigorous standards for precision and quality</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Coordinate closely with R&D and manufacturing teams to optimize designs for production</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Participate in cross-functional project teams to deliver innovative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Contribute creative ideas and problem-solving approaches throughout the product development lifecycle</span>
                  </li>
                </ul>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desired Qualifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Experience:</strong> 1–3 years in mechanical design or related engineering field</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Technical Skills:</strong> Strong proficiency in CAD software (SolidWorks, AutoCAD, or similar)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Creativity:</strong> Demonstrated ability to think innovatively and propose novel design solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Precision:</strong> Meticulous attention to detail and commitment to quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Teamwork:</strong> Excellent collaboration skills and ability to work in a matrix structure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Adaptability:</strong> Comfortable working in a diverse, dynamic environment with cross-functional teams</span>
                  </li>
                </ul>
              </div>

              {/* Application Instructions */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <Mail className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Submit your resume and cover letter to <strong>careers@dm-manufacturing.com</strong> or through our online portal</span>
                  </p>
                  <p className="flex items-start">
                    <X className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Please do not call our office regarding this position</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Applications must include both a resume and cover letter to be considered complete.
                  </p>
                </div>
              </div>

              {/* About D&M */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About D&M</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  D&M is an engineering and manufacturing firm specializing in 3D design, product development, and precision manufacturing. Our mission is to turn ideas into high-quality, market-ready products with clarity, innovation, and precision.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We pride ourselves on our diverse, collaborative culture where creativity meets technical excellence. Our 30-person team brings together professionals from varied backgrounds, nationalities, and experience levels—all united by a commitment to innovation and quality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At D&M, you will work in a matrix organizational structure that combines functional expertise with project-based teamwork, giving you exposure to multiple aspects of product development while advancing your technical skills.
                </p>
              </div>

              {/* EEO Statement */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-800 font-semibold mb-2">Equal Opportunity Employer</p>
                <p className="text-gray-700 text-sm">
                  D&M is committed to creating a diverse and inclusive workplace. We are an equal opportunity employer and do not discriminate based on nationality, gender, age, education, or any other protected characteristic. We believe diversity drives innovation and welcome applicants from all backgrounds.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Job Details Card */}
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-700 text-sm">D&M Headquarters</p>
                      <p className="text-gray-700 text-sm">Laysen Valley, Building 23</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <DollarSign className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Compensation</p>
                      <p className="text-gray-700 text-sm">Market-competitive salary</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Briefcase className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Experience Level</p>
                      <p className="text-gray-700 text-sm">1–3 years required</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Application Deadline</p>
                      <p className="text-gray-700 text-sm">15 days from posting</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Department</p>
                      <p className="text-gray-700 text-sm">Mechanical Engineering</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    Apply for this Position
                  </button>
                </div>
              </div>

              {/* Why Join Card */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why Join D&M?</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Work on cutting-edge manufacturing projects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Diverse, inclusive team culture</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Professional growth opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Cross-functional collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Innovation-driven environment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Sustainable practices commitment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Careers Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Building the Future Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Work Environment</h3>
              <p className="text-gray-700 mb-4">
                At D&M, we have created a workplace where innovation thrives. Our matrix structure ensures you will gain exposure to diverse projects while developing deep expertise in your field. You will collaborate with designers, engineers, and analysts from varied backgrounds, all working toward shared goals.
              </p>
              <p className="text-gray-700">
                We value open communication, creative thinking, and accountability. Every voice matters, and every contribution is recognized. With extremely low employee turnover, we have built a culture where people genuinely want to stay and grow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth & Development</h3>
              <p className="text-gray-700 mb-4">
                Your career development is our priority. Through cross-functional projects, mentorship programs, and continuous learning opportunities, you will expand both your technical and leadership capabilities.
              </p>
              <p className="text-gray-700">
                We encourage employees to work across different teams and departments, ensuring you gain well-rounded experience. From college interns to industry veterans, everyone at D&M is committed to learning, innovation, and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsletterPage = ({ email, setEmail, handleSubscribe, subscribed }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Stay Connected</h1>
          <p className="text-xl text-gray-600">
            Get the latest updates on our innovations, projects, and company news
          </p>
        </div>

        {/* Main Newsletter Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-lg text-red-50">
              Be the first to know about our breakthrough projects, career opportunities, and industry insights.
            </p>
          </div>

          <div className="p-8">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  By subscribing, you agree to receive updates from D&M. You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">
                  Thank you for joining our community. Check your inbox for a confirmation email.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Updates</h3>
            <p className="text-gray-600 text-sm">
              Learn about our latest manufacturing breakthroughs and product development projects.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Opportunities</h3>
            <p className="text-gray-600 text-sm">
              Get early access to new positions and learn about life at D&M from our team members.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Insights</h3>
            <p className="text-gray-600 text-sm">
              Receive expert analysis on manufacturing trends, design thinking, and technical innovations.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold text-gray-900">Sarah Mitchell</p>
              <p className="text-sm text-gray-600">Senior Mechanical Engineer</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            The D&M newsletter keeps me connected to the broader vision of our company. It is inspiring to see how our individual contributions fit into the innovative projects we are delivering to market.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">How often will I receive emails?</h3>
              <p className="text-gray-600">
                We send newsletters monthly, with occasional special announcements for major project launches or career opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Can I unsubscribe at any time?</h3>
              <p className="text-gray-600">
                Absolutely. Every email includes an easy unsubscribe link. We respect your inbox and your time.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What type of content will I receive?</h3>
              <p className="text-gray-600">
                Project highlights, technical insights, career opportunities, company culture stories, and industry trends relevant to manufacturing and product development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DMWebsite;