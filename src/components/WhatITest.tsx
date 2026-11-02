import React, { useState } from 'react';
import { Block } from './Block';

const areas = [
  {
    name: 'Web',
    summary:
      'Manual testing of web applications against the OWASP Top 10 and beyond, focused on how real attackers chain small flaws into a serious breach.',
    finds: ['Broken access control', 'IDOR', 'SQL and command injection', 'XSS', 'Authentication bypass', 'Business logic flaws', 'SSRF'],
    approach: 'Map the app, test every role and workflow by hand with Burp Suite, then prove the impact with a working proof of concept.',
  },
  {
    name: 'API',
    summary:
      'REST and GraphQL APIs tested for who can reach what, because most API bugs are really authorisation bugs.',
    finds: ['Broken object level auth', 'Broken function level auth', 'Mass assignment', 'Weak JWT handling', 'Excessive data exposure', 'Missing rate limits'],
    approach: 'Build requests from the docs or captured traffic, replay them across users and roles, and look for data the API should never return.',
  },
  {
    name: 'Active Directory',
    summary:
      'Assessing how an attacker moves from a normal domain user to domain admin, and which misconfigurations make that path easy.',
    finds: ['Kerberoasting', 'AS-REP roasting', 'ADCS abuse', 'Delegation abuse', 'ACL abuse', 'Credential reuse', 'NTLM relay'],
    approach: 'Enumerate with BloodHound, find the shortest abuse path, and report every hop together with a clear fix.',
  },
  {
    name: 'Network',
    summary:
      'Internal and external infrastructure testing to find what is exposed and how far a single foothold can go.',
    finds: ['Exposed admin services', 'Default or weak credentials', 'Outdated services', 'SMB and LDAP signing gaps', 'Poor segmentation', 'Weak TLS'],
    approach: 'Discover hosts and services, validate real exposure instead of trusting scanner output, and test whether segmentation really holds.',
  },
  {
    name: 'Wireless',
    summary:
      'Testing Wi-Fi from open guest networks to enterprise WPA2 and WPA3 setups, including what a rogue access point can capture.',
    finds: ['Weak pre-shared keys', 'Evil twin attacks', 'Enterprise credential capture', 'Missing client isolation', 'Guest to internal access'],
    approach: 'Survey the airspace, test authentication and isolation, and check whether a guest device can reach internal systems.',
  },
  {
    name: 'VoIP',
    summary:
      'Testing SIP and phone systems, which are often forgotten, for ways to listen in, impersonate users or run up call costs.',
    finds: ['SIP enumeration', 'Weak extension passwords', 'Call interception', 'Toll fraud exposure', 'Insecure phone provisioning'],
    approach: 'Enumerate extensions and servers, test authentication and signalling security, and check the phone provisioning setup.',
  },
  {
    name: 'Social Eng',
    summary:
      'Phishing and pretexting campaigns that measure how people, not just systems, respond to a realistic attack.',
    finds: ['Phishing click rate', 'Credential capture', 'Pretext phone calls', 'Reporting rate'],
    approach: 'Agree the scope and goals with the client, run a believable campaign, and report results as lessons for awareness training, not blame.',
  },
  {
    name: 'Red Team',
    summary:
      'Goal based attacks that test the whole defence at once: people, process, tools and detection.',
    finds: ['Initial access', 'C2 operations', 'Privilege escalation', 'Lateral movement', 'EDR evasion testing', 'Detection gaps'],
    approach: 'Agree objectives and rules of engagement, operate quietly, and hand the blue team a clear timeline so detection can improve.',
  },
];

export const WhatITest = () => {
  const [active, setActive] = useState(0);
  const a = areas[active];
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

      <div className="mt-4 font-mono text-sm" aria-live="polite">
        <p className="text-zinc-200 leading-relaxed">{a.summary}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">Typical findings</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {a.finds.map((f) => (
            <span key={f} className="rounded-md border border-zinc-800 px-2 py-0.5 text-xs text-green-400">
              {f}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">How I approach it</p>
        <p className="mt-1 text-zinc-400 leading-relaxed">{a.approach}</p>
      </div>
    </Block>
  );
};

export default WhatITest;
