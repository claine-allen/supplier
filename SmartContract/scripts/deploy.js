const main = async () => {
  const Lock= await hre.ethers.getContractFactory("Lock");
  const lock =await Lock.deploy();

  await lock.deployed();

  console.log("Lock deployed to: ",lock.address);
}

const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();