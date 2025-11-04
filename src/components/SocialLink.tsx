import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

export default function SocialLink({ icon, label, href }: SocialLinkProps) {
  const content = (
    <div className="flex items-center space-x-3 text-xl text-gray-400">
      {icon}
      <p>{label}</p>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
