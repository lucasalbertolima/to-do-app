import { Task, TaskIcon, TaskAction, TaskStatus, TaskDescripition, TaskFooter, TaskHeader } from './styles';
import { Text } from '../Text';

import pending from '../../assets/images/pending.png'
import excluir from '../../assets/images/delete.png'
import edit from '../../assets/images/edit.png'

export default function Tasks() {
    return (
        <Task>
            <TaskHeader>
                <Text size={18} weight="600">Estudar React Native</Text>
            </TaskHeader>

            <TaskDescripition>
                <Text opacity={0.5}>Fazer atividade passada na última aula.</Text>
            </TaskDescripition>

            <TaskFooter>
                <TaskStatus>
                    <TaskIcon source={pending} />
                    <Text color="#E620AE">Pendente</Text>
                </TaskStatus>
                <TaskAction>
                    <TaskIcon source={excluir} />
                    <TaskIcon source={edit} />
                </TaskAction>
            </TaskFooter>
        </Task>
    )
}