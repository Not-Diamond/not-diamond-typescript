# NotDiamond

# Routing

Types:

- <code><a href="./src/resources/routing.ts">RoutingCreateSurveyResponseResponse</a></code>
- <code><a href="./src/resources/routing.ts">RoutingSelectModelResponse</a></code>
- <code><a href="./src/resources/routing.ts">RoutingTrainCustomRouterResponse</a></code>

Methods:

- <code title="post /v2/pzn/surveyResponse">client.routing.<a href="./src/resources/routing.ts">createSurveyResponse</a>({ ...params }) -> unknown</code>
- <code title="post /v2/modelRouter/modelSelect">client.routing.<a href="./src/resources/routing.ts">selectModel</a>({ ...params }) -> RoutingSelectModelResponse</code>
- <code title="post /v2/pzn/trainCustomRouter">client.routing.<a href="./src/resources/routing.ts">trainCustomRouter</a>({ ...params }) -> RoutingTrainCustomRouterResponse</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceCreateUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateUserPreferenceResponse</a></code>

Methods:

- <code title="get /v2/preferences/{user_id}/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">retrieve</a>(preferenceID, { ...params }) -> unknown</code>
- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">createUserPreference</a>({ ...params }) -> PreferenceCreateUserPreferenceResponse</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">deleteUserPreference</a>(preferenceID) -> unknown</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">updateUserPreference</a>({ ...params }) -> unknown</code>

# PromptAdaptation

Types:

- <code><a href="./src/resources/prompt-adaptation.ts">AdaptationRunResults</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationAdaptResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetAdaptRunsResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetAdaptStatusResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationRetrieveCostsResponse</a></code>

Methods:

- <code title="post /v2/prompt/adapt">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">adapt</a>({ ...params }) -> PromptAdaptationAdaptResponse</code>
- <code title="get /v2/prompt/adaptResults/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptResults</a>(adaptationRunID) -> AdaptationRunResults</code>
- <code title="get /v2/prompt/frontendAdaptRunResults/{user_id}/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptRunResults</a>(adaptationRunID, { ...params }) -> AdaptationRunResults</code>
- <code title="get /v2/prompt/frontendAdaptRuns/{user_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptRuns</a>(userID, { ...params }) -> PromptAdaptationGetAdaptRunsResponse</code>
- <code title="get /v2/prompt/adaptStatus/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptStatus</a>(adaptationRunID) -> PromptAdaptationGetAdaptStatusResponse</code>
- <code title="get /v1/adaptation-runs/{adaptation_run_id}/costs">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">retrieveCosts</a>(adaptationRunID) -> PromptAdaptationRetrieveCostsResponse</code>

# Report

Types:

- <code><a href="./src/resources/report.ts">ReportFeedbackResponse</a></code>
- <code><a href="./src/resources/report.ts">ReportLatencyResponse</a></code>

Methods:

- <code title="post /v2/report/metrics/feedback">client.report.<a href="./src/resources/report.ts">feedback</a>({ ...params }) -> ReportFeedbackResponse</code>
- <code title="post /v2/report/metrics/latency">client.report.<a href="./src/resources/report.ts">latency</a>({ ...params }) -> unknown</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

# Admin

# Client

## Report

Types:

- <code><a href="./src/resources/client/report.ts">ReportEvaluateHallucinationResponse</a></code>

Methods:

- <code title="post /v2/report/hallucination">client.client.report.<a href="./src/resources/client/report.ts">evaluateHallucination</a>({ ...params }) -> unknown</code>
