import styles from './MapView.module.css';

import { Container } from '../../components/Container';
import { MapApp } from '../../components/Map/MapApp';

const MapView = () => {
  return (
    <>
      <h4 className={styles.title}>
        We are sorry, but page at the moment under construction
      </h4>

      <MapApp />
    </>
  );
};

export default MapView;
