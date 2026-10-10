'use client';
import {useState,useSyncExternalStore,type ReactNode} from 'react';
import {motion} from 'motion/react';
import {Check,Copy} from 'lucide-react';
function subscribeMotion(callback:()=>void){const media=window.matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener('change',callback);return()=>media.removeEventListener('change',callback);}
function reducedSnapshot(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
export function ArtworkEntrance({children}:{children:ReactNode}){
 const reduced=useSyncExternalStore(subscribeMotion,reducedSnapshot,()=>true);
 return <motion.div className="hero-art" initial={false} animate={reduced?{opacity:1,y:0}:{opacity:1,y:[12,0]}} transition={{duration:.85,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function CopyEmail({email}:{email:string}){
 const [status,setStatus]=useState<'idle'|'success'|'failure'>('idle');
 async function copy(){try{await navigator.clipboard.writeText(email);setStatus('success');}catch{setStatus('failure');}}
 return <div className="copy-control"><button className="copy-button" onClick={copy} aria-label="Copy email address">{status==='success'?<Check size={18}/>:<Copy size={18}/>}<span>{status==='success'?'Copied':'Copy email'}</span></button><span className="copy-status" role="status">{status==='success'?'Email address copied.':status==='failure'?'Copy unavailable. Select the email address to copy it.':''}</span></div>;
}
