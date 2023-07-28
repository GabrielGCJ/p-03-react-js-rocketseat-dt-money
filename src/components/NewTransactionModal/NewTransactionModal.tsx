import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionTypeButton, TransectionType } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';


export const NewTransactionModal = () => {
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                    <CloseButton>
                        <X />
                    </CloseButton>

                <Dialog.Title> Nova Transação </Dialog.Title>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransectionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saida
                        </TransactionTypeButton>

                    </TransectionType>

                    <button type='submit'>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}