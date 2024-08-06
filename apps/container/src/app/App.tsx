import { mfRuntimeInit } from "@/shared/libs/mfRuntimeInit";
import { AppRouter } from "./routes/AppRouter";

mfRuntimeInit();

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
