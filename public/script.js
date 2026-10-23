// Dashboard AI prompt demo (mock data, dashboard.html only).
// Answers are pre-written and must stay consistent with the figures on the page:
// Q4 FY2025 revenue $142.8M (budget $138.0M), total costs $98.4M (budget $95.0M),
// operating income $44.4M, close day 8 of 12 with 22 of 28 tasks done.
if (document.getElementById('ai-prompt-section')) {
  var aiResponses = {
    consolidation: 'Consolidation risks before sign-off: (1) Eliminations are posted, but 2 of the 3 subsidiaries acquired in Q3 were eliminated for the first time. Review those entries before the management package. (2) Equity adjustments, still in progress, include the minority interest update for the German JV; the reporting package can\'t finalize without it. (3) FX translation for the 6 APAC entities used period-end rates loaded on day 2. Confirm there were no late rate changes. Estimated impact: up to a 2-day slip on the management reporting package if equity adjustments run past Jan 9.',
    close: 'January close: day 8 of 12, with 22 of 28 tasks complete (78%). Done: intercompany eliminations, revenue recognition review, and the fixed asset roll-forward. In progress: lease accounting (ASC 842) and equity adjustments, both due by Jan 9. Next up: tax provision (Jan 10) and the management reporting package (Jan 12). External audit deliverables are due Jan 15.',
    forecast: 'Q1 FY2026 forecast: revenue of $146.9M, up 2.9% on Q4\'s $142.8M. Key assumptions: Enterprise keeps growing about 12% quarter on quarter, Mid-Market holds near its $40M run-rate, and Government contracts ramp in February. Downside risk: FX headwinds could reduce revenue by $2.1M without hedging. Operating margin is expected at 31.4%, up 30bps on Q4\'s 31.1%, partly offset by $0.8M of R&D spend that shifted into Q1.',
    fx: 'FX exposure: a stronger dollar is the main risk. Unhedged, EUR/USD movement could reduce Q1 FY26 revenue by about $2.1M. Translation of the 6 APAC entities is the other sensitivity flagged for the January close. Hedging EUR receivables would remove most of the revenue risk.',
    cogs: 'COGS came in $4.4M over budget ($62.4M vs $58.0M, +7.6%). Primary driver: raw material costs in the APAC region rose 12% on supply chain disruption. Recommendation: review vendor contracts for Q1 and consider hedging commodity exposure. APAC procurement has identified two alternative suppliers that could cut unit costs by 6–8%.',
    margin: 'Gross margin: 56.3% in Q4 vs 54.8% a year earlier (+150bps). Operating margin: 31.1% vs 28.4% (+270bps), lifting operating income 18.5% to $44.4M. Drivers: (1) Enterprise mix shift added 80bps, (2) SG&A optimization saved $1.2M, (3) $0.8M of R&D spend shifted into Q1. Watch item: APAC COGS pressure could erode 60bps in Q1 if unaddressed.',
    department: 'Q4 department spend: $98.4M against a $95.0M budget (+3.6%). Over budget: Marketing at 117% ($15.8M vs $13.5M) and Sales at 110% ($28.6M vs $26.0M), $4.9M combined. Under budget: Finance (97.6%), Engineering (97.7%), and Operations (95.1%), $1.5M combined, leaving a net $3.4M overrun.',
    revenue: 'Q4 revenue: $142.8M, $4.8M (3.5%) above budget and up 8.2% on the prior year. By segment: Enterprise 45% (about $64M), Mid-Market 28% (about $40M), SMB 17% (about $24M), and Government 10% (about $14M). Enterprise is the growth engine, up 12% quarter on quarter, its strongest in three quarters.'
  };

  // Checked in order; the first topic with a matching keyword answers.
  var topics = [
    ['consolidation', ['consolidat', 'eliminat', 'intercompany', 'minority', 'subsidiar']],
    ['close', ['close', 'task', 'status', 'progress', 'deadline', 'audit']],
    ['forecast', ['forecast', 'q1', 'predict', 'outlook', 'next quarter', 'projection']],
    ['fx', ['fx', 'currency', 'exchange', 'hedg', 'eur', 'dollar']],
    ['cogs', ['cogs', 'cost of goods', 'material', 'supplier', 'apac']],
    ['margin', ['margin', 'yoy', 'year over year', 'trend', 'profit', 'operating income', 'ebit']],
    ['department', ['department', 'spend', 'opex', 'expense', 'budget', 'cost', 'marketing', 'engineering']],
    ['revenue', ['revenue', 'sales', 'segment', 'growth', 'enterprise', 'customer', 'top line']]
  ];

  var fallback = 'This demo answers a set of pre-written questions about its mock data. Try asking about revenue by segment, COGS variance, department spend, margins, the Q1 forecast, FX exposure, close status, or consolidation risks.';

  function matchResponse(input) {
    var q = input.toLowerCase();
    for (var i = 0; i < topics.length; i++) {
      var keywords = topics[i][1];
      for (var j = 0; j < keywords.length; j++) {
        if (q.indexOf(keywords[j]) !== -1) return aiResponses[topics[i][0]];
      }
    }
    return fallback;
  }

  function handlePrompt(query) {
    if (!query.trim()) return;
    var responseDiv = document.getElementById('ai-response');
    var responseText = document.getElementById('ai-response-text');
    responseDiv.classList.remove('hidden');
    responseText.textContent = 'Analyzing…';
    setTimeout(function () {
      responseText.textContent = matchResponse(query);
    }, 400);
  }

  document.getElementById('ai-prompt-submit').addEventListener('click', function () {
    handlePrompt(document.getElementById('ai-prompt-input').value);
  });

  document.getElementById('ai-prompt-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handlePrompt(this.value);
  });

  var quickBtns = document.querySelectorAll('.ai-quick-btn');
  for (var i = 0; i < quickBtns.length; i++) {
    quickBtns[i].addEventListener('click', function () {
      document.getElementById('ai-prompt-input').value = this.textContent;
      handlePrompt(this.textContent);
    });
  }
}
