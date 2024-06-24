/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from "react";
import { Data, Datum, Respuesta } from '@/app/libs/types'
import { CircleLoader } from 'react-spinners'
import ButtonSelect from "./components/ButtonSelect";
import Life from "./components/Life";
import GameFinished from "./components/GameFinished";
import { getContry } from "./libs/GameFunctions";

export interface Question {
  ID: number;
  img?: string;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [correct, setCorrect] = useState<Respuesta[]>()
  const [question, setQuestion] = useState<Array<Question[]>>([])

  useEffect(() => {
    if (!checkIfExistLocal()) {
      getContry()
        .then(res => {
          console.log(res?.[0]);
          setData(res)
          setIsLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [])

  useEffect(() => {
    if (data) {
      handleCorrect();
      handleIncorrect();
    }
  }, [data]);

  const handleIncorrect = () => {
    const res: any = []
    if (data) {
      res.push(data[0].respuesta)
      data[0].respuestasIncorrectas.map((item: any) => {
        res.push(item)
      })
      localStorage.setItem("question", JSON.stringify(res))
    }

    const compareRandom = () => Math.random() - 0.5;
    const randomizedArray = res.sort(compareRandom);
    setQuestion(randomizedArray)
  }

  const handleCorrect = () => {
    if (data) {
      localStorage.setItem("correct", JSON.stringify(data?.[0].respuesta))
      setCorrect(data?.[0].respuesta)
    }
  }

  const checkIfExistLocal = () => {
    const correct = localStorage.getItem("correct")
    if (correct) {
      setCorrect(JSON.parse(correct))
      const question = localStorage.getItem("question")
      if (question) {
        setQuestion(JSON.parse(question))
      }
      setIsLoading(false)
      return true
    }
    return false
  }

  const Game = () => {
    if (isLoading) {
      return (
        <div className="flex h-screen w-screen justify-center items-center flex-col relative">
          <CircleLoader color="white"></CircleLoader>
        </div>
      )
    }

    return (
      <main>
        <article className="flex z-0 h-screen w-screen justify-center items-center flex-col relative">
          <GameFinished></GameFinished>
          <Life></Life>
          <h1 className="absolute text-xl font-bold top-5">Adivina la bandera</h1>
          {correct &&
            <article className="animate-fade-in animate-duration-200 w-screen p-2 md:p-0 md:w-1/2 flex items-center justify-center flex-col gap-5" key={2}>
              <img className="w-[30rem]" src={correct[0].img} alt="Imagen del pais" />
              <div className="grid grid-cols-2 grid-rows-4 gap-11 md:gap-7 items-center justify-center" key={1}>
                {question &&
                  question.map(item => (
                    <ButtonSelect key={item[0].ID} correct={correct[0].ID.toString()} name={item[0].name} id={item[0].ID} ></ButtonSelect>
                  ))
                }
              </div>
            </article>
          }
        </article>
      </main>
    )
  }

  return <Game />;
}
