import React from 'react';

type AlertProps = {
  message: string;
};
export default function Alert({ message }: AlertProps) {
  return (
    <div
      className='w-full flex items-center justify-center p-4 mb-4 text-sm text-blue-800 rounded-lg shadow-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
      role='alert'
    >
      <span className='font-medium'>Info alert! &nbsp;</span> {message}
    </div>
  );
}
