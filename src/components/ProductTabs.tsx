import React, { useState } from 'react';
import { Layers, Terminal, CheckCircle, Workflow, BarChart3, Radio } from 'lucide-react';

export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflows' | 'observability' | 'integrations'>('workflows');

  return (
    <section id="product" className="py-24 bg-[#080517] border-y border-[#232035] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181625] border border-[#8650FF]/30 text-xs font-semibold text-[#8650FF] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DEEP DIVE DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Designed for Developers, Tailored for Scale
          </h2>
          <p className="text-base sm:text-lg text-[#D9D3E8]/80">
            Switch between core platform modules to see how Soft handles production architectures with ease.
          </p>

          {/* Tab Selector Buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#131122] border border-[#232035] max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab('workflows')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'workflows'
                  ? 'bg-[#8650FF] text-white shadow-md shadow-[#8650FF]/30'
                  : 'text-[#D9D3E8]/70 hover:text-white'
              }`}
            >
              <Workflow className="w-4 h-4" />
              Automated Workflows
            </button>
            <button
              onClick={() => setActiveTab('observability')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'observability'
                  ? 'bg-[#8650FF] text-white shadow-md shadow-[#8650FF]/30'
                  : 'text-[#D9D3E8]/70 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Observability
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'integrations'
                  ? 'bg-[#8650FF] text-white shadow-md shadow-[#8650FF]/30'
                  : 'text-[#D9D3E8]/70 hover:text-white'
              }`}
            >
              <Radio className="w-4 h-4" />
              Ecosystem
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#100e1f] rounded-2xl border border-[#232035] overflow-hidden p-6 sm:p-10 shadow-2xl">
          {activeTab === 'workflows' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
              <div className="space-y-5">
                <span className="text-xs font-semibold tracking-wider text-[#8650FF] uppercase">
                  Declarative Pipelines
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Define Pipelines in Seconds With Type-Safe Configs
                </h3>
                <p className="text-sm sm:text-base text-[#D9D3E8]/80 leading-relaxed">
                  No more messy YAML files that fail silently. Use our intuitive declarative schema with instant compile-time validation and automatic secret injection.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>Instant rollback with 1-click snapshot recovery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>Parallel branch previews for every pull request</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>Automatic dependency caching across distributed builds</span>
                  </div>
                </div>
              </div>

              {/* Code Preview Mock */}
              <div className="rounded-xl bg-[#090714] border border-[#232035] p-5 font-mono text-xs text-[#D9D3E8] overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232035] text-[11px] text-[#D9D3E8]/50">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#8650FF]" /> soft.pipeline.ts
                  </span>
                  <span className="text-[#10b981]">Valid Schema ✓</span>
                </div>
                <div className="leading-relaxed space-y-1">
                  <div><span className="text-[#8650FF]">import</span> &#123; definePipeline &#125; <span className="text-[#8650FF]">from</span> <span className="text-[#10b981]">'@soft/core'</span>;</div>
                  <div className="pt-2"><span className="text-[#8650FF]">export default</span> definePipeline(&#123;</div>
                  <div className="pl-4">service: <span className="text-[#10b981]">'billing-service'</span>,</div>
                  <div className="pl-4">cluster: <span className="text-[#10b981]">'us-east-primary'</span>,</div>
                  <div className="pl-4">autoscale: &#123; min: 2, max: 50 &#125;,</div>
                  <div className="pl-4">healthCheck: <span className="text-[#10b981]">'/api/health'</span>,</div>
                  <div className="pl-4">triggers: [&#123; on: <span className="text-[#10b981]">'git.push'</span>, branch: <span className="text-[#10b981]">'main'</span> &#125;],</div>
                  <div className="pl-4">onSuccess: <span className="text-[#38bdf8]">async</span> (ctx) =&gt; &#123;</div>
                  <div className="pl-8"><span className="text-[#8650FF]">await</span> ctx.notifySlack(<span className="text-[#10b981]">'#deployments'</span>);</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;);</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'observability' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
              <div className="space-y-5">
                <span className="text-xs font-semibold tracking-wider text-[#38bdf8] uppercase">
                  Sub-Millisecond Insights
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Complete Full-Stack Visibility Without Agent Overheads
                </h3>
                <p className="text-sm sm:text-base text-[#D9D3E8]/80 leading-relaxed">
                  Monitor CPU spikes, slow queries, and HTTP 5xx error spikes with live distributed tracing and automatic alert routing.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span>Zero-configuration distributed request tracing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span>Intelligent noise suppression for alert channels</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span>Real-time anomaly identification with suggested fixes</span>
                  </div>
                </div>
              </div>

              {/* Observability Visual */}
              <div className="rounded-xl bg-[#090714] border border-[#232035] p-5 space-y-4 shadow-inner">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Live Service Matrix</span>
                  <span className="text-[#10b981] flex items-center gap-1">● All Systems Nominal</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-[#D9D3E8]/70 mb-1">
                      <span>API Gateway Load (us-east)</span>
                      <span>28% capacity</span>
                    </div>
                    <div className="w-full bg-[#1c192d] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#8650FF] h-full rounded-full w-[28%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[#D9D3E8]/70 mb-1">
                      <span>Database Memory Allocation</span>
                      <span>54% utilized</span>
                    </div>
                    <div className="w-full bg-[#1c192d] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#38bdf8] h-full rounded-full w-[54%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[#D9D3E8]/70 mb-1">
                      <span>Cache Hit Ratio</span>
                      <span className="text-[#10b981]">99.2% hits</span>
                    </div>
                    <div className="w-full bg-[#1c192d] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#10b981] h-full rounded-full w-[99.2%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
              <div className="space-y-5">
                <span className="text-xs font-semibold tracking-wider text-[#ec4899] uppercase">
                  Connected Ecosystem
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Plugs Straight Into Your Existing Toolchain
                </h3>
                <p className="text-sm sm:text-base text-[#D9D3E8]/80 leading-relaxed">
                  Integrate with over 150+ native cloud services and developer tools with pre-built authenticated connectors.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] shrink-0" />
                    <span>Instant GitHub & GitLab repository webhooks</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] shrink-0" />
                    <span>Direct VPC peering to AWS, GCP, and Azure</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D3E8]">
                    <CheckCircle className="w-4 h-4 text-[#ec4899] shrink-0" />
                    <span>Slack, Discord, and PagerDuty alert forwarding</span>
                  </div>
                </div>
              </div>

              {/* Integrations Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['GitHub', 'AWS', 'Google Cloud', 'Slack', 'Stripe', 'Docker'].map((tool) => (
                  <div
                    key={tool}
                    className="p-4 rounded-xl bg-[#141224] border border-[#232035] flex items-center gap-3 hover:border-[#8650FF]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#201c38] flex items-center justify-center text-xs font-bold text-white">
                      {tool[0]}
                    </div>
                    <div className="text-xs font-semibold text-white">{tool}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
