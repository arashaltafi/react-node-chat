import Axios from 'axios'
import { useQuery } from 'react-query';

export const useGetCat = () => {

    const { data, isLoading, error, refetch } = useQuery(
        ['cat'], () => {
            return Axios.get('https://catfact.ninja/fact').then((res) => {
                return res.data
            })
        });

    const refetchData = () => {
        alert('call refetch');
        refetch();
    }

    return {
        data,
        isLoading,
        error,
        refetchData
    }
}
