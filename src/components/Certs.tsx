import React, { useState } from 'react';
import { Block } from './Block';

// Order matters: newest / strongest first. OSCP and CRTO logos are the official digital
// badges (Credly / Parchment). Each card flips on hover (tap on touch) to show what I learned.
const certs = [
  {
    src: 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png',
    title: 'OffSec Certified Professional',
    short: 'OSCP',
    learned: [
      'I learned how to take a target from nothing to full compromise myself: enumerating services, finding the weak point and getting a shell.',
      'I practised privilege escalation on Linux and Windows and moving through a network, including Active Directory.',
      'The 24 hour exam taught me to work under pressure, keep clear notes and write a report someone else can follow.',
    ],
  },
  {
    src: 'https://media.badges.parchment.eu/uploads/badges/810fb737-3709-422a-9544-e8329e6f9eb7.png',
    title: 'Certified Red Team Operator',
    short: 'CRTO',
    learned: [
      'I learned how a real red team operation runs from start to finish, using a C2 framework instead of one-off exploits.',
      'I practised initial access, privilege escalation and lateral movement through Active Directory while trying to avoid detection.',
      'It also taught me to think about what the defenders can see, so I can explain how to detect these attacks.',
    ],
  },
  {
    src: '/images/certificates/bscp.svg',
    title: 'Burp Suite Certified Practitioner',
    short: 'BSCP',
    learned: [
      'I learned to find and exploit web vulnerabilities by hand, using Burp Suite as my main tool.',
      'I went deep on issues like XSS, SQL injection, access control flaws, request smuggling and SSRF, and how to chain them.',
      'The timed exam taught me to move quickly, since I had to find the flaw myself with no hints.',
    ],
  },
  {
    src: '/images/certificates/ecppt.png',
    title: 'eLearnSecurity Certified Professional Penetration Tester',
    short: 'eCPPT',
    learned: [
      'I learned a full network pentest workflow, from scanning and exploitation to post-exploitation.',
      'I practised pivoting from one compromised host into internal networks that I could not reach directly.',
      'The exam made me write a proper report, so I learned to explain technical findings clearly.',
    ],
  },
  {
    src: '/images/certificates/ceh.png',
    title: 'Certified Ethical Hacker v11',
    short: 'CEH',
    learned: [
      'I learned the core vocabulary and phases of ethical hacking: recon, scanning, enumeration, gaining access and covering tracks.',
      'It gave me a broad view of attack types and the tools around them, including web, wireless, malware and social engineering.',
      'It also taught me the countermeasures, so I can recommend fixes and not only describe the attack.',
    ],
  },
];

const CertCard = ({ cert }: { cert: (typeof certs)[number] }) => {
  const [flipped, setFlipped] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  return (
    <button
      type="button"
      aria-label={`${cert.title}: ${cert.learned.join(' ')}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      className="relative h-[270px] w-full text-left [perspective:800px] focus:outline-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-2 text-center [backface-visibility:hidden]">
          {logoFailed ? (
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 font-mono text-xl text-green-400">
              {cert.short}
            </div>
          ) : (
            <img
              src={cert.src}
              alt={cert.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setLogoFailed(true)}
              className="h-24 w-auto object-contain"
            />
          )}
          <span className="font-mono text-lg font-semibold text-zinc-100">{cert.short}</span>
          <span className="font-mono text-xs leading-snug text-zinc-500">{cert.title}</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center gap-2 rounded-2xl bg-zinc-900/80 p-4 font-mono [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-sm font-semibold text-green-400">{cert.short}</span>
          <ul className="space-y-1.5 text-[11px] leading-snug text-zinc-300">
            {cert.learned.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
};

export const Certs = () => (
  <Block className="col-span-4 row-span-1 lg:col-span-8 lg:row-span-1 relative flex flex-col">
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <h2 className="text-xl lg:text-2xl font-mono text-green-400">Certifications</h2>
      <span className="font-mono text-xs text-zinc-500">Hover or tap a card to see what I learned</span>
    </div>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-zinc-800">
      {certs.map((cert) => (
        <CertCard key={cert.short} cert={cert} />
      ))}
    </div>
  </Block>
);

export default Certs;
