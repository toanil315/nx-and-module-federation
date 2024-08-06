import { Textarea, TextareaProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFTextarea = (props: TextareaProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Textarea
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<TextareaProps['onChange']>>) => {
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

export default RHFTextarea;
