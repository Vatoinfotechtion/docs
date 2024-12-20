import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { CiGrid42 } from "react-icons/ci";
import { BsDatabase, BsGraphUp } from "react-icons/bs";
import { TbFolderOpen, TbSTurnLeft } from "react-icons/tb";
import { LuMonitorCog } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { PiPlugs } from "react-icons/pi";

type FeatureItem = {
  title: string;
  icon: React.JSX.Element;
  description: JSX.Element;
  urlTo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Overview',
    icon: <CiGrid42 />,
    description: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/overview',
  },
  {
    title: 'Data Explorer',
    icon: <TbFolderOpen />,
    description: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/data-explorer',
  },
  {
    title: 'My Data',
    icon: <BsDatabase />,
    description: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/my-data',
  },
  {
    title: 'My Disposable Dashboard',
    icon: <LuMonitorCog />,
    description: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/my-disposable-dashboard',
  },
  {
    title: 'Workspace Gov',
    icon: <GoShieldCheck />,
    description: <>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/workspace-gov',
  },
  {
    title: 'Universal Retention',
    icon: <TbSTurnLeft />,
    description: <>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</>,
    urlTo: 'docs/uniRetentionConn',
  },
  {
    title: 'PRM',
    icon: <BsGraphUp />,
    description: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>,
    urlTo: 'docs/prm',
  },
  {
    title: 'Audit Log Sync',
    icon: <PiPlugs />,
    description: <>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</>,
    urlTo: '/docs/overview',
  },
];

function Feature({ title, icon, description, urlTo }: FeatureItem) {
  return (
    <div className={clsx(styles.featureContainer)}>
      <div className={styles.circleIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={urlTo} className={styles.learnMoreLink}>
          learn more
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardStyle}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
