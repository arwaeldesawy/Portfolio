import type { ProjectSlug } from '@/content/portfolio';

const colors = { ink: '#271b1e', wine: '#8f2938', rose: '#bd495b', paper: '#f4f4f4', blush: '#e7a4ae', muted: '#7c4d57' };
const names: Record<ProjectSlug, string> = {
  medivault: 'Patient records connected through fingerprint identification',
  'prompt-library': 'A collection of reusable prompts for questions, summaries, and writing',
  'ai-customer-support': 'A connected conversation with automated replies and memory',
  'brain-tumor': 'MRI imaging and a brain classification pipeline',
  'resume-screening': 'Resume documents compared and ordered by relevance',
  nids: 'A shield identifying patterns in network traffic',
};
export function ProjectThumbnail({ slug }: { slug: ProjectSlug }) {
  return <figure className={`project-thumbnail thumbnail-${slug}`}>
    <svg viewBox="0 0 640 400" role="img" aria-label={names[slug]}>
      <rect width="640" height="400" fill="#ead8dc" />
      {slug === 'medivault' && <>
        <rect x="310" y="78" width="205" height="251" rx="15" fill={colors.wine} transform="rotate(7 410 203)" />
        <rect x="310" y="78" width="205" height="251" rx="15" fill={colors.paper} />
        <path d="M353 129h37m-18-18v37" stroke={colors.wine} strokeWidth="8" strokeLinecap="round" />
        <path d="M348 183h128M348 210h91M348 251h128M348 278h77" stroke="#c5a7ae" strokeWidth="9" strokeLinecap="round" />
        <circle cx="204" cy="201" r="94" fill={colors.wine} />
        <g stroke={colors.paper} strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M157 238c-32-51-13-103 47-105 62 0 73 73 39 108M168 240c-26-51-9-92 36-93 47 0 58 56 28 92M181 244c-24-45-10-81 23-82 34 0 42 41 20 72M194 247c-19-34-11-68 10-70 21 0 27 30 9 52M204 195c-13 19-9 43 4 65" />
        </g>
        <path d="M273 280h66" stroke={colors.rose} strokeWidth="4" strokeLinecap="round" />
        <circle cx="334" cy="280" r="11" fill={colors.blush} stroke={colors.wine} strokeWidth="3" />
      </>}
      {slug === 'prompt-library' && <>
        <rect x="115" y="94" width="196" height="230" rx="12" fill="#c8929f" transform="rotate(-12 213 209)" />
        <rect x="130" y="79" width="196" height="230" rx="12" fill={colors.wine} transform="rotate(-5 228 194)" />
        <rect x="149" y="66" width="196" height="230" rx="12" fill={colors.paper} />
        <text x="246" y="180" textAnchor="middle" fontSize="76" fontWeight="600" fill={colors.wine}>15</text>
        <text x="246" y="215" textAnchor="middle" fontSize="18" fill={colors.muted}>Reusable templates</text>
        <path d="M190 249h114" stroke="#d5b4bc" strokeWidth="5" strokeLinecap="round" />
        {['Ask a question', 'Summarize', 'Create & write'].map((label, i) => <g key={label} transform={`translate(${375 - i * 9} ${106 + i * 68})`}><rect width="164" height="49" rx="25" fill={i === 1 ? colors.wine : '#f4f4f4'} /><text x="82" y="31" textAnchor="middle" fontSize="16" fill={i === 1 ? colors.paper : colors.wine}>{label}</text></g>)}
      </>}
      {slug === 'ai-customer-support' && <>
        <path d="M227 141c79-110 191-67 204 14M217 282c101 82 214 54 244-35" stroke="#c8929f" strokeWidth="3" fill="none" strokeDasharray="7 8" />
        <rect x="114" y="103" width="278" height="98" rx="20" fill={colors.paper} />
        <path d="M147 196v27l31-27" fill={colors.paper} />
        <rect x="256" y="224" width="276" height="82" rx="20" fill={colors.wine} />
        <path d="M499 300v25l-31-25" fill={colors.wine} />
        <text x="145" y="144" fontSize="21" fill={colors.ink}>How can you help?</text>
        <path d="M145 168h177" stroke="#c8929f" strokeWidth="5" strokeLinecap="round" />
        {[0, 1, 2].map(i => <circle key={i} cx={297 + i * 26} cy="265" r="6" fill={colors.blush} />)}
        <path d="M391 261h94M391 275h64" stroke={colors.paper} strokeWidth="4" strokeLinecap="round" />
        <circle cx="455" cy="151" r="36" fill={colors.wine} /><path d="m442 151 10 10 17-20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>}
      {slug === 'brain-tumor' && <>
        <rect x="180" y="59" width="280" height="284" rx="14" fill={colors.ink} />
        <rect x="196" y="75" width="248" height="252" rx="8" fill="#4c3038" />
        <g fill="#d2aab4" stroke={colors.ink} strokeWidth="4"><path d="M319 122c-48-32-111 15-83 61-27 44-4 101 47 96 16 13 36 2 36-22Z"/><path d="M321 122c48-32 111 15 83 61 27 44 4 101-47 96-16 13-36 2-36-22Z"/></g>
        <g stroke={colors.muted} strokeWidth="4" fill="none" strokeLinecap="round"><path d="M279 140c-29 15-8 31-27 52m37-39c23 12 3 39 14 57m-45-2c35 9 4 33 28 48M361 140c29 15 8 31 27 52m-37-39c-23 12-3 39-14 57m45-2c-35 9-4 33-28 48"/></g>
        <path d="M168 92v-31h31M441 61h31v31M168 308v31h31M441 339h31v-31" stroke={colors.rose} strokeWidth="5" fill="none" />
        <circle cx="400" cy="285" r="29" fill={colors.wine} /><path d="m386 285 9 9 17-21" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      </>}
      {slug === 'resume-screening' && <>
        {[0, 1, 2].map(i => <g key={i} transform={`translate(${142 + i * 26} ${94 - i * 14}) rotate(${i * 5 - 8} 89 120)`}><rect width="174" height="238" rx="12" fill={i === 2 ? colors.paper : i === 1 ? '#bc8391' : colors.wine} />{i === 2 && <><circle cx="43" cy="52" r="16" fill="#d2aab4"/><path d="M72 43h68M72 60h45M31 111h110M31 137h110M31 163h80M31 193h99" stroke="#b38995" strokeWidth="6" strokeLinecap="round"/></>}</g>)}
        <g transform="translate(391 126)"><rect width="118" height="52" rx="10" fill={colors.wine}/><rect y="70" width="88" height="52" rx="10" fill="#bd8492"/><rect y="140" width="62" height="52" rx="10" fill="#cfa7b1"/><path d="m22 27 9 9 19-22" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/><path d="M69 22h27M69 32h17" stroke={colors.blush} strokeWidth="4" strokeLinecap="round"/></g>
      </>}
      {slug === 'nids' && <>
        <g fill="none" stroke="#bc8391" strokeWidth="3"><path d="M119 110h95l31 45M98 197h111M121 292h95l32-53M521 110h-95l-31 45M542 197H431M519 292h-95l-32-53"/>{[[119,110],[98,197],[121,292],[521,110],[542,197],[519,292]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="10" fill={colors.paper}/>)}</g>
        <path d="m320 75 108 39v91c0 68-61 111-108 135-47-24-108-67-108-135v-91Z" fill={colors.wine} />
        <path d="m320 99 84 31v75c0 48-40 88-84 112-44-24-84-64-84-112v-75Z" fill="none" stroke={colors.blush} strokeWidth="2" />
        <path d="M262 206h27l18-43 27 77 18-40h28" stroke={colors.paper} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>}
    </svg>
    <figcaption>Project illustration</figcaption>
  </figure>;
}
