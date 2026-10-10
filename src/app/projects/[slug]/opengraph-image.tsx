import {ImageResponse} from 'next/og';
import {projects} from '@/content/portfolio';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export const alt='AI engineering project by Arwa Eldesawy';
export const size={width:1200,height:630};
export const contentType='image/png';
export default async function Image({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',flexDirection:'column',justifyContent:'space-between',padding:76,background:'#171717',color:'#f4f4f4'}}><span style={{fontSize:26}}>Arwa Eldesawy / AI Engineer</span><span style={{fontSize:82,fontWeight:700,lineHeight:1.05}}>{p?.title??'AI engineering projects'}</span><span style={{fontSize:28,color:'#e7a4ae'}}>{p?.category}</span></div>,size);}
