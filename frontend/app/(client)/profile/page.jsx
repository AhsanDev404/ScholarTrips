'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { handleSubmit, control } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const goToUpdatePassword = () => {
    router.push('/auth/update-password');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        <section className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
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
            </div>
            <button type="submit" className="bg-black text-white p-2 rounded w-full mb-4">
              Save Changes
            </button>
          </form>
          <button onClick={goToUpdatePassword} className="bg-blue-500 text-white p-2 rounded w-full">
            Update Password
          </button>
        </section>
      </main>

      {/* Footer Section (You can include a footer here if needed) */}
      {/* ...Footer content... */}
    </div>
  );
};

export default ProfilePage;
