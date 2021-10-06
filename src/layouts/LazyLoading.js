import { useEffect} from "react";
import { useLoading } from "../hooks/useLoading";


export const LazyLoading = () => {
     const [setVisible] = useLoading();

     useEffect(() => {
         setVisible(true);
         return () => {
             setVisible(false);
         };
     });

    return null;
};
