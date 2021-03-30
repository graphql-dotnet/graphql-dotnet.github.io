webpackJsonp([53220472400125],{333:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="unions"><a href="#unions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unions</h1>\n<p>Unions are a composition of two or more different types. To create such union type,\nyou need to inherit from <code class="language-text">UnionGraphType</code> and call the <code class="language-text">Type&lt;TType&gt;</code> method on\nthe all types that you want to include in this union.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CatOrDog</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">UnionGraphType</span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">CatOrDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Type</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Cat<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Type</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Dog<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType<span class="token punctuation">&lt;</span>CatModel<span class="token punctuation">></span></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>StringGraphType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BooleanGraphType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"meows"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObjectGraphType<span class="token punctuation">&lt;</span>DogModel<span class="token punctuation">></span></span></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>StringGraphType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BooleanGraphType<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"barks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In this example <code class="language-text">CatOrDog</code> type should implement <code class="language-text">ResolveType</code> or both <code class="language-text">Cat</code> and\n<code class="language-text">Dog</code> types should implement <code class="language-text">IsTypeOf</code>. Note that <code class="language-text">IsTypeOf</code> is already implemented\nfor <code class="language-text">ObjectGraphType&lt;TSourceType&gt;</code> so in this example <code class="language-text">ResolveType</code> is not used.\nFor details about <code class="language-text">IsTypeOf</code> and <code class="language-text">ResolveType</code> see <a href="Interfaces">Interfaces</a>.</p>',fields:{relativePath:"docs/getting-started/unions.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/unions.md"}}}});
//# sourceMappingURL=path---docs-getting-started-unions-725134ae5f06fb921687.js.map