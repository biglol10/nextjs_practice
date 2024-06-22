import {ReactNode} from "react";
import styles from '@/app/page.module.css';

export default function Layout({children, modal}: {children: ReactNode, modal: ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}

// 주소가 localhost:3001일 때는 children-page.tsx, modal -> @modal/default.tsx (얘를 못찾으니 null을 반환하는 default.tsx생성)
// 주소가 localhost:3001/i/flow/login일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx