import { Button, Tab, TabList, Toolbar, ToolbarButton, makeStyles, tokens } from '@fluentui/react-components';
import { CallRegular, DocumentRegular, HomeRegular, WrenchRegular } from '@fluentui/react-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  header: { backgroundColor: '#1D2428', color: 'white', borderBottom: `4px solid ${tokens.colorBrandBackground}`, padding: '14px clamp(16px, 5vw, 56px)' },
  brand: { color: 'white', fontWeight: 800, fontSize: '18px', textDecorationLine: 'none', display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { backgroundColor: tokens.colorBrandBackground, color: '#1D2428', padding: '7px 8px', borderRadius: '6px', fontWeight: 900 },
  phone: { color: 'white', textDecorationLine: 'none' },
  nav: { backgroundColor: '#252E33', padding: '4px clamp(8px, 5vw, 56px)' },
  tab: { color: '#DDE2E3' }
});

export function SiteHeader() {
  const styles = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const selected = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  return <>
    <Toolbar className={styles.header} aria-label="Shop header">
      <Link className={styles.brand} to="/"><span className={styles.logo}>GB</span> Geneva Body Shop</Link>
      <ToolbarButton as="a" href="tel:6304823554" className={styles.phone} icon={<CallRegular />} aria-label="Call Geneva Body Shop">630-482-3554</ToolbarButton>
      <Button as="a" href="/estimate" appearance="primary">Request an estimate</Button>
    </Toolbar>
    <TabList className={styles.nav} selectedValue={selected} aria-label="Primary navigation">
      <Tab className={styles.tab} value="home" icon={<HomeRegular />} onClick={() => navigate('/')}>Home</Tab>
      <Tab className={styles.tab} value="services" icon={<WrenchRegular />} onClick={() => navigate('/services')}>Services & gallery</Tab>
      <Tab className={styles.tab} value="estimate" icon={<DocumentRegular />} onClick={() => navigate('/estimate')}>Request an estimate</Tab>
    </TabList>
  </>;
}
