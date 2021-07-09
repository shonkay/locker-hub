import AwesomeDebouncePromise from "awesome-debounce-promise";
import React from "react";
import { getlockerInsStateBySize, searchLockerApi, searchLockerClosestApi, searchLockerPriceApi } from "../../../lib/locker-api";
import { ApiModel, LockersModel } from "../../../model/api-interface";
import classes from './BackgroundHeader.module.css'

interface BackgroundHeaderProps {
    setLocker: React.Dispatch<React.SetStateAction<any>>;
    setAvailableLocker: React.Dispatch<React.SetStateAction<number>>
    defaultSearchType: string;
}

const searchAPI = async (text: string, searchType: string, setAvailableLocker: React.Dispatch<React.SetStateAction<number>>) => {
    try {
        let res = {} as ApiModel;
        if (searchType === 'lowestPrice') {
            res = await searchLockerPriceApi(text);
        } else if (searchType === 'closest') {
            res = await searchLockerClosestApi(text);
        } else if (searchType === 'small' || searchType === 'medium' || searchType === 'large') {
            res = await getlockerInsStateBySize(text, searchType);
        } else {
            res = await searchLockerApi(text);
        }
        if (res.responseCode === 200) {
            setAvailableLocker(Number(res?.totalLockerAvailable))
            return res?.modelResponse as LockersModel[]
        } else {
            setAvailableLocker(0)
            return []
        }
    } catch (error) {
        setAvailableLocker(0)
        return []
    }
}

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

const BackgroundHeader = (props: BackgroundHeaderProps) => {
    const { defaultSearchType } = props;
    const [inputValue, setInputValue] = React.useState<string>('')

    React.useEffect(() => {
        const triggerSearchOnSortChange = async () => {
            const searchData = await searchAPIDebounced(inputValue, props.defaultSearchType, props.setAvailableLocker);
            console.log(searchData)
            props.setLocker(() => [...searchData]);
        }
        if (defaultSearchType !== '' && inputValue) {
            triggerSearchOnSortChange()
        }
    }, [defaultSearchType])

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value);
        const searchData = await searchAPIDebounced(e.target.value, props.defaultSearchType, props.setAvailableLocker);
        console.log(searchData)
        props.setLocker(() => [...searchData]);
    }

    return (
        <div className={classes.BackgoundHeader}>
            <div className="mt-5">
                <h3>
                    Find a Locker
                </h3>
                <div className={classes.InputContainer}>
                    <input type="text" defaultValue="" placeholder="Enter City or State" onChange={handleInputChange} />
                    <div className={classes.ActionButton}>
                        <p className="mt-2 mb-0">Find Locker</p>
                        <span>One Naira For First Rent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundHeader;