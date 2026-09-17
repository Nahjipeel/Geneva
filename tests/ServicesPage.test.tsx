import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FluentProvider } from '@fluentui/react-components';
import { appTheme } from '../src/app/theme';
import { ServicesPage } from '../src/pages/ServicesPage';

test('renders the gallery sample content', () => { render(<FluentProvider theme={appTheme}><MemoryRouter><ServicesPage /></MemoryRouter></FluentProvider>); expect(screen.getByText('1965 Mustang restoration')).toBeInTheDocument(); expect(screen.getByText('Painted helmet')).toBeInTheDocument(); });
