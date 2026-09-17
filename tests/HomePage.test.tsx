import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FluentProvider } from '@fluentui/react-components';
import { appTheme } from '../src/app/theme';
import { HomePage } from '../src/pages/HomePage';

test('renders the shop positioning and primary services', () => { render(<FluentProvider theme={appTheme}><MemoryRouter><HomePage /></MemoryRouter></FluentProvider>); expect(screen.getByText('Built back better after the impact.')).toBeInTheDocument(); expect(screen.getByText('Collision Repair')).toBeInTheDocument(); });
