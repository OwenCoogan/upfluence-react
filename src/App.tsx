import { QueryClientProvider } from 'react-query';
import TimeGrid from './components/TimeGrid/TimeGrid';
import { queryClient } from './components/client/queryClient';
import { RecoilRoot } from 'recoil';
import PostLoader from './components/store/PostLoader';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <div className="bg-gray-200">
        <header>
          <h2>Test Upfluence React</h2>
        </header>
        <PostLoader/>
        <TimeGrid/>
      </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
