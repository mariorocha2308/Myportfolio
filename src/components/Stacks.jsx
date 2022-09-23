import React from 'react';
import { stacks } from '../utils/stacks';

const Stacks = () => {

  return (  
    <div className='techs--grid'>
      {
        stacks.map(stack => (
          <article className='techs--content'>
            <img src={stack.url} alt={stack.name} style={stack.style} width={70} height={70}/>
            <label className='techs--label'>{stack.name}</label>
          </article>
        ))
      }
    </div>
  );
}
 
export default Stacks;