import { css } from '@emotion/css'

const styles = {
  container: css`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin: 1em;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
  text: css`
    font-size: 1rem;
    color: #fff;
  `,
  link: css`
    font-size: 1rem;
    color: #fff;
  `
}

const artist = {
  name: 'Sonkiam',
  profile: 'https://sketchfab.com/sonkiam'
}

const project = {
  github: 'https://github.com/Alex-DG/r3f-sakura-light-ray',
  twitter: 'https://twitter.com/Alex_dg_dev'
}

const Credits = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Model by{' '}
        <a className={styles.link} href={artist.profile} target="_blank">
          {artist.name}
        </a>
      </span>

      <span className={styles.text}>
        Experience made by{' '}
        <a className={styles.link} href={project.twitter} target="_blank">
          Alex Di Guida
        </a>
        {' | '}
        <a href={project.github} className={styles.link} target="_blank">
          Source Code
        </a>
      </span>
    </div>
  )
}

export default Credits
