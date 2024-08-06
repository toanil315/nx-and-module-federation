import { TagPicker, TagPickerProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFTagPicker = (props: TagPickerProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <TagPicker
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<TagPickerProps['onChange']>>) => {
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

export default RHFTagPicker;
