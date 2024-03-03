'use client';
import Image from 'next/image';
import loading from '../assets/gif/coffee.gif';
export default function Loading() {
  return (
    <div>
      <Image
        className="rounded-full"
        src={loading}
        width={150}
        height={150}
        alt="Loading"
      />
    </div>
  );
}
