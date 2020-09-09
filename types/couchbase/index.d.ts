declare module "couchbase" {
  import { Cluster } from "couchbase";
  export function connect(
    connStr: any,
    options?: {
      username?: string;
      password?: string;
      clientCertificate?: string;
      certificateChain?: string;
    },
    callback?: ConnectCallback
  ): Promise<Cluster>;
}
