/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Generator_owner:GB3bZcpdf6kU@ep-muddy-bonus-a5szmhsh.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };