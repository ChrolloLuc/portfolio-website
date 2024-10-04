import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <a href='https://irakli-redberry.netlify.app' target='_blank'>
                <img className='hover' src={viberr} alt="viberr logo" />
                <h3>RedBerry</h3>
                <p>real-estate web</p>
            </a>
        </div>
    </section>
  )
}

export default Projects