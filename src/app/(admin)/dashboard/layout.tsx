import React from 'react';

export default function Layout({
  children,
  payments,
  analytics,
}: {
  children: React.ReactNode;
  payments: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className='mt-2'>
      <h2 className='text-3xl'>Dashboard</h2>
      <div className='w-full h-screen flex flex-col items-center p-5'>
        <div className='w-3/4 h-1/3 bg-slate-400 rounded-lg flex justify-center'>
          {children}
        </div>
        <div className='w-3/4 h-1/3 flex gap-4 justify-center mt-1'>
          <div className='w-1/2 h-full bg-slate-400 rounded-lg flex justify-center items-center mt-5'>
            {payments}
          </div>
          <div className='w-1/2 h-full bg-slate-400 rounded-lg flex justify-center items-center mt-5'>
            {analytics}
          </div>
        </div>
      </div>
    </div>
  );
}
