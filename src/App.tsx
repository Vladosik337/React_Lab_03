import './styles/style.scss';
import Selector from './components/Radio_form/Selector.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';

function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { size: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Selected size:', data.size);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[700px] p-6 bg-white shadow-md rounded-lg">
        <Selector title="Size" control={control} />
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
