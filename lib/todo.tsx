

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  return response.json();
};

export const getTodo = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response.json();
};
