import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';
import Text from './components/Text/Text';
import Filter from './components/Filter/Filter';

import { useSelector } from 'react-redux';

export const App = () => {
  const isEdit = useSelector(state => state.todos.isEdit);
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          {!isEdit && <Filter />}
          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ...</Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
