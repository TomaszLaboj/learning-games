import MathQuiz from "./components/math-quiz/MathQuiz";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CapitalsQuiz from "./components/geography-quiz/CapitalsQuiz";
import RootLayout from "./Root";
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
  return <RouterProvider router={router} />;
}

export default App;
