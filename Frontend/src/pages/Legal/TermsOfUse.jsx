import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function TermsOfUse() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen py-24 px-4 font-sans ${isDarkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-gray-700'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-bold font-serif mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Terms of Use</h1>
                <p className="mb-6 text-sm text-gray-500">Last updated: January 22, 2026</p>

                <section className="mb-10 space-y-4">
                    <p>
                        Welcome to the NetGrud Alumni Association platform. By accessing or using our website, you agree to comply with and be bound by these Terms of Use.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1. Eligibility</h2>
                    <p>
                        Membership is open to verified graduates, current students (final year), and faculty of the university. You must provide accurate and complete registration information.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2. User Conduct</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Use the platform for any illegal or unauthorized purpose.</li>
                        <li>Harass, abuse, or harm another person.</li>
                        <li>Post false, misleading, or inappropriate content.</li>
                        <li>Attempt to scrape or collect data from the directory for commercial purposes.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3. Content Ownership</h2>
                    <p>
                        You retain ownership of the content you post (e.g., job listings, news). However, you grant the Association a license to display and distribute this content within the platform.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct detrimental to the community.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5. Disclaimer</h2>
                    <p>
                        The platform is provided "as is" without warranties of any kind. We are not responsible for the accuracy of content posted by users or third parties.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>6. Contact</h2>
                    <p>
                        For any questions regarding these Terms, please contact us at <a href="mailto:admin@netgrud.com" className="text-red-600 hover:underline">admin@netgrud.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
