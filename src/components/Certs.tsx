import React from 'react';
import { Block } from './Block';

export const Certs = () => (
  <>
    <Block 
      className="col-span-4 row-span-2 sm:col-span-4 sm:row-span-2 md:col-span-4 md:row-span-2 lg:col-span-2 lg:row-span-4 relative flex flex-col items-center justify-center"
    >
      <h2 className="text-xl lg:text-2xl font-mono mb-4 text-green-400">Certifications</h2>

      <div className="flex lg:flex-col sm:flex-row justify-center items-center w-full h-full space-y-0 space-x-5 sm:space-y-0 sm:space-x-4 md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-8">
        <img 
          src="/images/certificates/bscp.svg" 
          alt="Burp Suite Certified Practitioner" 
          className="h-16 sm:h-18 md:h-22 lg:h-24 fill-cyan-700" 
        />
        <img 
          src="/images/certificates/ecppt.png" 
          alt="eLearnSecurity Certified Professional Penetration Tester" 
          className="h-16 sm:h-18 md:h-22 lg:h-24" 
        />
        <img 
          src="/images/certificates/ceh.png" 
          alt="Certified Ethical Hacker v11" 
          className="h-16 sm:h-18 md:h-22 lg:h-24" 
        />
      </div>
    </Block>
  </>
);

export default Certs;
