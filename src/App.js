import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
