import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protexted({children, authentication = true}) {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if(authentication && authentication !== authStatus)
        {
            navigate("/login");
        }
        else if(!authentication && authentication !== authStatus)
        {
            navigate("/");
        }
    }, [authentication, navigate]);

  return (
    <div>
      
    </div>
  )
};
