const main = () => {
  const nanaCount: number = parseInt(process.env.NANA);
  const drewCount: number = parseInt(process.env.DREW);

  for (let i = 0; i < nanaCount; i++) {
    console.log('Nana was here');
  }

  for (let i = 0; i < drewCount; i++) {
    console.log('Drew was here');
  }
};

main();
