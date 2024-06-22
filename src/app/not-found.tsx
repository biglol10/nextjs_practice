import Link from 'next/link'
import {NextPage} from "next";

// 미리 만들어둔 페이지가 아닐 경우 여기로 옴
const NotFound: NextPage = () => {
    return (
        <div>
            <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
            <Link href="/search">검색</Link>
        </div>
    )
}

export default NotFound;