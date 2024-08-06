import React from 'react';
import {
  Accordion as FuiAccordion,
  AccordionItem as FuiAccordionItem,
  AccordionHeader as FuiAccordionHeader,
  AccordionPanel as FuiAccordionPanel,
  AccordionToggleEventHandler,
} from '@fluentui/react-components';
import { MinusIcon, PlusIcon } from '@/components/Icons';
import { useAccordionBaseStyles } from './style';
import { AccordionProps } from './types';

export const Accordion = ({ items, ...restProps }: AccordionProps) => {
  const baseClassName = useAccordionBaseStyles();
  const [inlineOpenItems, setInlineOpenItems] = React.useState<string[]>([]);
  const handleToggle = React.useCallback<AccordionToggleEventHandler<string>>((_, data) => {
    setInlineOpenItems(data.openItems || []);
  }, []);

  const renderItems = () => {
    return items.map((item, index) => {
      const isMatched =
        inlineOpenItems.includes(item.key) || restProps.openItems?.includes(item.key);
      const expandIcon = isMatched ? <MinusIcon /> : <PlusIcon />;

      return (
        <FuiAccordionItem
          key={item.key}
          value={item.key || index}
          className={baseClassName}
        >
          <FuiAccordionHeader
            expandIcon={expandIcon}
            icon={item.headerIcon || null}
          >
            <div>
              {item.title}
              {item.helperText && <span className='helper-text'>{item.helperText}</span>}
            </div>
          </FuiAccordionHeader>
          <FuiAccordionPanel>{item.container}</FuiAccordionPanel>
        </FuiAccordionItem>
      );
    });
  };

  return (
    <FuiAccordion<string>
      openItems={inlineOpenItems as any}
      onToggle={handleToggle}
      multiple
      collapsible
      {...restProps}
    >
      {renderItems()}
    </FuiAccordion>
  );
};
