import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="mt-4 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="focus:ring-primary mt-1 w-full rounded-md border border-white/20 bg-white/10 p-2 text-white focus:ring-2 focus:outline-none"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
