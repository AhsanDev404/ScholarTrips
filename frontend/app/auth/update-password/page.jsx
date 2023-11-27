'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

const schema = yup.object().shape({

  currentPassword: yup.string().required('Current password is required').min(6, 'Password must be at least 6 characters'),
  newPassword: yup.string().required('New password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

const UpdatePasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle update password logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Update Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-600">
              Current Password
            </label>
            <input
              {...register('currentPassword')}
              type="password"
              id="currentPassword"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.currentPassword?.message}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              {...register('newPassword')}
              type="password"
              id="newPassword"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-500">{errors.newPassword?.message}</span>
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
            Update Password
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordPage;
