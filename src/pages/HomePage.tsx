import { Button, Card, CardHeader, Text } from '@fluentui/react-components';
import { ArrowRightRegular, LocationRegular, ShieldCheckmarkRegular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';
import { services, shop } from '../content/siteContent';
import { ServiceCard } from '../components/ServiceCard';

export function HomePage() { return <main className="page-shell">
  <section className="hero"><div className="hero-glow" /><div className="eyebrow">● Batavia, Illinois · Since 2014</div><h1>Built back better after the impact.</h1><p>Geneva Body Shop brings factory-quality collision repair, insurance guidance, and precise custom paint work to drivers across Batavia and the Fox Valley.</p><div className="hero-actions"><Button as="a" href="/estimate" appearance="primary">Request an estimate <ArrowRightRegular /></Button><Button as="a" href={`tel:${shop.phone.replaceAll('-', '')}`} appearance="secondary">{shop.phone}</Button></div></section>
  <section><div className="section-heading"><div><Text size={700} weight="semibold">Service with a steady hand</Text><p>Clear process. Careful finish.</p></div><ShieldCheckmarkRegular /></div><div className="service-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div></section>
  <section><div className="section-heading"><div><Text size={700} weight="semibold">Find the shop</Text><p>Open six days a week</p></div><LocationRegular /></div><div className="info-grid"><Card><CardHeader header={<Text weight="semibold" size={500}>Geneva Body Shop</Text>} description={shop.address} /><p>{shop.hours}</p></Card><Card className="notice-card"><Text weight="semibold">Map unavailable</Text><p>The map panel could not load right now. Use the address above or call the shop for directions.</p></Card></div></section>
  <div className="action-row"><Button as="a" href="/estimate" appearance="primary">Start your estimate</Button><Button as="a" href="/services" appearance="secondary">See our work</Button></div>
</main>; }
