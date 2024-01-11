import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  const userTable = new Table(stack, "Users", {
    fields: {
      userId: "string",
      roundId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "roundId" },
  });
  
  const gameTable = new Table(stack, "Game", {
    fields: {
      PK: "string",
      SK: "string",
    },
    primaryIndex: { partitionKey: "PK", sortKey: "SK" },
  });

  const bucket = new Bucket(stack, "Uploads");

  return {
    userTable,
    gameTable,
    bucket
  };
}