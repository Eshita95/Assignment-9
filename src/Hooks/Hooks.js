import { useEffect, useState } from 'react';

const Hooks = () => {
    const [reviwes, setReviwes] = useState([])
    useEffect(() => {
        fetch('reviwe.json')
        .then(res => res.json())
        .then(data => setReviwes(data))
    }, [])
    return [reviwes, setReviwes]
        
   
};

export default Hooks;