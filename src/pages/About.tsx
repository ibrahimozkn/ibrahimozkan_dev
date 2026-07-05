import photo from '../assets/me_photo.jpg';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import TechnologyCard from '../components/project/TechnologyCard';
import SectionCard from '../components/common/SectionCard';
import TimelineItem from '../components/common/TimelineItem';
import CodeBlock from '../components/common/CodeBlock';
import SocialLink from '../components/social/SocialLink';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';

const cmpMonthYear = (a: string, b: string) => {
  const [am, ay] = a.split('/').map(Number);
  const [bm, by] = b.split('/').map(Number);
  return ay === by ? am - bm : ay - by;
};

function About() {
  const { profile, contact, skills, experience, education, socials } = portfolio;

  const profileData = {
    name: profile.name,
    role: profile.title,
    availability: profile.availability,
    email: contact.email,
  };

  const milestones = [
    ...experience.map(e => ({
      title: `${e.title} @ ${e.company}`,
      subtitle: `${e.location} | ${e.start} – ${e.end}`,
      description: e.bullets[0] ?? '',
      current: e.current,
      sortKey: e.start,
    })),
    ...education.map(e => ({
      title: e.degree,
      subtitle: `${e.school} | ${e.start} – ${e.end}${e.grade ? ` | ${e.grade}` : ''}`,
      description: '',
      current: e.current,
      sortKey: e.start,
    })),
  ].sort((a, b) => cmpMonthYear(b.sortKey, a.sortKey));

  const socialIcon: Record<Exclude<Social['kind'], 'website'>, ReactNode> = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    email: <FaEnvelope />,
  };

  const visibleSocials = socials.filter(
    (s): s is Social & { kind: Exclude<Social['kind'], 'website'> } => s.kind !== 'website',
  );

  return (
    <div className="py-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="shrink-0 md:w-1/3">
            <img
              className="aspect-square w-full rounded-xl border border-white/10 bg-cover bg-center bg-no-repeat"
              src={photo}
            ></img>
          </div>
          <div className="flex flex-col gap-6 md:w-2/3 md:justify-center">
            <h1 className="text-6xl font-bold text-white">
              <span className="text-primary">$</span> [init] Loading profile for: {profile.name}...
            </h1>
            <p className="mb-4 text-lg text-gray-400">{profile.summary}</p>
            <div className="flex space-x-5">
              <Link
                to={'/projects'}
                className="bg-primary text-background-dark flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded px-4 text-sm leading-normal font-bold"
              >
                <span className="truncate">./view-projects</span>
              </Link>
              <Link
                to={'/blog'}
                className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded border border-white/20 bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015em] text-gray-300 hover:bg-white/10 hover:text-white"
              >
                <span className="truncate">./read-blog</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="flex w-2/3 flex-col space-y-5">
            <SectionCard title="// About Me">
              <p className="text-lg text-gray-400">{profile.summary}</p>
            </SectionCard>

            <SectionCard title="// Tech Stack">
              <div className="mt-3 flex space-x-3">
                {skills.highlight.map(t => (
                  <TechnologyCard key={t} technology={t} />
                ))}
              </div>
            </SectionCard>

            <SectionCard title="// Career Milestones">
              <ol className="relative ml-2 border-l border-white/10">
                {milestones.map((m, i) => (
                  <TimelineItem
                    key={i}
                    title={m.title}
                    subtitle={m.subtitle}
                    description={m.description}
                    badge={m.current ? 'Current' : undefined}
                  />
                ))}
              </ol>
            </SectionCard>
          </div>

          <div className="flex w-1/3 flex-col space-y-5">
            <CodeBlock code={profileData} />
            <SectionCard title="// Connect">
              <div className="mt-3 flex flex-col space-y-5">
                {visibleSocials.map(s => (
                  <SocialLink key={s.kind} icon={socialIcon[s.kind]} label={s.label} href={s.href} />
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
