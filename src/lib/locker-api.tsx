import axios from '../locker-axios';
import { ApiModel } from '../model/api-interface';

export const searchLockerApi = async (queryName: string) => {
    const { data } = await axios.get<ApiModel>(`/api/Locker/SearchLocker/${queryName}`)
    return data;
}

export const searchLockerClosestApi = async (queryName: string) => {
    const { data } = await axios.get<ApiModel>(`/api/Locker/SortLockersByClosest/${queryName}`)
    return data;
}

export const searchLockerPriceApi = async (queryName: string) => {
    const { data } = await axios.get<ApiModel>(`/api/Locker/SortLockersByPrice/${queryName}`)
    return data;
}

export const getlockerInsStateBySize = async (queryName: string, size: any) => {
    const { data } = await axios.get<ApiModel>(`/api/Locker/GetLockersInStateBySize/${queryName}/${size}`)
    return data;
}