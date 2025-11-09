import React from 'react';

interface FormTextareaProps {
  label: string;
  id: string;
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({
  label,
  id,
  rows = 6,
  placeholder,
  value,
  onChange,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="mt-4 text-white" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="focus:ring-primary mt-1 w-full resize-y rounded-md border border-white/20 bg-white/10 p-2 text-white focus:ring-2 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
