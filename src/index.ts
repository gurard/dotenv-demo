const main = () => {
  const helloWorldCount: number = parseInt(process.env.HELLO_WORLD_COUNT);

  for (let i = 0; i < helloWorldCount; i++) {
    console.log('Hello World');
  }
};

main();
