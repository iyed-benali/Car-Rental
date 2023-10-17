import React, { useEffect, useState } from 'react';
import fetchData from '@/utils';

const Cars = () => {
  const [cars, setCars] = useState<any[]>([]); 

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetchData();
        setCars(response);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car, index) => (
        <div key={index}>
          <h2>{car.make} {car.model}</h2>
          <p>Class: {car.class}</p>
          <p>MPG: {car.city_mpg} (City), {car.highway_mpg} (Highway)</p>
          
        </div>
      ))}
    </div>
  );
}

export default Cars;
