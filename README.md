Full src Github: https://github.com/ZeroCho/next-app-router-z , https://github.dev/ZeroCho/next-app-router-z
Notion: https://zerocho.notion.site/Next-js14-7ff657dc0ec544759d0fc2e6e28da057

## CH 1

1. 폴더 주소는 app/(afterLogin)/home 이어도 브라우저에서는 /home
2. 페이지가 넘나들 때 리렌더링이 안되게 하고싶으면 layout.tsx, 매번 새로 mount 되게 하고싶으면 template.tsx 3. Next에서 a tag 대신 Link를 사용하는 이유는 페이지 이동 시 리렌더링을 방지하기 위함
   1. parallel(동시에 보여주는거, layout에서 쓸 수 있음) route에서는 내가 @asdf라는 폴더를 만들면 같은 위치의 layout.tsx에서 {asdf}로 받아올 수 있다
   2. \*Note 1
3. 공통되는 소스들을 정리하기 위해 부모 폴더에 `_` 를 사용하여 private folder를 만들어 줄 수 있음. private folder 또한 주소창에 영향이 없는 폴더이다. 이 폴더는 **폴더 정리용**으로 주로 사용된다
4. 서버 컴포넌트는 클라이언트 컴포넌트를 import 할 수 있지만, 클라이언트 컴포넌트는 서버 컴포넌트를 import 할 수 없다. ++ 실제로는 클라이언트 컴포넌트에 서버 컴포넌트를 import 할 수는 있지만, 이 때 서버 컴포넌트는 클라이언트 컴포넌트로 변경된다는 점이 있다.
5. 한 페이지에서 2화면을 동시에 보여주려면 두 page가 같은 폴더에 있어야 한다. 그래야 서버 컴포넌트가 클라이언트 컴포넌트로 변경되지 않는다.
6. 기본은 다 서버 컴포넌트. 서버에서 도니까 async 붙힐 수 있음. useState, useEffect등을 쓰려면 client 컴포넌트로 바꿔야함. 서버 컴포넌트는 다 데이터와 관련이 있음
7. default.tsx는 Next.js가 현재 URL을 기반으로 슬롯의 활성 상태를 복구할 수 없는 경우, 대체 파일로 렌더링할 파일. 패러렐 라우트가 필요없을 때 혹은 그에 해당하는 기본 값 (모달에 대한 기본 값이 아님에 주의)
8. 인터셉팅 라우팅을 하면 현재 레이아웃 내 애플리케이션의 다른 부분에서 경로를 로드할 수 있다.이 라우팅 패러다임은 사용자가 다른 컨텍스트로 전환하지 않고도 경로의 내용을 표시하려는 경우 유용하게 사용된다.
   1. app/(beforeLogin)/@modal/(..)i를 하면 @modal은 url이 아니고 (beforeLogin)도 url에 포함되지 않기에 app으로 감
   2. 그래서 (.)i로 해야함. (..)나 (.)은 browser url 기준이다
   3. 이렇게 하는 이유는 (beforeLogin)/@modal/i를 (beforeLogin)/i로 옮기기 위해서다
9. <Link href="/i/flow/login" className={styles.login}>로그인</Link>
   1. /i/flow/login으로 넘어가야 하는데 @modal이라는 parrelel route가 있고 intercepting route가 있으면
   2. i/flow/login으로 넘어가는게 아니라 (.)i/flow/login으로 넘어가게 된다.
      intercepting route이면서 parrelel route이기에 layout파일에서 {modal}에 넘어가게 됨
      클라이언트에서 라우팅할 때만 인터셉트 라우팅이 적용됨
   3. i/flow/login은 그럼 항상 가로채기 당하니까 필요없다고 생각할 수 있지만 새로고침하면 여기로 넘어옴. 브라우저를 통해 처음 실행하면 이걸로 나오고 Link를 통해서 들어가면 가로채기
10. 주소창이 안 뜨는거 3개 - (afterLogin), @modal, \_component
    1. (afterLogin) - 그룹폴더. 그룹폴더의 주요 역할은 layout을 두는거
    2. @modal은 parrelel route. 한 화면에 2개의 페이지를 동시에 보여줄 때. 혹시나 모달이 여러개면 @modal2, @modal3 이런식으로. layout에 modal2, modal3을 추가해주면 됨
    3. \_component는 private folder. 주소창에 영향을 주지 않는 폴더. 주로 공통된 소스를 넣는다
11. Server component는 client component를 import할 수 있지만, client component는 server component를 import할 수 없다. ++ 실제로는 client component에 server component를 import할 수는 있지만, 이 때 server component는 client component로 변경된다는 점이 있다.

## CH 2

1. onClick이 있으면 무조건 "use client"

---

\*Note 1

```javascript
export default function Layout({
  children,
  modal,
  asdf,
}: {
  children: ReactNode,
  modal: ReactNode,
  asdf: ReactNode,
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
      {asdf}
    </div>
  );
}
```
