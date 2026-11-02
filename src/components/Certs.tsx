import React, { useState } from 'react';
import { Block } from './Block';

// Order matters: newest / strongest first. OSCP and CRTO logos are the official digital
// badges (Credly / Parchment). Each cert flips on hover (tap on touch) to show what it proves.
const certs = [
  {
    src: 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png',
    alt: 'OffSec Certified Professional (OSCP)',
    short: 'OSCP',
    proves: '24h hands-on exam: network and AD compromise',
  },
  {
    src: 'https://media.badges.parchment.eu/uploads/badges/810fb737-3709-422a-9544-e8329e6f9eb7.png',
    alt: 'Certified Red Team Operator (CRTO)',
    short: 'CRTO',
    proves: 'Red team ops, C2 and AD attack chains',
  },
  {
    src: '/images/certificates/bscp.svg',
    alt: 'Burp Suite Certified Practitioner',
    short: 'BSCP',
    proves: 'Practical web exam with Burp Suite',
  },
  {
    src: '/images/certificates/ecppt.png',
    alt: 'eLearnSecurity Certified Professional Penetration Tester',
    short: 'eCPPT',
    proves: 'Practical network pentest and pivoting',
  },
  {
    src: '/images/certificates/ceh.png',
    alt: 'Certified Ethical Hacker v11',
    short: 'CEH',
    proves: 'Ethical hacking tools and methodology',
  },
];

const CertCard = ({ cert }: { cert: (typeof certs)[number] }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      aria-label={`${cert.alt}: ${cert.proves}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      className="relative h-[84px] w-full max-w-[240px] [perspective:600px] focus:outline-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
          <img
            src={cert.src}
            alt={cert.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-16 w-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 rounded-xl border border-zinc-800 bg-zinc-950 px-2 text-center font-mono [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-sm font-semibold text-green-400">{cert.short}</span>
          <span className="text-[11px] leading-snug text-zinc-300">{cert.proves}</span>
        </div>
      </div>
    </button>
  );
};

export const Certs = () => (
  <>
    <Block
      className="col-span-4 row-span-2 sm:col-span-4 sm:row-span-2 md:col-span-4 md:row-span-2 lg:col-span-2 lg:row-span-4 relative flex flex-col items-center justify-center"
    >
      <h2 className="text-xl lg:text-2xl font-mono mb-4 text-green-400">Certifications</h2>

      <div className="flex flex-wrap lg:flex-col justify-center items-center w-full h-full gap-3 sm:gap-4 lg:gap-3">
        {certs.map((cert) => (
          <CertCard key={cert.alt} cert={cert} />
        ))}
      </div>
    </Block>
  </>
);

export default Certs;
