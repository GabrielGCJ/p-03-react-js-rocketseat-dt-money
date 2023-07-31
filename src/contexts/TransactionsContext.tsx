import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    category: string;
    price: number;
    createdAt: string;
  }

interface TransactionContextType {
    transactions: Transaction[]
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {


    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadTransactions = async () => {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();
  
      console.log("data", data);
      setTransactions( data );
    };
  
    useEffect(() => {
      loadTransactions();
    }, []);


    return(
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}