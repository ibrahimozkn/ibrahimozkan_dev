interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export default function TimelineItem({ title, subtitle, description, badge }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-6">
      <span className="bg-primary ring-primary/20 absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full ring-4"></span>
      <h3 className="mb-1 flex items-center text-lg font-semibold text-white">
        {title}
        {badge && (
          <span className="bg-primary/40 mr-2 ml-3 rounded px-2.5 py-0.5 text-sm font-medium text-white">
            {badge}
          </span>
        )}
      </h3>
      <time className="mb-2 block text-sm leading-none font-normal text-gray-400">{subtitle}</time>
      <p className="text-base font-normal text-gray-300">{description}</p>
    </li>
  );
}
