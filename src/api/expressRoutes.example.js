export const expressRouteExamples = `
router.get('/quizzes/daily', auth, async (req, res) => {
  const seed = \`\${req.query.category}:\${new Date().toISOString().slice(0, 10)}\`;
  const questions = await quizService.getDailyQuestions(req.query.category, seed);
  res.json({ seed, questions });
});

router.put('/roadmaps/:slug/progress', auth, async (req, res) => {
  const progress = await roadmapService.saveProgress({
    userId: req.user.id,
    roadmapSlug: req.params.slug,
    completedNodes: req.body.completedNodes
  });
  res.json(progress);
});

router.post('/ai/roadmap', auth, async (req, res) => {
  const content = await aiService.generateCareerRoadmap({
    provider: process.env.AI_PROVIDER || 'openai',
    prompt: req.body.prompt,
    history: req.body.history,
    userId: req.user.id
  });
  res.json({ content });
});
`
