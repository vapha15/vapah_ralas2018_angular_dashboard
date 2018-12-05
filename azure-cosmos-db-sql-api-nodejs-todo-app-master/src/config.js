const config = {};

config.host = process.env.HOST || "https://semesterprojektdb.documents.azure.com";
config.authKey =
  process.env.AUTH_KEY || "E3B3NNf6kUqDDSIllFiro2CPKurGNerkS3Nrc8NHw55oxnILLJNY5IeHwrrV6MGRORXtRE8EoprZB2LuFN20FA==";
config.databaseId = "semesterprojektdb";
config.containerId = "devicevalues2";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;
