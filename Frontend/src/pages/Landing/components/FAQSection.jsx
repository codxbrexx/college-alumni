import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

function FAQItem({ question, answer }) {
    return (
        <div className="p-6 border bg-white border-gray-200 rounded-none">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                <FaQuestionCircle className="text-red-500 text-sm" /> {question}
            </h3>
            <p className="text-sm leading-relaxed ml-6 text-gray-600">{answer}</p>
        </div>
    );
}

export default function FAQSection() {
    return (
        <section className="py-20 border-t bg-gray-50 border-gray-200">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center font-serif text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <FAQItem
                        question="Who can join the platform?"
                        answer="Any verified graduate of the university can join. You will need your student ID or verification details during registration."
                    />
                    <FAQItem
                        question="Is there a membership fee?"
                        answer="Basic membership is free for all alumni. Some special events or workshops may have a nominal fee."
                    />
                    <FAQItem
                        question="How do I update my profile?"
                        answer="Once logged in, go to your Dashboard and click on 'Edit Profile' to update your employment, location, and contact info."
                    />
                </div>
            </div>
        </section>
    );
}
