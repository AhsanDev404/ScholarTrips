import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: 'How can I search for student discounts on flights?',
      answer: 'You can easily search for student discounts by using our search bar. Enter your departure and arrival destinations, travel dates, and click on the search button. Our platform will show you a list of available student discounts on flights.'
    },
    {
      question: 'Are the student discounts available for international flights?',
      answer: 'Yes, we offer student discounts on both domestic and international flights. You can find budget-friendly options for your international travel destinations.'
    },
    {
      question: 'How do I create a user profile?',
      answer: 'Creating a user profile is simple. Click on the "Sign Up" button on the top right corner of the page. Fill in your details, including your email and password, and you will have your own user profile to save searches and favorite deals.'
    },
    {
      question: 'Is there a customer support service available?',
      answer: 'Absolutely! Our customer support team is available 24/7 to assist you. You can reach out to us via email, phone, or live chat for any queries or concerns you may have.'
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section (You can include a footer here if needed) */}
      {/* ...Footer content... */}
    </div>
  );
};

export default FAQPage;
