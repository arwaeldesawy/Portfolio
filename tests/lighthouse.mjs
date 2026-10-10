import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://localhost:3001';
const chrome=await launch({chromePath:chromium.executablePath(),chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
const results=[];
try{for(const route of ['/','/projects/medivault']){const result=await lighthouse(`${base}${route}`,{port:chrome.port,output:['html','json'],onlyCategories:['performance','accessibility','seo','best-practices']});const label=route==='/'?'home':'medivault';await fs.writeFile(`docs/lighthouse-${label}.html`,result.report[0]);await fs.writeFile(`docs/lighthouse-${label}.json`,result.report[1]);const scores=Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)]));const metrics=Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift'].map(k=>[k,result.lhr.audits[k].numericValue]));const failures=Object.values(result.lhr.audits).filter(a=>a.score!==null&&a.score<1&&a.scoreDisplayMode!=='informative').map(a=>({id:a.id,score:a.score,description:a.description,details:a.details}));results.push({route,scores,metrics,failures});console.log(JSON.stringify({route,scores,metrics}));assert.ok(scores.performance>=90);assert.ok(scores.accessibility>=95);assert.ok(scores.seo>=95);}await fs.writeFile('docs/lighthouse-summary.json',JSON.stringify(results,null,2));}finally{await chrome.kill();}
