import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JAVASCRIPT'/>
            <SkillList src={checkMarkIcon} skill='REACT'/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='GIT'/>
        <SkillList src={checkMarkIcon} skill='GITHUB'/>
        <SkillList src={checkMarkIcon} skill='BOOTSTRAP'/>
        </div>
    </section>
  )
}

export default Skills