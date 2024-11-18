import MathQuiz from "./components/math-quiz/Calculations/MathQuiz";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CapitalsQuiz from "./components/geography-quiz/CapitalsQuiz";
import RootLayout from "./Root";
import Title from "./components/home/Title";
import UserStatistics from "./components/home/UserStatistics";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [userPoints, setUserPoints] = useState(0);

  const addPoints = (points: number) => {
    setUserPoints((prev) => prev + points);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "math-quiz",
          element: <MathQuiz updatePoints={addPoints} />,
        },
        {
          path: "capitals-quiz",
          element: <CapitalsQuiz updatePoints={addPoints} />,
        },
      ],
    },
  ]);
  return (
    <>
      <Title loggedIn={userLoggedIn} logInOut={setUserLoggedIn} />
      <RouterProvider router={router} />
      {userLoggedIn ? (
        <UserStatistics userPoints={userPoints} />
      ) : (
        "Please log in to save progress"
      )}
    </>
  );
}

export default App;
