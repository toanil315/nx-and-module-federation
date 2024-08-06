import { Checkbox, CheckboxProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFCheckBox = (props: CheckboxProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Checkbox
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<CheckboxProps['onChange']>>) => {
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

export default RHFCheckBox;
