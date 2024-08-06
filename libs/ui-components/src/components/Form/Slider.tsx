import { Controller, useFormContext } from 'react-hook-form';
import { Slider, SliderProps } from '../Commons';

const RHFSlider = (props: SliderProps & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field }) => (
        <Slider
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<SliderProps['onChange']>>) => {
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

export default RHFSlider;
