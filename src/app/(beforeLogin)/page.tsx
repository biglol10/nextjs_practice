import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import zLogo from "../../../public/zlogo.png";

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={zLogo} alt={"logo"}/>
      </div>
        <div className={styles.right}>
            <h1>지금 일어나고 있는 일</h1>
            <h2>지금 가입하세요.</h2>
            <Link href={"/i/flow/signup"} className={styles.signup}>계정 만들기</Link>
            <h3>이미 트위터에 가입하셨나요?</h3>
            <Link href="/i/flow/login" className={styles.login}>로그인</Link>
        {/* /i/flow/login으로 넘어가야 하는데 @modal이라는 parrelel route가 있고 intercepting route가 있으면
          i/flow/login으로 넘어가는게 아니라 (.)i/flow/login으로 넘어가게 된다.
          intercepting route이면서 parrelel route이기에 layout파일에서 {modal}에 넘어가게 됨
          클라이언트에서 라우팅할 때만 인터셉트 라우팅이 적용됨
          */}
        </div>
    </div>
  );
}
