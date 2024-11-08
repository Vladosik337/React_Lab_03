import './styles/style.scss';
import Selector from './components/RadioForm/Selector.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from './components/FormInput/FormInput.tsx';

interface FormValues {
  name: string;
  size: string;
  comments: string;
}

function App() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { size: '', name: '', comments: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[700px] p-6 bg-white shadow-md rounded-lg flex flex-col gap-[15px]"
      >
        <FormInput title="Name" mandatoryField={true} register={register} name="name" error={errors.name} />
        <Selector title="Size" control={control} />
        <FormInput
          title="Other thoughts or comments"
          mandatoryField={false}
          register={register}
          name="comments"
          error={errors.comments}
        />

        <button
          type="submit"
          className="mt-4 p-5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
