"use client"; // This is a client component 👈🏽
import { fetchStocks } from '../../../utils/apiCall';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Stock } from '../../../utils/stock_Interface'; // Defined my Stock type
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination, SortDescriptor} from "@nextui-org/react";
import { columns } from '@/utils/nextui_columns';


import Footer from '@/components/Footer';


export default function IndexScreenPage({ params }: { params: { index_name : string }}) {
  const index = params.index_name
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [page, setPage] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>();
  const rowsPerPage = 20;
  const pages = Math.ceil(stocks.length / rowsPerPage);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "MarketCap_Billions",
    direction: "descending",
  });
  
  

  const sortedStocks = useMemo(() => {
    return [...stocks].sort((a:Stock, b:Stock) => {
      const first = a[sortDescriptor.column as keyof Stock] as number;
      const second = b[sortDescriptor.column as keyof Stock] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, stocks]);


  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedStocks.slice(start, end);
  }, [page, sortedStocks]);
  
  // console.log(stocks.length);
    
  // Fetch stocks data based on the selected market index
  useEffect(() => {
    setStocks([])
    if (index) {
      fetchData();
    }
  },[index]);

  const fetchData = async () => {
    try {
      const data = await fetchStocks(index as string);
      // console.log(data);
      setStocks(data);
    } catch (error) {
      // Handle error
      console.error('Error fetching stocks:', (error as Error).message);
      setErrorMessage((error as Error).message);
    }
  };

  
  


  return (
  <div>
    <div className="IndexScreenPage container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Stocks for {index}</h1>
      <Table className="mb-6" isStriped aria-label="table with dynamic content and pagination" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
            />
          </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} allowsSorting={true}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={items} >
          {(item) => (
            <TableRow key={item.Symbol}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>    
    </div>  
  </div>
  );
  }