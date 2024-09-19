const pieChartData = {
  labels: ['lisp', 'go'],
  datasets: [
    {
      label: 'Languages',
      data: [581, 229], // Removed trailing comma
      backgroundColor: [
        '#1EB163',
        '#344BFD',
      ],
      borderColor: 'transparent',
      borderWidth: 0,
    },
  ],
};

export default pieChartData;
