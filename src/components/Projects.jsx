import React from 'react';
import { projects } from '../utils/projects';

const Projects = () => {
  
  return (
    <div className='portfolio--grid'>
      {projects.map((project, idx) => (
          <article className='project' key={idx}>
            <section className='project-description'>
              <title className='project--title'>{project.title}</title>
              <section style={{display: 'flex', paddingTop: '0.5rem', gap: '0.5rem'}}>
                {project?.tech?.map((tech, idx )=> (
                  <img loading='lazy' src={tech} alt='tools in project' key={idx}/>
                ))}
              </section>
              <p className='project--resume'>{project.resume}</p>
            </section>
            {project.linkToPage === '' ? <label className='button--portfolio'>En Desarrollo</label> 
              : <a href={project.linkToPage}  target='_blank'  rel="noreferrer" className='button--portfolio'>Ver página</a>
            }
            <a href={project.linkToCode} target="_blank" rel='noreferrer' className='button--portfolio'>Ver codigo</a> 
          </article>
      ))}
    </div>
  );
}
 
export default Projects;