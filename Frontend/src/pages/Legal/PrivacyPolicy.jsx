import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function PrivacyPolicy() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen py-24 px-4 font-sans ${isDarkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-gray-700'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-bold font-serif mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Privacy Policy</h1>
                <p className="mb-6 text-sm text-gray-500">Last updated: January 22, 2026</p>

                <section className="mb-10 space-y-4">
                    <p>
                        At NetGrad Alumni Association, we are committed to protecting your privacy. This Privacy Policy explains how our organization collects, uses, and safeguards the personal information you provide to us when you use our website and services.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, graduation year, degree, and current employment details.</li>
                        <li><strong>Authentication Data:</strong> Username, password, and security tokens used for account access.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our platform, including page views and feature usage.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To verify your alumni status and approve your membership.</li>
                        <li>To facilitate networking and connection between alumni members.</li>
                        <li>To provide career services, job postings, and mentorship opportunities.</li>
                        <li>To communicate with you about events, news, and association updates.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3. Data Sharing and Disclosure</h2>
                    <p>
                        We do not sell your personal data. We may share information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Other Members:</strong> Limited profile information is visible to other verified alumni in the directory.</li>
                        <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., hosting, email delivery).</li>
                        <li><strong>Legal Requirements:</strong> If required by law or to protect the rights of the Association.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal information. You can manage your profile settings directly through the dashboard or contact us for assistance.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@netgrad.com" className="text-red-600 hover:underline">privacy@netgrad.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
