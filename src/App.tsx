import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import AppRouter from "./Router";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
        gcTime: 1000 * 60 * 10, // 10분 후 캐시 삭제
        refetchOnWindowFocus: false, // 창 포커스 변경 시 자동 요청 X
      },
    },
  });

  useEffect(() => {
    alert("더이상 사용되지 않는 페이지입니다. 트위터 맛집 검색기 내에서 이용해주세요 :)");
    window.location.href = "https://twitter-michelin.web.app/smallshop";
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme accentColor="jade">
          <AppRouter />
        </Theme>
      </QueryClientProvider>
    </>
  );
}

export default App;
