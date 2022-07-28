import styles from './styles.module.scss';
import { useHasHydrated, useUrlState } from 'tools/hooks';
import { Loader, Modal } from 'components';
const Layout = (props) => {
  const { children } = props;
  const { hasHydrated } = useHasHydrated();
  const { urlState } = useUrlState();
  return (
    <>
      {hasHydrated ? (
        <div className={`${styles.container}`}>
          <main className={`${styles.main}`}>
            <div className={`${styles.content}`}>{children}</div>
          </main>
          <Modal />
        </div>
      ) : (
        <main className={`${styles.container} ${styles.loading}`}>
          <Loader />
        </main>
      )}
    </>
  );
};

export default Layout;
