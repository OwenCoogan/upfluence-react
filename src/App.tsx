import { QueryClientProvider } from 'react-query';
import TimeGrid from './components/TimeGrid/TimeGrid';
import PostsProvider from './components/TimeGrid/Context/PostsProvider';
import { queryClient } from './client/queryClient';

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
