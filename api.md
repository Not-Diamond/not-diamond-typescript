# NotDiamond

Types:

- <code><a href="./src/resources/top-level.ts">RetrieveRootResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieveRoot</a>() -> RetrieveRootResponse</code>

# ModelRouter

Types:

- <code><a href="./src/resources/model-router.ts">ModelRouterCheckHealthResponse</a></code>
- <code><a href="./src/resources/model-router.ts">ModelRouterSelectModelResponse</a></code>
- <code><a href="./src/resources/model-router.ts">ModelRouterSelectOpenHandsResponse</a></code>

Methods:

- <code title="get /v2/modelRouter/health">client.modelRouter.<a href="./src/resources/model-router.ts">checkHealth</a>() -> unknown</code>
- <code title="post /v2/modelRouter/modelSelect">client.modelRouter.<a href="./src/resources/model-router.ts">selectModel</a>({ ...params }) -> unknown</code>
- <code title="post /v2/modelRouter/openHandsRouter">client.modelRouter.<a href="./src/resources/model-router.ts">selectOpenHands</a>({ ...params }) -> unknown</code>

# Evaluations

Types:

- <code><a href="./src/resources/evaluations.ts">EvaluationUpdateModelStateResponse</a></code>

Methods:

- <code title="post /v2/evaluations/updateModelState">client.evaluations.<a href="./src/resources/evaluations.ts">updateModelState</a>({ ...params }) -> unknown</code>

# Report

Types:

- <code><a href="./src/resources/report/report.ts">ReportEvaluateHallucinationResponse</a></code>

Methods:

- <code title="post /v2/report/hallucination">client.report.<a href="./src/resources/report/report.ts">evaluateHallucination</a>({ ...params }) -> unknown</code>

## Metrics

Types:

- <code><a href="./src/resources/report/metrics.ts">ArenaFeedback</a></code>
- <code><a href="./src/resources/report/metrics.ts">FeedbackReport</a></code>
- <code><a href="./src/resources/report/metrics.ts">RegenerationFeedback</a></code>
- <code><a href="./src/resources/report/metrics.ts">RequestProvider</a></code>
- <code><a href="./src/resources/report/metrics.ts">ThumbsUpDownFeedback</a></code>
- <code><a href="./src/resources/report/metrics.ts">MetricReportFeedbackResponse</a></code>
- <code><a href="./src/resources/report/metrics.ts">MetricReportFrontendArenaChoiceResponse</a></code>
- <code><a href="./src/resources/report/metrics.ts">MetricReportFrontendRegeneratedResponse</a></code>
- <code><a href="./src/resources/report/metrics.ts">MetricReportFrontendThumbsResponse</a></code>
- <code><a href="./src/resources/report/metrics.ts">MetricReportLatencyResponse</a></code>

Methods:

- <code title="post /v2/report/metrics/feedback">client.report.metrics.<a href="./src/resources/report/metrics.ts">reportFeedback</a>({ ...params }) -> unknown</code>
- <code title="post /v2/report/metrics/frontendArenaChoice">client.report.metrics.<a href="./src/resources/report/metrics.ts">reportFrontendArenaChoice</a>({ ...params }) -> unknown</code>
- <code title="post /v2/report/metrics/frontendRegenerated">client.report.metrics.<a href="./src/resources/report/metrics.ts">reportFrontendRegenerated</a>({ ...params }) -> unknown</code>
- <code title="post /v2/report/metrics/frontendThumbsUpDown">client.report.metrics.<a href="./src/resources/report/metrics.ts">reportFrontendThumbs</a>({ ...params }) -> unknown</code>
- <code title="post /v2/report/metrics/latency">client.report.metrics.<a href="./src/resources/report/metrics.ts">reportLatency</a>({ ...params }) -> unknown</code>

## Usage

Types:

- <code><a href="./src/resources/report/usage.ts">UsageReportLlmCostsResponse</a></code>
- <code><a href="./src/resources/report/usage.ts">UsageReportUsageResponse</a></code>
- <code><a href="./src/resources/report/usage.ts">UsageTestLlmReportingResponse</a></code>

Methods:

- <code title="post /v2/report/usage/reportLLMCosts">client.report.usage.<a href="./src/resources/report/usage.ts">reportLlmCosts</a>({ ...params }) -> unknown</code>
- <code title="post /v2/report/usage/reportUsage">client.report.usage.<a href="./src/resources/report/usage.ts">reportUsage</a>({ ...params }) -> unknown</code>
- <code title="get /v2/report/usage/testLLMReporting">client.report.usage.<a href="./src/resources/report/usage.ts">testLlmReporting</a>({ ...params }) -> unknown</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">PreferenceCreateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceCreateUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceRetrieveUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceRetrieveUserPreferenceByIDResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateUserPreferenceResponse</a></code>

Methods:

- <code title="post /v2/preferences/preferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/update">client.preferences.<a href="./src/resources/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/preferenceDelete">client.preferences.<a href="./src/resources/preferences.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">createUserPreference</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">deleteUserPreference</a>(preferenceID) -> unknown</code>
- <code title="get /v2/preferences/{user_id}">client.preferences.<a href="./src/resources/preferences.ts">retrieveUserPreference</a>(userID, { ...params }) -> unknown</code>
- <code title="get /v2/preferences/{user_id}/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">retrieveUserPreferenceByID</a>(preferenceID, { ...params }) -> unknown</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">updateUserPreference</a>({ ...params }) -> unknown</code>

# Proxy

Types:

- <code><a href="./src/resources/proxy/proxy.ts">ProxyRetrieveAuthResponse</a></code>
- <code><a href="./src/resources/proxy/proxy.ts">ProxyRetrieveSecretsResponse</a></code>

Methods:

- <code title="get /v2/proxy/auth">client.proxy.<a href="./src/resources/proxy/proxy.ts">retrieveAuth</a>() -> unknown</code>
- <code title="get /v2/proxy/secrets/{user_id}">client.proxy.<a href="./src/resources/proxy/proxy.ts">retrieveSecrets</a>(userID, { ...params }) -> unknown</code>

## Secret

Types:

- <code><a href="./src/resources/proxy/secret.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/proxy/secret.ts">SecretUpsertResponse</a></code>

Methods:

- <code title="delete /v2/proxy/secret/delete/{user_id}/{provider}">client.proxy.secret.<a href="./src/resources/proxy/secret.ts">delete</a>(provider, { ...params }) -> unknown</code>
- <code title="post /v2/proxy/secret">client.proxy.secret.<a href="./src/resources/proxy/secret.ts">upsert</a>({ ...params }) -> unknown</code>

# Prompt

Types:

- <code><a href="./src/resources/prompt.ts">AdaptationRunResults</a></code>
- <code><a href="./src/resources/prompt.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt.ts">PromptAdaptResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptGetAdaptRunsResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptGetAdaptStatusResponse</a></code>

Methods:

- <code title="post /v2/prompt/adapt">client.prompt.<a href="./src/resources/prompt.ts">adapt</a>({ ...params }) -> PromptAdaptResponse</code>
- <code title="get /v2/prompt/adaptResults/{adaptation_run_id}">client.prompt.<a href="./src/resources/prompt.ts">getAdaptResults</a>(adaptationRunID) -> AdaptationRunResults</code>
- <code title="get /v2/prompt/frontendAdaptRunResults/{user_id}/{adaptation_run_id}">client.prompt.<a href="./src/resources/prompt.ts">getAdaptRunResults</a>(adaptationRunID, { ...params }) -> AdaptationRunResults</code>
- <code title="get /v2/prompt/frontendAdaptRuns/{user_id}">client.prompt.<a href="./src/resources/prompt.ts">getAdaptRuns</a>(userID, { ...params }) -> PromptGetAdaptRunsResponse</code>
- <code title="get /v2/prompt/adaptStatus/{adaptation_run_id}">client.prompt.<a href="./src/resources/prompt.ts">getAdaptStatus</a>(adaptationRunID) -> PromptGetAdaptStatusResponse</code>

# Pzn

Types:

- <code><a href="./src/resources/pzn.ts">PznCreateSurveyResponseResponse</a></code>
- <code><a href="./src/resources/pzn.ts">PznTrainCustomRouterResponse</a></code>

Methods:

- <code title="post /v2/pzn/surveyResponse">client.pzn.<a href="./src/resources/pzn.ts">createSurveyResponse</a>({ ...params }) -> unknown</code>
- <code title="post /v2/pzn/trainCustomRouter">client.pzn.<a href="./src/resources/pzn.ts">trainCustomRouter</a>({ ...params }) -> unknown</code>

# Chat

Types:

- <code><a href="./src/resources/chat/chat.ts">ChatSelectModelResponse</a></code>

Methods:

- <code title="post /v2/chat/modelSelect">client.chat.<a href="./src/resources/chat/chat.ts">selectModel</a>({ ...params }) -> unknown</code>

## Preferences

Types:

- <code><a href="./src/resources/chat/preferences.ts">PreferenceCreateResponse</a></code>
- <code><a href="./src/resources/chat/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/chat/preferences.ts">PreferenceDeleteResponse</a></code>

Methods:

- <code title="post /v2/chat/preferences/preferenceCreate">client.chat.preferences.<a href="./src/resources/chat/preferences.ts">create</a>({ ...params }) -> unknown</code>
- <code title="put /v2/chat/preferences/update">client.chat.preferences.<a href="./src/resources/chat/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/chat/preferences/preferenceDelete/{preference_id}">client.chat.preferences.<a href="./src/resources/chat/preferences.ts">delete</a>(preferenceID) -> unknown</code>

## Report

Types:

- <code><a href="./src/resources/chat/report.ts">ReportReportRegeneratedResponse</a></code>
- <code><a href="./src/resources/chat/report.ts">ReportReportThumbsResponse</a></code>

Methods:

- <code title="post /v2/chat/report/regenerated">client.chat.report.<a href="./src/resources/chat/report.ts">reportRegenerated</a>({ ...params }) -> unknown</code>
- <code title="post /v2/chat/report/thumbsUpDown">client.chat.report.<a href="./src/resources/chat/report.ts">reportThumbs</a>({ ...params }) -> unknown</code>

## Arena

Types:

- <code><a href="./src/resources/chat/arena.ts">ArenaCreateChoiceResponse</a></code>
- <code><a href="./src/resources/chat/arena.ts">ArenaCreateModelsResponse</a></code>

Methods:

- <code title="post /v2/chat/arena/arenaChoice">client.chat.arena.<a href="./src/resources/chat/arena.ts">createChoice</a>({ ...params }) -> unknown</code>
- <code title="post /v2/chat/arena/arenaModels">client.chat.arena.<a href="./src/resources/chat/arena.ts">createModels</a>({ ...params }) -> unknown</code>

# Tt

Types:

- <code><a href="./src/resources/tt.ts">TtTranslateResponse</a></code>

Methods:

- <code title="post /v2/TT/translate">client.tt.<a href="./src/resources/tt.ts">translate</a>({ ...params }) -> unknown</code>

# Semihuman

Types:

- <code><a href="./src/resources/semihuman.ts">SemihumanRouteResponse</a></code>

Methods:

- <code title="post /v2/semihuman/modelSelect">client.semihuman.<a href="./src/resources/semihuman.ts">route</a>({ ...params }) -> SemihumanRouteResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyRetrieveResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="post /v2/api-keys/">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /v2/api-keys/{user_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">retrieve</a>(userID, { ...params }) -> unknown</code>
- <code title="patch /v2/api-keys/">client.apiKeys.<a href="./src/resources/api-keys.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/api-keys/{user_id}/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyID, { ...params }) -> unknown</code>

# LlmUsage

Types:

- <code><a href="./src/resources/llm-usage.ts">LlmUsage</a></code>
- <code><a href="./src/resources/llm-usage.ts">UsageSummary</a></code>
- <code><a href="./src/resources/llm-usage.ts">LlmUsageRetrieveResponse</a></code>
- <code><a href="./src/resources/llm-usage.ts">LlmUsageRetrieveDailyResponse</a></code>
- <code><a href="./src/resources/llm-usage.ts">LlmUsageRetrieveMonthlyResponse</a></code>

Methods:

- <code title="get /v1/llm-usage">client.llmUsage.<a href="./src/resources/llm-usage.ts">retrieve</a>({ ...params }) -> LlmUsageRetrieveResponse</code>
- <code title="get /v1/llm-usage/daily">client.llmUsage.<a href="./src/resources/llm-usage.ts">retrieveDaily</a>({ ...params }) -> LlmUsageRetrieveDailyResponse</code>
- <code title="get /v1/llm-usage/monthly">client.llmUsage.<a href="./src/resources/llm-usage.ts">retrieveMonthly</a>({ ...params }) -> LlmUsageRetrieveMonthlyResponse</code>
- <code title="get /v1/llm-usage/summary">client.llmUsage.<a href="./src/resources/llm-usage.ts">retrieveSummary</a>({ ...params }) -> UsageSummary</code>

# AdaptationRuns

Types:

- <code><a href="./src/resources/adaptation-runs.ts">AdaptationRunRetrieveCostsResponse</a></code>

Methods:

- <code title="get /v1/adaptation-runs/{adaptation_run_id}/costs">client.adaptationRuns.<a href="./src/resources/adaptation-runs.ts">retrieveCosts</a>(adaptationRunID) -> AdaptationRunRetrieveCostsResponse</code>

# Admin

## LlmUsage

Types:

- <code><a href="./src/resources/admin/llm-usage.ts">LlmUsageRetrieveDailyResponse</a></code>

Methods:

- <code title="get /v1/admin/llm-usage/daily">client.admin.llmUsage.<a href="./src/resources/admin/llm-usage.ts">retrieveDaily</a>({ ...params }) -> LlmUsageRetrieveDailyResponse</code>
- <code title="get /v1/admin/llm-usage/summary">client.admin.llmUsage.<a href="./src/resources/admin/llm-usage.ts">retrieveSummary</a>({ ...params }) -> UsageSummary</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# ErrorDebug

Types:

- <code><a href="./src/resources/error-debug.ts">ErrorDebugTriggerErrorResponse</a></code>

Methods:

- <code title="get /error-debug">client.errorDebug.<a href="./src/resources/error-debug.ts">triggerError</a>() -> unknown</code>

# PosthogDebug

Types:

- <code><a href="./src/resources/posthog-debug.ts">PosthogDebugTriggerResponse</a></code>

Methods:

- <code title="get /posthog-debug">client.posthogDebug.<a href="./src/resources/posthog-debug.ts">trigger</a>() -> unknown</code>
