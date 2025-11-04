import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionCard from '../components/common/SectionCard';
import CodeBlock from '../components/common/CodeBlock';
import ContactForm from '../components/form/ContactForm';
import SocialLink from '../components/social/SocialLink';

function Contact() {
  const emailData = {
    email: 'ibrahim@example.com',
  };

  const handleFormSubmit = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-start space-y-10 p-6 md:flex-row md:space-x-10">
      <div className="flex flex-col md:basis-2/3">
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-col space-y-5 md:basis-1/3">
        <SectionCard title="// Find me on web">
          <div className="mt-3 flex flex-col space-y-5">
            <SocialLink icon={<FaGithub />} label="Github" />
            <SocialLink icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink icon={<FaEnvelope />} label="Email" />
          </div>
        </SectionCard>
        <CodeBlock code={emailData} title="// Or send me an email" />
      </div>
    </div>
  );
}

export default Contact;
