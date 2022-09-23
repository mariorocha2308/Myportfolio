import React from 'react';
import { projects } from '../utils/projects';

const Projects = () => {
  
  return (
    <div className='portfolio--grid'>
      {projects.map(project => (
          <article className='project'>
            <section className='project-description'>
              <title className='project--title'>{project.title}</title>
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