// import { useStore, actions } from './store'
// import { useRef } from 'react'

// export default function App() {

//   const [state, dispatch] = useStore()
//   const { todos, todoInput } = state
//   const inputRef = useRef()
//   const changeRef = useRef()

//   const handleAdd = () => {
//     dispatch(actions.addTodo(todoInput))
//     dispatch(actions.setTodoInput(''))
//     inputRef.current.focus()
//     changeRef.current = -1
//   }

//   const handleDelete = (id) => {
//     dispatch(actions.deleteTodo(id))
//   }

//   const handleUpdateTodo = (id, todo) => {
//     changeRef.current = id
//     dispatch(actions.setTodoInput(todo))
//     inputRef.current.focus()
//   }

//   const handleUpdate = () => {
//     dispatch(actions.updateTodo(changeRef.current, todoInput))
//     dispatch(actions.setTodoInput(""))
//     inputRef.current.focus()
//     changeRef.current = -1
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <input
//         ref={inputRef}
//         value={todoInput}
//         placeholder="Enter todo..."
//         onChange={e => {
//           dispatch(actions.setTodoInput(e.target.value))
//         }}
//       />
//        {changeRef.current > -1 ? (
//         <button onClick={handleUpdate}>Save</button>
//       ) : (
//         <button onClick={handleAdd}>Add</button>
//       )}
//          <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ marginBottom: 10 }}>
//             {todo}
//             <button
//               style={{ marginLeft: 10 }}
//               onClick={() => handleDelete(index)}
//             >
//               Delete
//             </button>
//             <button
//               style={{ marginLeft: 10 }}
//               onClick={() => handleUpdateTodo(index, todo)}
//             >
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
