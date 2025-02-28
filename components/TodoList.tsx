import React, { useState } from 'react';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [completed, setCompleted] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const completeTodo = (index: number) => {
        const newTodos = [...todos];
        const completedTask = newTodos.splice(index, 1);
        setTodos(newTodos);
        setCompleted([...completed, ...completedTask]);
    };

    const uncompleteTodo = (index: number) => {
        const newCompleted = [...completed];
        const uncompletedTask = newCompleted.splice(index, 1);
        setCompleted(newCompleted);
        setTodos([...todos, ...uncompletedTask]);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <div style={{ width: '100%', maxWidth: '600px', gap: '16px' }}>
                <h2 style={{ 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    padding: '10px',
                    fontSize: '24px',
                    color: '#4A90E2'
                }}>
                    To do list
                </h2>
                
                <div style={{ 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    padding: '10px',
                    marginTop: '16px'
                }}>
                    <h3>할일 목록</h3>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                <input className='mr-2' 
                                    type="checkbox" 
                                    onChange={() => completeTodo(index)} 
                                />
                                {todo}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    padding: '10px',
                    marginTop: '16px'
                }}>
                    <h3>완료된 목록</h3>
                    <ul>
                        {completed.map((task, index) => (
                            <li key={index}>
                                <input className='mr-2' 
                                    type="checkbox" 
                                    checked 
                                    onChange={() => uncompleteTodo(index)} 
                                />
                                <span style={{ textDecoration: 'line-through' }}>{task}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <input
                        className='mr-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-4'    
                        type="text" 
                        value={newTodo} 
                        onChange={(e) => setNewTodo(e.target.value)} 
                        onKeyPress={handleKeyPress}
                        placeholder="새로운 할일을 입력하세요" 
                    />
                    <button onClick={addTodo}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
