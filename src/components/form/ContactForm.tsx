import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

interface ContactFormProps {
  onSubmit?: (data: FormData) => boolean | Promise<boolean>;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await onSubmit?.(formData);

    if (result) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <form className="flex w-full flex-col space-y-5 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <h2 className="text-3xl font-bold text-white">
        <span className="text-primary">$</span> contact --me
      </h2>
      <div className="flex space-x-5">
        <FormInput label="string name =" id="name" value={formData.name} onChange={handleChange} />
        <FormInput
          label="string email ="
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <FormInput
        label="string subject ="
        id="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <FormTextarea
        label="string message ="
        id="message"
        placeholder="Type your message..."
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-primary text-background-dark hover:bg-primary/90 mt-4 w-max rounded px-6 py-2 font-bold"
      >
        Send Message
      </button>
    </form>
  );
}
