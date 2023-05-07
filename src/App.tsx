import { QueryClientProvider } from 'react-query';
import TimeGrid from './components/TimeGrid/TimeGrid';
import { queryClient } from './components/client/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="bg-red-200">
      <header>
        <h2>Test Upfluence React</h2>
      </header>
      <TimeGrid/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
