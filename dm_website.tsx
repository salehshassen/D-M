<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>D&M — Where Ideas Turn Into Reality</title>
    <!-- Tailwind (CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React 18 + ReactDOM (CDN) -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <!-- Babel to allow JSX in this single file -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body class="bg-gray-50">
    <div id="root"></div>

    <script type="text/babel">
      const { useState } = React;

      /* ---------- Minimal inline SVG icon components (no bundler needed) ---------- */
      const Icon = ({ path, size = 24, className = "" }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {path}
        </svg>
      );
      const MenuIcon = (p) => (
        <Icon
          {...p}
          path={
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          }
        />
      );
      const XIcon = (p) => (
        <Icon
          {...p}
          path={
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          }
        />
      );
      const ChevronRight = (p) => (
        <Icon {...p} path={<polyline points="9 18 15 12 9 6" />} />
      );
      const MapPin = (p) => (
        <Icon
          {...p}
          path={
            <>
              <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </>
          }
        />
      );
      const DollarSign = (p) => (
        <Icon
          {...p}
          path={
            <>
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </>
          }
        />
      );
      const Calendar = (p) => (
        <Icon
          {...p}
          path={
            <>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </>
          }
        />
      );
      const Briefcase = (p) => (
        <Icon
          {...p}
          path={
            <>
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </>
          }
        />
      );
      const Users = (p) => (
        <Icon
          {...p}
          path={
            <>
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>
          }
        />
      );
      const Target = (p) => (
        <Icon
          {...p}
          path={
            <>
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </>
          }
        />
      );
      const Zap = (p) => (
        <Icon {...p} path={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />} />
      );
      const Award = (p) => (
        <Icon
          {...p}
          path={
            <>
              <circle cx="12" cy="8" r="6" />
              <path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8" />
            </>
          }
        />
      );
      const Mail = (p) => (
        <Icon
          {...p}
          path={
            <>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </>
          }
        />
      );
      const Check = (p) => (
        <Icon {...p} path={<polyline points="20 6 9 17 4 12" />} />
      );

      /* -------------------------- APP COMPONENTS -------------------------- */
      const DMWebsite = () => {
        const [activeTab, setActiveTab] = useState("home");
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [email, setEmail] = useState("");
        const [subscribed, setSubscribed] = useState(false);

        const handleSubscribe = (e) => {
          e.preventDefault();
          if (email) {
            setSubscribed(true);
            setTimeout(() => {
              setSubscribed(false);
              setEmail("");
            }, 3000);
          }
        };

        return (
          <div className="min-h-screen bg-gray-50">
            {/* Nav */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveTab("home")}
                  >
                    <div className="text-4xl font-bold text-red-600">D&M</div>
                    <div className="ml-3 text-sm text-gray-600 hidden sm:block">
                      Where Ideas Turn Into Reality
                    </div>
                  </div>

                  <div className="hidden md:flex space-x-8">
                    {["home", "about", "careers", "newsletter"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          activeTab === tab
                            ? "text-red-600 bg-red-50 font-semibold"
                            : "text-gray-700 hover:text-red-600"
                        }`}
                      >
                        {tab[0].toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                  </button>
                </div>

                {mobileMenuOpen && (
                  <div className="md:hidden pb-4 space-y-2">
                    {["home", "about", "careers", "newsletter"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg ${
                          activeTab === tab
                            ? "bg-red-50 text-red-600 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {tab[0].toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Pages */}
            <main>
              {activeTab === "home" && <HomePage setActiveTab={setActiveTab} />}
              {activeTab === "about" && <AboutPage />}
              {activeTab === "careers" && <CareersPage />}
              {activeTab === "newsletter" && (
                <NewsletterPage
                  email={email}
                  setEmail={setEmail}
                  handleSubscribe={handleSubscribe}
                  subscribed={subscribed}
                />
              )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-4">D&M</div>
                    <p className="text-gray-400">Where Ideas Turn Into Reality</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveTab("about")}
                        className="block text-gray-400 hover:text-white"
                      >
                        About Us
                      </button>
                      <button
                        onClick={() => setActiveTab("careers")}
                        className="block text-gray-400 hover:text-white"
                      >
                        Careers
                      </button>
                      <button
                        onClick={() => setActiveTab("newsletter")}
                        className="block text-gray-400 hover:text-white"
                      >
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

      const HomePage = ({ setActiveTab }) => (
        <div>
          {/* Hero */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Where Ideas Turn Into Reality
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Transforming concepts into market-ready products with clarity,
                  innovation, and precision
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setActiveTab("about")}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
                  >
                    Learn More
                    <ChevronRight className="ml-2" size={20} />
                  </button>
                  <button
                    onClick={() => setActiveTab("careers")}
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                  >
                    Join Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths */}
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
                  We foster creativity at every level, encouraging bold ideas in a dynamic,
                  growth-oriented environment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision</h3>
                <p className="text-gray-600">
                  Every product meets the highest standards of quality. Precision and accountability
                  are foundational.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diversity</h3>
                <p className="text-gray-600">
                  Our 30-person team brings diverse backgrounds and perspectives that produce
                  innovative solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities */}
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
                  "Additive Manufacturing",
                  "Subtractive Machining",
                  "Quality Control & Testing",
                  "Product Development",
                  "Mechanical Engineering",
                  "Business Analysis",
                  "Design Services",
                  "R&D Solutions",
                  "Supply Chain Management",
                ].map((cap, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex items-center"
                  >
                    <Check className="text-red-600 mr-3 flex-shrink-0" size={24} />
                    <span className="font-semibold text-gray-900">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-600 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
              <p className="text-xl mb-8 text-red-100">
                Join us in creating the next generation of innovative, market-ready products
              </p>
              <button
                onClick={() => setActiveTab("careers")}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center"
              >
                Explore Opportunities
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      );

      const AboutPage = () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About D&M</h1>
            <p className="text-2xl text-red-600 font-semibold">
              Where Ideas Turn Into Reality
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To turn ideas into high-quality, market-ready products with clarity, innovation,
              and precision. Success comes from blending creativity with technical excellence
              in a diverse, collaborative team.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                D&M is a manufacturing and product development company established in 2024 by PSU
                students. We prioritize diversity, precision, and creativity.
              </p>
              <p>
                With 30 employees across operations, manufacturing, R&amp;D, finance, HR, and SCM,
                we bring together varied backgrounds and experience levels.
              </p>
              <p>
                Our deep-level diversity—different ways of thinking and solving problems—drives
                rapid innovation and a durable competitive edge.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Structure</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-red-600 mb-6">
                Matrix Organization Design
              </h3>
              <p className="text-gray-700 mb-6">
                We combine functional excellence with project agility so products move from concept
                to market-ready reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Product Division
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Additive Manufacturing</li>
                    <li>• Subtractive Machining</li>
                    <li>• Quality Check</li>
                    <li>• Business Analysis</li>
                    <li>• Design</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Functional Departments
                  </h4>
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
                  Clear accountability + cross-functional collaboration. We move fast while
                  maintaining high quality and precision.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Award className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Creativity & Innovation
                </h3>
                <p className="text-gray-700">
                  We empower employees to take initiative and share ideas freely.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <Target className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Precision & Accountability
                </h3>
                <p className="text-gray-700">
                  Attention to detail and ownership are core to our identity.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <Users className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Collaboration & Teamwork
                </h3>
                <p className="text-gray-700">
                  Cross-functional teams execute projects with shared goals.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <Briefcase className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ethics & Sustainability
                </h3>
                <p className="text-gray-700">
                  We operate with honesty, fairness, and sustainable practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Diversity as Competitive Advantage
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {[
                "Enhanced creativity and edge over competitors",
                "Superior problem-solving from varied perspectives",
                "High satisfaction and very low turnover",
                "Deeper customer understanding",
              ].map((t, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

      const CareersPage = () => (
        <div className="bg-gray-50 min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Careers at D&M</h1>
              <p className="text-lg text-gray-600">Join us in turning ideas into reality</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Mechanical Design Engineer
                </h2>
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
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all">
                      Apply Now
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Help transform creative concepts into precision-engineered, market-ready
                      products in a collaborative, matrix-structured environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {[
                        "Develop detailed 3D models and drawings using CAD",
                        "Support prototyping and testing to validate concepts",
                        "Ensure designs meet strict precision and quality standards",
                        "Coordinate with R&D and manufacturing for DFM",
                        "Participate in cross-functional project teams",
                        "Contribute creative ideas and problem-solving approaches",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Desired Qualifications
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {[
                        "1–3 years in mechanical design or related engineering",
                        "Proficiency in SolidWorks/AutoCAD or similar CAD tools",
                        "Creative mindset with novel design solutions",
                        "Meticulous attention to detail and quality",
                        "Strong collaboration in a matrix structure",
                        "Adaptability in diverse, dynamic teams",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start">
                        <Mail className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                        <span>
                          Send your resume and cover letter to{" "}
                          <strong>careers@dm-manufacturing.com</strong> or via our portal.
                        </span>
                      </p>
                      <p className="flex items-start">
                        <XIcon className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                        <span>Please do not call regarding this position.</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-4">
                        Applications must include both a resume and cover letter.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About D&M</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      D&M specializes in 3D design, product development, and precision manufacturing.
                      Our mission is to turn ideas into market-ready products with clarity, innovation,
                      and precision.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Work within a matrix structure that blends functional expertise and project teamwork,
                      gaining exposure across the full product lifecycle.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                    <p className="text-gray-800 font-semibold mb-2">
                      Equal Opportunity Employer
                    </p>
                    <p className="text-gray-700 text-sm">
                      We are an equal opportunity employer and welcome applicants from all backgrounds.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
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
                          <p className="text-gray-700 text-sm">Market-competitive</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Briefcase className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Experience</p>
                          <p className="text-gray-700 text-sm">1–3 years</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Calendar className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Deadline</p>
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

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Why Join D&M?</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        "Cutting-edge manufacturing projects",
                        "Diverse, inclusive culture",
                        "Professional growth opportunities",
                        "Cross-functional collaboration",
                        "Innovation-driven environment",
                        "Commitment to sustainability",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building the Future Together
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Work Environment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our matrix structure gives exposure to diverse projects while building deep
                    expertise.
                  </p>
                  <p className="text-gray-700">
                    Open communication, creative thinking, and accountability are core. Turnover is
                    very low.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Growth & Development
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Cross-functional projects, mentorship, and continuous learning expand technical
                    and leadership skills.
                  </p>
                  <p className="text-gray-700">
                    We encourage rotations across teams to build well-rounded engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      const NewsletterPage = ({ email, setEmail, handleSubscribe, subscribed }) => (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Stay Connected</h1>
              <p className="text-xl text-gray-600">
                Get the latest updates on our innovations, projects, and company news
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                <p className="text-lg text-red-50">
                  Be the first to know about project launches, roles, and insights.
                </p>
              </div>

              <div className="p-8">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
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
                      You can unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Successfully Subscribed!
                    </h3>
                    <p className="text-gray-600">Check your inbox for a confirmation email.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { Icon: Zap, title: "Innovation Updates", text: "Our latest breakthroughs and projects." },
                { Icon: Briefcase, title: "Career Opportunities", text: "Early access to new roles and team stories." },
                { Icon: Target, title: "Industry Insights", text: "Trends in manufacturing, design, and engineering." },
              ].map(({ Icon, title, text }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

      /* ---------- Mount ---------- */
      ReactDOM.createRoot(document.getElementById("root")).render(<DMWebsite />);
    </script>
  </body>
</html>
