import axios from '../locker-axios';
import { ApiModel } from '../model/api-interface';

export const searchLockerApi = async (queryName: string) => {
    const { data } = await axios.get<ApiModel>(`/api/Locker/SearchLocker/${queryName}`)
    return data;
}