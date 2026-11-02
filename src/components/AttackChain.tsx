import React, { useState } from 'react';
import { Block } from './Block';

const steps = [
  { name: 'Recon', note: 'Subdomains, exposed services, leaked info' },
  { name: 'Foothold', note: 'Web or API flaw, weak creds, phishing' },
  { name: 'Privesc', note: 'Misconfigurations, unpatched services, token abuse' },
  { name: 'Lateral', note: 'Credential reuse, Kerberos and SMB relay paths' },
  { name: 'Domain', note: 'Domain admin and a clear report for the client' },
];

export const AttackChain = () => {
  const [active, setActive] = useState(0);
  return (
    <Block className="col-span-4 row-span-2 lg:col-span-8 lg:row-span-1 relative flex flex-col justify-center">
      <div className="flex items-center justify-between gap-1 font-mono text-[11px] sm:text-sm">
        {steps.map((s, i) => (
          <React.Fragment key={s.name}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`rounded-lg border px-1.5 sm:px-4 py-2 transition-all duration-200 ${
                i <= active ? 'border-green-400 text-green-400' : 'border-zinc-800 text-zinc-500'
              }`}
            >
              {s.name}
            </button>
            {i < steps.length - 1 && (
              <span className={`h-px flex-1 min-w-[2px] transition-colors duration-200 ${i < active ? 'bg-green-400' : 'bg-zinc-800'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-xs sm:text-sm text-zinc-400" aria-live="polite">
        {steps[active].note}
      </p>
    </Block>
  );
};

export default AttackChain;
