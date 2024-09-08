import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_COUNTRIES } from '../queries';

function CountryList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://countries.trevorblades.com/', {
          query: GET_COUNTRIES,
        });

        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        setUsers(response.data.data.countries);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {users.map(user => (
          <li key={user.code}>
            {user.code} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
