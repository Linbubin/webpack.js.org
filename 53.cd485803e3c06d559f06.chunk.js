(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{345:function(n,s,a){"use strict";a.r(s),s.default='<p>这些选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节。\n关于 resolver 具体如何工作的更多解释说明，请查看<a href="/concepts/module-resolution">模块解析</a>。</p>\n<h2 id="resolve"><code>resolve</code><a href="#resolve" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>配置模块如何解析。例如，当在 ES2015 中调用 <code>import \'lodash\'</code>，<code>resolve</code> 选项能够对 webpack 查找 <code>\'lodash\'</code> 的方式去做修改（查看<a href="#resolve-modules"><code>模块</code></a>）。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// configuration options</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvealias"><code>resolve.alias</code><a href="#resolvealias" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p>创建 <code>import</code> 或 <code>require</code> 的别名，来确保模块引入变得更简单。例如，一些位于 <code>src/</code> 文件夹下的常用模块：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      Utilities<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/utilities/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      Templates<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/templates/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>现在，替换“在导入时使用相对路径”这种方式，就像这样：</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Utility <span class="token keyword">from</span> <span class="token string">\'../../utilities/utility\'</span><span class="token punctuation">;</span></code></pre>\n<p>你可以这样使用别名：</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Utility <span class="token keyword">from</span> <span class="token string">\'Utilities/utility\'</span><span class="token punctuation">;</span></code></pre>\n<p>也可以在给定对象的键后的末尾添加 <code>$</code>，以表示精准匹配：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      xyz$<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'path/to/file.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>这将产生以下结果：</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> Test1 <span class="token keyword">from</span> <span class="token string">\'xyz\'</span><span class="token punctuation">;</span> <span class="token comment">// 精确匹配，所以 path/to/file.js 被解析和导入</span>\n<span class="token keyword">import</span> Test2 <span class="token keyword">from</span> <span class="token string">\'xyz/file.js\'</span><span class="token punctuation">;</span> <span class="token comment">// 非精确匹配，触发普通解析</span></code></pre>\n<p>下面的表格展示了一些其他情况：</p>\n<table>\n<thead>\n<tr>\n<th><code>alias:</code></th>\n<th><code>import \'xyz\'</code></th>\n<th><code>import \'xyz/file.js\'</code></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{}</code><p class="description mobile"><code>/abc/node_modules/xyz/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/xyz/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'/abc/path/to/file.js\' }</code><p class="description mobile"><code>/abc/path/to/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/path/to/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'/abc/path/to/file.js\' }</code><p class="description mobile"><code>/abc/path/to/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/path/to/file.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'./dir/file.js\' }</code><p class="description mobile"><code>/abc/dir/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'./dir/file.js\' }</code><p class="description mobile"><code>/abc/dir/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/file.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'/some/dir\' }</code><p class="description mobile"><code>/some/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/some/dir/index.js</code></td>\n<td><code>/some/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'/some/dir\' }</code><p class="description mobile"><code>/some/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/some/dir/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'./dir\' }</code><p class="description mobile"><code>/abc/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/dir/index.js</code></td>\n<td><code>/abc/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu\' }</code><p class="description mobile"><code>/abc/node_modules/modu/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/index.js</code></td>\n<td><code>/abc/node_modules/modu/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'modu\' }</code><p class="description mobile"><code>/abc/node_modules/modu/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu/some/file.js\' }</code><p class="description mobile"><code>/abc/node_modules/modu/some/file.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/some/file.js</code></td>\n<td>error</td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz: \'modu/dir\' }</code><p class="description mobile"><code>/abc/node_modules/modu/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/dir/index.js</code></td>\n<td><code>/abc/node_modules/modu/dir/file.js</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>alias:</p><p>import \'xyz\'</p><p>import \'xyz/file.js\'</p></div>\n<div class="content"><p><code>{ xyz$: \'modu/dir\' }</code><p class="description mobile"><code>/abc/node_modules/modu/dir/index.js</code></p></p></div></td>\n<td class="description desktop"><code>/abc/node_modules/modu/dir/index.js</code></td>\n<td><code>/abc/node_modules/xyz/file.js</code></td>\n</tr>\n</tbody>\n</table>\n<p>如果在 <code>package.json</code> 中定义，<code>index.js</code> 可能会被解析为另一个文件。</p>\n<p><code>/abc/node_modules</code> 也可能在 <code>/node_modules</code> 中解析。</p>\n<blockquote class="warning">\n<p><code>resolve.alias</code> 优先级高于其它模块解析方式。</p>\n</blockquote>\n<blockquote class="warning">\n<p><a href="https://github.com/webpack-contrib/null-loader"><code>null-loader</code></a> 在webpack5中被废弃。使用 <code>alias: { xyz$: false }</code> 或绝对路径 <code>alias: {[path.resolve(__dirname, \'./path/to/module\')]: false }</code></p>\n</blockquote>\n<blockquote class="warning">\n<p><code>[string]</code> 字符串值在 webapck 5 中被支持。</p>\n</blockquote>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      _<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/utilities/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/templates/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>将 <code>resolve.alias</code> 设置为 <code>false</code> 将告知 webpack 忽略模块。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">\'ignored-module\'</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token string">\'./ignored-module\'</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvealiasfields"><code>resolve.aliasFields</code><a href="#resolvealiasfields" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]: [\'browser\']</code></p>\n<p>指定一个字段，例如 <code>browser</code>，根据\n<a href="https://github.com/defunctzombie/package-browser-field-spec">此规范</a>进行解析。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    aliasFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'browser\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvecachewithcontext"><code>resolve.cacheWithContext</code><a href="#resolvecachewithcontext" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean</code> (从 webpack 3.1.0起支持)</p>\n<p>如果启用了不安全缓存，请在缓存键(cache key)中引入 <code>request.context</code>。这个选项被 <a href="https://github.com/webpack/enhanced-resolve/"><code>enhanced-resolve</code></a> 模块考虑在内。从 webpack 3.1.0 开始，在配置了 resolve 或 resolveLoader 插件时，解析缓存(resolve caching)中的上下文(context)会被忽略。\n这解决了性能衰退的问题。</p>\n<h3 id="resolvedescriptionfiles"><code>resolve.descriptionFiles</code><a href="#resolvedescriptionfiles" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string] = [\'package.json\']</code></p>\n<p>用于描述的 JSON 文件。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    descriptionFiles<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'package.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveenforceextension"><code>resolve.enforceExtension</code><a href="#resolveenforceextension" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean = false</code></p>\n<p>如果是 <code>true</code>，将不允许无扩展名文件。默认如果 <code>./foo</code> 有 <code>.js</code> 扩展，<code>require(\'./foo\')</code> 可以正常运行。但如果启用此选项，只有 <code>require(\'./foo.js\')</code>\n能够正常工作。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    enforceExtension<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveenforcemoduleextension"><code>resolve.enforceModuleExtension</code><a href="#resolveenforcemoduleextension" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean = false</code></p>\n<blockquote class="warning">\n<p>在 webpack 5 中被废弃</p>\n</blockquote>\n<p>告知 webpack 是否要求模块使用后缀（例如加载器 loaders）。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    enforceModuleExtension<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveextensions"><code>resolve.extensions</code><a href="#resolveextensions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string] = [\'.wasm\', \'.mjs\', \'.js\', \'.json\']</code></p>\n<p>尝试按顺序解析这些后缀名。</p>\n<blockquote class="warning">\n<p>如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件\n并跳过其余的后缀。</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.wasm\'</span><span class="token punctuation">,</span> <span class="token string">\'.mjs\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>能够使用户在引入模块时不带扩展：</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> File <span class="token keyword">from</span> <span class="token string">\'../path/to/file\'</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>使用此选项会 <strong>覆盖默认数组</strong>，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。</p>\n</blockquote>\n<h3 id="resolvemainfields"><code>resolve.mainFields</code><a href="#resolvemainfields" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]</code></p>\n<p>当从 npm 包中导入模块时（例如，<code>import * as D3 from \'d3\'</code>），此选项将决定在 <code>package.json</code> 中使用哪个字段导入模块。根据 webpack 配置中指定的 <a href="/concepts/targets"><code>target</code></a> 不同，默认值也会有所不同。</p>\n<p>当 <code>target</code> 属性设置为 <code>webworker</code>, <code>web</code> 或者没有指定：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'browser\'</span><span class="token punctuation">,</span> <span class="token string">\'module\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>对于其他任意的 target（包括 <code>node</code>），默认值为：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'module\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>例如，考虑任意一个名为 <code>upstream</code> 的类库 <code>package.json</code> 包含以下字段：</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"browser"</span><span class="token operator">:</span> <span class="token string">"build/upstream.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"index"</span>\n<span class="token punctuation">}</span></code></pre>\n<p>在我们 <code>import * as Upstream from \'upstream\'</code> 时，这实际上会从 <code>browser</code> 属性解析文件。\n在这里 <code>browser</code> 属性是最优先选择的，因为它是 <code>mainFields</code> 的第一项。同时，由 webpack 打包的 Node.js 应用程序首先会尝试\n从 <code>module</code> 字段中解析文件。</p>\n<h3 id="resolvemainfiles"><code>resolve.mainFiles</code><a href="#resolvemainfiles" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string] = [\'index\']</code></p>\n<p>解析目录时要使用的文件名。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mainFiles<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'index\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvemodules"><code>resolve.modules</code><a href="#resolvemodules" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string] = [\'node_modules\']</code></p>\n<p>告诉 webpack 解析模块时应该搜索的目录。</p>\n<p>绝对路径和相对路径都能使用，但是要知道它们之间有一点差异。</p>\n<p>通过查看当前目录以及祖先路径（即 <code>./node_modules</code>, <code>../node_modules</code> 等等），\n相对路径将类似于 Node 查找 \'node_modules\' 的方式进行查找。</p>\n<p>使用绝对路径，将只在给定目录中搜索。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>如果你想要添加一个目录到模块搜索目录，此目录优先于 <code>node_modules/</code> 搜索：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolveunsafecache"><code>resolve.unsafeCache</code><a href="#resolveunsafecache" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>RegExp</code> <code>[RegExp]</code> <code>boolean: true</code></p>\n<p>启用，会主动缓存模块，但并 <strong>不安全</strong>。传递 <code>true</code> 将缓存一切。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    unsafeCache<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>正则表达式，或正则表达式数组，可以用于匹配文件路径或只缓存某些模块。\n例如，只缓存 utilities 模块：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    unsafeCache<span class="token punctuation">:</span> <span class="token regex">/src\\/utilities/</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>修改缓存路径可能在极少数情况下导致失败。</p>\n</blockquote>\n<h3 id="resolveplugins"><code>resolve.plugins</code><a href="#resolveplugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><a href="/plugins/"><code>[Plugin]</code></a></p>\n<p>应该使用的额外的解析插件列表。\n它允许插件，如 <a href="https://www.npmjs.com/package/directory-named-webpack-plugin"><code>DirectoryNamedWebpackPlugin</code></a>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DirectoryNamedWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvesymlinks"><code>resolve.symlinks</code><a href="#resolvesymlinks" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>boolean = true</code></p>\n<p>是否将符号链接(symlink)解析到它们的符号链接位置(symlink location)。</p>\n<p>启用时，符号链接(symlink)的资源，将解析为其 <em>真实</em> 路径，而不是其符号链接(symlink)的位置。注意，当使用创建符号链接包的工具（如 <code>npm link</code>）时，这种方式可能会导致模块解析失败。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    symlinks<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="resolvecachepredicate"><code>resolve.cachePredicate</code><a href="#resolvecachepredicate" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function(module) => boolean</code></p>\n<p>决定请求是否应该被缓存的函数。函数传入一个带有 <code>path</code> 和 <code>request</code> 属性的对象。\n必须返回一个 boolean 值。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    cachePredicate<span class="token punctuation">:</span> <span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// additional logic</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="resolveloader"><code>resolveLoader</code><a href="#resolveloader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object { modules [string] = [\'node_modules\'], extensions [string] = [\'.js\', \'.json\'], mainFields [string] = [\'loader\', \'main\']}</code></p>\n<p>这组选项与上面的 <code>resolve</code> 对象的属性集合相同，\n但仅用于解析 webpack 的 <a href="/concepts/loaders">loader</a> 包。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolveLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    modules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    mainFields<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'loader\'</span><span class="token punctuation">,</span> <span class="token string">\'main\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>注意，这里你可以使用别名，并且其他特性类似于 resolve 对象。例如，<code>{ txt: \'raw-loader\' }</code> 会使用 <code>raw-loader</code> 去 shim(填充) <code>txt!templates/demo.txt</code>。</p>\n</blockquote>\n<h3 id="resolveloadermoduleextensions"><code>resolveLoader.moduleExtensions</code><a href="#resolveloadermoduleextensions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]</code></p>\n<blockquote class="warning">\n<p>在 webpack 5 中被废弃</p>\n</blockquote>\n<p>解析 loader 时，用到扩展名(extensions)/后缀(suffixes)。从 webpack 2 开始，我们 <a href="/migrate/3/#automatic-loader-module-name-extension-removed">强烈建议</a> 使用全名，例如 <code>example-loader</code>，以尽可能清晰。然而，如果你确实想省略 <code>-loader</code>，也就是说只使用 <code>example</code>，则可以使用此选项来实现：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  resolveLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    moduleExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);