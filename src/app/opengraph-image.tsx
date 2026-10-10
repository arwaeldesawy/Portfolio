import { ImageResponse } from 'next/og';
export const dynamic = 'force-static';
export const alt = 'Arwa Elsayed Eldesawy — AI Engineer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() { return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 76, background: '#171717', color: '#f4f4f4', textAlign: 'center' }}><span style={{ fontSize: 26, color: '#e7a4ae' }}>AI Engineer / Cairo, Egypt</span><span style={{ fontSize: 100, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05, marginTop: 40 }}>Arwa Eldesawy.</span><span style={{ fontSize: 27, color: '#b0b0bb', marginTop: 40 }}>Projects, experience, and practical AI.</span></div>, size); }
