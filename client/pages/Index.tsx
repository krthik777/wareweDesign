export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter bg-gradient-to-br from-emerald-100 via-white to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-24 py-5">
        <div className="text-4xl lg:text-5xl font-bold text-emerald-500">Biccas</div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-black text-lg font-medium">Home</a>
          <a href="#" className="text-gray-500 text-base font-medium">Product</a>
          <a href="#" className="text-gray-500 text-base font-medium">FAQ</a>
          <a href="#" className="text-gray-500 text-base font-medium">Blog</a>
          <a href="#" className="text-gray-500 text-base font-medium">About Us</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-500 text-base font-medium">Login</a>
          <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-emerald-600 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                We're here to Increase your Productivity
              </h1>
              
              <div className="relative">
                <svg className="absolute -top-6 left-0 w-80 h-6" viewBox="0 0 487 34" fill="none">
                  <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#10B981" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <p className="text-lg text-black leading-relaxed max-w-md">
              Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors">
                Try free trial
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-900 font-medium">View Demo</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <img src="/homepl.png" alt="place" className="object-contain w-full h-full" />
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 rounded-lg transform rotate-12"></div>
              <div className="absolute top-6 -left-8 w-12 h-12 bg-yellow-400 rounded-lg transform -rotate-12"></div>
              <div className="absolute bottom-16 -right-8 w-10 h-10 bg-orange-400 rounded-lg transform rotate-12"></div>
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white/10 rounded-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-32 bg-white/20 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-3 bg-white/20 rounded w-1/4"></div>
                      <div className="h-3 bg-white/20 rounded w-1/4"></div>
                      <div className="h-3 bg-white/20 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-8 -left-8 bg-white rounded-lg p-4 shadow-lg border w-56">
              <div className="text-sm text-gray-400 mb-1">Enter amount</div>
              <div className="flex items-center space-x-2">
              <input
                type="number"
                defaultValue={450}
                className="text-base font-medium text-black mb-2 border border-gray-200 rounded px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span className="text-base font-medium text-black mb-2">$</span>
              <button className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm ml-auto ">
                Send
              </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-4 bg-white rounded-lg p-3 shadow-lg border">
              <div className="text-sm text-gray-400 mb-1">Total Income</div>
              <div className="flex items-center justify-between">
                <div className="text-base font-medium text-black">$245.00</div>
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-10 right-20 w-36 h-36">
              <div className="flex items-center gap-3">
                <img src="/creditcard.png" alt="creditcard" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="px-6 lg:px-24 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            More than 25,000 teams use Collabs
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
          <span className="text-xl lg:text-2xl font-semibold text-gray-500">Unsplash</span>
          <span className="text-xl lg:text-2xl font-semibold text-gray-500">Notion</span>
          <span className="text-xl lg:text-2xl font-semibold text-gray-500">INTERCOM</span>
          <span className="text-xl lg:text-2xl font-semibold text-gray-500">descript</span>
          <span className="text-xl lg:text-2xl font-semibold text-gray-500">grammarly</span>
        </div>
      </section>

      {/* How We Support Section */}
      <section className="bg-gray-50 px-6 lg:px-24 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              How we support our partner all over the world
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  4.9 <span className="font-normal">/ 5 rating</span>
                </div>
                <div className="text-lg font-bold text-gray-500">databricks</div>
              </div>
              
              <div>
                <div className="flex space-x-1 mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <div key={star} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                  <div className="w-5 h-5 text-gray-300">⭐</div>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  4.8 <span className="font-normal">/ 5 rating</span>
                </div>
                <div className="text-lg font-bold text-gray-500">Chainalysis</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-15 h-15 bg-white shadow-md flex items-center justify-center rounded-lg">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Publishing</h3>
                <p className="text-lg text-gray-600">
                  Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-15 h-15 bg-white shadow-md flex items-center justify-center rounded-lg">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h3>
                <p className="text-lg text-gray-600">
                  Analyze your performance and create gorgeous report
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-15 h-15 bg-white shadow-md flex items-center justify-center rounded-lg">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Engagement</h3>
                <p className="text-lg text-gray-600">
                  Quickly navigate you and engage with your audience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
  {/* Features Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Our Features you can get
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily
            </p>
          </div>
          
          <button className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium mt-8 lg:mt-0 hover:bg-emerald-600 transition-colors">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 h-96 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-16 h-24 bg-emerald-500 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-blue-300 rounded"></div>
                    <div className="h-4 bg-blue-300 rounded w-4/5"></div>
                    <div className="h-4 bg-blue-300 rounded w-3/5"></div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-16 h-24 bg-blue-500 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-blue-300 rounded"></div>
                    <div className="h-4 bg-blue-300 rounded w-4/5"></div>
                    <div className="h-4 bg-blue-300 rounded w-3/5"></div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-8">
                  <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  <div className="w-16 h-16 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                Collaboration Teams
              </h3>
              <p className="text-lg text-gray-600">
                Here you can handle projects together with team virtually
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 h-96 relative overflow-hidden">
              <div className="space-y-6">
                <div className="bg-emerald-500 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-white text-2xl font-medium mb-2">Document File</h4>
                  <p className="text-white text-lg">456 GB | 1056 Items</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-end h-20 gap-2">
                    <div className="w-4 bg-emerald-500 rounded-full h-16"></div>
                    <div className="w-4 bg-emerald-500 rounded-full h-20"></div>
                    <div className="w-4 bg-emerald-500 rounded-full h-12"></div>
                    <div className="w-4 bg-emerald-500 rounded-full h-16"></div>
                    <div className="w-4 bg-emerald-500 rounded-full h-20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                Cloud Storage
              </h3>
              <p className="text-lg text-gray-600">
                No need to worry about storage because we provide storage up to 2 TB
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 h-96 relative overflow-hidden">
              <div className="space-y-6">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E5E5" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="8" 
                            strokeDasharray="125 251" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="8" 
                            strokeDasharray="75 251" strokeDashoffset="-125" strokeLinecap="round"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">60%</div>
                      <div className="text-sm text-gray-600">40%</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-gray-200 flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-gray-200 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg border"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                Daily Analytics
              </h3>
              <p className="text-lg text-gray-600">
                We always provide useful information to make it easier for you every day
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What Benefit Will You Get
            </h2>
            
            <div className="space-y-6">
              {[
                "Free Consulting With Expert Saving Money",
                "Online Banking",
                "Investment Report Every Month", 
                "Saving Money For The Future",
                "Online Transaction"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <svg className="w-8 h-8 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
           <img src="/benefit.png" alt="" className="object-contain w-3/4 h-1/2" />

            <div className="absolute top-8 left-8 w-10 h-10 bg-emerald-500 rounded-lg transform -rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Choose Plan<br />That's Right For You
          </h2>
          <p className="text-lg font-bold text-gray-600 mb-8">
            Choose plan that works best for you, feel free to contact us
          </p>
          
          <div className="inline-flex bg-white rounded-lg p-2 shadow-md border">
            <button className="px-6 lg:px-8 py-4 text-lg font-medium text-gray-900">
              Bill Monthly
            </button>
            <button className="px-6 lg:px-8 py-4 bg-emerald-500 text-white rounded-lg text-lg font-medium">
              Bill Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Free</h3>
              <p className="text-lg text-gray-600 mb-6">
                Have a go and test your superpowers
              </p>
              <div className="text-gray-900">
                <span className="text-lg">$</span><span className="text-5xl font-semibold">0</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-4">
                {[
                  "2 Users",
                  "2 Files",
                  "Public Share & Comments",
                  "Chat Support",
                  "New income apps"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-white border border-emerald-500 text-emerald-500 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-50 transition-colors">
              Signup for free
            </button>
          </div>

          <div className="bg-emerald-500 rounded-2xl p-6 shadow-lg border relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-white px-6 py-2 rounded-lg text-sm font-semibold">
              Save $50 a year
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-white mb-4">Pro</h3>
              <p className="text-lg text-white mb-6">
                Experiment the power of infinite possibilities
              </p>
              <div className="text-white">
                <span className="text-lg">$</span><span className="text-5xl font-semibold">8</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6">
              <ul className="space-y-4">
                {[
                  "4 Users",
                  "All apps",
                  "Unlimited editable exports",
                  "Folders and collaboration",
                  "All incoming apps"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-700 transition-colors">
              Go to pro
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Business</h3>
              <p className="text-lg text-gray-600 mb-6">
                Unveil new superpowers and join the Design League
              </p>
              <div className="text-gray-900">
                <span className="text-lg">$</span><span className="text-5xl font-semibold">16</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-4">
                {[
                  "All the features of pro plan",
                  "Account success Manager",
                  "Single Sign-On (SSO)",
                  "Co-conception program",
                  "Collaboration-Soon"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-white border border-emerald-500 text-emerald-500 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-50 transition-colors">
              Goto Business
            </button>
          </div>
        </div>
      </section>

      
      {/* Testimonials & CTA Section */}
      <section className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                People are Saying<br />
                About DoWhith
              </h1>
              <p className="text-biccas-gray text-lg leading-relaxed">
                Everything you need to accept to payment and grow<br />
                your money of manage anywhere on planet
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-biccas-gray text-6xl font-bold leading-none">"</div>
              <div className="space-y-4">
                <p className="text-biccas-gray text-lg leading-relaxed">
                  I am very helped by this E-wallet application , my<br />
                  days are very easy to use this application and its very<br />
                  helpful in my life , even I can pay a short time 😍
                </p>
                <p className="text-biccas-gray">_ Aria Zinanrio</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-white"></div>
                <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-white"></div>
                <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-white"></div>
                <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-white"></div>
              </div>
              <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-biccas-dark rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <svg width="72" height="86" viewBox="0 0 73 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72.0585 20.8486V20.4268H72.0234C71.8125 15.2245 68.2974 10.0574 61.4255 6.103C47.3302 -2.03433 24.4824 -2.03433 10.4749 6.103C3.46239 10.1805 -0.017509 15.5233 6.62378e-05 20.8662V31.8859V32.0792V42.9055V43.0989V53.9252V54.1185V65.1382C0.0352167 70.4811 3.58541 75.8239 10.6331 79.8838C17.6983 83.9613 26.9253 86 36.1347 86C45.3617 86 54.5536 83.9613 61.5837 79.8838C68.5962 75.8064 72.0761 70.4635 72.0585 65.1382V54.1185V53.5034V43.0989V42.4486V32.044V31.4289V20.8486C72.0585 20.8486 72.0585 20.8662 72.0585 20.8486ZM17.8038 14.2403L19.7546 13.1155C20.2467 12.8343 21.02 12.8343 21.5297 13.1155L23.9375 14.504C24.4648 14.1876 25.0096 13.8888 25.5369 13.5725L23.1291 12.184C22.637 11.9028 22.637 11.4459 23.1291 11.1647L25.0799 10.0399C25.572 9.75865 26.3629 9.75865 26.855 10.0399L29.9307 11.8149L30.3349 11.6919C33.7797 10.6374 37.4353 10.1629 41.337 10.4441C44.3951 10.6726 47.1368 11.3931 49.6501 12.4477C50.6343 12.8519 51.5482 13.3088 52.3743 13.7834C54.5536 15.0488 56.2232 16.5251 57.5238 18.1948L57.7874 18.6517C58.0862 19.2668 57.7347 19.6887 56.6978 19.9347C55.6081 20.2159 54.5009 20.462 53.3936 20.708C52.6203 20.8662 52.0755 20.831 51.6009 20.5498C51.4779 20.4795 51.3725 20.3917 51.2494 20.3038C50.5113 19.6184 49.8434 18.8802 49.0525 18.2123C48.3495 17.5972 47.5762 17.0172 46.6975 16.5075C45.5375 15.8397 44.2018 15.2773 42.6024 14.8906C40.2122 14.2931 37.8747 14.4337 35.5196 14.9785L35.4317 14.9961L41.3897 18.4408C41.8818 18.722 41.8818 19.179 41.3897 19.4602L39.4389 20.585C38.9468 20.8662 38.1559 20.8662 37.6638 20.585L30.827 16.6481C30.3173 16.9469 29.7725 17.2633 29.2277 17.5796L36.0644 21.5165C36.5565 21.7977 36.5565 22.2546 36.0644 22.5358L34.1136 23.6607C33.6215 23.9419 32.8482 23.9419 32.3385 23.6607L26.0993 20.0577C24.7108 21.745 24.2715 23.4146 25.8357 25.1545C26.5035 25.8927 27.3647 26.543 28.3665 27.123C29.2453 27.6327 30.2119 28.072 31.2488 28.4763C32.4088 28.8981 33.6391 29.2847 34.8342 29.7241C35.0275 29.7944 35.1857 29.8647 35.3263 29.9526C35.8008 30.2338 35.8711 30.5501 35.5899 30.9895C35.1857 31.6574 34.7287 32.3077 34.2366 32.9404C33.8324 33.5204 33.0767 33.7313 31.987 33.5204C30.8973 33.2743 29.8252 32.9755 28.7707 32.6416C26.8374 32.0089 25.0975 31.2707 23.586 30.392C22.0043 29.4781 20.6685 28.4235 19.5964 27.2284C17.0832 24.3812 17.1359 21.4813 19.1922 18.5638C19.5964 17.9839 20.1589 17.4742 20.651 16.9293L17.7335 15.2421C17.3117 14.9785 17.3117 14.5215 17.8038 14.2403ZM10.6331 35.6118C24.746 43.7667 47.5586 43.7667 61.5837 35.6118C63.763 34.3464 65.5733 32.9404 67.0671 31.4641V32.0792C67.0847 35.7348 64.1672 39.5487 59.0704 42.5013C53.0245 46.0163 44.8872 47.9496 36.1347 47.9496C27.3823 47.9496 19.1922 46.0163 13.1112 42.5013C7.96165 39.5311 4.99143 35.6997 4.95628 32.0616V31.341C6.52048 32.8525 8.38345 34.3112 10.6331 35.6118ZM59.088 64.5231C53.0421 68.0381 44.9048 69.9714 36.1523 69.9714C27.3999 69.9714 19.2098 68.0381 13.1288 64.5231C7.97922 61.5529 5.00901 57.7215 4.97386 54.0834V53.5561C6.52048 55.0852 8.36588 56.5263 10.6331 57.8269C17.6983 61.9044 26.9253 63.9431 36.1347 63.9431C45.3617 63.9431 54.5536 61.9044 61.5837 57.8269C63.763 56.5615 65.5733 55.1555 67.0671 53.6791V54.1185C67.1023 57.7742 64.1848 61.5704 59.088 64.5231ZM59.088 53.521C53.0421 57.036 44.9048 58.9693 36.1523 58.9693C27.3999 58.9693 19.2098 57.036 13.1288 53.521C7.97922 50.5508 5.00901 46.7194 4.97386 43.0813V42.554C6.52048 44.0831 8.36588 45.5242 10.6331 46.8248C17.6983 50.9023 26.9253 52.941 36.1347 52.941C45.3617 52.941 54.5536 50.9023 61.5837 46.8248C63.763 45.5594 65.5733 44.1534 67.0671 42.6771V43.1164C67.1023 46.7545 64.1848 50.5508 59.088 53.521ZM59.088 75.5427C53.0421 79.0578 44.9048 80.9911 36.1523 80.9911C27.3999 80.9911 19.2098 79.0578 13.1288 75.5427C7.97922 72.5725 5.00901 68.7411 4.97386 65.103V64.5758C6.52048 66.1048 8.36588 67.546 10.6331 68.8466C17.6983 72.924 26.9253 74.9628 36.1347 74.9628C45.3617 74.9628 54.5536 72.924 61.5837 68.8466C63.763 67.5812 65.5733 66.1751 67.0671 64.6988V65.1382C67.1023 68.7763 64.1848 72.5901 59.088 75.5427Z" fill="#54BD95"/>
                </svg>
              </div>
              <h2 className="text-3xl font-medium">Get Started</h2>
            </div>

            <form  className="space-y-6">
              <div className="space-y-2">
                <label className="text-white text-lg font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-biccas-gray border-0 focus:outline-none focus:ring-2 focus:ring-biccas-green"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-lg font-medium">Message</label>
                <textarea
                  placeholder="What are you say ?"
                  rows={3}
                  className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-biccas-gray border-0 resize-none focus:outline-none focus:ring-2 focus:ring-biccas-green"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-biccas-green text-white font-semibold py-4 px-6 rounded-xl hover:bg-green-600 transition-colors"
              >
                Request Demo
              </button>
            </form>

            <p className="text-center text-biccas-gray">
              or <span className="text-white">Start Free Trial</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Left Footer - Biccas Branding */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-5xl font-semibold text-biccas-green">Biccas</h3>
                <p className="text-biccas-gray text-lg">Get started noew try our product</p>
              </div>

              {/* Email Signup */}
              <form  className="relative">
                <div className="flex items-center border-2 border-biccas-gray rounded-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-biccas-gray border-0 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 bg-biccas-green rounded-full flex items-center justify-center m-2 hover:bg-green-600 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Footer - Links */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Support Column */}
              <div className="space-y-6">
                <h4 className="text-white text-lg font-medium">Support</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Help centre</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Account information</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">About</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Contact us</a>
                </div>
              </div>

              {/* Help and Solution Column */}
              <div className="space-y-6">
                <h4 className="text-white text-lg font-medium">Help and Solution</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Talk to support</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Support docs</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">System status</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Covid responde</a>
                </div>
              </div>

              {/* Product Column */}
              <div className="space-y-6">
                <h4 className="text-white text-lg font-medium">Product</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Update</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Security</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Beta test</a>
                  <a href="#" className="block text-biccas-gray hover:text-white transition-colors">Pricing product</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700 max-w-7xl mx-auto">
            <p className="text-white text-lg">© 2022 Biccas Inc. Copyright and rights reserved</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-biccas-gray transition-colors">Terms and Condtions</a>
              <div className="w-1 h-1 bg-biccas-gray rounded-full"></div>
              <a href="#" className="text-white hover:text-biccas-gray transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </div>
  );
}
