import React, {useState} from "react";
import s from './Tablo.module.css'

type ButtonPropsType = {
    min: number
    max: number
    num: number
    maxValue: number
    startValue: number
    error: string
}
export const Tablo = (props: ButtonPropsType) => {

    let [error, setError] = useState("enter values and press 'set'")

    return (
        <div className={s.main2}>

            <div className={s.tablo}>

                 <span className={props.maxValue < props.max && props.startValue >= props.min
                 && props.num < props.maxValue
                 && props.startValue !== props.maxValue && props.startValue < props.maxValue
                     ? s.digit : s.error_number}>

                    {
                        (props.startValue > props.maxValue) || props.startValue === props.maxValue &&
                        (props.startValue && props.maxValue !== 0)? ("incorrect value") :
                        props.startValue >= props.min && props.maxValue < props.max
                        && props.maxValue > props.min
                        && props.startValue < props.max && props.num < props.max
                            ? props.num : ("enter values and press 'set'")
                    }

                </span>
            </div>
        </div>
    )
}
