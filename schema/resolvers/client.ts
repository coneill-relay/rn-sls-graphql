import axios from "axios";

export default {
  Query: {
    client: async (_, args, { headers }) => {
      try {
        const response = await axios.get(
          `http://config-service-api-dev.relaystaging.com:8020/platform/v3/internal/config/client/${args.id}`,
          { timeout: 2000 }
        );
        return response.data.client;
      } catch (e) {
        console.log(e);
      }
    },
  },
  Client: {
    productGroup: async (parent, args, { headers }) => {
      const response = await axios.get(
        `http://config-service-api-dev.relaystaging.com:8020/platform/v3/internal/config/client/${parent.id}/product_group/${args.id}`,
        { timeout: 2000 }
      );
      return response.data.product_group;
    },
  },
};
