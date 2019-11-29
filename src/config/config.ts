export const config = {
  "dev": {
    "username": process.env.POSTGRESS_username,
    "password": process.env.POSTGRESS_password,
    "database": process.env.POSTGRESS_database,
    "host": process.env.POSTGRESS_host,
    "dialect": "postgres",
    "aws_region": process.env.AWS_region,
    "aws_profile": process.env.AWS_profilem,
    "aws_media_bucket": process.env.AWS_media_bucket
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}