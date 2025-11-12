# ModelRouter

Types:

- <code><a href="./src/resources/model-router.ts">ModelRouterSelectModelResponse</a></code>

Methods:

- <code title="post /v2/modelRouter/modelSelect">client.modelRouter.<a href="./src/resources/model-router.ts">selectModel</a>({ ...params }) -> ModelRouterSelectModelResponse</code>

# Report

## Metrics

Types:

- <code><a href="./src/resources/report/metrics.ts">MetricSubmitFeedbackResponse</a></code>

Methods:

- <code title="post /v2/report/metrics/feedback">client.report.metrics.<a href="./src/resources/report/metrics.ts">submitFeedback</a>({ ...params }) -> MetricSubmitFeedbackResponse</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">PreferenceCreateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteResponse</a></code>

Methods:

- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> PreferenceCreateResponse</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">delete</a>(preferenceID) -> unknown</code>

# PromptAdaptation

Types:

- <code><a href="./src/resources/prompt-adaptation.ts">GoldenRecord</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">RequestProvider</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationAdaptResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetAdaptResultsResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetAdaptStatusResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetCostsResponse</a></code>

Methods:

- <code title="post /v2/prompt/adapt">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">adapt</a>({ ...params }) -> PromptAdaptationAdaptResponse</code>
- <code title="get /v2/prompt/adaptResults/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptResults</a>(adaptationRunID) -> PromptAdaptationGetAdaptResultsResponse</code>
- <code title="get /v2/prompt/adaptStatus/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptStatus</a>(adaptationRunID) -> PromptAdaptationGetAdaptStatusResponse</code>
- <code title="get /v2/prompt/adapt/{adaptation_run_id}/costs">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getCosts</a>(adaptationRunID) -> PromptAdaptationGetCostsResponse</code>

# CustomRouter

Types:

- <code><a href="./src/resources/custom-router.ts">CustomRouterTrainCustomRouterResponse</a></code>

Methods:

- <code title="post /v2/pzn/trainCustomRouter">client.customRouter.<a href="./src/resources/custom-router.ts">trainCustomRouter</a>({ ...params }) -> CustomRouterTrainCustomRouterResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
