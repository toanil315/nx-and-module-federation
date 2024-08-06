import { RadioGroup, RadioGroupProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFRadioGroup = (props: RadioGroupProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <RadioGroup
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<RadioGroupProps['onChange']>>) => {
            props.onChange && props.onChange(...event);
            field.onChange(...event);
          }}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFRadioGroup;
