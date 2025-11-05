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

- <code><a href="./src/resources/preferences.ts">PreferenceCreateUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateUserPreferenceResponse</a></code>

Methods:

- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">createUserPreference</a>({ ...params }) -> PreferenceCreateUserPreferenceResponse</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">deleteUserPreference</a>(preferenceID) -> unknown</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">updateUserPreference</a>({ ...params }) -> unknown</code>

# PromptAdaptation

Types:

- <code><a href="./src/resources/prompt-adaptation.ts">AdaptationRunResults</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationAdaptResponse</a></code>
- <code><a href="./src/resources/prompt-adaptation.ts">PromptAdaptationGetAdaptStatusResponse</a></code>

Methods:

- <code title="post /v2/prompt/adapt">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">adapt</a>({ ...params }) -> PromptAdaptationAdaptResponse</code>
- <code title="get /v2/prompt/adaptResults/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptResults</a>(adaptationRunID) -> AdaptationRunResults</code>
- <code title="get /v2/prompt/adaptStatus/{adaptation_run_id}">client.promptAdaptation.<a href="./src/resources/prompt-adaptation.ts">getAdaptStatus</a>(adaptationRunID) -> PromptAdaptationGetAdaptStatusResponse</code>

# Report

Types:

- <code><a href="./src/resources/report.ts">ReportSubmitFeedbackResponse</a></code>

Methods:

- <code title="post /v2/report/metrics/feedback">client.report.<a href="./src/resources/report.ts">submitFeedback</a>({ ...params }) -> ReportSubmitFeedbackResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

# Admin
