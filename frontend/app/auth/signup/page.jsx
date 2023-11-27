'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
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
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.name?.message}</span>
          </div>
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.password?.message}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.confirmPassword?.message}</span>
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded w-full my-5">
            Sign Up
          </button>
          <Link href={'/auth/login'}>
            <button type="button" className="bg-gray-400 text-black p-2 rounded w-full">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
