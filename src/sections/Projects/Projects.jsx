import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link={'https://irakli-redberry.netlify.app'} h3="RedBerry" p='real-estate web'/>
            <ProjectCard src={viberr} link={'https://irakli-redberry.netlify.app'} h3="RedBerry" p='real-estate web'/>
            <ProjectCard src={viberr} link={'https://irakli-redberry.netlify.app'} h3="RedBerry" p='real-estate web'/>
            <ProjectCard src={viberr} link={'https://irakli-redberry.netlify.app'} h3="RedBerry" p='real-estate web'/>
            <ProjectCard src={viberr} link={'https://irakli-redberry.netlify.app'} h3="RedBerry" p='real-estate web'/>
        </div>
    </section>
  )
}

export default Projects