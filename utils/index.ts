import { CarProps , FilterProps} from "@/types";


export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
      'X-RapidAPI-Key': '7077da046fmsh555655499b7ed4ap1e28e1jsnc6022a168bbb',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  try {
      const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
          headers: headers,
      });

      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const generateCarImageUrl=(car:CarProps, angle?:string)=>{
    
}