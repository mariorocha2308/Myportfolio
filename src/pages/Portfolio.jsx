import Projects from '../components/Projects';
// import Stacks from '../components/Stacks';
import './styles/Portfolio.css'

const Portfolio = () => {

  return (
    <section className='portfolioPage'>
      <div className='portfolio--content'>
        <section className='about'>
          <label className='about--title'>Sobre mi</label>
          <p className='about--description'>Desarrollador Mexicano con más de 2 años de experiencia profesional en la industria
            IT, desarrollos con rendimiento de aplicaciones, código limpio con ReactJs y pasión por mejores interfaces gráficas 
            y experiencias de usuario. Interesado en los diferentes ambientes de trabajo de las empresas.</p>
        </section>
        {/* <section className='technologies'>
          <label className='techs--title'>Tecnologías</label>
          <Stacks />
        </section> */}
        <section className='coursesList'>
          <h1 className='title_courses'>Cursos</h1>
          <div className='course--grid'>
            <article className='course'>
              <label className='course_title'>Full Stack Web Developer</label>
              <label className='course_school'>por Henry Bootcamp</label>
              <label className='course_date'> 03 Mayo 2021 / 18 Febrero 2022</label>
              <a href='https://certificates.soyhenry.com/cert?id=7e0afc1b-087e-4c25-9df6-8f505279e73b' className='btnHome'>Certificado</a>
            </article>
          </div>
        </section>
        <section className='portfolio--list'>
          <label className='title_project'>Proyectos en los que he trabajado</label>
          <Projects />
        </section>
      </div>
    </section>
  );
}

export default Portfolio;