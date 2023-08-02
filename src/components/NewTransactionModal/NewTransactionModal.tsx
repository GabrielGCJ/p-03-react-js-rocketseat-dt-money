import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransectionType,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { api } from '../../lib/axios';
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const { createTransection } = useContext(TransactionsContext)

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleNewTransaction = async (data: NewTransactionsFormInputs) => {
    // await new Promise( resolve => setTimeout(resolve, 2000))
    // console.log( data )
    const { description, category, price, type } = data

    await createTransection({
      description,
      category,
      price,
      type,
    })

    // const response = await api.post('transactions', {
    //     description,
    //     category,
    //     price,
    //     type,
    //     createdAt: new Date(),
    // })

    // console.log(response.data)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X />
        </CloseButton>

        <Dialog.Title> Nova Transação </Dialog.Title>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              // console.log(field)
              return (
                <TransectionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransectionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
