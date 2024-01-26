// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center" href="/">
          {/* <a className="flex items-center"> */}
            <div>
              {/* Wrap Image component with a div */}
              {/* <Image src="/path/to/my/logo.png" alt="Logo" width={40} height={40} /> */}
            </div>
            <span className="ml-2 text-lg font-bold bg-gradient-to-r from-blue-600 via-green-500">StockDat</span>
          {/* </a> */}
        </Link >
        {/* will Add navigation or other header elements as needed */}
      </div>
    </header>
  );
};

export default Header;
