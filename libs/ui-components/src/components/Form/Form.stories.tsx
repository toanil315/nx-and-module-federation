import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './index';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TagPickerOptionItem, UPLOADER_ENUM } from '@/components/Commons';
import { Avatar } from '@fluentui/react-components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Form component, combine between react-hook-form and yup for validation.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
  args: {},
  render: () => {
    const form = useForm<any>({
      defaultValues: {
        text: '',
        date: undefined,
        select: undefined,
        checkbox: false,
        switch: false,
        radioGroup: undefined,
        textarea: '',
        tagPicker: [],
        slider: 50,
        file: undefined,
        checkBoxGroup: [],
      },
      resolver: yupResolver(
        yup.object().shape({
          text: yup.string().required('this field is required'),
          date: yup.string().required('this field is required'),
          select: yup.string().required('this field is required'),
          radioGroup: yup.string().required('this field is required'),
          textarea: yup.string().required('this field is required'),
          tagPicker: yup.array().min(1, 'this field is required'),
        }),
      ),
    });

    const onSubmit = (value: any) => console.log(value);

    const renderFunc: TagPickerOptionItem['renderFunction'] = (option) => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Avatar
            aria-hidden
            name={option.value}
            color='colorful'
            style={{
              height: '20px',
            }}
          />
          {option.label}
        </div>
      );
    };

    return (
      <FormProvider {...form}>
        <h1>Form Example</h1>
        <Form
          style={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <Form.Switch
            label='Label'
            name='switch'
            checkedText='On'
            unCheckedText='Off'
          />
          <Form.Input
            label='Label'
            required
            placeholder='Enter somethings...'
            name='text'
          />
          <Form.DatePicker
            label='Label'
            required
            placeholder='Enter somethings...'
            name='date'
          />
          <Form.Select
            label='Label'
            required
            placeholder='Select somethings...'
            name='select'
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'yiminghe', label: 'Yiminghe' },
            ]}
            onChange={(v) => console.log('onChange', v)}
          />
          <Form.RadioGroup
            label='Label'
            required
            name='radioGroup'
            items={[
              {
                label: 'Option 1',
                value: '1',
              },
              {
                label: 'Option 2',
                value: '2',
              },
              {
                label: 'Option 3',
                value: '3',
              },
            ]}
          />
          <Form.CheckBox
            name='checkbox'
            label='Checkbox'
          />
          <Form.Textarea
            label='Label'
            required
            placeholder='Enter somethings...'
            name='textarea'
          />
          <Form.TagPicker
            label='Label'
            required
            placeholder='Select somethings...'
            name='tagPicker'
            options={[
              {
                value: 'jack',
                label: 'Jack',
                renderFunction: renderFunc,
              },
              { value: 'lucy', label: 'Lucy', renderFunction: renderFunc },
              { value: 'yiminghe', label: 'Yiminghe', renderFunction: renderFunc },
            ]}
          />
          <Form.Slider
            label='Label'
            required
            name='slider'
            min={1}
            max={100}
            milestone={3}
            showMilestoneValue
          />

          <Form.FileUploader
            label='Label'
            required
            name='file'
            componentType={UPLOADER_ENUM.DRAG_AND_DROP}
            multiple
          />
          <Form.CheckBoxGroup
            items={[
              { label: 'Checkbox 1', value: '1' },
              { label: 'Checkbox 2', value: '2' },
              { label: 'Checkbox 3', value: '3' },
            ]}
            direction='column'
            onChange={(value) => console.log('onChange', value)}
            label='Checkbox Group'
            name='checkBoxGroup'
          />

          <Button
            type='submit'
            appearance='primary'
          >
            Submit
          </Button>
        </Form>
      </FormProvider>
    );
  },
};
