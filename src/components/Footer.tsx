
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">StockDat</h3>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-500">Privacy Policy</a>
            <a href="#" className="hover:text-gray-500">Terms of Service</a>
            <a href="#" className="hover:text-gray-500">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;