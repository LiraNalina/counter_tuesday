import React, {useState} from "react";
import s from "./Buttons.module.css";
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ButtonPropsType = {
    onClickIncrButtonHandler: () => void
    onClickResetHandler: () => void
    maxValue: number
    startValue: number
    num: number
    min: number
    max: number
    setValues: () => void
}

export const Buttons = (props: ButtonPropsType) => {

    let [isDisabled, setIsDisabled] = useState(true)

    const onIncClick = () => {
        props.onClickIncrButtonHandler()
    }

    const onResetClick = () => {
        props.onClickResetHandler()
    }

    const onSetClick = () => {
        props.setValues()

    }
    return (
        <div>

            <div className={s.main1}>
                <div className={s.buttons_settings}>
                    <button
                        className={s.set}
                        onClick={onSetClick}
                        disabled={props.startValue < props.min || props.maxValue > props.max}
                    >set
                    </button>
                </div>
            </div>

            <div className={s.main2}>
                <div className={s.buttons_tablo}>
                    <button
                        className={s.inc}
                        onClick={onIncClick}
                        disabled={
                            props.num > props.maxValue ||
                             props.num > props.max ||
                            props.maxValue > props.max
                            || props.startValue < props.min}
                    >inc
                    </button>

                    <button
                        disabled={props.num < props.maxValue}
                        className={s.reset}
                        onClick={onResetClick}>reset
                    </button>
                </div>
            </div>

        </div>
    )
}