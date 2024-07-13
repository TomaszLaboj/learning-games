import countriesData from "./assets/countries-capitals.json";
import { useState } from "react";

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
    for (let i = 0; i < 4; i++) {
      const randomCountry = chooseRandomCountry();
      fourRandomCountries.push(randomCountry);
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
  // some countries have no capital Antarctica is null,
  const handleCheckAnswer = (city: string | null) => {
    console.log(city);
    if (city === fourRandomCountries[randomIndexOfFour].capital) {
      setResult("good answer");
    } else {
      setResult(
        "wrong answer - correct answer is " +
          fourRandomCountries[randomIndexOfFour].capital
      );
    }
  };
  const handleNextQuestion = () => {
    setResult("");
    setFourRandomCountries(chooseFourRandomCountries());
    setRandomIndexOfFour(chooseRandomIndexOfFour);
  };
  console.log(fourRandomCountries[randomIndexOfFour].code);
  console.log(
    `https://flagsapi.com/${fourRandomCountries[randomIndexOfFour].code}/flat/64.png`
  );
  return (
    <>
      <h1>Capitals Quiz</h1>
      <p>
        What is the capital of {fourRandomCountries[randomIndexOfFour].name}?
      </p>
      <p>
        <img
          src={`https://flagsapi.com/${fourRandomCountries[randomIndexOfFour].code}/flat/64.png`}
        />
      </p>
      <p>
        {fourRandomCountries.map((country) => (
          <button
            type="button"
            onClick={() => handleCheckAnswer(country.capital)}
            key={country.name}
          >
            {country.capital ? country.capital : "has no capital"}
          </button>
        ))}
      </p>
      <p>{result ? result : ""}</p>
      <button onClick={handleNextQuestion}>Next question?</button>
    </>
  );
}

export default CapitalsQuiz;
