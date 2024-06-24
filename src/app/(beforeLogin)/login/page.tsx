"use client"

import {redirect, useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

// 흐름: (beforeLogin)/page.tsx에서 /login으로 redirect하면 여기로 오고 여기에서 redirect하는데
// 그럼 intecepting route가 작동해서 @modal/(.)i/flow/login/page로 가게 되는걸 기대해야 되는데
// 그게 잘 작동안됨
// 원인은 여기에서의 redirect는 서버에서 redirect시키는거임
// 서버에서 redirect하면 intercepting route가 작동안됨. client에서 Link를 통해 redirect해야함

export default function Login() {
    // redirect("/i/flow/login")
    const router = useRouter();
    router.replace("/i/flow/login");
    return (
        <Main/>
    );
}

// router.push
// localhost:3000 -> localhost:3000/login -> localhost: 3000/i/flow/login
// 뒤로가기 하면 localhost:3000/login. 그럼 위 로직에 의해 다시 localhost:3000/i/flow/login으로 감.

// router.replace
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기 하면 localhost:3000으로 감. replace를 하면 history가 localhost:3000 -> localhost:3000/i/flow/login로 됨.