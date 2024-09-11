const main = async () => {
  process.exit(0);
};

main().catch((error) => {
  console.error(error);
  console.log('job completed with errors');
  process.exit(-1);
});
