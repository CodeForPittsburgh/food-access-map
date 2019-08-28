import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApi() {
  const [foodSiteData, setFoodSiteData] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const result = await axios.get(
        'https://dev.stevesaylor.io/api/location/',
      );

      if (isSubscribed) {
        setFoodSiteData(result.data);
      }
    };

    fetchData();

    // eslint-disable-next-line no-return-assign
    return () => (isSubscribed = false);
  }, []);

  return foodSiteData;
}
