export interface ApiModel {
    responseMessage: string;
    responseCode: number;
    modelResponse?: any;
    totalLockerAvailable: number;
}

export interface LockersModel {
    dimension: string;
    details: string;
    price: string;
    availability: string;
}