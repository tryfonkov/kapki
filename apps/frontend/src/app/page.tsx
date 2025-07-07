import AppLayout from '@/components/AppLayout';
import TopBar from '@/components/TopBar';
import CanvasScene from '@/components/CanvasScene';

export default function HomePage() {
  return (
    <AppLayout>
      <TopBar />
      <CanvasScene />
    </AppLayout>
  );
}
