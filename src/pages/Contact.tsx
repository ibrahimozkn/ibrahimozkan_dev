import React from 'react';

function Contact() {
  return (
    <div className="container flex min-h-screen max-w-xl flex-col items-start p-6">
      <h2 className="text-3xl font-bold text-white">
        <span className="text-primary">$</span> contact --me
      </h2>
      <form className="flex w-full flex-col space-y-5">
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-2">
            <label className="mt-4 text-white" htmlFor="name">
              string name =
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="mt-4 text-white" htmlFor="name">
              string name =
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white"
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="mt-4 text-white" htmlFor="email">
            string email =
          </label>
          <input
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white"
            type="text"
            id="email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="mt-4 text-white" htmlFor="message">
            string message =
          </label>
          <textarea
            id="message"
            rows={6}
            className="mt-1 w-full resize-y rounded-md border border-gray-700 bg-gray-800 p-2 text-white"
            placeholder="Type your message..."
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
