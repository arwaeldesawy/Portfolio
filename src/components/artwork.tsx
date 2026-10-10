import type { ProjectSlug } from '@/content/portfolio';

export function Fingerprint({ small = false }: { small?: boolean }) {
  return <svg viewBox="0 0 600 560" fill="none" className={small ? 'fingerprint-small' : 'fingerprint'} aria-hidden="true">
    <circle cx="284" cy="272" r="223" fill="#ead8dc" fillOpacity=".35" />
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      {Array.from({length:14},(_,i)=>{const d=i*9; return <path key={i} d={`M ${139+d*.65} ${398-d*.12} C ${95+d*.9} ${338-d*.2}, ${101+d} ${148+d*.8}, 267 ${127+d} C ${399-d*.75} ${110+d}, ${420-d*.8} ${263-d*.15}, ${355-d*.6} ${354-d*.7} C ${324-d*.2} ${393-d*.6}, ${327-d*.9} ${433-d*.9}, ${381-d*.45} ${463-d*.8}`} opacity={.3+i*.048}/>;})}
      <path d="M259 277c-19 33-15 93 5 128 20 36 23 63 20 93M271 293c-14 40 1 76 16 100M279 309c-6 35 14 65 25 86" />
      <path d="M354 172h62l36-36h62M387 222h66l31-31h68M392 279h77l29 29h50M376 332h48l48 48h54M349 386h48l30 58h61" strokeWidth="1.7"/>
      {[[514,136],[552,191],[548,308],[526,380],[488,444]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="8" fill="#f4f4f4"/><circle cx={x} cy={y} r="2.5" fill="currentColor" stroke="none"/></g>)}
    </g>
    <g fill="currentColor" opacity=".4">{Array.from({length:6},(_,i)=><g key={i}><circle cx={68+i*27} cy="490" r="1.5"/><circle cx="70" cy={85+i*27} r="1.5"/></g>)}</g>
  </svg>;
}
function Node({x,y,w=156,label,sub,blue=false}:{x:number;y:number;w?:number;label:string;sub?:string;blue?:boolean}){
  return <g><rect x={x} y={y} width={w} height={sub?70:52} rx="10" fill={blue?'#8f2938':'#FFFFFF'} stroke={blue?'#8f2938':'#d4b0ba'} strokeWidth="1.3"/><text x={x+w/2} y={y+(sub?29:31)} textAnchor="middle" fill={blue?'#FFFFFF':'#271b1e'} fontSize="16" fontWeight="600">{label}</text>{sub&&<text x={x+w/2} y={y+50} textAnchor="middle" fill={blue?'#FFFFFF':'#7c4d57'} fontSize="12">{sub}</text>}</g>
}
function Wire({d}:{d:string}) {return <path d={d} stroke="#8f2938" strokeWidth="1.8" fill="none" strokeLinecap="round"/>;}
export function ProjectArtwork({slug}:{slug:ProjectSlug}){
  const descriptions:Record<ProjectSlug,string>={medivault:'Fingerprint identification connects patient records, four vision models, and Gemini assistance.','prompt-library':'15 templates and dynamic inputs flow through FastAPI to Gemini responses.','ai-customer-support':'Messaging connects to an n8n AI agent, conversational memory, Google Sheets logs, and Gmail notifications.','brain-tumor':'MRI images, augmentation, and transfer learning feed XceptionNet classification.','resume-screening':'Resume and job text become TF-IDF vectors, cosine similarity scores, and relevance ranking.',nids:'NSL-KDD data is preprocessed, classified with SVM and Random Forest, and presented in Streamlit.'};
  return <figure className={`project-art art-${slug}`}>
    <svg viewBox="0 0 600 350" role="img" aria-label={descriptions[slug]}>
      <defs><pattern id={`dots-${slug}`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#d4b0ba" opacity=".6"/></pattern></defs>
      <rect width="600" height="350" fill={`url(#dots-${slug})`}/>
      {slug==='medivault'&&<>
        <Wire d="M154 151h35M345 151h36M266 186v35M459 185v35M267 90V56h192v34"/>
        <Node x={18} y={116} w={136} label="Fingerprint" sub="Patient identification"/>
        <Node x={189} y={116} label="Patient records" sub="FastAPI · PostgreSQL" blue/>
        <Node x={381} y={116} label="Gemini" sub="Chat & simplification"/>
        <Node x={180} y={221} w={366} label="Four vision models" sub="Brain tumor · Pneumonia · Fracture · Stroke"/>
        <text x="363" y="45" textAnchor="middle" fill="#7c4d57" fontSize="13">WebSocket communication</text>
        <g stroke="#8f2938" fill="none" strokeWidth="2"><path d="M76 85c-24-35-5-63 14-63 25 0 35 31 19 49M80 77c-15-25-1-46 10-46 16 0 23 20 12 36M87 69c-8-16-3-28 3-28 10 0 13 15 6 23"/></g>
      </>}
      {slug==='prompt-library'&&<>
        {[0,1,2].map(i=><rect key={i} x={61+i*8} y={44+i*9} width="157" height="99" rx="9" fill={i===2?'#FFFFFF':'#ead8dc'} stroke="#d4b0ba"/>)}
        <text x="157" y="99" textAnchor="middle" fontSize="32" fontWeight="650" fill="#8f2938">15</text><text x="157" y="126" textAnchor="middle" fontSize="14" fill="#271b1e">Reusable templates</text>
        <Wire d="M236 111h44v73M156 153v50M231 238h49v-19M436 202h35"/>
        <Node x={77} y={203} label="Dynamic inputs" sub="JavaScript frontend"/>
        <Node x={280} y={167} label="FastAPI" sub="Filter · Validate · Construct" blue/>
        <Node x={471} y={176} w={112} label="Gemini"/>
        <text x="526" y="254" textAnchor="middle" fontSize="13" fill="#7c4d57">Generated response</text>
      </>}
      {slug==='ai-customer-support'&&<>
        <Wire d="M153 141h37M346 141h50M268 176v66M474 176v66M346 277h50"/>
        <Node x={17} y={106} w={136} label="Messaging" sub="Telegram / WhatsApp"/>
        <Node x={190} y={106} label="n8n AI agent" sub="LLM-powered responses" blue/>
        <Node x={396} y={106} label="Google Sheets" sub="Conversation logs"/>
        <Node x={190} y={242} label="Memory" sub="Conversation context"/>
        <Node x={396} y={242} label="Gmail" sub="Notifications"/>
        <text x="269" y="69" textAnchor="middle" fontSize="14" fill="#7c4d57">Connected customer support</text>
      </>}
      {slug==='brain-tumor'&&<>
        <g transform="translate(60 80)"><rect width="110" height="126" rx="13" fill="#271b1e"/><ellipse cx="55" cy="62" rx="35" ry="44" fill="#ead8dc"/><path d="M55 22v79M41 29c-25 16-27 61 0 69M69 29c25 16 27 61 0 69" stroke="#7c4d57" fill="none" strokeWidth="3"/></g>
        <Wire d="M170 143h54M380 143h51M300 178v49"/>
        <Node x={224} y={108} label="XceptionNet" sub="Transfer learning" blue/>
        <Node x={431} y={108} w={144} label="Classification" sub="Tumor classes"/>
        <Node x={224} y={227} label="Evaluation" sub="Confusion matrix · Report"/>
        <text x="115" y="235" textAnchor="middle" fontSize="14" fill="#271b1e">MRI scans</text><text x="115" y="257" textAnchor="middle" fontSize="12" fill="#7c4d57">Data augmentation</text>
      </>}
      {slug==='resume-screening'&&<>
        <g transform="translate(39 86)" stroke="#d4b0ba"><rect x="8" y="-9" width="106" height="126" rx="7" fill="#ead8dc"/><rect width="106" height="126" rx="7" fill="white"/><path d="M18 29h69M18 48h48M18 67h69M18 86h59" stroke="#8f2938" strokeWidth="3"/></g>
        <Wire d="M153 147h54M363 147h44M285 182v59"/>
        <Node x={207} y={112} label="TF-IDF" sub="Text vectorization" blue/>
        <Node x={407} y={112} w={166} label="Relevance ranking" sub="Cosine similarity"/>
        <Node x={199} y={241} w={244} label="Candidate classification" sub="Logistic Regression · Random Forest"/>
        <text x="92" y="243" textAnchor="middle" fontSize="13" fill="#271b1e">Resume & job text</text>
      </>}
      {slug==='nids'&&<>
        <Wire d="M151 128h40M347 128h38M269 163v62"/>
        <Node x={17} y={93} w={134} label="NSL-KDD" sub="Network traffic"/>
        <Node x={191} y={93} label="Preprocessing" sub="Log transform · NaNs"/>
        <Node x={385} y={93} w={196} label="Classification" sub="SVM · Random Forest" blue/>
        <Node x={191} y={225} label="Streamlit" sub="Prediction & log analysis"/>
        <Wire d="M483 163v97H347"/>
        <g fill="#8f2938">{[18,31,23,40,27,48,32].map((h,i)=><rect key={i} x={39+i*13} y={279-h} width="7" height={h} rx="2"/>)}</g>
      </>}
    </svg>
    <figcaption>Architecture illustration</figcaption>
  </figure>;
}
