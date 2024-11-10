import MathQuiz from "./components/math-quiz/Calculations/MathQuiz";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CapitalsQuiz from "./components/geography-quiz/CapitalsQuiz";
import RootLayout from "./Root";
import Title from "./components/home/Title";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "math-quiz",
          element: <MathQuiz />,
        },
        {
          path: "capitals-quiz",
          element: <CapitalsQuiz />,
        },
      ],
    },
  ]);
  return (
    <>
      <Title />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
