import React from "react";

export const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
    <path d="M7 10.5v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="white" />
    <path d="M12.5 17.5v-4a1.5 1.5 0 0 1 3 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 8v6a3 3 0 1 0 3-3V5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="17" r="3" fill="currentColor" opacity="0.12" />
  </svg>
);

export const Rumble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
    <path d="M8 16v-8h6a3 3 0 0 1 0 6H8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Fanvue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="8" r="3" fill="currentColor" />
    <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Medium = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="6" width="3" height="12" rx="1" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="currentColor" opacity="0.95" />
    <rect x="18" y="8" width="2" height="8" rx="1" fill="currentColor" />
  </svg>
);

export default {};
