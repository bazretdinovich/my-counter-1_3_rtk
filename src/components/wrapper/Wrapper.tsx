
import S from './Wrapper.module.css'
import React from "react";

type Props = {
    className : string
    children: React.ReactNode
}
export const Wrapper = ({children, className}:Props) => {
    return (
        <div className={S.wrapper + ' ' + S[className]}>
            {children}
        </div>
    );
};
