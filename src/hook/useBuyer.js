import { useEffect, useState } from "react";
const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://asm-used-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;