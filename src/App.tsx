import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Navbar } from './components/Navbar';
import { Space } from './components/Space';
import { Content } from './components/Content';

function App() {
  return (
    <div className="relative min-h-screen bg-black w-full max-w-full overflow-x-hidden">
      <Navbar />
      <div className="absolute inset-0 overflow-hidden">
        <Canvas>
          <Suspense fallback={null}>
            <Space />
          </Suspense>
        </Canvas>
      </div>
      <Content />
    </div>
  );
}

export default App;