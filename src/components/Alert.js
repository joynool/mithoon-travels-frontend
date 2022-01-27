import React from 'react';

const Alert = ({ title }) =>
{
    return (
        <div className="bg-green-100 my-3 p-5 w-full rounded">
            <div className="flex justify-center items-center">
                <div className="flex space-x-3 whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
                    <div className="flex-1 leading-tight text-sm text-green-700 font-medium">{title}</div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
