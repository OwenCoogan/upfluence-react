import { QueryClientProvider } from 'react-query';
import TimeGrid from './components/TimeGrid/TimeGrid';
import { queryClient } from './components/client/queryClient';
import { RecoilRoot } from 'recoil';
import PostsProvider from './components/TimeGrid/Context/PostsProvider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200">
        <header>
          <h2>Test Upfluence React</h2>
        </header>
        <PostsProvider>
          <TimeGrid/>
        </PostsProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
