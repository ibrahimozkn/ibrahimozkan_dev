import photo from '../assets/me_photo.jpg';
import { Link } from 'react-router-dom';
import TechnologyCard from '../components/project/TechnologyCard';
import SectionCard from '../components/common/SectionCard';
import TimelineItem from '../components/common/TimelineItem';
import CodeBlock from '../components/common/CodeBlock';
import SocialLink from '../components/social/SocialLink';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  const profileData = {
    name: 'Ibrahim Ozkan',
    role: 'Software Developer',
    interests: ['Web Development', 'Open Source', 'UI/UX Design'],
    isAvailable: true,
    getInTouch: 'ibrahim@example.com',
  };

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
              <span className="text-primary">$</span> [init] Loading profile for: Ibrahim Ozkan...
            </h1>
            <p className="mb-4 text-lg text-gray-400">
              I am a software developer with a passion for building web applications.
            </p>
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
              <p className="text-lg text-gray-400">
                I am a software developer with a passion for building web applications.
              </p>
            </SectionCard>

            <SectionCard title="// Tech Stack">
              {/* TODO - Make it dynamic*/}

              <div className="mt-3 flex space-x-3">
                <TechnologyCard technology="React" />
                <TechnologyCard technology="TypeScript" />
                <TechnologyCard technology="Tailwind CSS" />
              </div>
            </SectionCard>

            <SectionCard title="// Career Milestones">
              {/* TODO - Make it dynamic*/}
              <ol className="relative ml-2 border-l border-white/10">
                <TimelineItem
                  title="Senior Software Engineer"
                  subtitle="Tech Solutions Inc. | 2021 - Present"
                  description="Leading the development of a next-generation cloud platform, focusing on scalability and performance."
                  badge="Current"
                />
                <TimelineItem
                  title="Software Engineer"
                  subtitle="Innovate Co. | 2018 - 2021"
                  description="Developed and maintained customer-facing web applications using React and Node.js."
                />
                <TimelineItem
                  title="B.S. in Computer Science"
                  subtitle="State University | Graduated 2018"
                  description="Focused on algorithms, data structures, and machine learning principles."
                />
              </ol>
            </SectionCard>
          </div>

          <div className="flex w-1/3 flex-col space-y-5">
            <CodeBlock code={profileData} />
            <SectionCard title="// Connect">
              <div className="mt-3 flex flex-col space-y-5">
                <SocialLink icon={<FaGithub />} label="Github" />
                <SocialLink icon={<FaLinkedin />} label="LinkedIn" />
                <SocialLink icon={<FaEnvelope />} label="Email" />
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
