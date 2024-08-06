import countriesData from "./assets/countries-capitals.json";
import { useState } from "react";
import "./CapitalsQuiz.css";

interface Country {
  name: string;
  capital: string | null;
  code: string;
}

function CapitalsQuiz() {
  const countries: Country[] = countriesData.map((country) => ({
    name: country.name,
    capital: country.capital,
    code: country.code,
  }));

  const chooseRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    return randomCountry;
  };

  const chooseFourRandomCountries = () => {
    const fourRandomCountries: Country[] = [];

    while (fourRandomCountries.length < 4) {
      const randomCountry = chooseRandomCountry();
      if (!fourRandomCountries.includes(randomCountry)) {
        fourRandomCountries.push(randomCountry);
      }
    }
    return fourRandomCountries;
  };

  const chooseRandomIndexOfFour = () => {
    return Math.floor(Math.random() * 4);
  };

  const [fourRandomCountries, setFourRandomCountries] = useState<Country[]>(
    chooseFourRandomCountries()
  );
  const [randomIndexOfFour, setRandomIndexOfFour] = useState(
    chooseRandomIndexOfFour()
  );
  const [result, setResult] = useState("");

  const handleCheckAnswer = (city: string | null) => {
    if (city === fourRandomCountries[randomIndexOfFour].capital) {
      setResult("Good answer");
    } else {
      const correctAnswer = fourRandomCountries[randomIndexOfFour].capital
        ? fourRandomCountries[randomIndexOfFour].capital
        : "doesn't have a capital";
      setResult("Wrong answer - correct answer is " + correctAnswer);
    }
  };

  const handleNextQuestion = () => {
    setResult("");
    setFourRandomCountries(chooseFourRandomCountries());
    setRandomIndexOfFour(chooseRandomIndexOfFour);
  };

  return (
    <>
      <h1>Capitals Quiz</h1>
      <div className={"main-container"}>
        <p>
          What is the capital of {fourRandomCountries[randomIndexOfFour].name}?
        </p>
        <p className={"flag"}>
          <img
            src={`https://flagsapi.com/${fourRandomCountries[randomIndexOfFour].code}/flat/64.png`}
          />
        </p>
        <div className={"buttons"}>
          {fourRandomCountries.map((country) => (
            <button
              type="button"
              onClick={() => handleCheckAnswer(country.capital)}
              key={country.name}
            >
              {country.capital ? country.capital : "doesn't have a capital"}
            </button>
          ))}
        </div>
        <p>{result ? result : ""}</p>
        <button onClick={handleNextQuestion}>Next question?</button>
      </div>
    </>
  );
}

export default CapitalsQuiz;
