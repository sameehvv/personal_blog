import React, { useState } from 'react';
import { Block } from './Block';

const areas = [
  { name: 'Web', tags: ['Broken access control', 'IDOR', 'SQL and command injection', 'XSS', 'Authentication bypass', 'Business logic', 'SSRF', 'Burp Suite'] },
  { name: 'API', tags: ['Broken object level auth', 'Broken function level auth', 'Mass assignment', 'JWT attacks', 'Excessive data exposure', 'Rate limiting'] },
  { name: 'Active Directory', tags: ['Kerberoasting', 'AS-REP roasting', 'ADCS abuse', 'Delegation abuse', 'ACL abuse', 'NTLM relay', 'BloodHound'] },
  { name: 'Network', tags: ['Exposed services', 'Default credentials', 'Outdated software', 'SMB and LDAP signing', 'Segmentation', 'Weak TLS'] },
  { name: 'Wireless', tags: ['Weak PSK', 'Evil twin', 'Enterprise credential capture', 'Client isolation'] },
  { name: 'VoIP', tags: ['SIP enumeration', 'Weak extensions', 'Call interception', 'Toll fraud'] },
  { name: 'Social Eng', tags: ['Phishing', 'Credential capture', 'Pretexting', 'Reporting rate'] },
  { name: 'Red Team', tags: ['Initial access', 'C2', 'Privilege escalation', 'Lateral movement', 'EDR evasion', 'Detection gaps'] },
];

export const WhatITest = () => {
  const [active, setActive] = useState(0);
  return (
    <Block className="col-span-4 row-span-1 lg:col-span-8 lg:row-span-1 relative flex flex-col">
      <h2 className="text-xl font-mono mb-3 text-green-400">What I test</h2>
      <div className="flex flex-wrap gap-2 font-mono text-sm">
        {areas.map((x, i) => (
          <button
            key={x.name}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`rounded-full border px-3 py-1 transition-all duration-200 ${
              active === i ? 'border-green-400 text-green-400 scale-105' : 'border-zinc-800 text-zinc-300'
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="mt-4 flex min-h-[40px] flex-wrap content-start gap-2 font-mono" aria-live="polite">
        {areas[active].tags.map((t) => (
          <span key={t} className="rounded-md border border-zinc-800 px-2 py-1 text-xs text-green-400">
            {t}
          </span>
        ))}
      </div>
    </Block>
  );
};

export default WhatITest;
