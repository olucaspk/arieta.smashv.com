export default function Footer() {
  return (
    <footer className='flex justify-between items-center mt-20 border-t border-gray-200 text-gray-600 text-sm'>
      <p className='mt-4'>© {new Date().getFullYear()} Lucas Arieta</p>

      <p>Built with TypeScript, Tailwind and Next.js</p>
    </footer>
  );
}
