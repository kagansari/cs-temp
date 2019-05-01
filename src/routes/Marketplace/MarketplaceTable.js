import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

const result = {
    "marketplace": {
      "data": [
        {
          "uuid": "b9b5df02-3019-48b2-99e2-f95ba46fca6e",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 2500000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:21",
          "updated_at": "2019-04-02 17:09:21"
        },
        {
          "uuid": "501ba508-286d-4c13-a220-0988a994ae76",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 1250000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:38",
          "updated_at": "2019-04-02 17:09:38"
        },
        {
          "uuid": "53b0d410-445b-470a-88e6-b9529842272e",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 400000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:44",
          "updated_at": "2019-04-02 17:09:44"
        },
        {
          "uuid": "18b36996-7012-40f5-a616-76ab2691c010",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 50000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:49",
          "updated_at": "2019-04-02 17:09:49"
        },
        {
          "uuid": "076ec096-4c64-482e-bb23-649e4d8e41bc",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 550000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:54",
          "updated_at": "2019-04-02 17:09:54"
        },
        {
          "uuid": "9e33b310-fdab-4ee8-8195-c8743705ae36",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 1500000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:09:59",
          "updated_at": "2019-04-02 17:09:59"
        },
        {
          "uuid": "7fc1e0fd-cab9-43f2-8984-7a5c41e6f84a",
          "contract": {
            "uuid": "e77d381a-5471-4db1-9db6-435040ec0a6b",
            "owner": {
              "firstname": "Akide4",
              "lastname": "Tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-02 16:28:04",
            "updated_at": "2019-04-02 16:28:17"
          },
          "seller": {
            "firstname": "Akide2",
            "lastname": "Tester",
            "profile": {
              "company_name": "Creosafe Inc."
            }
          },
          "status": "visible",
          "tokens": 2000000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-02 17:10:09",
          "updated_at": "2019-04-02 17:10:09"
        },
        {
          "uuid": "546c959d-60fc-4309-9add-aa6aebdb2992",
          "contract": {
            "uuid": "79c07120-fbda-44dd-af62-131d4e740488",
            "owner": {
              "firstname": "akide10",
              "lastname": "tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-03 14:56:59",
            "updated_at": "2019-04-03 14:57:10"
          },
          "seller": {
            "firstname": "akide10",
            "lastname": "tester",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 3000,
          "initialprice": "9000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-03 14:57:39",
          "updated_at": "2019-04-03 14:57:39"
        },
        {
          "uuid": "d5be4200-ea85-4393-b116-bf1ae85b9278",
          "contract": {
            "uuid": "79c07120-fbda-44dd-af62-131d4e740488",
            "owner": {
              "firstname": "akide10",
              "lastname": "tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-03 14:56:59",
            "updated_at": "2019-04-03 14:57:10"
          },
          "seller": {
            "firstname": "akide10",
            "lastname": "tester",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 19000,
          "initialprice": "200000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-03 14:58:12",
          "updated_at": "2019-04-03 14:58:12"
        },
        {
          "uuid": "f27bc44a-00de-4b1f-8c7f-4da1aa4ecb58",
          "contract": {
            "uuid": "4a3007e6-df79-41fe-94fd-8449ef3d5ec5",
            "owner": {
              "firstname": "akide10",
              "lastname": "tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-03 15:11:28",
            "updated_at": "2019-04-03 15:19:46"
          },
          "seller": {
            "firstname": "akide10",
            "lastname": "tester",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 3000,
          "initialprice": "100000",
          "market_data": {
            "contract_type": "STOCK"
          },
          "created_at": "2019-04-03 15:21:03",
          "updated_at": "2019-04-03 15:21:03"
        },
        {
          "uuid": "2da1b16f-24a9-465e-aca5-652cdf7641ac",
          "contract": {
            "uuid": "87c71ff7-2077-4ad6-9216-47577757299b",
            "owner": {
              "firstname": "akide10",
              "lastname": "tester"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-03 15:13:13",
            "updated_at": "2019-04-03 15:23:07"
          },
          "seller": {
            "firstname": "akide10",
            "lastname": "tester",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 43000,
          "initialprice": "32000000",
          "market_data": {
            "contract_type": "CN"
          },
          "created_at": "2019-04-03 15:22:17",
          "updated_at": "2019-04-03 15:22:17"
        },
        {
          "uuid": "3487bb3b-da69-49cb-9be9-bf4469c33e56",
          "contract": {
            "uuid": "058b2945-558d-49d9-a25e-2b75c8c85abe",
            "owner": {
              "firstname": "yusufmarket1",
              "lastname": "market"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-04 15:44:59",
            "updated_at": "2019-04-04 15:45:18"
          },
          "seller": {
            "firstname": "yusufmarket1",
            "lastname": "market",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 10000,
          "initialprice": "15000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-04 15:48:18",
          "updated_at": "2019-04-04 15:48:18"
        },
        {
          "uuid": "a8dcded5-fd95-478a-b42b-9496ca8affb4",
          "contract": {
            "uuid": "058b2945-558d-49d9-a25e-2b75c8c85abe",
            "owner": {
              "firstname": "yusufmarket1",
              "lastname": "market"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-04 15:44:59",
            "updated_at": "2019-04-04 15:45:18"
          },
          "seller": {
            "firstname": "yusufmarket1",
            "lastname": "market",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 10000,
          "initialprice": "20000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-04 19:35:44",
          "updated_at": "2019-04-04 19:35:44"
        },
        {
          "uuid": "6c2519c7-ca10-4b91-8b2c-8958c5d455d6",
          "contract": {
            "uuid": "058b2945-558d-49d9-a25e-2b75c8c85abe",
            "owner": {
              "firstname": "yusufmarket1",
              "lastname": "market"
            },
            "status": "pending",
            "contract_type": null,
            "created_at": "2019-04-04 15:44:59",
            "updated_at": "2019-04-04 15:45:18"
          },
          "seller": {
            "firstname": "yusufmarket1",
            "lastname": "market",
            "profile": {
              "company_name": null
            }
          },
          "status": "visible",
          "tokens": 15000,
          "initialprice": "25000",
          "market_data": {
            "contract_type": "SAFE"
          },
          "created_at": "2019-04-04 21:44:53",
          "updated_at": "2019-04-04 21:44:53"
        }
      ]
    }
}

class MarketplaceTable extends Component {
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>-</Table.HeaderCell>
            <Table.HeaderCell>Token ID</Table.HeaderCell>
            <Table.HeaderCell>Token Owner</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Contract</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Transferable</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>-</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            result.marketplace.data.map(listing => (
              <Table.Row>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>{listing.uuid}</Table.Cell>
                <Table.Cell>{listing.seller.firstname + ' ' + listing.seller.lastname}</Table.Cell>
                <Table.Cell>{listing.seller.profile.company_name}</Table.Cell>
                <Table.Cell>{listing.market_data.contract_type}</Table.Cell>
                <Table.Cell>{listing.updated_at}</Table.Cell>
                <Table.Cell>{listing.transferable /* @todo */}</Table.Cell>
                <Table.Cell>{listing.tokens}</Table.Cell>
                <Table.Cell>{listing.intialprice}</Table.Cell>
                <Table.Cell>..</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    )
  }
}

export default MarketplaceTable
