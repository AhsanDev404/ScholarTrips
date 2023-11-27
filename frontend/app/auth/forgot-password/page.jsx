'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
 
});

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle signup logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.email?.message}</span>
          </div>
          
          <button type="submit" className="bg-black text-white p-2 rounded w-full my-5">
           Enter Email
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
