import React from 'react';
import { Block } from './Block';

// Order matters: newest / strongest first. Logos for OSCP and CRTO are the official
// digital badges (Credly / Parchment). Copy them into public/images/certificates/ and
// change the src below if you would rather host them yourself.
const certs = [
  {
    src: 'https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png',
    alt: 'OffSec Certified Professional (OSCP)',
  },
  {
    src: 'https://media.badges.parchment.eu/uploads/badges/810fb737-3709-422a-9544-e8329e6f9eb7.png',
    alt: 'Certified Red Team Operator (CRTO)',
  },
  { src: '/images/certificates/bscp.svg', alt: 'Burp Suite Certified Practitioner' },
  {
    src: '/images/certificates/ecppt.png',
    alt: 'eLearnSecurity Certified Professional Penetration Tester',
  },
  { src: '/images/certificates/ceh.png', alt: 'Certified Ethical Hacker v11' },
];

export const Certs = () => (
  <>
    <Block
      className="col-span-4 row-span-2 sm:col-span-4 sm:row-span-2 md:col-span-4 md:row-span-2 lg:col-span-2 lg:row-span-4 relative flex flex-col items-center justify-center"
    >
      <h2 className="text-xl lg:text-2xl font-mono mb-4 text-green-400">Certifications</h2>

      <div className="flex flex-wrap lg:flex-col justify-center items-center w-full h-full gap-3 sm:gap-4 lg:gap-3">
        {certs.map((cert) => (
          <img
            key={cert.alt}
            src={cert.src}
            alt={cert.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain"
          />
        ))}
      </div>
    </Block>
  </>
);

export default Certs;
