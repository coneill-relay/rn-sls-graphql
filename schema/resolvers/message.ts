import axios from "axios";

export default {
  Query: {
    localMessage: async (_, args) => {
      const response = await axios.get(
        `http://localhost:3000/dev/message/${args.id}`
      );
      return response.data.message;
    },
    message: async (_, args) => {
      // const response = await axios.get(
      //   `http://messaging-service-api-dev.relaystaging.com:8080/platform/v3/internal/messaging/client/${args.clientId}/customer/${args.customerId}/message/${args.id}`
      // );
      // console.log(response.data);
      // return response.data;
      return {
        journey_product_group_id: "default",
        client_customer_id: "cjo-qa",
        wire: {
          product_group_id: "default",
          is_alternate_message: false,
          actions: [
            {
              show: false,
              description: "Collapsible",
              label: "collapsible table",
              id: "eafee9d2-8133-e5e5-2077-a7f5e89cfb91",
              type: "collapsible",
              value:
                '<p>With your health in mind, we\'re temporarily closing and reducing store hours for some stores. To stay up to date on store closures, visit <strong><a href="https://www.td.com/us/en/personal-banking/COVID-19/">td.com/covid</a></strong>. Even during temporary store closures, you\'ll still have access to our network of TD Bank ATMs if you need to check your balance or make a withdrawal. We can always direct you to the nearest open TD Bank store using our <a href="https://www.tdbank.com/net/absearch/">store locator</a>.</p>\n<p><strong>Stay up to date on store closures:</strong></p>\n<div style="direction: ltr;">\n<table style="direction: ltr; border-collapse: collapse; border: 1pt solid #a3a3a3; height: 595px; width: 651px;" title="" border="1" summary="" width="272" cellspacing="0" cellpadding="0">\n<tbody>\n<tr style="height: 18px;">\n<td style="background-color: #d8d8d8; vertical-align: top; width: 157.867px; padding: 4pt; border: 1pt solid #a3a3a3; height: 18px;">\n<p><span style="font-weight: bold;">State</span></p>\n</td>\n<td style="background-color: #d8d8d8; vertical-align: top; width: 468.267px; padding: 4pt; border: 1pt solid #a3a3a3; height: 18px;">\n<p><span style="font-weight: bold;">City / Region</span></p>\n</td>\n</tr>\n<tr>\n<td style="vertical-align: top; width: 157.867px; padding: 4pt; border: 1pt solid #a3a3a3;">\n<p>MA           </p>\n</td>\n<td style="vertical-align: top; width: 468.267px; padding: 4pt; border: 1pt solid #a3a3a3;">\n<p><strong>The following TD Bank Stores will be closed:</strong></p>\n<ul>\n<li>BOSTON-MGH (Closed)</li>\n</ul>\n</td>\n</tr>\n<tr style="height: 107px;">\n<td style="vertical-align: top; width: 157.867px; padding: 4pt; border: 1pt solid #a3a3a3; height: 107px;">\n<p>NH</p>\n<p>           </p>\n</td>\n<td style="vertical-align: top; width: 468.267px; padding: 4pt; border: 1pt solid #a3a3a3; height: 107px;">\n<p><strong>The following TD Bank Stores will be closed:</strong></p>\n<ul>\n<li>EPSOM (Drive-Thru and ATM Open)</li>\n<li>TILTON (Drive-Thru and ATM Open)</li>\n</ul>\n</td>\n</tr>\n<tr style="height: 148px;">\n<td style="vertical-align: top; width: 157.867px; padding: 4pt; border: 1pt solid #a3a3a3; height: 148px;">\n<p>NY</p>\n<p>           </p>\n</td>\n<td style="vertical-align: top; width: 468.267px; padding: 4pt; border: 1pt solid #a3a3a3; height: 148px;">\n<p><span style="font-weight: bold;"><strong>The following TD Bank Stores will be closed:</strong></span></p>\n<ul>\n<li>LARCHMONT VILLAGE (ATM Open)</li>\n<li>PELHAM (Drive-Thru and ATM Open)</li>\n<li>HOWARD BEACH (Closed)</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="vertical-align: top; width: 157.867px; padding: 4pt; border: 1pt solid #a3a3a3;">\n<p>PA</p>\n<p>           </p>\n</td>\n<td style="vertical-align: top; width: 468.267px; padding: 4pt; border: 1pt solid #a3a3a3;">\n<p><span style="font-weight: bold;"><strong>The following TD Bank Stores will be closed:</strong></span></p>\n<ul>\n<li>ROXBOROUGH (Drive-Thru and ATM Open)</li>\n</ul>\n<p><span style="font-weight: bold;"><strong> </strong></span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p></p>\n</div>',
            },
          ],
          alternate_text: "",
          show_banner: false,
          branding: null,
          product_group: "len_qa_reports",
          text: "<p>message</p>",
          is_shown: true,
        },
        step_nickname: "m1",
        trigger_id: "765c8610-6368-47da-98e9-c6a0a6181fca",
        step_name: "d6fd863c-1b11-4006-8b7f-bf5c761e3bd6",
        journey_id: "136d5779-2f16-4a69-b61d-df51f62da552",
        customer_product_group_id: "default",
        updated_at: "2020-04-06T15:04:34.403Z",
        step_id: "1.a",
        id: "ab8655ac-9a82-454b-9254-af057bc328a4",
        campaign: null,
        client_id: "len_qa_reports",
        client_trigger_id: null,
        journey_name: "Large table collapsible",
        client_message_tag: null,
        launched_by: {
          portal_id: "06f02650-5159-4a7c-b6d3-e12d39627551",
          lb_source: "cxb-journey-launcher",
          lb_name: "coneill@relaynetwork.com",
        },
        created_at: "2020-04-06T15:04:34.403Z",
        journey_version: 1,
        job_id: "f332d5fa-55a0-48e6-a5b8-4bcf46771a79",
        customer_id: "5cf0dd11-b014-441c-91e8-280b5155ba97",
      };
    },
  },
  Message: {
    productGroup: async (parent, args) => {
      const response = await axios.get(
        `http://config-service-api-dev.relaystaging.com:8020/platform/v3/internal/config/client/${parent.client_id}/product_group/${parent.wire.product_group_id}`
      );
      console.log(response.data.product_group);
      return response.data.product_group;
    },
  },
};
