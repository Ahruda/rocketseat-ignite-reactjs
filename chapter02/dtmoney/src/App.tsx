import { useState } from "react"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from "./hooks/useTransactions"

// ? Recomendação da documentação para melhorar a experiência dos usuários que utilizam acessibilidade no site
Modal.setAppElement('#root')

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}