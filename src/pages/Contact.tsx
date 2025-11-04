import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionCard from '../components/SectionCard';
import CodeBlock from '../components/CodeBlock';

function Contact() {
  const emailData = {
    email: 'ibrahim@example.com',
  };

  return (
    <div className="container mx-auto flex min-h-screen items-start space-x-10 p-6">
      <div className="flex basis-2/3 flex-col">
        <form className="flex w-full flex-col space-y-5 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-primary">$</span> contact --me
          </h2>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-2">
              <label className="mt-4 text-white" htmlFor="name">
                string name =
              </label>
              <input
                className="focus:ring-primary mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:ring-2 focus:outline-none"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="mt-4 text-white" htmlFor="email">
                string email =
              </label>
              <input
                className="focus:ring-primary mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:ring-2 focus:outline-none"
                type="text"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="mt-4 text-white" htmlFor="subject">
              string subject =
            </label>
            <input
              className="focus:ring-primary mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:ring-2 focus:outline-none"
              type="text"
              id="subject"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="mt-4 text-white" htmlFor="message">
              string message =
            </label>
            <textarea
              id="message"
              rows={6}
              className="focus:ring-primary mt-1 w-full resize-y rounded-md border border-gray-700 bg-gray-800 p-2 text-white focus:ring-2 focus:outline-none"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-background-dark hover:bg-primary/90 mt-4 w-max rounded px-6 py-2 font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex basis-1/3 flex-col space-y-5">
        <SectionCard title="// Find me on web">
          <div className="mt-3 flex flex-col space-y-5">
            <div className="flex items-center space-x-3 text-xl text-gray-400">
              <FaGithub className="" />
              <p className="">Github</p>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-400">
              <FaLinkedin className="" />
              <p className="">LinkedIn</p>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-400">
              <FaEnvelope className="" />
              <p className="">Email</p>
            </div>
          </div>
        </SectionCard>
        <CodeBlock code={emailData} title="// Or send me an email" />
      </div>
    </div>
  );
}

export default Contact;
