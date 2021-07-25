import React from 'react';
import "./Magazine.css";
import {mag_og} from "../Home/index"
const Magazine = () => {
    return (
        <>
        {/* <div className='magazine'>
            <div style={{position: 'relative', width: '100%', height: '0', paddingTop: '141.4286%',
 paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
 borderRadius: '8px', willChange: 'transform'}}>
  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0',margin: '0'}}
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD98MmmtKs&#x2F;view?embed">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD98MmmtKs&#x2F;view?utm_content=DAD98MmmtKs&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">IEEE VJTI Annual Newsletter 2020</a> 
        </div> */}
        <div className="magazine text-center">
           <a href="https://www.canva.com/design/DAD98MmmtKs/6oqGF4C6PHlJg8AdFgJ7Wg/view?utm_content=DAD98MmmtKs&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank"><img className="img" src={mag_og}></img></a>
        </div>
        </>
    )
}

export default Magazine;
