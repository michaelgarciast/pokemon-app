import {useEffect, useState} from 'react';

export const useLoading = () => {
    const [visible, setvisible] = useState(false);
    
    useEffect(()=>{
        const splashSreen = document.getElementById('splash-screen');

        if(splashSreen && visible){
            splashSreen.classList.remove('hidden');

            return()=>{
                splashSreen.classList.add('hidden');
            }
        }
    }, [visible]);

    return [setvisible];
}
