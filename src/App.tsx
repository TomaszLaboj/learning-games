import MathQuiz from "./components/math-quiz/Calculations/MathQuiz";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CapitalsQuiz from "./components/geography-quiz/CapitalsQuiz";
import RootLayout from "./Root";
import Title from "./components/home/Title";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  console.log(userLoggedIn);
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
      <Title loggedIn={userLoggedIn} logInOut={setUserLoggedIn} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
