// Dashboard AI prompt demo (mock data, dashboard.html only)
if (document.getElementById('ai-prompt-section')) {
  var aiResponses = {
    'cogs': 'COGS exceeded budget by $4.4M (+7.6%). Primary driver: raw material costs in the APAC region increased 12% due to supply chain disruptions. Recommendation: review vendor contracts for Q1 and consider hedging commodity exposure. The APAC procurement team has identified two alternative suppliers that could reduce unit costs by 6-8%.',
    'forecast': 'Q4 FY2025 forecast projects revenue of $148.2M (+3.8% vs Q3). Key assumptions: Enterprise segment maintains 12% QoQ growth, Mid-Market stabilizes at $40M run-rate, and Gov contracts ramp in December. Downside risk: FX headwinds from EUR/USD could reduce topline by $2.1M without hedging. Operating margin expected at 31.2%, up 40bps from Q3.',
    'margin': 'Gross margin: 56.3% (Q4) vs 54.8% (Q4 prior year), +150bps improvement. Operating margin: 31.1% vs 28.4% YoY. Key drivers: (1) Enterprise mix shift added 80bps, (2) SG&A optimization saved $1.2M, (3) R&D spend timing shifted $0.8M to Q1. Watch item: COGS pressure from APAC could erode 60bps in Q1 if unaddressed.',
    'consolidation': 'Consolidation risk areas for January close: (1) Three new subsidiaries acquired in Q3 require first-time elimination entries -- intercompany balance reconciliation pending for 2 of 3 entities. (2) FX translation adjustments for 6 APAC entities need updated spot rates. (3) Minority interest calculation for the JV in Germany requires updated ownership waterfall. Estimated impact: 2-day delay to close if not addressed by Jan 3.'
  };

  function matchResponse(input) {
    var q = input.toLowerCase();
    if (q.indexOf('cogs') !== -1 || q.indexOf('cost') !== -1) return aiResponses['cogs'];
    if (q.indexOf('forecast') !== -1 || q.indexOf('q4') !== -1 || q.indexOf('predict') !== -1) return aiResponses['forecast'];
    if (q.indexOf('margin') !== -1 || q.indexOf('yoy') !== -1 || q.indexOf('trend') !== -1) return aiResponses['margin'];
    if (q.indexOf('consolidat') !== -1 || q.indexOf('risk') !== -1 || q.indexOf('close') !== -1) return aiResponses['consolidation'];
    return 'Based on current data, all key financial metrics are within expected ranges. Revenue is trending 3.5% above budget with operating income at $44.4M. Try asking about COGS variance, forecasts, margin trends, or consolidation risks for deeper analysis.';
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
