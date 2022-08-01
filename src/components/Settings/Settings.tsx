import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import s from './Settings.module.css'

type SettingsPropsType = {
    min: number
    max: number
    maxValue: number
    startValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeInputHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }

    const onChangeInputHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    return (
        <div className={s.main1}>
            <div className={s.settings}>
                <div>start value:
                    <input type="number"
                           value={props.startValue}
                           className={props.startValue < props.maxValue && props.startValue >= props.min ? s.number2 : s.error_number}
                           onChange={onChangeInputHandler1}
                    /></div>

                <div>max value:
                    <input type="number"
                           defaultValue={props.maxValue}
                           className={props.maxValue > props.startValue && props.maxValue <= props.max ? s.number1 : s.error_number}
                           onChange={onChangeInputHandler2}
                    /></div>
            </div>
        </div>
    )
}