#Simple
This crawler is simple: it get an URL download the content from there and save them.

#Usage

Example docker-compose
```yml
  crawl:
    image: froso/bitcoin-forks-crawler-simple
    build:
      context: ./simple/
    environment:
     - "CFG_JOB_0_URL=https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=1000"
     - "CFG_JOB_0_DIR=/cmc_api/"
     - "CFG_JOB_0_SUFFIX=.json"
     - "CFG_JOB_0_CRON=0 0 * * * *"
     - "CFG_JOB_1_URL=https://coinmarketcap.com/currencies/bitcoin/#markets"
     - "CFG_JOB_1_DIR=/cmc_markets/"
     - "CFG_JOB_1_SUFFIX=.html"
     - "CFG_JOB_1_CRON=0 0 * * * *"
     - "CFG_JOB_2_URL=https://www.bitcoin.de/de/btceur/market"
     - "CFG_JOB_2_DIR=/bitcoin/"
     - "CFG_JOB_2_SUFFIX=.html"
     - "CFG_JOB_2_CRON=0 0 * * * *"
    volumes:
     - ./output/simple/cmc_api:/cmc_api
     - ./output/simple/cmc_markets:/cmc_markets
     - ./output/simple/bitcoin:/bitcoin
```

You have to define crawl-jobs over the environment variables. Each job can set with the following bunch
of env-variables. A "job-env-group" can be defined with the prefix "CFG_JOB_" followed by an index
followed by the job-own-env. 

For this example we assume that we want to configure the following job:
* URL=http://example.org
* OUTPUT=/tmp/&lt;date&gt;.json
* CRON=every a half minute

So we have to set this env-variables:
* CFG_JOB_*0*_**URL**=http://example.org
* CFG_JOB_*0*_**DIR**=/tmp/
* CFG_JOB_*0*_**SUFFIX**=.json
* CFG_JOB_*0*_**CRON**=*/30 * * * * *

#Environment in detail

| Variable      | Default-Value | required | Description  |
| ------------- |:-------------:|:-------------:| ------------|
| LOG_LEVEL               | info | false | The log level |
| CFG_REQUEST_TIMEOUT     | 60000 | false | The timeout of one request in ms |
| CFG_REQUEST_REPEATSLEEP | 1000 | false | The sleep time (in ms) between repeating of failing download |
| CFG_REQUEST_MAXRETRY    | 10 | false | Maximal count of retries |
| CFG_JOB_*N*_URL         |  | true | The url to download |
| CFG_JOB_*N*_DIR         |  | true | The output dir for this job |
| CFG_JOB_*N*_CRON        |  | true | The cron string. See [Cron-Syntax](https://github.com/kelektiv/node-cron#available-cron-patterns) |
| CFG_JOB_*N*_SUFFIX      | .html | false | The suffix for output content |
