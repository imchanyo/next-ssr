// app/ReactQueryProvider.tsx
"use client";

import { QueryClient, QueryClientProvider, QueryKey } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PropsWithChildren, useState } from "react";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
          },
        },
      })
  );
  // const cacheTime = 1000 * 60 * 60 * 24 * 5;

  // const localStoragePersistor = createSyncStoragePersister({
  //   storage: window.localStorage,
  // });
  // persistQueryClient({
  //   queryClient,
  //   persistor: localStoragePersistor,
  //   maxAge: cacheTime,
  // });
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
