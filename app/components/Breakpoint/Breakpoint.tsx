import styles from './Breakpoint.module.css'

type BreakpointProps = {
    children?: React.ReactNode;
};

export default function Breakpoint({ children }: BreakpointProps) {
    return <div className={styles.breakpoint}>{children}</div>
}