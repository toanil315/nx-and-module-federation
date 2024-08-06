import { Checkbox, CheckboxGroupProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFCheckBoxGroup = (props: CheckboxGroupProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Checkbox.Group
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<CheckboxGroupProps['onChange']>>) => {
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

export default RHFCheckBoxGroup;
