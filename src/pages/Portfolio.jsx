import './styles/Portfolio.css'

const Portfolio = () => {
    return ( 
        <div className='portfolioPage'>
            <div className='portfolio--content'>
                <div className='about'>
                    <label className='about--title'>Sobre mi</label>
                    <p className='about--description'>Soy Mexicano, tengo 21 años. Sin embargo, estoy buscando una vida como desarrollador web. Mis hobbies son escuchar música y aprender idiomas. Busco mejorar en mi carrera profesional y personal en los desarrollos móviles y web.</p>
                </div>
                <div className='technologies'>
                    <label className='techs--title'>Tecnologías</label>
                    <div className='techs--grid'>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css' width={70} height={70}/>
                            <label className='techs--label'>CSS</label>
                        </div>
                        <div className='techs--content'>
                            <svg viewBox="0 0 128 128" width={70} height={70}>
                                <path fill="white" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                            </svg>
                            <label className='techs--label'>Express</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' width={70} height={70}/>
                            <label className='techs--label'>Figma</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git' width={70} height={70}/>

                            <label className='techs--label'>Git</label>
                        </div>
                        <div className='techs--content'>
                            <svg viewBox="0 0 128 128" width={70} height={70}>
                                <g fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                            </svg>
                            <label className='techs--label'>Github</label>
                        </div>
                        <div className='techs--content'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt='heroku' width={70} height={70}/>
                            <label className='techs--label'>Heroku</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html' width={70} height={70}/>
                            <label className='techs--label'>HTML</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript' width={70} height={70}/>
                            <label className='techs--label'>JavaScript</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='nodejs' width={70} height={70}/>
                            <label className='techs--label'>NodeJS</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm' width={70} height={70}/>
                            <label className='techs--label'>npm</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt='postgres' width={70} height={70}/>
                            <label className='techs--label'>PostgresSQL</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react' width={70} height={70}/>
                            <label className='techs--label'>React</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux' width={70} height={70}/>
                            <label className='techs--label'>Redux</label>
                        </div>
                        <div className='techs--content'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='sequelize' width={70} height={70}/>
                            <label className='techs--label'>Sequelize</label>
                        </div>
                    </div>
                </div>
                <div className='coursesList'>
                    <h2 className='title_courses'>Cursos</h2>
                    <div className='course--grid'>
                        <div className='course'>
                            <span className='course_title'>Full Stack Web Developer</span>
                            <span className='course_school'>por Henry Bootcamp</span>
                            <span className='course_date'> 03 Mayo 2021 / 18 Febrero 2022</span>
                            <a href='https://certificates.soyhenry.com/cert?id=7e0afc1b-087e-4c25-9df6-8f505279e73b' className='btnHome'>Certificado</a>
                        </div>
                    </div>
                </div>
                <div className='title_projects'>
                        <span className='title_project'>Proyectos en los que he trabajado</span>
                </div>
                <div className='proyectsList'>
                    <div className='proyects--grid'>
                        <div className='portfolio'>
                            <div className='infoPortfolio'>
                                <span className='titlePortfolio'>PI-Countries</span>
                                <p className='descriptionPortfolio'>Se presenta un página web para mostrar cards
                                relacionadas con países y su información básica y
                                haciendo click puedes encontrar el país con más
                                información extra, tanto como crearles sus
                                actividades turísticas, poder filtrar por dicha
                                actividad y ordenar por continente.</p>
                            </div>
                            <a href='https://pi-countries-one.vercel.app/'  target='_blank' rel="noreferrer" className='button--portfolio'>Ver página</a>
                            
                            <a href="https://github.com/mariorocha2308/PI-BootcampCountries" target="_blank" rel='noreferrer' className='button--portfolio'>ver codigo</a> 
                        </div>
                        <div className='portfolio'>
                            <div className='infoPortfolio'>
                                <span className='titlePortfolio'>PG-Museum</span>
                                <p className='descriptionPortfolio'>Esta es un E-commerce donde se encuentran
                                pinturas/arte únicas que se venden a los usuarios que
                                les interese, aplicado con un método de registro y
                                logueo usando Json Web Tokens, cumple muchas
                                funcionalidades Full Stack interesantes y un diseño
                                minimalista en el frontend.
                                </p>
                                
                            </div>
                            <a href='https://github.com/mariorocha2308/PG-Museum-Frontend'  target='_blank'  rel="noreferrer" className='button--portfolio'>Ver página</a>
                            
                            <a href="https://github.com/mariorocha2308/PG-Museum-Frontend" target="_blank" rel='noreferrer' className='button--portfolio'>Ver codigo</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
