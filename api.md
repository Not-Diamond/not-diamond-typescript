# ModelRouter

Types:

- <code><a href="./src/resources/model-router.ts">ModelRouterOpenHandsSelectResponse</a></code>
- <code><a href="./src/resources/model-router.ts">ModelRouterSelectModelResponse</a></code>

Methods:

- <code title="post /v2/modelRouter/openHandsRouter">client.modelRouter.<a href="./src/resources/model-router.ts">openHandsSelect</a>({ ...params }) -> unknown</code>
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
- <code><a href="./src/resources/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteResponse</a></code>

Methods:

- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> PreferenceCreateResponse</code>
- <code title="get /v2/preferences/{user_id}">client.preferences.<a href="./src/resources/preferences.ts">retrieve</a>(userID, { ...params }) -> unknown</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">delete</a>(preferenceID) -> unknown</code>

# Prompt

Types:

- <code><a href="./src/resources/prompt/prompt.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt/prompt.ts">PromptGetAdaptResultsResponse</a></code>
- <code><a href="./src/resources/prompt/prompt.ts">PromptGetAdaptStatusResponse</a></code>

Methods:

- <code title="get /v2/prompt/adaptResults/{adaptation_run_id}">client.prompt.<a href="./src/resources/prompt/prompt.ts">getAdaptResults</a>(adaptationRunID) -> PromptGetAdaptResultsResponse</code>
- <code title="get /v2/prompt/adaptStatus/{adaptation_run_id}">client.prompt.<a href="./src/resources/prompt/prompt.ts">getAdaptStatus</a>(adaptationRunID) -> PromptGetAdaptStatusResponse</code>

## Adapt

Types:

- <code><a href="./src/resources/prompt/adapt.ts">GoldenRecord</a></code>
- <code><a href="./src/resources/prompt/adapt.ts">RequestProvider</a></code>
- <code><a href="./src/resources/prompt/adapt.ts">AdaptCreateResponse</a></code>
- <code><a href="./src/resources/prompt/adapt.ts">AdaptGetCostsResponse</a></code>

Methods:

- <code title="post /v2/prompt/adapt">client.prompt.adapt.<a href="./src/resources/prompt/adapt.ts">create</a>({ ...params }) -> AdaptCreateResponse</code>
- <code title="get /v2/prompt/adapt/{adaptation_run_id}/costs">client.prompt.adapt.<a href="./src/resources/prompt/adapt.ts">getCosts</a>(adaptationRunID) -> AdaptGetCostsResponse</code>

# Pzn

Types:

- <code><a href="./src/resources/pzn.ts">PznSubmitSurveyResponseResponse</a></code>
- <code><a href="./src/resources/pzn.ts">PznTrainCustomRouterResponse</a></code>

Methods:

- <code title="post /v2/pzn/surveyResponse">client.pzn.<a href="./src/resources/pzn.ts">submitSurveyResponse</a>({ ...params }) -> unknown</code>
- <code title="post /v2/pzn/trainCustomRouter">client.pzn.<a href="./src/resources/pzn.ts">trainCustomRouter</a>({ ...params }) -> PznTrainCustomRouterResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
