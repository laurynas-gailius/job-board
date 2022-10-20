import { useState, useEffect } from "react";
import Head from "next/head";
import Job from "../components/Job";
import "animate.css";

export default function Home() {
  const [currentPage, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.adzuna.com/v1/api/jobs/gb/search/${currentPage}?app_id=5358c84c&app_key=d003cd60629ddb90948afe144d2182da&sort_by=date`
      );
      const newData = await res.json();
      if (newData.results) {
        setData(newData.results);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadNewData = () => {
    setPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-full items-center justify-center py-12 px-4">
          <div className="w-full">
            <ul className="flex flex-col space-y-6 animate__animated animate__fadeInDown">
              {data.map((result) => {
                const { id, title, company, location, contract_time, created } =
                  result;
                const { display_name: company_name } = company;
                const { display_name: location_name } = location;

                return (
                  <li key={id}>
                    <Job
                      company_name={company_name}
                      location_name={location_name}
                      title={title}
                      created={created}
                      contract_time={
                        contract_time === "full_time"
                          ? "Full-time"
                          : "Part-time"
                      }
                    />
                  </li>
                );
              })}
            </ul>
            <button onClick={loadNewData}>Next page</button>
          </div>
        </div>
      </main>
    </div>
  );
}
