# ModelRouter

Types:

- <code><a href="./src/resources/model-router.ts">ModelRouterSelectModelResponse</a></code>

Methods:

- <code title="post /v2/modelRouter/modelSelect">client.modelRouter.<a href="./src/resources/model-router.ts">selectModel</a>({ ...params }) -> unknown</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">PreferenceCreateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceCreateUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceRetrieveUserPreferenceResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateUserPreferenceResponse</a></code>

Methods:

- <code title="post /v2/preferences/preferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/update">client.preferences.<a href="./src/resources/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/preferenceDelete">client.preferences.<a href="./src/resources/preferences.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">createUserPreference</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">deleteUserPreference</a>(preferenceID) -> unknown</code>
- <code title="get /v2/preferences/{user_id}">client.preferences.<a href="./src/resources/preferences.ts">retrieveUserPreference</a>(userID, { ...params }) -> unknown</code>
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

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
