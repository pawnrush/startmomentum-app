'use client'; // Add this directive for components using client-side hooks

import { useState, useEffect } from 'react';

// In a real Next.js app with the App Router, you would manage the <head>
// using a metadata object exported from your page.js or layout.js file.
// For example:
//
// export const metadata = {
//   title: 'Startmomentum.app | Behavior Data Collection for Education',
//   description: 'Empowering educators, clinicians, and families...',
//   icons: {
//     icon: 'https://placehold.co/32x32/4F46E5/FFFFFF?text=SM',
//   },
// };
//
// We have removed the <Head> component to fix the compilation error.

export default function HomePage() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect hook to handle side effects like adding event listeners
  useEffect(() => {
    // This effect runs only on the client side after the component mounts
    
    // --- Sticky header background change on scroll ---
    const header = document.getElementById('header');
    if (!header) return; // Guard clause in case element isn't found

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white/95', 'shadow-md');
        header.classList.remove('bg-white/80');
      } else {
        header.classList.remove('bg-white/95', 'shadow-md');
        header.classList.add('bg-white/80');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Scroll reveal animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // --- Cleanup function ---
    // This function runs when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => {
        revealObserver.unobserve(el);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* This inline style is for the animations. It would typically go in a global CSS file. */}
      <style jsx global>{`
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* light gray background */
        }
        .text-gradient {
            background: linear-gradient(to right, #4f46e5, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        /* Animation classes */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>
      
      {/* Header & Navigation */}
      <header id="header" className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold text-gray-900">
                    Start<span className="text-indigo-600">momentum</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
                    <a href="#solutions" className="text-gray-600 hover:text-indigo-600 transition">Solutions</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
                    <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-indigo-600 font-semibold">Log In</a>
                    <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition shadow">Start Free Trial</a>
                </div>
                <button id="mobile-menu-button" className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
            <a href="#features" className="block py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#solutions" className="block py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a href="#testimonials" className="block py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <div className="border-t border-gray-200 mt-4 pt-4 space-y-4">
                 <a href="#" className="block text-center text-indigo-600 font-semibold">Log In</a>
                 <a href="#" className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition shadow">Start Free Trial</a>
            </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight reveal">
                        Unlock Student Potential with <span className="text-gradient">Data-Driven Insights</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto reveal" style={{transitionDelay: '200ms'}}>
                        Empowering educators, clinicians, and families with precise, real-time behavior data across all learning environments.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 reveal" style={{transitionDelay: '400ms'}}>
                        <a href="#" className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition shadow-lg">Start Your Free Trial</a>
                        <a href="#" className="w-full sm:w-auto bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition">Request a Demo</a>
                    </div>
                </div>
                <div className="mt-16 reveal" style={{transitionDelay: '600ms'}}>
                    <img src="https://placehold.co/1200x600/E0E7FF/4F46E5?text=App+Dashboard+Screenshot" alt="Startmomentum.app Dashboard Preview" className="rounded-2xl shadow-2xl mx-auto" width={1200} height={600} />
                </div>
            </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Value Prop 1 */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-md reveal">
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-4">
                             <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Streamline & Save Time</h3>
                        <p className="text-gray-600">Effortlessly capture data in seconds, saving an average of 4 hours per week on paperwork.</p>
                    </div>
                     {/* Value Prop 2 */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-md reveal" style={{transitionDelay: '150ms'}}>
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-4">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Data-Driven Decisions</h3>
                        <p className="text-gray-600">Instantly visualize trends and progress with automated, comprehensive reports.</p>
                    </div>
                    {/* Value Prop 3 */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-md reveal" style={{transitionDelay: '300ms'}}>
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-4">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Seamless Collaboration</h3>
                        <p className="text-gray-600">Securely share real-time information among teachers, therapists, and parents.</p>
                    </div>
                    {/* Value Prop 4 */}
                    <div className="text-center p-6 bg-white rounded-xl shadow-md reveal" style={{transitionDelay: '450ms'}}>
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-4">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Unwavering Compliance</h3>
                        <p className="text-gray-600">Rest easy with a platform built on HIPAA & FERPA compliant architecture.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 reveal">The Tools You Need to Drive Meaningful Progress</h2>
                    <p className="mt-4 text-lg text-gray-600 reveal" style={{transitionDelay: '200ms'}}>From IEPs to ABC data, our platform is designed for the complex needs of special education.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-100 mb-4">
                           <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">IEP Goal Tracking</h3>
                        <p className="text-gray-600">Log progress on IEP goals with a single click, automate service time tracking, and generate progress reports aligned with IEP timelines.</p>
                    </div>
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 mb-4">
                           <svg className="w-7 h-7 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Comprehensive Recording</h3>
                        <p className="text-gray-600">Support for all major data types: frequency, duration, interval recording, task analysis, ABC event logging, and more.</p>
                    </div>
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-100 mb-4">
                           <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Real-Time Visualization</h3>
                        <p className="text-gray-600">Instantly transform data into easy-to-understand graphs and trend lines. Export to PDF/CSV for IEP meetings and parent updates.</p>
                    </div>
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 mb-4">
                           <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Multi-User Collaboration</h3>
                        <p className="text-gray-600">Create a unified care team with secure data sharing and customizable role-based access for teachers, therapists, and parents.</p>
                    </div>
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-100 mb-4">
                           <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">HIPAA & FERPA Compliant</h3>
                        <p className="text-gray-600">Built with end-to-end data encryption, secure cloud storage, multi-factor authentication, and detailed audit logs.</p>
                    </div>
                    {/* Feature Item */}
                    <div className="reveal">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 mb-4">
                           <svg className="w-7 h-7 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Mobile & Offline Access</h3>
                        <p className="text-gray-600">User-friendly iOS/Android apps and a web portal that works on any device. Collect data offline and sync when reconnected.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 reveal">A Tailored Solution for Every Setting</h2>
                    <p className="mt-4 text-lg text-gray-600 reveal" style={{transitionDelay: '200ms'}}>Whether you're in a clinic, a school, or at home, Startmomentum is built for you.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* For Clinics */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg reveal">
                         <img src="https://placehold.co/600x400/C7D2FE/4338CA?text=Clinic+Setting" alt="Therapist using a tablet in a clinic" className="rounded-lg mb-6 w-full h-48 object-cover" width={600} height={400}/>
                        <h3 className="text-2xl font-bold text-indigo-700">For Clinics</h3>
                        <p className="mt-2 text-gray-600">Optimize your practice with tools for BCBAs and therapists. Streamline data collection, manage client caseloads efficiently, and generate reports for billing and progress analysis.</p>
                         <a href="#" className="mt-6 inline-block font-semibold text-indigo-600 hover:text-indigo-800">Learn More &rarr;</a>
                    </div>
                    {/* For Public Schools */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg reveal" style={{transitionDelay: '200ms'}}>
                         <img src="https://placehold.co/600x400/FECACA/991B1B?text=School+Classroom" alt="Teacher working with a student in a classroom" className="rounded-lg mb-6 w-full h-48 object-cover" width={600} height={400}/>
                        <h3 className="text-2xl font-bold text-red-700">For Public Schools</h3>
                        <p className="mt-2 text-gray-600">Empower your special education department. Seamlessly integrate with IEPs, ensure FERPA compliance, and facilitate collaboration between teachers, aides, and administrators.</p>
                        <a href="#" className="mt-6 inline-block font-semibold text-red-600 hover:text-red-800">Learn More &rarr;</a>
                    </div>
                    {/* For Parents */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg reveal" style={{transitionDelay: '400ms'}}>
                        <img src="https://placehold.co/600x400/A7F3D0/065F46?text=Home+Environment" alt="Parent and child interacting at home" className="rounded-lg mb-6 w-full h-48 object-cover" width={600} height={400}/>
                        <h3 className="text-2xl font-bold text-green-700">For Parents & Home Use</h3>
                        <p className="mt-2 text-gray-600">Become an active partner in your child's progress. Easily track behaviors and milestones, collaborate with your child's care team, and stay informed with clear, simple updates.</p>
                        <a href="#" className="mt-6 inline-block font-semibold text-green-600 hover:text-green-800">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-indigo-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 reveal">Trusted by Professionals, Loved by Families</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-md reveal">
                        <p className="text-gray-600 text-lg italic">"Startmomentum has been a game-changer for our clinic. We're saving hours on data entry, and our team collaboration has never been better. The visual reports make parent meetings so much more productive."</p>
                        <div className="mt-6 flex items-center">
                            <img src="https://placehold.co/48x48/E0E7FF/4F46E5?text=JS" alt="Jane Smith" className="w-12 h-12 rounded-full" width={48} height={48}/>
                            <div className="ml-4">
                                <p className="font-bold text-gray-900">Jane Smith, BCBA-D</p>
                                <p className="text-gray-500">Clinical Director</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{transitionDelay: '200ms'}}>
                        <p className="text-gray-600 text-lg italic">"As a special education teacher, I can finally track IEP goals accurately without getting buried in paperwork. The offline feature is a lifesaver for when I'm moving between classrooms."</p>
                        <div className="mt-6 flex items-center">
                            <img src="https://placehold.co/48x48/FFE4E6/BE123C?text=MD" alt="Mark Davis" className="w-12 h-12 rounded-full" width={48} height={48}/>
                            <div className="ml-4">
                                <p className="font-bold text-gray-900">Mark Davis</p>
                                <p className="text-gray-500">Special Education Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-600">Startmomentum.app was born from the critical need to simplify and unify behavior data collection across the myriad environments a child learns in. For too long, special education professionals, teachers, therapists, and parents have been burdened by fragmented and time-consuming tracking methods. Our platform streamlines this process, fostering seamless collaboration and providing actionable insights that not only support student growth but also empower practices and schools to enhance their services and tailor experiences to their clientele's unique needs.</p>
                        <p className="mt-6 font-semibold text-gray-800">We believe data is a tool for understanding and growth, not for labeling. We are deeply committed to the ethical use of behavior data to support and empower every student.</p>
                    </div>
                    <div className="reveal" style={{transitionDelay: '200ms'}}>
                        <img src="https://placehold.co/600x500/4F46E5/FFFFFF?text=Our+Team" alt="A diverse group of professionals collaborating" className="rounded-2xl shadow-xl" width={600} height={500}/>
                    </div>
                 </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600">
            <div className="container mx-auto px-6 py-20 text-center">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white reveal">Ready to Transform Your Data Collection?</h2>
                 <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto reveal" style={{transitionDelay: '200ms'}}>Join hundreds of educators and clinicians who are saving time, improving collaboration, and driving better outcomes for their students.</p>
                 <div className="mt-10 reveal" style={{transitionDelay: '400ms'}}>
                     <a href="#" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">Start Your Free Trial Today</a>
                 </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 reveal">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 reveal" style={{transitionDelay: '200ms'}}>Have questions about pricing, features, or getting started? We're here to help.</p>
                </div>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg reveal" style={{transitionDelay: '400ms'}}>
                    <form action="#" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="first-name" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="last-name" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                        </div>
                        <div className="mt-8 text-right">
                             <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold">Startmomentum</h3>
                    <p className="mt-2 text-gray-400">Data-driven support for every student.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-200">Product</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#solutions" className="text-gray-400 hover:text-white">Solutions</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Request Demo</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-200">Company</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                     <h4 className="font-semibold text-gray-200">Legal</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
                 <p className="text-gray-500">&copy; 2025 Startmomentum.app. All rights reserved.</p>
                 <div className="flex space-x-4 mt-4 sm:mt-0">
                    {/* Placeholder for social icons */}
                 </div>
            </div>
        </div>
      </footer>
    </>
  );
}
