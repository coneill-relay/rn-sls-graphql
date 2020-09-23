import { mergeResolvers } from "@graphql-tools/merge";
import client from "./client";
import message from "./message";

const resolvers = mergeResolvers([client, message]);

export default resolvers;
