# Company Slug Directory

> A curated list of verified company slugs organized by ATS platform. Use these with the `companySlug` parameter to search jobs at specific companies.

**Last Updated:** 2026-06-27

---

## Usage

```bash
# Search Greenhouse jobs for Stripe
curl -X POST http://localhost:3001/api/jobs/search \
  -H 'Content-Type: application/json' \
  -d '{"companySlug": "stripe", "siteType": ["greenhouse"]}'

# Search all ATS platforms for Spotify (auto-detect)
curl -X POST http://localhost:3001/api/jobs/search \
  -H 'Content-Type: application/json' \
  -d '{"companySlug": "spotify"}'

# CLI usage
npm run cli -- search --company-slug stripe --site greenhouse
```

When `companySlug` is provided without `siteType`, all 41 ATS scrapers run concurrently and return results from whichever platform the company uses.

---

## Greenhouse

Greenhouse slugs are the subdomain used in `boards.greenhouse.io/{slug}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| AccuWeather Careers | `accuweather` | Private-Sector Weather Forecasting |
| ACI Learning | `acilearning` | IT Certification Training / Audit Education |
| Ackermann Group | `ackermanngroup` | Multi-Family / Commercial Real-Estate-Services |
| ACLU - National Office | `aclu` | Civil-Liberties Advocacy / Constitutional Litigation |
| American College of Obstetricians and Gynecologists | `acog` | Medical-Specialty Membership Society / Women's-Health Clinical Guidance |
| aCommerce | `acommerce` | Southeast-Asia E-commerce Enablement / Brand-Fulfilment |
| Academy with Community Partners | `acp` | Arizona Online Instruction Charter-School / Alternative-Curriculum K-12 Education |
| Acquia | `acquia` | Drupal-based Enterprise DXP / Open-Source-Cloud Digital Experience Platform |
| Acrisure Innovation | `acrisureinnovation` | Insurance-Brokerage Innovation Unit / AI- and Data-Driven Broker Products |
| Acryl Data (DataHub) | `acryldata` | Enterprise Metadata-Platform / Steward of Open-Source DataHub |
| Acumen | `acumen` | Impact-Investing Nonprofit / Patient-Capital Social-Enterprise Fund + Acumen Academy Leadership Development |
| Acurus Solutions Private Limited | `acurussolutions` | Healthcare Revenue-Cycle-Management (RCM) Outsourcing / U.S. Hospital + Physician-Group BPO (Bengaluru-HQ) |
| Adaptive Biotechnologies | `adaptivebiotechnologies` | Commercial Immunosequencing Platform / immunoSEQ + clonoSEQ MRD Diagnostics (Seattle-HQ, NASDAQ: ADPT) |
| Airbnb | `airbnb` | Travel / Tech |
| Spotify | `spotify` | Music / Tech |
| Discord | `discord` | Social / Tech |
| SpaceX | `spacex` | Aerospace |
| Cloudflare | `cloudflare` | Infrastructure |
| Twilio | `twilio` | Communications |
| Databricks | `databricks` | Data / AI |
| Datadog | `datadog` | Monitoring |
| MongoDB | `mongodb` | Database |
| Elastic | `elastic` | Search / Analytics |
| Snowflake | `snowflakeinc` | Data Cloud |
| Roblox | `roblox` | Gaming |
| Unity | `unity3d` | Gaming / 3D |
| Shopify | `shopify` | E-commerce |
| Canva | `canva` | Design |
| Pinterest | `pinterest` | Social / Tech |
| Lyft | `lyft` | Transportation |
| DoorDash | `doordash` | Delivery |
| Instacart | `instacart` | Grocery / Delivery |
| Snap | `snap` | Social / Tech |
| Rivian | `rivian` | Electric Vehicles |
| Lucid Motors | `lucidmotors` | Electric Vehicles |
| Block (Square) | `block` | Fintech |
| Notion | `notion` | Productivity |
| Stripe | `stripe` | Payments |
| Coinbase | `coinbase` | Crypto / Finance |
| HubSpot | `hubspot` | Marketing / CRM |
| Plaid | `plaid` | Fintech |
| 10Alabs | `10alabs` | — |
| Alixpartners | `alixpartners` | — |
| Arlosolutionsllc | `arlosolutionsllc` | — |
| Bigid | `bigid` | — |
| Cadencesolutions | `cadencesolutions` | — |
| Clevelandguardiansbops | `clevelandguardiansbops` | — |
| Danieloconnellssons | `danieloconnellssons` | — |
| Effectual | `effectual` | — |
| Fastly | `fastly` | — |
| Garnerhealth | `garnerhealth` | — |
| Guild | `guild` | — |
| Iherb | `iherb` | — |
| Juvare | `juvare` | — |
| Lightningai | `lightningai` | — |
| Meridianpartners | `meridianpartners` | — |
| Nationallifeinsurancecompany | `nationallifeinsurancecompany` | — |
| Olly | `olly` | — |
| Penninteractive | `penninteractive` | — |
| Qualia | `qualia` | — |
| Royalvet | `royalvet` | — |
| Simula | `simula` | — |
| Stemhealthcare | `stemhealthcare` | — |
| Thatlot | `thatlot` | — |
| Twitch | `twitch` | — |
| Vulcanelements | `vulcanelements` | — |
| Cresta | `cresta` | AI Contact Center |
| Samsara | `samsara` | Connected Operations / IoT |
| Sezzle | `sezzle` | BNPL Payments / Fintech |
| Shopmonkey | `shopmonkey` | Vertical-SaaS Auto-Repair-Shop POS |
| SimpliSafe | `simplisafe` | DIY Wireless Home Security |
| Symphony Communication Services | `symphony` | Institutional Encrypted Collaboration |
| Tatari | `tatari` | Streaming-and-Linear-TV Connected Attribution |
| Textio | `textio` | Augmented-Writing / HR-Language-AI |
| Nubank | `nubank` | Fintech / Neobank |
| CookUnity | `cookunity` | Food-tech / Meal delivery |
| Oklo | `oklo` | Energy / Advanced nuclear |
| Fetch | `fetch` | Consumer / Loyalty & rewards |
| Zocdoc | `zocdoc` | Health-tech / Marketplace |
| Thunes | `thunes` | Fintech / Payments |
| Strive Health | `strivehealth` | Health-tech / Value-based care |
| Home Chef | `homechef` | Food-tech / Meal kits |
| Pacific Fusion | `pacificfusion` | Energy / Fusion |
| Otter.ai | `otterai` | AI / Productivity |
| Observe.AI | `observeai` | AI / Contact center |
| Honor | `honor` | Health-tech / Home care |
| Weee! | `weee` | E-commerce / Grocery |
| Narvar | `narvar` | E-commerce / Logistics SaaS |
| Transcarent | `transcarent` | Health-tech / Navigation |
| Watershed Informatics | `watershed` | Bio-tech / Computational biology |
| Quaise Energy | `quaise` | Energy / Geothermal |
| Upside | `upside` | Consumer / Retail tech |
| Hungryroot | `hungryroot` | Food-tech / Grocery |
| Nayya | `nayya` | Insurtech / Benefits |
| Caribou Financial | `caribou` | Fintech / Lending |
| HealthJoy | `healthjoy` | Health-tech / Benefits |
| Papa | `papa` | Health-tech / Care |
| AIR COMPANY | `aircompany` | Climate Tech / Carbon Conversion & Synthetic Fuels |
| Arbor Energy | `arborenergy` | Climate Tech / Carbon-Negative Power (BECCS) |
| Aurora Innovation | `aurorainnovation` | Autonomous Vehicles / Self-Driving Trucking |
| EarnIn | `earnin` | Fintech / Earned-Wage Access |
| Faraday Future | `faradayfuture` | Automotive / Electric Vehicles |
| FastSpring | `fastspring` | Fintech / Merchant-of-Record Commerce & Subscription Billing |
| Gravity R&D | `gravity` | AdTech / Recommendation & Personalization Software |
| Runwise | `runwise` | Climate Tech / Smart Building Energy Management |
| SES AI | `sesai` | Battery Technology / EV Energy Storage (Li-Metal) |
| Solaris | `solarisbank` | Fintech / Banking-as-a-Service (Embedded Finance) |
| Stack AV | `stackav` | Autonomous Vehicles / Self-Driving Trucking |
| tastytrade | `tastytrade` | Fintech / Online Brokerage (Options & Futures Trading) |
| Torc Robotics | `torcrobotics` | Autonomous Vehicles / Self-Driving Trucking |
| Ursa Major | `ursamajor` | Aerospace & Defense / Rocket Propulsion |
| Via | `via` | TransitTech / Mobility Software (SaaS + Operations) |
| Zuora | `zuora` | Enterprise SaaS / Subscription Billing & Quote-to-Cash |

---

## Workday

Workday slugs follow the pattern `{company}:{tenant}:{careerSite}`. The format varies by deployment.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Salesforce | `salesforce:12:External` | CRM / Cloud |
| Intel | `intel:1:External` | Semiconductors |
| Cisco | `cisco:5:Cisco_External` | Networking |
| Adobe | `adobe:5:External` | Software |
| Epic Games | `epicgames:5:EpicExternalSite` | Gaming |
| Warner Bros | `warnerbros:5:WarnerBros` | Entertainment |
| Disney | `disney:5:disneycareer` | Entertainment |
| Deloitte | `deloitte:5:DeloitteUSCareers` | Consulting |
| McKinsey | `mckinsey:5:External` | Consulting |
| Tesla | `tesla:5:Tesla` | EV / Energy |
| Qualcomm | `qualcomm:5:External` | Semiconductors |
| AMD | `amd:5:External` | Semiconductors |
| Broadcom | `broadcom:5:External` | Semiconductors |
| Samsung | `samsung:3:Global` | Electronics |
| Siemens | `siemens:3:External` | Industrial |
| Lockheed Martin | `lmco:5:LMCareers` | Aerospace / Defense |

---

## Lever

Lever slugs are the subdomain at `jobs.lever.co/{slug}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Palantir | `palantir` | Data Analytics / Defense |
| Netflix | `netflix` | Streaming |
| Atlassian | `atlassian` | Developer Tools |
| Eventbrite | `eventbrite` | Events |
| KPMG | `kpmg` | Consulting |
| 100Ms | `100ms` | — |
| Allegiantair | `allegiantair` | — |
| Asapp 2 | `asapp-2` | — |
| Blablacar | `blablacar` | — |
| Cartrawler | `cartrawler` | — |
| Coinmarketcap | `coinmarketcap` | — |
| Deepsky | `deepsky` | — |
| Ekohealth | `ekohealth` | — |
| Findhelp | `findhelp` | — |
| Glass Health Inc | `glass-health-inc` | — |
| Hivemapper | `hivemapper` | — |
| Jamcity | `jamcity` | — |
| Lamudi | `lamudi` | — |
| Madhappy | `madhappy` | — |
| Monkshillventures | `monkshillventures` | — |
| Numeris | `numeris` | — |
| Peoplegrove | `peoplegrove` | — |
| Princesspolly | `princesspolly` | — |
| Redwoodcu | `redwoodcu` | — |
| Sandboxvr | `sandboxvr` | — |
| Snappr | `snappr` | — |
| Sure | `sure` | — |
| Thrivecausemetics | `thrivecausemetics` | — |
| Unusual | `unusual` | — |
| Waveapps | `waveapps` | — |

---

## Ashby

Ashby slugs are used in `jobs.ashbyhq.com/{slug}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| OpenAI | `openai` | AI |
| Ramp | `ramp` | Fintech |
| Figma | `figma` | Design |
| Linear | `linear` | Developer Tools |
| Vercel | `vercel` | Developer Tools |
| Plaid | `plaid` | Fintech |
| Retool | `retool` | Developer Tools |
| Notion | `notion` | Productivity |

---

## Taleo

Taleo slugs follow the pattern `{company}:{careerSection}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Oracle | `oracle:ORACLEEXT` | Enterprise Software |
| JPMorgan Chase | `jpmorganchase:ExternalCareerSite` | Banking |
| PepsiCo | `pepsico:ExternalSite` | Consumer Goods |

---

## iCIMS

iCIMS slugs are typically company identifiers found in the career page URL.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| EA (Electronic Arts) | `ea` | Gaming |
| Take-Two Interactive | `take2games` | Gaming |
| Goldman Sachs | `goldmansachs` | Banking |
| UPS | `ups` | Logistics |

---

## SmartRecruiters

SmartRecruiters slugs are company identifiers at `jobs.smartrecruiters.com/{slug}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Visa | `Visa` | Payments |
| Bosch | `BoschGroup` | Industrial / Tech |
| Equinox | `Equinox` | Fitness |
| Skechers | `Skechers` | Footwear |
| 10Minuteschool | `10minuteschool` | — |
| Ajua | `ajua` | — |
| Artelia | `artelia` | — |
| Blueally | `blueally` | — |
| Check24 | `check24` | — |
| Continental | `continental` | — |
| Deloittenordic | `deloittenordic` | — |
| Elizabethglaserpediatricaidsfoundation3 | `elizabethglaserpediatricaidsfoundation3` | — |
| Firstdrivelogisticsinc | `firstdrivelogisticsinc` | — |
| Ginastechjobs | `ginastechjobs` | — |
| Hexagroup | `hexagroup` | — |
| Ingramcontentgroup1 | `ingramcontentgroup1` | — |
| Kanadeviainova | `kanadeviainova` | — |
| Liftedanupworkcompany | `liftedanupworkcompany` | — |
| Mcwaneinc | `mcwaneinc` | — |
| Mytime | `mytime` | — |
| Nxtkeycorporation | `nxtkeycorporation` | — |
| Primark | `primark` | — |
| Renaud Bray | `renaud-bray` | — |
| Samsungena | `samsungena` | — |
| Siloamcareers | `siloamcareers` | — |
| Sterlingenterprisellc | `sterlingenterprisellc` | — |
| Telefonicatech | `telefonicatech` | — |
| Trustonic | `trustonic` | — |
| Virtuaadvancedsolution | `virtuaadvancedsolution` | — |

---

## SuccessFactors

SuccessFactors (SAP) slugs vary by company deployment.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| SAP | `sap:SAP` | Enterprise Software |
| Accenture | `accenture:Accenture` | Consulting |
| Siemens | `siemens:SiemensExternal` | Industrial |

---

## Workable

Workable slugs are the company subdomain at `apply.workable.com/{slug}`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Sephora | `sephora` | Retail / Beauty |
| Forbes | `forbes` | Media |
| Our Home | `-our-home` | — |
| Alliedteam | `alliedteam` | — |
| Auprosports | `auprosports` | — |
| Blitzoo Games | `blitzoo-games` | — |
| Cdr Companies | `cdr-companies` | — |
| Constructor 1 | `constructor-1` | — |
| Deep Science Ventures | `deep-science-ventures` | — |
| Elevated Hiring | `elevated-hiring` | — |
| Fergus | `fergus` | — |
| Gamigo | `gamigo` | — |
| Healthsnap | `healthsnap` | — |
| Infini Capital Management Limited | `infini-capital-management-limited` | — |
| Karohealthcare | `karohealthcare` | — |
| Lingoace | `lingoace` | — |
| Mention Me Ltd | `mention-me-ltd` | — |
| Nawy Real Estate | `nawy-real-estate` | — |
| Optibpo | `optibpo` | — |
| Pinnacle Middle East | `pinnacle-middle-east` | — |
| Radley Yeldar | `radley-yeldar` | — |
| Samsung Sds America | `samsung-sds-america` | — |
| Snowed In Studios 3 | `snowed-in-studios-3` | — |
| Switchboard Hiring 1 | `switchboard-hiring-1` | — |
| Thetsuigroup | `thetsuigroup` | — |
| University Of Mount Saint Vincent | `university-of-mount-saint-vincent` | — |
| Wearenoble | `wearenoble` | — |

---

## BambooHR

BambooHR slugs are the subdomain at `{slug}.bamboohr.com/careers`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| StackOverflow | `stackoverflow` | Developer Community |
| Zapier | `zapier` | Automation |
| Buffer | `buffer` | Social Media |

---

## Recruitee

Recruitee slugs are the subdomain at `{slug}.recruitee.com`.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Toggl | `toggl` | Productivity |
| Hostinger | `hostinger` | Web Hosting |

---

## Manatal

Manatal slugs are the career page identifier. No auth required.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Manatal | `manatal` | HR Tech |

---

## Paylocity

Paylocity uses GUID identifiers found in the company's Paylocity career page URL.

| Company | Slug (GUID) | Industry |
| ------- | ----------- | -------- |
| (Discover from company career page URL pattern: `recruiting.paylocity.com/Recruiting/Jobs/Details/{guid}`) | | |

---

## Phenom

Phenom slugs are the company domain used in their Phenom-powered career site.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Boeing | `boeing` | Aerospace |
| Hilton | `hilton` | Hospitality |
| Nestle | `nestle` | Consumer Goods |
| Comcast | `comcast` | Telecom |
| Verizon | `verizon` | Telecom |

---

## Bullhorn

Bullhorn slugs follow the pattern `{cls}:{corpToken}` (found in career portal JavaScript).

| Company | Slug | Industry |
| ------- | ---- | -------- |
| (Discover from staffing agency career portal source code) | | |

## Avature

Avature slugs are the subdomain used in `<slug>.avature.net` (default-tenant pattern). For custom-domain tenants like `careers.ibm.com`, pass the full URL via `companyUrl` instead of a slug. Slugs sampled from the upstream `OTHERS/Ats-scrapers/avature/avature_companies.csv` reference list.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Bloomberg | `bloomberg` | Financial Data |
| KPMG Ireland | `kpmgireland` | Professional Services |
| Deloitte (PNG) | `deloittepng` | Professional Services |
| Maximus | `maximus` | Government Services |
| Plante Moran | `plantemoran` | Accounting |
| NVA (Vet Group) | `nva` | Veterinary |
| Delta | `delta` | Aviation |
| One800Flowers | `one800flowers` | Retail / E-commerce |
| Ally | `ally` | Banking / Finance |
| Astellas | `astellas` | Pharmaceuticals |
| Bupa ANZ | `bupaanz` | Healthcare / Insurance |
| CBRE Global | `cbreglobal` | Real Estate |
| GPS Hospitality | `gpshospitality` | Restaurants / Franchising |
| Monadelphous | `monadelphous` | Engineering / Construction |
| Resource Bank | `resourcebank` | Financial Services |

## Gem

Gem boards are hosted at `jobs.gem.com/<slug>`. Slugs sampled from the upstream `OTHERS/Ats-scrapers/gem/gem_companies.csv` reference list — the corpus skews towards venture-backed and AI-first companies.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Accel | `accel` | Venture Capital |
| 43North | `43north` | Startup Accelerator |
| 8020 Consulting | `8020-consulting` | Consulting |
| A16Z Speedrun | `a16z-speedrun` | Venture Capital |
| Acre | `acre` | Climate / Sustainability |
| Agora | `agora` | Real Estate Tech |
| Airframe | `airframe` | Developer Tools |
| Alex and Ani | `alex-and-ani` | Retail / Jewelry |
| 11X AI | `11x-ai` | AI / SaaS |
| 10X Construction AI | `10xconstruction-ai` | Construction Tech |
| Aarden AI | `aarden-ai` | AI / Sales |
| Acely | `acely` | Education Tech |
| Afterquery | `afterquery` | AI / Data |
| Agenta AI | `agenta-ai` | LLM Ops |

## Join.com

Join.com career pages live at `join.com/companies/<slug>`. Slugs sampled from the upstream `OTHERS/Ats-scrapers/join_com/join_companies.csv` reference list — the corpus skews towards European (especially DACH) tech and consumer brands.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Awork | `awork` | Productivity / SaaS |
| Alteos | `alteos` | Insurance Tech |
| Aitad | `aitad` | AI / Data |
| Capitalmind | `capitalmind` | Asset Management |
| Brandcircle | `brandcircle` | Marketing / E-commerce |
| Cinnamood | `cinnamood` | Food / Hospitality |
| Brandneo | `brandneo` | Marketing |
| Brunathelabel | `brunathelabel` | Fashion / Apparel |
| Allunity | `allunity` | Crypto / DeFi |
| Citychickennhas490 | `citychickennhas490` | Restaurants / QSR |
| Caiz | `caiz` | Crypto / Fintech |
| Cannaleo | `cannaleo` | Cannabis Retail |
| Big City Beats | `bigcitybeats` | Music / Events |
| AXSOL | `axsol` | Power / Energy Storage |
| Career Sancovia | `career-sancovia` | Career Services |

## Oracle HCM Cloud

Oracle slugs follow the `<subdomain>-<region>` form (e.g. `eeho-us2`) — they expand into the canonical career-portal URL `https://<subdomain>.fa.<region>.oraclecloud.com`. For multi-segment subdomains like `careers-portal-us2`, the resolver splits on the LAST `-` (`subdomain=careers-portal`, `region=us2`). Operators with a non-default `siteNumber` finder parameter pass it via `ScraperInputDto.siteNumber` (defaults to `'CX_45001'` per Q-030). Slugs sampled from the upstream `OTHERS/Ats-scrapers/oracle/oracle_companies.csv` reference list — the corpus is dominated by enterprises across financial services, retail, healthcare, and government.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Oracle | `eeho-us2` | Enterprise Software |
| City of Atlanta | `ehxr-us2` | Government |
| TTX | `ejjc-us6` | Rail / Logistics |
| CooperCompanies | `hcjy-us2` | Healthcare / MedTech |
| EXP | `elcn-us2` | Engineering Consulting |
| Kroll | `hcxs-us2` | Risk / Financial Advisory |
| Macy's | `ebwh-us2` | Retail |
| Westpac Group | `ebuu-ap1` | Banking |
| DTCC | `ebxr-us2` | Financial Infrastructure |
| Hologic | `ebwb-us2` | Medical Devices |
| Mountaire | `ebtg-us2` | Food / Poultry |
| Mouser | `eabw-us2` | Electronics Distribution |
| Ricoh | `cbha-us2` | Imaging / Technology |
| Galliford Try | `cbct-em2` | Construction |
| Apollo Hospitals | `cgs-ap2` | Healthcare |

## Mercor

Mercor is a **catalogue-wide** scraper — the explore-page endpoint returns the entire public listing set in one GET, with no per-company URL segmentation. The "slug" passed via `ScraperInputDto.companySlug` is therefore a **case-insensitive substring filter** on `companyName` rather than a URL-keyed identifier. Empty slug returns the full catalogue (capped by `resultsWanted`, default 100); populated slug narrows the result via `companyName.toLowerCase().includes(slug.toLowerCase())`. Sample employers below are taken from the explore-page corpus at time of writing — Mercor's catalogue is fluid, so the list evolves as companies post and close roles.

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Stripe | `stripe` | Payments |
| OpenAI | `openai` | AI / Foundation Models |
| Anthropic | `anthropic` | AI / Foundation Models |
| Notion | `notion` | Productivity SaaS |
| Airbnb | `airbnb` | Travel / Marketplace |
| Figma | `figma` | Design Tools |
| Vercel | `vercel` | Developer Infrastructure |
| Linear | `linear` | Productivity / DevTools |
| Discord | `discord` | Social / Communication |
| Coinbase | `coinbase` | Crypto / Finance |
| Plaid | `plaid` | Fintech / Open Banking |
| Ramp | `ramp` | Fintech / Spend Management |

## Tesla

Tesla is a **single-tenant** scraper — `companyUrl` and `companySlug` are both ignored; the service always targets `https://www.tesla.com/careers/search/`. Operators don't pass a slug; the single canonical entry below is documented for symmetry with the other plugins and for the directory's auto-discovery tooling. Operators control output volume via `resultsWanted` (cap on listings) and `descriptionDepth` (per-job detail-fetch budget — `'board'` skips details, `'detail-25'` default caps at 25 follow-ups, `'detail-all'` fetches every job).

| Company | Slug | Industry |
| ------- | ---- | -------- |
| Tesla | `tesla` | Electric Vehicles / Energy |
| Upstart | `upstart` | Fintech / AI Lending |
| Tamara | `tamara` | Fintech / BNPL |
| TrueLayer | `truelayer` | Fintech / Open Banking |
| Public | `public` | Fintech / Retail Investing |
| Paystack | `paystack` | Fintech / Payments |
| Moniepoint | `moniepoint` | Fintech / Business Banking |
| Thrive Market | `thrivemarket` | E-commerce / Online Grocery |
| Form3 | `form3` | Fintech / Payments Infrastructure |
| Marvel Fusion | `marvelfusion` | Energy / Fusion |
| Kairos Power | `kairospower` | Energy / Advanced Nuclear |
| Wolt | `wolt` | Food Delivery / Local Commerce |
| Redwood Materials | `redwoodmaterials` | Energy / Battery Materials |
| Group14 Technologies | `group14` | Energy / Battery Materials |
| Carbon | `carbon` | Manufacturing / Additive Manufacturing |
| Forward | `forward` | Digital Health / Primary Care |
| Tia | `tia` | Digital Health / Women’s Health |
| Headway | `headway` | Digital Health / Mental Health |
| Talkspace | `talkspace` | Digital Health / Mental Health |
| Octave | `octave` | Digital Health / Mental Health |
| Freenome | `freenome` | Biotech / Diagnostics |
| Natera | `natera` | Biotech / Genetic Diagnostics |
| Generate Biomedicines | `generatebiomedicines` | Biotech / AI Drug Discovery |
| Oura | `oura` | Consumer Health Hardware |
| Carvana | `carvana` | E-commerce / Auto Retail |
| unybrands | `unybrands` | E-commerce / Brand Aggregator |
| Yotpo | `yotpo` | MarTech / E-commerce |
| TaxBit | `taxbit` | Fintech / Crypto Tax |
| Culture Amp | `cultureamp` | HR Tech / People Analytics |
| Energage | `energage` | HR Tech / Employee Engagement |
| Veriff | `veriff` | Identity / KYC |
| Thoropass | `thoropass` | Security / Compliance |
| Endor Labs | `endorlabs` | Security / AppSec |
| Cybereason | `cybereason` | Security / Endpoint |
| Tanium | `tanium` | Security / Endpoint Management |
| Expel | `expel` | Security / MDR |
| Figure | `figureai` | Humanoid Robotics / AI |
| Slice | `slice` | SMB Fintech / Restaurant Technology |
| Chowbus | `chowbus` | Restaurant Technology / Food Delivery |
| TabaPay | `tabapay` | Payments / Fintech Infrastructure |
| PathAI | `pathai` | Healthcare AI / Digital Pathology |
| Found | `found` | SMB Fintech / Business Banking |
| Parsley Health | `parsleyhealth` | Healthcare / Telehealth |
| Neuralink | `neuralink` | Neurotechnology / Brain-Computer Interface |
| CLEAR | `clear` | Identity / Biometric Security |

The OPTIONAL `source-tesla-playwright` companion plugin is opt-in (per Q-028 / FR-13) — operators must manually import `TeslaPlaywrightModule` AND install `playwright` (`npm install playwright && npx playwright install chromium`) to enable the Akamai-bypass path. Both plugins emit jobs against the same single `tesla` slug; the dedup engine collapses cross-plugin duplicates by `externalId` per Spec 003 / FR-3.

---

## Tips for Finding Company Slugs

### Greenhouse
Visit `boards.greenhouse.io/{company-name}` or check the company's career page source for `greenhouse.io` links.

### Lever
Visit `jobs.lever.co/{company-name}` or check career page source for `lever.co` links.

### Workday
Look at the company's career page URL — it typically contains `{company}.wd{N}.myworkdayjobs.com`.

### Ashby
Visit `jobs.ashbyhq.com/{company-name}` or check the career page source.

### Taleo
Check the career page URL for `taleo.net` — the slug is derived from the company and career section identifiers.

### iCIMS
Check the career page URL for `icims.com` — look for the company portal identifier.

### Phenom
Check if the company's career site uses `jobs.{company}.com` — Phenom-powered sites have a consistent API pattern.

### Avature
Check the career page URL for `*.avature.net` (default tenant) — the slug is the leftmost subdomain. For custom-domain tenants (e.g. `careers.ibm.com`), pass the full URL via the `companyUrl` input override; the plugin handles both.

### Gem
Visit `jobs.gem.com/{slug}` directly. The slug appears in the URL path; multi-word company names use hyphens (e.g. `alex-and-ani`).

### Join.com
Visit `join.com/companies/{slug}`. The slug is the URL path segment after `/companies/`. The plugin then issues a public-API call to fetch the numeric `companyId` automatically.

### General Strategy
1. Go to the company's career page
2. View page source (Ctrl+U)
3. Search for ATS platform domains (greenhouse.io, lever.co, ashbyhq.com, etc.)
4. Extract the slug from the URL pattern
