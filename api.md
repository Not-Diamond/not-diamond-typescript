# ModelRouter

Types:

- <code><a href="./src/resources/model-router.ts">ModelRouterSelectModelResponse</a></code>

Methods:

- <code title="post /v2/modelRouter/modelSelect">client.modelRouter.<a href="./src/resources/model-router.ts">selectModel</a>({ ...params }) -> ModelRouterSelectModelResponse</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">PreferenceCreateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceUpdateResponse</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceDeleteResponse</a></code>

Methods:

- <code title="post /v2/preferences/userPreferenceCreate">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> PreferenceCreateResponse</code>
- <code title="put /v2/preferences/userPreferenceUpdate">client.preferences.<a href="./src/resources/preferences.ts">update</a>({ ...params }) -> unknown</code>
- <code title="delete /v2/preferences/userPreferenceDelete/{preference_id}">client.preferences.<a href="./src/resources/preferences.ts">delete</a>(preferenceID) -> unknown</code>

# PromptOptimization

Types:

- <code><a href="./src/resources/prompt-optimization.ts">GoldenRecord</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">JobStatus</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">RequestProvider</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">PromptOptimizationGetCostResponse</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">PromptOptimizationGetOptimizationResultsResponse</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">PromptOptimizationGetOptimziationStatusResponse</a></code>
- <code><a href="./src/resources/prompt-optimization.ts">PromptOptimizationOptimizeResponse</a></code>

Methods:

- <code title="get /v2/prompt/optimize/{optimization_run_id}/costs">client.promptOptimization.<a href="./src/resources/prompt-optimization.ts">getCost</a>(optimizationRunID) -> PromptOptimizationGetCostResponse</code>
- <code title="get /v2/prompt/optimizeResults/{optimization_run_id}">client.promptOptimization.<a href="./src/resources/prompt-optimization.ts">getOptimizationResults</a>(optimizationRunID) -> PromptOptimizationGetOptimizationResultsResponse</code>
- <code title="get /v2/prompt/optimizeStatus/{optimization_run_id}">client.promptOptimization.<a href="./src/resources/prompt-optimization.ts">getOptimziationStatus</a>(optimizationRunID) -> PromptOptimizationGetOptimziationStatusResponse</code>
- <code title="post /v2/prompt/optimize">client.promptOptimization.<a href="./src/resources/prompt-optimization.ts">optimize</a>({ ...params }) -> PromptOptimizationOptimizeResponse</code>

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
