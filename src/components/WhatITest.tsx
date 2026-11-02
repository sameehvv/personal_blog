import React, { useState } from 'react';
import { Block } from './Block';

const areas = [
  { name: 'Web', ex: 'Auth and access control flaws, injection, XSS, business logic' },
  { name: 'API', ex: 'Broken object level auth, mass assignment, token handling' },
  { name: 'Active Directory', ex: 'Kerberoasting, ADCS abuse, delegation paths, ACL abuse' },
  { name: 'Network', ex: 'Exposed services, weak protocols, segmentation gaps' },
  { name: 'Wireless', ex: 'Weak encryption, rogue AP, enterprise Wi-Fi attacks' },
  { name: 'VoIP', ex: 'SIP weaknesses, call interception, toll fraud exposure' },
  { name: 'Social Eng', ex: 'Phishing and pretexting simulations' },
  { name: 'Red Team', ex: 'Full attack chains, C2, OPSEC, detection testing' },
];

export const WhatITest = () => {
  const [active, setActive] = useState(0);
  return (
    <Block className="col-span-4 row-span-2 lg:col-span-4 lg:row-span-2 relative flex flex-col">
      <h2 className="text-xl font-mono mb-3 text-green-400">What I test</h2>
      <div className="flex flex-wrap gap-2 font-mono text-sm">
        {areas.map((a, i) => (
          <button
            key={a.name}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`rounded-full border px-3 py-1 transition-all duration-200 ${
              active === i ? 'border-green-400 text-green-400 scale-105' : 'border-zinc-800 text-zinc-300'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-sm text-zinc-400 min-h-[3rem]" aria-live="polite">
        {areas[active].ex}
      </p>
    </Block>
  );
};

export default WhatITest;
