import { Switch, SwitchProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFSwitch = (props: SwitchProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field }) => (
        <Switch
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<SwitchProps['onChange']>>) => {
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

export default RHFSwitch;
