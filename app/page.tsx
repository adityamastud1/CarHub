import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
// import SearchBar from "@/components";
import { fetchCars } from "@/utils";
export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer||"",
    year:searchParams.year||2022,
    fuel:searchParams.fuel||"",
    limit:searchParams.limit||"",
    model:searchParams.model,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">car catalogue</h1>
          <p>explore cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="homr__error-container">
            <h2 className="text-black text-xl font-bold">oops, no cars</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
