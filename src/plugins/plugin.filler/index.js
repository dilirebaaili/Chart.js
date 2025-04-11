<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>体育外交图表示例</title>
  <!-- 引入 Chart.js 库 -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    canvas { max-width: 600px; margin: 20px; }
  </style>
</head>
<body>
  <h2>图1：时间序列图 —— 中美贸易数据变化（示例）</h2>
  <canvas id="timeseriesChart"></canvas>
  
  <h2>图2：柱状图 —— 国际形象评分对比（示例）</h2>
  <canvas id="barChart"></canvas>
  
  <h2>图3：散点图及回归线 —— 外交努力与经济影响关系（示例）</h2>
  <canvas id="scatterChart"></canvas>
  
  <script>
    // 图1：时间序列图
    const ctx1 = document.getElementById('timeseriesChart').getContext('2d');
    const timeseriesChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: [1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977],
        datasets: [{
          label: '贸易额（十亿美元）',
          data: [50, 52, 53, 55, 60, 65, 80, 110, 150, 170, 190, 210, 230],
          borderColor: 'blue',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: '年份'} },
          y: { title: { display: true, text: '贸易额（十亿美元）'} }
        }
      }
    });

    // 图2：柱状图
    const ctx2 = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['外交前', '外交后'],
        datasets: [{
          label: '国际形象评分',
          data: [45, 70],
          backgroundColor: ['red', 'green']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { 
            beginAtZero: true,
            max: 100,
            title: { display: true, text: '国际形象评分' }
          }
        }
      }
    });

    // 图3：散点图及回归线
    const ctx3 = document.getElementById('scatterChart').getContext('2d');
    // 模拟数据：生成30个点
    const scatterData = [];
    const regressionData = [];
    const n = 30;
    for (let i = 0; i < n; i++) {
      // 模拟“外交努力指数”，范围1到10
      let x = 1 + 9 * i / (n - 1);
      // 模拟数据：基础上乘以2，加上随机噪声
      let y = 2 * x + (Math.random() * 4 - 2);
      scatterData.push({ x: x, y: y });
      regressionData.push({ x: x, y: 2 * x });  // 简单线性关系
    }
    const scatterChart = new Chart(ctx3, {
      type: 'scatter',
      data: {
        datasets: [{
          label: '样本数据',
          data: scatterData,
          backgroundColor: 'blue'
        },
        {
          label: '回归线',
          data: regressionData,
          type: 'line',
          borderColor: 'red',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: '外交努力指数' } },
          y: { title: { display: true, text: '经济影响指数' } }
        }
      }
    });
  </script>
</body>
</html>
