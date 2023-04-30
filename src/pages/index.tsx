import Image from 'next/image';
import Map from '@/components/Map';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-[100vh]">
      <Map />
    </main>
  );
}
