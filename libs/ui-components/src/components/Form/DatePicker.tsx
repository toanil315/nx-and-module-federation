import { DatePicker, DatePickerProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFDatePicker = (props: DatePickerProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <DatePicker
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<DatePickerProps['onChange']>>) => {
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

export default RHFDatePicker;
