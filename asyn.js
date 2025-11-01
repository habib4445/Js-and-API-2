const loadData = async () => {
  console.log(1);
  console.log(2);

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);

  const num = 10 + 10;
  console.log(num);
  console.log("At last");
};

loadData();
