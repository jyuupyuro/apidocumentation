<template>
  <div class="mt-3">
    <b-row>
      <b-col md="12" class="text-center ">
        <!-- main content here -->
        <div class="d-flex flex-column">
          <!-- card -->
          <div class="content">
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
          <div class="content">
            <h1 class="content__title"> Get Member Promotion Transactions</h1>
            <span class="content__description">Get Pending Transaction for specific member</span>
            <span class="content__example">Link</span>
            <CodeBlock lang="typescript" :code=memberPromotion />
          </div>
          <!-- card -->
          <div class="content">
            <span class="content__example">PHP Code Param</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
import CodeBlock from '../components/common/CodeBlock.vue';

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
</script>