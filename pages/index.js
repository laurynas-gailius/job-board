import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Job from "../components/Job";
import JobCardLoader from "../components/JobCardLoader";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PrimaryButtonLoading from "../components/buttons/PrimaryButtonLoading";
import Spinner from "../components/buttons/Spinner";
import SearchBox from "../components/SearchBox";
import EmptyState from "../components/EmptyState";
import InfiniteScroll from "react-infinite-scroller";

export default function Home() {
  const [currentPage, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("frontend");
  const [country, setCountry] = useState("us");

  {
    /* Adzuna API call */
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.adzuna.com/v1/api/jobs/${country}/search/${currentPage}?app_id=8cd24105&app_key=4d7672bce24eeed99eb17ac3cda79387&results_per_page=20&title_only=${keyword}&sort_by=date`
      );
      const newData = await res.json();
      if (newData.results) {
        setData([...data, ...newData.results]);
      }
      setLoading(false);
    };
    fetchData();
  }, [currentPage, keyword, country]);

  const loadNewData = useCallback(() => {
    return setPage(currentPage + 1);
  }, [data]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Find your next job." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="absolute -top-44 right-0 left-0 text-center opacity-80 sm:-top-96">
          <Image src="/blob.png" height={800} width={800} />
        </div>
        <div className="relative flex min-h-full items-center justify-center px-4 pb-20 pt-6">
          <div className="w-full">
            {/* Hero */}
            <div className="mx-auto mb-4 max-w-xl py-10 text-center">
              <p className="mb-1 text-sm dark:text-primary">Job Board</p>
              <h1 className="text-2xl font-semibold dark:text-white">
                Find Your New Job
              </h1>
            </div>

            {/* Search jobs */}
            <div className="mx-auto mb-6 max-w-xl">
              <SearchBox
                changeKeyword={setKeyword}
                country={country}
                changeCountry={setCountry}
                clearData={setData}
              />
            </div>

            {/* No results found */}
            <div className="mx-auto max-w-lg text-center">
              {!data[0] && !loading ? (
                <EmptyState keyword={keyword} changeKeyword={setKeyword} />
              ) : null}
            </div>

            {/* Sceleton loader */}
            {!data[0] && loading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <JobCardLoader key={index} />
                ))
              : null}

            {/* Infinite scroll, load more job posts */}
            <InfiniteScroll
              pageStart={currentPage}
              loadMore={loadNewData}
              hasMore={true}
              loader={
                <div className="absolute bottom-6 right-1/2 z-10 translate-x-1/2">
                  <Spinner />
                </div>
              }
            >
              {/* Job result list */}
              <ul className="z-10 flex flex-col space-y-6">
                {data.map((result) => (
                  <Job key={result.id} {...result} />
                ))}
              </ul>
            </InfiniteScroll>

            {/* Pagination, load more job posts */}
            {/* 
            {data[0] ?
              <div>
                <div className="h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900"></div>
                <div className="h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900"></div>
                <div className="h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900"></div>

                <div className="absolute z-10 bottom-14 right-1/2 translate-x-1/2">
                  {loading ? <PrimaryButtonLoading /> : <PrimaryButton onClick={loadNewData} text="Show more" />}
                </div>
              </div>
            : null}
            */}
          </div>
        </div>
      </main>
    </div>
  );
}
