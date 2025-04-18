<template>
  <div class="mt-3">
    <b-row>
      <b-col md="12" class="text-center ">
        <!-- main content here -->
        <div class="d-flex flex-column">
          <!-- card -->
          <div id="introduction" class="content">
            <h1 class="content__title"> Introduction</h1>
            <span class="content__description">
              This report api is mainly used for game reports handling.
            </span>
          </div>
          <!-- card -->
          <div class="content">
            <h1 class="content__title"> Signature</h1>
            <span class="content__description">
              Signature with secret key and md5 encryption
            </span>
            <p class="content__description">Format to generate the signature </p>
            <p class="content__description">1. arragne / sort the key by ASCII</p>
            <p class="content__description">2. mixed it as http query format example</p>
            <p class="content__description"> "agent_id={agent_id}" + "&daterange={daterange}" + "{secret key}" </p>
            <p class="content__description">3. encrypt the mixed value with MD5 encryption</p>
          </div>
          <!-- card -->
          <div class="content">
            <span class="content__example">Example</span>
            <CodeBlock lang="javascript" :code=signCode />
          </div>
          <!-- card -->
          <div id="general-transactions" class="content">
            <h1 id="member-promotion-transaction" class="content__title"> Get Member Promotion Transactions</h1>
            <span class="content__description">Get Pending Transaction for specific member</span>
            <span class="content__example">Link</span>
            <CodeBlock lang="javascript" :code=memberPromotion />
          </div>
          <!-- card -->
          <div class="content">
            <span class="content__example">PHP Code Param</span>
            <b-table :items="codeParams" :bordered=true :striped=true :dark=isDark></b-table>
            <span class="content__example">Example</span>
            <CodeBlock lang="json" :code=jsonPromotionTransaction />
            <span class="content__example">Json Response Example</span>
            <div class="nav__container border">
              <b-tabs content-class="mt-3">
                <b-tab title="200">
                  <CodeBlock lang="json" :code="successPromotionTransaction" />
                </b-tab>
                <b-tab title="403">
                  <CodeBlock lang="json" :code="invalidPromotionTransaction" />
                </b-tab>
              </b-tabs>
            </div>
          </div>
          <div id="insert-transaction" class="content">
            <h1 class="content__title">Insert Transaction</h1>
            <span class="content__description">
              Insert transaction record
            </span>
            <span class="content__example">Link</span>
            <CodeBlock lang="javascript" :code="codeInstanttransaction" />
            <span class="content__example">PHP Code Param</span>
            <b-table :items="phpinsertTransactionTable" :bordered=true :striped=true :dark=isDark></b-table>
            <span class="content__example">Example</span>
            <CodeBlock lang="json" :code="jsonInsertTransaction" />
            <span class="content__example">JSON Response Example</span>
            <div class="nav__container border">
              <b-tabs content-class="mt-3">
                <b-tab title="200">
                  <CodeBlock lang="json" :code="successInsertTransaction" />
                </b-tab>
                <b-tab title="403">
                  <CodeBlock lang="json" :code="invalidInsertTransaction" />
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
import CodeBlock from '../components/common/CodeBlock.vue';
import { isDark } from '@/store/theme';

// CodeBlock Section
const signCode =
  `params:  ["daterange" => "2023-03-01_2023-03-02",
    "agent_id"  => "BAAAAAA",
];

secretkey = ss041b7be199564e;
before encrypt:  agent_id=BAAAAAA&daterange=2023-03-01_2023-03-02ss041b7be199564e;
encrypt with:  md5(agent_id=BAAAAAA&daterange=2023-03-01_2023-03-02ss041b7be199564e);
sign: c493f05b57e1b96b1fec23dea2f21973

submit params: ["daterange" => "2023-03-01_2023-03-02",
"agent_id"  => "BAAAAAA",
"sign"=>"c493f05b57e1b96b1fec23dea2f21973"
];`

const memberPromotion =
  `POST ugcrypto-transactions.web-sample.live/transactions/get_pending_member_promotion`

const codeParams = [
  {
    param: 'player_id',
    validate: 'optional',
    type: 'string',
    description: 'member agent id (eg. BAAAAAA0002)',
    default: ''
  },
  {
    param: 'token',
    validate: 'optional',
    type: 'string',
    description: 'token wallet (eg. BTC)',
    default: ''
  },
  {
    param: 'sign',
    validate: 'required',
    type: 'string',
    description: 'signature generate with specific keys',
    default: 'check on signature section'
  }
];

const jsonPromotionTransaction =
  `JSON{

"player_id": "BAAAAAA0002",
"sign":"signature with secret key"
};`

const successPromotionTransaction =
  `{
    "status": 1,
    "message": "Success",
    "error_code":0,
    "data":{
        "exist":1,
        "promo":[
            {
              transaction_id: "008B067ad83dd9bcf4",
              agent_id: "BAAAAAA0008B",
              user_name: "cryptostg",
              amount: 1022.3561000,
              final_amount: 1022.3561000,
              amount_crypto:  0.0100000,
              final_amount_crypto: 0.0100000,
              method_fee:  0E-7,
              type: "Credit",
              status: "Promotion",
              actions: "PROMOTION ALL GAMES",
              group_id: "0",
              rebate_id: "0",
              ref_upline: "0",
              receipt: "no_uploaded.png",
              promo_code: "ASD22",
              user_device: "H5",
              fund_method: "crypto",
              user_fund: "BTC",
              user_fund_network: "0",
              user_fund_accno: "0",
              user_fund_accname: "0",
              agent_fund_group: "crypto",
              agent_fund: "BTC"
            }
        ]
    }
}`

const invalidPromotionTransaction =
  `{
    "status":0,
    "message":"Warning : Invalid access, anonymous access will cause your IP blacklisted, please beware",
    "error_code":403,
    "data":[]
}`

const codeInstanttransaction =
  `POST  ugcrypto-transactions.web-sample.live/transactions/insert`

const phpinsertTransactionTable = [
  { param: 'transaction_id', validate: 'required', type: 'text', description: 'transaction id, a random unique id will be generate for each transaction', default: null },
  { param: 'unique_token', validate: 'required', type: 'text', description: 'unique id, a random unique id generated from the client side. to avoid duplicate submit', default: null },
  { param: 'agent_id', validate: 'required', type: 'string', description: 'member agent id (eg. BAAAAAA0002)', default: null },
  { param: 'user_name', validate: 'required', type: 'string', description: "member's user name", default: null },
  { param: 'amount', validate: 'required', type: 'decimal', description: 'amount before fees deduction / subsidi (standard calculate USD)', default: null },
  { param: 'final amount', validate: 'required', type: 'decimal', description: 'amount after fees deduction / subsidi (standard calculate USD)', default: null },
  { param: 'amount_crypto', validate: 'required', type: 'decimal', description: 'amount before fees deduction / subsidi (amount of the specific currency)', default: null },
  { param: 'final_amount_crypto', validate: 'required', type: 'decimal', description: 'amount after fees deduction / subsidi (amount of the specific currency)', default: null },
  { param: 'method_fee', validate: 'optional', type: 'decimal', description: 'fees that is charge by method. (a record)', default: 0 },
  { param: 'type', validate: 'required', type: 'text', description: 'transaction type (eg. Credit / Debit)', default: null },
  { param: 'status', validate: 'required', type: 'text', description: 'transaction status (Waiting TO / Reach TO / Promotion / Need Double Confirm / Confirmed / Rejected / Cancelled / On Cancel / Cash In / Cash Out / Transfer)', default: null },
  { param: 'actions', validate: 'required', type: 'text', description: "transaction actions (Transaction / Method2Method / Adjustment / Commission Rebate / Winlose Rebate / Referral / Company Adjustment / Bonus Credit / Promotion's name)", default: null },
  { param: 'group_id', validate: 'optional', type: 'string', description: 'group id use by promotion (eg. 0001064255841ea9a2)', default: '0' },
  { param: 'rebate_id', validate: 'optional', type: 'string', description: 'rebate id that is link to the rebate record', default: '0' },
  { param: 'ref_upline', validate: 'optional', type: 'string', description: "member's upline referral ID", default: '0' },
  { param: 'receipt', validate: 'optional', type: 'string', description: 'receipt image file name', default: '0' },
  { param: 'promo_code', validate: 'optional', type: 'string', description: 'promotion code', default: '0' },
  { param: 'user_device', validate: 'optional', type: 'string', description: 'user device that use to submit this transaction (APP / H5 / WEB )', default: '0' },
  { param: 'fund_method', validate: 'optional', type: 'string', description: 'fund method that member wants use to deposit/ member withdraw method (bank/crypto/ewallet/pulsa)', default: '0' },
  { param: 'user_fund', validate: 'optional', type: 'string', description: "member's fund method ([bank: BCA,MDR], [crypto: BTC,USDT])", default: '0' },
  { param: 'user_fund_network', validate: 'optional', type: 'string', description: "member's fund method network ([crypto: TRX, ETH]) TRX = TRC20", default: '0' },
  { param: 'user_fund_accno', validate: 'optional', type: 'string', description: "member's fund method account number / address", default: '0' },
  { param: 'user_fund_accname', validate: 'optional', type: 'string', description: "member's fund method account name", default: '0' },
  { param: 'agent_fund_group', validate: 'optional', type: 'string', description: 'fund method that agent receive deposit/ pay to member withdraw method (bank/crypto/ewallet/pulsa)', default: '0' },
  { param: 'agent_fund', validate: 'optional', type: 'string', description: "agent's fund method ([bank: BCA,MDR], [crypto: BTC,USDT])", default: '0' },
  { param: 'agent_fund_network', validate: 'optional', type: 'string', description: "agent's fund method network ([crypto: TRX, ETH]) TRX = TRC20", default: '0' },
  { param: 'agent_fund_accno', validate: 'optional', type: 'string', description: 'fund method account number that agent use', default: '0' },
  { param: 'agent_fund_accname', validate: 'optional', type: 'string', description: 'fund method account name that agent use', default: '0' },
  { param: 'invoice_no', validate: 'optional', type: 'string', description: 'invoice number from payment gateway provider', default: '0' },
  { param: 'gateway_remark', validate: 'optional', type: 'string', description: 'remark for payment gateway', default: '0' },
  { param: 'ip_country', validate: 'optional', type: 'string', description: 'transaction submited from IP country', default: '0' },
  { param: 'ip_address', validate: 'optional', type: 'string', description: 'transactions submited from IP address', default: '0' },
  { param: 'is_promo', validate: 'optional', type: 'number', description: 'promotion record determination (0 or 1)', default: 0 },
  { param: 'agent_note', validate: 'optional', type: 'string', description: 'a note from admin side', default: '0' },
  { param: 'reject_reason', validate: 'optional', type: 'string', description: 'transaction rejected reaon', default: '0' },
  { param: 'gateway', validate: 'optional', type: 'string', description: 'transaction connect to payment gateway', default: '0' },
  { param: 'withdraw_gateway', validate: 'optional', type: 'string', description: 'transaction available for withdraw with specific payment gateway', default: '0' },
  { param: 'currency', validate: 'optional', type: 'string', description: 'transaction currency', default: '0' },
  { param: 'is_new', validate: 'optional', type: 'string', description: "first time transaction ('1'=true/ '0'=false)", default: '0' },
  { param: 'high_transaction', validate: 'optional', type: 'string', description: "high transaction remark ('1'=true / '0'=false)", default: '0' },
  { param: 'sign', validate: 'required', type: 'string', description: 'signature generate with specific keys (check on signature section)', default: null }
];

const jsonInsertTransaction =
  `{
    "unique_token":"68cgge8fbd5660hhc70469",
    "group_id": null,
    "agent_id": "BAAAAAA0001",
    "user_name": "weikangtest",
    "amount": 33.0356,
    "final_amount": 33.0356,
    "amount_crypto": 0.002,
    "final_amount_crypto": 0.002,
    "method_fee": 0,
    "type": "Credit",
    "status": "In Progress",
    "actions": "Transaction",
    "receipt": "no_uploaded.png",
    "promo_code": "",
    "user_device": "H5",
    "fund_method": "crypto",
    "user_fund": "BTC",
    "user_fund_accno": "TMVb5qoBzQ5ZUkipwQMfV2FZQJDqUJQ9oE",
    "user_fund_accname": null,
    "agent_fund": "BTC",
    "agent_fund_group": "crypto",
    "agent_fund_accno": "",
    "agent_fund_accname": null,
    "invoice_no": "50a12e8fbd55ae08ce70469d4df3c5a7643ca5f551be9b4280b87f284e354ddd",
    "gateway_remark": "Pending Approve by Agent",
    "ip_country": "MY",
    "ip_address": "211.24.67.158",
    "is_promo": 0
}`

const successInsertTransaction =
  `{
    "status": 1,
    "message": "Success",
    "error_code": 0,
    "data": {
        "transaction_id": "00010645a273eea609",
        "transactions": {
            "unique_token": "68cgge8fbd5660hhc70469",
            "group_id": null,
            "agent_id": "BAAAAAA0001",
            "user_name": "weikangtest",
            "amount": 33.0356,
            "final_amount": 33.0356,
            "amount_crypto": 0.002,
            "final_amount_crypto": 0.002,
            "method_fee": 0,
            "type": "Credit",
            "status": "In Progress",
            "actions": "Transaction",
            "receipt": "no_uploaded.png",
            "promo_code": null,
            "user_device": "H5",
            "fund_method": "crypto",
            "user_fund": "BTC",
            "user_fund_accno": "TMVb5qoBzQ5ZUkipwQMfV2FZQJDqUJQ9oE",
            "user_fund_accname": null,
            "agent_fund": "BTC",
            "agent_fund_group": "crypto",
            "agent_fund_accno": null,
            "agent_fund_accname": null,
            "invoice_no": "50a12e8fbd55ae08ce70469d4df3c5a7643ca5f551be9b4280b87f284e354ddd",
            "gateway_remark": "Pending Approve by Agent",
            "ip_country": "MY",
            "ip_address": "211.24.67.158",
            "is_promo": 0
        }
    }
}`

const invalidInsertTransaction =
  `{
    "status": 1,
    "message": "Success",
    "error_code": 0,
    "data": {
        "transaction_id": "00010645a273eea609",
        "transactions": {
            "unique_token": "68cgge8fbd5660hhc70469",
            "group_id": null,
            "agent_id": "BAAAAAA0001",
            "user_name": "weikangtest",
            "amount": 33.0356,
            "final_amount": 33.0356,
            "amount_crypto": 0.002,
            "final_amount_crypto": 0.002,
            "method_fee": 0,
            "type": "Credit",
            "status": "In Progress",
            "actions": "Transaction",
            "receipt": "no_uploaded.png",
            "promo_code": null,
            "user_device": "H5",
            "fund_method": "crypto",
            "user_fund": "BTC",
            "user_fund_accno": "TMVb5qoBzQ5ZUkipwQMfV2FZQJDqUJQ9oE",
            "user_fund_accname": null,
            "agent_fund": "BTC",
            "agent_fund_group": "crypto",
            "agent_fund_accno": null,
            "agent_fund_accname": null,
            "invoice_no": "50a12e8fbd55ae08ce70469d4df3c5a7643ca5f551be9b4280b87f284e354ddd",
            "gateway_remark": "Pending Approve by Agent",
            "ip_country": "MY",
            "ip_address": "211.24.67.158",
            "is_promo": 0
        }
    }
}`

</script>
