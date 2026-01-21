"use client";

import styles from "./StaticToast.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, CSSProperties } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface StaticToastProps {
    title?: string;
    description?: string;
    icon?: IconProp;
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
    margins?: string;
    onClose?: () => void;
}

export default function StaticToast({
    title,
    description,
    icon,
    backgroundColor,
    textColor,
    iconColor,
    margins,
    onClose,
}: StaticToastProps) {
    const [isMounted, setIsMounted] = useState(true);

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            setIsMounted(false);
        }
    };

    if (!isMounted) return null;

    const gridTemplateColumns: string = icon
        ? `auto 1fr${onClose ? " 50px" : ""}`
        : `1fr${onClose ? " 50px" : ""}`;

    const style: CSSProperties = {
        backgroundColor,
        color: textColor,
        gridTemplateColumns,
        margin: margins || "0",
    };

    return (
        <div className={styles.toast} style={style}>
            {icon && (
                <div className={styles.icon} style={{ color: iconColor }}>
                    <FontAwesomeIcon icon={icon} />
                </div>
            )}

            <div className={styles.content}>
                {title && <h6 className={styles.title}>{title}</h6>}

                {description !== undefined &&
                    description.split("\n").map((p, i) => (
                        <p key={i} className={styles.description}>
                            {p}
                        </p>
                    ))}
            </div>

            {onClose && (
                <button className={styles.closeButton} onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}
        </div>
    );
}