import { NextPage } from 'next';
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fetchCars } from '@/utils';

interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number | undefined; // Update type definition to allow undefined
  model?: string;
}


const Home: NextPage<{ searchParams: SearchParams }> = async ({ searchParams }) => {
  const fetchData = async () => {
    const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || undefined,
      model: searchParams.model,
    });
    return allCars;
  };

  const allCars = await fetchData();

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no cars</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;