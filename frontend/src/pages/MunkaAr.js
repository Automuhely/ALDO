import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; 
import MunkaTable from '../components/MunkaTable';
import useAuthContext from '../contexts/AuthContext';

export default function MunkaAr(){
    const [munkak, setMunkak] = useState([]);
    const { user, getUser } = useAuthContext();

    useEffect(() => {
      if (!user) {
        getUser();
      }
    }, [user]);

    useEffect(() => {
        async function fetchMunkak() {
            try {
                const response = await axios.get('/api/arak'); 
                setMunkak(response.data); 
            } catch (error) {
                console.error('Hiba történt a munkadíjak lekérésekor:', error);
            }
        }
      fetchMunkak();
    }, []);
  
    return (
      <div>
        <h1>Munkadíjak</h1>
        <MunkaTable munkak={munkak} />
      </div>
    );
}