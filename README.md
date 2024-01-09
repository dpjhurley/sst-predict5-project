## Deploying to AWS

To deploy the application to AWS you need to have an AWS account set up with an Iam user so you can use your own credentials. You will need to add your aws key id and access key to you `~/.aws/credentials` file, as below

```
[default]
aws_access_key_id = 
aws_secret_access_key = 
```

Then you can run the following to spin your infrastructure

```bash
npx sst dev
```

You should be able to see the sst console on [https://console.sst.dev/local/sst-predict5-project/dev](https://console.sst.dev/local/sst-predict5-project/dev)

## Deleting the stack

Make sure to remove the stack when not actively developing.

```bash
npx sst remove
```