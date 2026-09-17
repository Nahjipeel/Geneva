import { FluentProvider } from '@fluentui/react-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appTheme } from './theme';
import { SiteHeader } from '../components/SiteHeader';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { EstimatePage } from '../pages/EstimatePage';
import '../styles/global.css';

export function App() { return <FluentProvider theme={appTheme}><BrowserRouter><SiteHeader /><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/estimate" element={<EstimatePage />} /></Routes><footer className="site-footer"><span>Geneva Body Shop · Batavia, Illinois</span><a href="tel:6304823554">630-482-3554</a></footer></BrowserRouter></FluentProvider>; }
