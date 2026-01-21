import React from 'react'
import styles from './MainContainer.module.css'

type ContainerProps = {
    children: React.ReactNode;
    style?: object
}

export default function MainContainer({ children, style = {} }: ContainerProps) {
    return <div className={styles.container} style={{ ...style }}>{children}</div>
}