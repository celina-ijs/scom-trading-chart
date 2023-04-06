import { Styles } from '@ijstech/components';

const defaultBtn = {
  padding: '7px 9px',
  borderRadius: '6px',
  transition: 'all 0.1s ease 0s',
  background: 'transparent !important',
  color: '#58667e',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: 600,
  cursor: 'pointer'
}

export const groupBtnStyle = Styles.style({
  background: '#eff2f5',
  padding: '3px',
  borderRadius: '8px',
  alignItems: 'center',
  $nest: {
    'i-button': defaultBtn,
    'i-image': {
      ...defaultBtn,
      paddingBlock: 6.3
    },
    'i-button.chart-btn--active': {
      background: '#fff !important',
      cursor: 'default'
    },
    'i-image.chart-btn--active': {
      background: '#fff !important',
      cursor: 'default'
    }
  }
});

export const tradingChartStyle = Styles.style({
  display: 'block',
  $nest: {
    '&.trading-chart--dark': {
      background: '#100c2a',
      $nest: {
        '#lbTitle': {
          color: '#fff !important'
        }
      }
    }
  }
})