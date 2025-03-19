module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // Matches `intro.md` in the `docs/` folder
      label: 'Introduction', // Sidebar label
    },

    {
      type: "category",
      label: "Tutorials-StepByStep-Guides",
      items: ["Tutorials-StepByStep-Guides/tutmd1", "Tutorials-StepByStep-Guides/tutmd2"],
    },
    {
      type: "category",
      label: "How-to-guides-Practical-Solutions",
      items: ["How-to-guides-Practical-Solutions/howmd1"],
    },
    {
      type: "category",
      label: "References-Apis-Funcs-Classes-Configs",
      items: ["References-Apis-Funcs-Classes-Configs/refmd1"],
    },
    {
      type: "category",
      label: "Explanations-Concepts-Design-DeepInsights",
      items: ["Explanations-Concepts-Design-DeepInsights/expmd1"],
    }


  ]
}