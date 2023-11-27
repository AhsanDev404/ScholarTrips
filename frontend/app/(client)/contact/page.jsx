'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactUsPage = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        <section className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                )}
              />
              <span className="text-red-500">{errors.name?.message}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                )}
              />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    className="mt-1 p-2 w-full border rounded-md"
                    rows="4"
                  />
                )}
              />
              <span className="text-red-500">{errors.message?.message}</span>
            </div>
            <button type="submit" className="bg-black text-white p-2 rounded w-full">
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section (You can include a footer here if needed) */}
      {/* ...Footer content... */}
    </div>
  );
};

export default ContactUsPage;
