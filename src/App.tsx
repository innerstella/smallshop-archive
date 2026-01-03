import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import AppRouter from "./Router";

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
