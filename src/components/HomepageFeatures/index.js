import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Appunti',
    src: require('@site/static/img/notes.webp').default,
    description: (
      <>
        Appunti per lo studio impaginati per essere letti facilmente ovunque,
        su qualsiasi dispositivo, inclusi PC, Desktop, Tablet e Mobile.
      </>
    ),
  },
  {
    title: 'Approfondimenti',
    src: require('@site/static/img/book.webp').default,
    description: (
      <>
        Selezioni di pagine e di spiegazioni aggiuntive da leggere.
      </>
    ),
  },
  {
    title: 'Risorse Aggiuntive',
    src: require('@site/static/img/resources.webp').default,
    description: (
      <>
        Elenchi di risorse aggiuntive: siti web, video, documenti, ecc.
      </>
    ),
  },
];

function Feature({title, description, src}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureSvg} style={{borderRadius: 20, marginBottom: "1rem"}} role="img" src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
