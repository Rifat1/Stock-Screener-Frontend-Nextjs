import Link from 'next/link';
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-5">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">StockDat</h3>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-gray-500">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-500">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-gray-500">Contact Us</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;