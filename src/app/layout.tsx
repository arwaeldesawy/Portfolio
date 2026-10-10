import type { Metadata,Viewport } from 'next';
import localFont from 'next/font/local';
import {Navigation} from '@/components/navigation';
import {Footer} from '@/components/footer';
import {personal} from '@/content/portfolio';
import './globals.css';
const display=localFont({src:'../fonts/bricolage-grotesque.woff2',variable:'--font-display',weight:'100 800',display:'swap'});
const body=localFont({src:'../fonts/instrument-sans.woff2',variable:'--font-body',weight:'400 700',display:'swap'});
export const metadata:Metadata={metadataBase:new URL('http://localhost:3000'),title:{default:'Arwa Eldesawy — AI Engineer Portfolio',template:'%s | Arwa Eldesawy'},description:'Arwa Elsayed Eldesawy, an entry-level AI Engineer in Cairo. Explore projects in computer vision, generative AI, machine learning, and intelligent automation.',authors:[{name:personal.name}],openGraph:{title:'Arwa Eldesawy — AI Engineer Portfolio',description:'Explore the work, projects, and experience of Arwa Elsayed Eldesawy.',type:'website',locale:'en_US'},twitter:{card:'summary_large_image'},icons:{icon:'/icon.svg'}};
export const viewport:Viewport={themeColor:'#171717'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}><body><a href="#main-content" className="skip-link">Skip to main content</a><Navigation/>{children}<Footer/></body></html>;}
