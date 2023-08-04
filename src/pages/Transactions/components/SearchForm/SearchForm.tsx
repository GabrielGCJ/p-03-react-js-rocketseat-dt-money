import * as z from 'zod'
import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
// import { useContext } from 'react'

export const SearchForm = () => {
  // const { fetchTransactions } = useContext(TransactionsContext)

  // O codigo abaixo tem por finalidade uma melhoria de performace ao utilizar o
  // contexto TransactionsContext, ele funciona exatamente como o useContext
  // normal porem usa a biblioteca useContextSelector.

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof searchFormSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    // await new Promise (resolve => setTimeout(resolve, 2000))

    await fetchTransactions(data.query)

    // console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
