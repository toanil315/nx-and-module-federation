import {
  accordionHeaderClassNames,
  accordionPanelClassNames,
  makeResetStyles,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';

export const useAccordionBaseStyles = makeResetStyles({
  [`& .${accordionHeaderClassNames.button}`]: {
    minHeight: 0,
    ...shorthands.padding(tokens.spacingVerticalMNudge, tokens.spacingHorizontalXL),
    backgroundColor: tokens.colorNeutralBackground3,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',

    ':hover': {
      backgroundColor: tokens.colorNeutralBackground3Hover,
    },
  },

  [`& .${accordionPanelClassNames.root}`]: {
    margin: 0,
    padding: tokens.spacingHorizontalXL,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralBackground5),
  },

  '& .helper-text': {
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
  },
});

export const useAccordionStyles = makeStyles({});
