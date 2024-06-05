/* eslint-disable @next/next/no-img-element */
"use client"
import { use, useEffect, useState } from "react";

interface Welcome {
  data: Data;
}

interface Data {
  ID: number;
  name_contry: string;
  img: string;
}

export default function Home() {
  const [data, setData] = useState<Data>()
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(data => setData(data))

  }, [])
  return (
    <main className="flex h-screen w-screen justify-center items-center flex-col">
      <h1>Adivina la bandera</h1>
      {data &&
        <div>
          <strong>{data.data.name_contry}</strong>
          <img className="w-96" src={data.data.img} alt={`imagen de del país ${data.data.name_contry}`} />
        </div>

      }
    </main>
  );
}
