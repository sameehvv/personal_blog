import React, { useState } from 'react';
import { Block } from './Block';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';

const GH = 'https://github.com/sameehvv';
const tools = [
  { name: 'Recon', repo: 'Recon', desc: 'Recon automation for new targets' },
  { name: 'subdomain_recon', repo: 'subdomain_recon', desc: 'Subdomain enumeration helper' },
  { name: 'DNS-recon', repo: 'DNS-recon', desc: 'DNS record and zone checks' },
  { name: 'Portscanner', repo: 'Portscanner', desc: 'Simple port scanner' },
  { name: 'Kali-utility-installer', repo: 'Kali-utility-installer', desc: 'Set up a fresh Kali with my tools' },
  { name: 'web-application-checklist', repo: 'web-application-checklist', desc: 'Checklist for web app tests' },
];

export const Tools = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Block className="col-span-4 row-span-1 lg:col-span-4 lg:row-span-2 relative flex flex-col">
      <h2 className="text-xl font-mono mb-3 text-green-400 flex items-center gap-2">
        <FiGithub /> Tools I built
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm">
        {tools.map((t, i) => (
          <li key={t.repo}>
            <a
              href={`${GH}/${t.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={`flex items-center justify-between rounded-xl border px-3 py-2 transition-all duration-200 ${
                active === i ? 'border-green-400 text-green-400' : 'border-zinc-800 text-zinc-300'
              }`}
            >
              <span className="truncate">{active === i ? t.desc : t.name}</span>
              <FiArrowUpRight
                className={`shrink-0 transition-opacity duration-200 ${active === i ? 'opacity-100' : 'opacity-0'}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </Block>
  );
};

export default Tools;
