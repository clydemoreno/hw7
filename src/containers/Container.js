import React from 'react';
import { getTodos, getTodoItem } from '../redux/todo'
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import Main from './Main'
import { Todo } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos: state.todos,
    todo: state.todo
});

const mapDispatchToProps = dispatch => ({
    getTodos: () => dispatch(getTodos()),
    getTodoItem: (id) => dispatch(getTodoItem(id))

})


class Container extends React.Component {
    componentDidMount() {
        const { getTodos } = this.props;
        getTodos();
        console.log(this.props);
    }
    render() {
        const { todos, todo, getTodoItem } = this.props;
        // const todo = {title: 'test'};
        const ToDoList = () => {
            if (todos && todos.length > 0) {
                return (
                    <div>
                        <ul>
                            {
                                todos.map(todo => {


                                    {/* <NavLink className="nav-link" to="/docs">
                                        <span className="fa fa-archive"></span>Docs
                                    </NavLink> */}


                                    return (<li key={todo.id}> <Todo id={todo.id} title={todo.title} getTodoItem={getTodoItem} /> </li>)

                                })
                            }
                        </ul>

                    </div>

                )
            }
            else{
                return(<div />)
            }
        }

        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ToDoList} />
                    <Route path="/about/:id" component={() => <Main todo={todo} />} />
                </Switch>
            </BrowserRouter>


        )
    }

}





export default connect(mapStateToProps, mapDispatchToProps)(Container);
