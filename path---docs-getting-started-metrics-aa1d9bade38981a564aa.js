webpackJsonp([0xa8c80e3f9583],{328:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="metrics"><a href="#metrics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Metrics</h1>\n<p>Metrics are captured during execution if <code class="language-text">ExecutionOptions.EnableMetrics</code> property is set\nto <code class="language-text">true</code>. By default, metrics collection is disabled to improve performance.</p>\n<p>Enabling metrics can help you determine performance issues within a resolver or validation.\nField metrics are captured using Field Middleware and the results are returned as a <code class="language-text">PerfRecord</code>\narray on the <code class="language-text">ExecutionResult</code>. You can then generate <a href="https://github.com/apollographql/apollo-tracing">Apollo Tracing</a>\ndata with the <code class="language-text">EnrichWithApolloTracing()</code> extension method.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token class-name"><span class="token keyword">var</span></span> start <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">ExecutionResult</span> result <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>_ <span class="token operator">=></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Schema <span class="token operator">=</span> schema<span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"..."</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>EnableMetrics <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>FieldMiddleware<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>InstrumentFieldsMiddleware<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nresult<span class="token punctuation">.</span><span class="token function">EnrichWithApolloTracing</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Alternatively, you can use the <code class="language-text">AddApolloTracing</code> extension method to append the tracing results\nto the execution; this is ideal when wiring up GraphQL via dependency injection.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp">services<span class="token punctuation">.</span><span class="token function">AddGraphQL</span><span class="token punctuation">(</span>b <span class="token operator">=></span> b\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSchema</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>StarWarsSchema<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AddApolloTracing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AddSystemTextJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Also you could create a listener that hooks in after the execution and uses the Apollo tracing\ndata to synthesize some other traces, for example, for Application Insights.</p>\n<h2 id="conditionally-enable-metrics-by-http-header"><a href="#conditionally-enable-metrics-by-http-header" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conditionally enable metrics by HTTP header</h2>\n<p>If you want to enable metrics for just some HTTP requests then you may provide a special tracing\nHTTP header and configure GraphQL execution engine to check the presence of that header.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">GraphQLBuilderMetricsExtensions</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IGraphQLBuilder</span> <span class="token function">EnableMetricsByHeader</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IGraphQLBuilder</span> builder<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> headerName <span class="token operator">=</span> <span class="token string">"X-GRAPHQL-METRICS"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">ConfigureExecution</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>options<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>EnableMetrics<span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                <span class="token class-name"><span class="token keyword">var</span></span> accessor <span class="token operator">=</span> options<span class="token punctuation">.</span>RequestServices<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IHttpContextAccessor<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                options<span class="token punctuation">.</span>EnableMetrics <span class="token operator">=</span> accessor<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>headerName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nservices<span class="token punctuation">.</span><span class="token function">AddGraphQL</span><span class="token punctuation">(</span>b <span class="token operator">=></span> b\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSchema</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>StarWarsSchema<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">EnableMetricsByHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AddSystemTextJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="metrics-data-example"><a href="#metrics-data-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Metrics data example</h2>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"hero"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"R2-D2"</span><span class="token punctuation">,</span>\n      <span class="token property">"friends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Luke"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"C-3PO"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"tracing"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"version"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token property">"startTime"</span><span class="token operator">:</span> <span class="token string">"2018-07-28T21:39:27.160902Z"</span><span class="token punctuation">,</span>\n      <span class="token property">"endTime"</span><span class="token operator">:</span> <span class="token string">"2018-07-28T21:39:27.372902Z"</span><span class="token punctuation">,</span>\n      <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">212304000</span><span class="token punctuation">,</span>\n      <span class="token property">"parsing"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">57436000</span><span class="token punctuation">,</span>\n        <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">21985999</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">"validation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">57436000</span><span class="token punctuation">,</span>\n        <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">21985999</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">"execution"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"resolvers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"hero"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">"parentType"</span><span class="token operator">:</span> <span class="token string">"Query"</span><span class="token punctuation">,</span>\n            <span class="token property">"fieldName"</span><span class="token operator">:</span> <span class="token string">"hero"</span><span class="token punctuation">,</span>\n            <span class="token property">"returnType"</span><span class="token operator">:</span> <span class="token string">"Character"</span><span class="token punctuation">,</span>\n            <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">147389000</span><span class="token punctuation">,</span>\n            <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">2756000</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"hero"</span><span class="token punctuation">,</span>\n              <span class="token string">"name"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">"parentType"</span><span class="token operator">:</span> <span class="token string">"Droid"</span><span class="token punctuation">,</span>\n            <span class="token property">"fieldName"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>\n            <span class="token property">"returnType"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span>\n            <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">208043000</span><span class="token punctuation">,</span>\n            <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">396000</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"hero"</span><span class="token punctuation">,</span>\n              <span class="token string">"friends"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">"parentType"</span><span class="token operator">:</span> <span class="token string">"Droid"</span><span class="token punctuation">,</span>\n            <span class="token property">"fieldName"</span><span class="token operator">:</span> <span class="token string">"friends"</span><span class="token punctuation">,</span>\n            <span class="token property">"returnType"</span><span class="token operator">:</span> <span class="token string">"[Character]"</span><span class="token punctuation">,</span>\n            <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">208533000</span><span class="token punctuation">,</span>\n            <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">1067999</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"hero"</span><span class="token punctuation">,</span>\n              <span class="token string">"friends"</span><span class="token punctuation">,</span>\n              <span class="token number">0</span><span class="token punctuation">,</span>\n              <span class="token string">"name"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">"parentType"</span><span class="token operator">:</span> <span class="token string">"Human"</span><span class="token punctuation">,</span>\n            <span class="token property">"fieldName"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>\n            <span class="token property">"returnType"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span>\n            <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">210501000</span><span class="token punctuation">,</span>\n            <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">33999</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"hero"</span><span class="token punctuation">,</span>\n              <span class="token string">"friends"</span><span class="token punctuation">,</span>\n              <span class="token number">1</span><span class="token punctuation">,</span>\n              <span class="token string">"name"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">"parentType"</span><span class="token operator">:</span> <span class="token string">"Droid"</span><span class="token punctuation">,</span>\n            <span class="token property">"fieldName"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>\n            <span class="token property">"returnType"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span>\n            <span class="token property">"startOffset"</span><span class="token operator">:</span> <span class="token number">210542000</span><span class="token punctuation">,</span>\n            <span class="token property">"duration"</span><span class="token operator">:</span> <span class="token number">3000</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/metrics.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/metrics.md"}}}});
//# sourceMappingURL=path---docs-getting-started-metrics-aa1d9bade38981a564aa.js.map