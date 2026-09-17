import { createLightTheme, type BrandVariants } from '@fluentui/react-components';

const brandRamp: BrandVariants = {
  10: '#17120A', 20: '#2A210B', 30: '#3D3009', 40: '#514008', 50: '#665006', 60: '#7B6004', 70: '#906F03', 80: '#A47F02',
  90: '#B98F01', 100: '#CFA000', 110: '#E2AF00', 120: '#F2B705', 130: '#F6C52F', 140: '#F9D467', 150: '#FCE39A', 160: '#FEF1CC'
};

export const appTheme = createLightTheme(brandRamp);
