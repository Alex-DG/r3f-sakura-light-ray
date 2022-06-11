import { css } from '@emotion/css'

const styles = {
  container: css`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin: 1em;
  `,
  text: css`
    font-size: 1rem;
    color: #fff;
  `,
  link: css`
    font-size: 1rem;
    color: #fff;
    font-style: italic;
  `
}

const artist = {
  name: 'Sonkiam',
  profile: 'https://sketchfab.com/sonkiam'
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
    </div>
  )
}

export default Credits
