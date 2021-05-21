var canvas1 = document.getElementById('canvas1').getContext('2d');
var canvas2 = document.getElementById('canvas2').getContext('2d');
var canvas3 = document.getElementById('canvas3').getContext('2d');
var canvas4 = document.getElementById('canvas4').getContext('2d');

var lastState1 = 'up';
var lastState2 = 'up';
var lastState3 = 'up';
var lastState4 = 'up';

var chart1 = new Chart(canvas1, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Tráfego de Saída (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(9,62,240)',
      ],
      borderColor: [
        'rgba(9,62,240)',
      ],
      borderWidth: 5
    }, {
      label: 'Tráfego de Entrada (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(0,241,77)',
      ],
      borderColor: [
        'rgba(0,241,77)',
      ],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        grid: {
          color: [
            '#373737',
          ]
        },
        ticks: {
          fontColor: "#ffffff",
          callback: function (value, index, values) {
            return value + 'Mbps';
          }
        }
      },
      x: {
        grid: {
          color: [
            '#373737',
          ]
        },
        ticks: {
          fontColor: "#ffffff",
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'UM TELECOM \n 200 Mbps',
        color: '#fff',
        font: {
          weight: '500',
          size: 26,
        },
        padding: 20
      },
      legend: {
        position: 'bottom',
      }
    },
    responsive: false,
  }
});

var chart2 = new Chart(canvas2, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Tráfego de Saída (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(9,62,240)',
      ],
      borderColor: [
        'rgba(9,62,240)',
      ],
      borderWidth: 5
    }, {
      label: 'Tráfego de Entrada (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(0,241,77)',
      ],
      borderColor: [
        'rgba(0,241,77)',
      ],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        grid: {
          color: [
            '#373737',
          ]
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + 'Mbps';
          }
        }
      },
      x: {
        color: '#fff',
        grid: {
          color: [
            '#373737',
          ]
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'MICROPOP \n 1 Gbps',
        color: '#fff',
        font: {
          weight: '500',
          size: 26,
        },
        padding: 20
      },
      legend: {
        position: 'bottom',
      }
    },
    responsive: false,
  }
});

var chart3 = new Chart(canvas3, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Tráfego de Saída (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(9,62,240)',
      ],
      borderColor: [
        'rgba(9,62,240)',
      ],
      borderWidth: 5
    }, {
      label: 'Tráfego de Entrada (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(0,241,77)',
      ],
      borderColor: [
        'rgba(0,241,77)',
      ],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        grid: {
          color: [
            '#373737',
          ]
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + 'Mbps';
          }
        }
      },
      x: {
        color: '#fff',
        grid: {
          color: [
            '#373737',
          ]
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'BBG L1 \n 500 Mbps',
        color: '#fff',
        font: {
          weight: '500',
          size: 26,
        },
        padding: 20
      },
      legend: {
        position: 'bottom',
      }
    },
    responsive: false,
  }
});

var chart4 = new Chart(canvas4, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Tráfego de Saída (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(9,62,240)',
      ],
      borderColor: [
        'rgba(9,62,240)',
      ],
      borderWidth: 5
    }, {
      label: 'Tráfego de Entrada (Mbps)',
      data: [],
      backgroundColor: [
        'rgba(0,241,77)',
      ],
      borderColor: [
        'rgba(0,241,77)',
      ],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        grid: {
          color: [
            '#373737',
          ]
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + 'Mbps';
          }
        }
      },
      x: {
        color: '#fff',
        grid: {
          color: [
            '#373737',
          ]
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'BBG L2 \n 500 Mbps',
        color: '#fff',
        font: {
          weight: '500',
          size: 26,
        },
        padding: 20
      },
      legend: {
        position: 'bottom',
      }
    },
    responsive: false,
  }
});

function start() {
  setInterval(getData, 1000);
  setInterval(getStatus, 1000);
}

function getData() {
  axios
    .get('http://localhost:3005/usage/1telecom')
    .then((response) => {
      let labels = response.data.labels;
      let values = [response.data.valuesTX, response.data.valuesRX, response.data.lastTX, response.data.lastRX];
      document.getElementById('bandtx1').innerHTML = response.data.lastTX;
      document.getElementById('bandrx1').innerHTML = response.data.lastRX;
      refreshChart(chart1, labels, values);
    }).catch(function (error) {
      console.error(error);
    })
    .then(function () {
    });

  axios
    .get('http://localhost:3005/usage/micropop')
    .then((response) => {
      let labels = response.data.labels;
      console.log(`labels: ${labels}`)
      let values = [response.data.valuesTX, response.data.valuesRX, response.data.lastTX, response.data.lastRX];
      document.getElementById('bandtx2').innerHTML = response.data.lastTX;
      document.getElementById('bandrx2').innerHTML = response.data.lastRX;
      refreshChart(chart2, labels, values);
    }).catch(function (error) {
      console.error(error);
    })
    .then(function () {
    });

  axios
    .get('http://localhost:3005/usage/bbg1')
    .then((response) => {
      let labels = response.data.labels;
      console.log(`labels: ${labels}`)
      let values = [response.data.valuesTX, response.data.valuesRX, response.data.lastTX, response.data.lastRX];
      document.getElementById('bandtx3').innerHTML = response.data.lastTX;
      document.getElementById('bandrx3').innerHTML = response.data.lastRX;
      refreshChart(chart3, labels, values);
    }).catch(function (error) {
      console.error(error);
    })
    .then(function () {
    });

  axios
    .get('http://localhost:3005/usage/bbg2')
    .then((response) => {
      let labels = response.data.labels;
      console.log(`labels: ${labels}`)
      let values = [response.data.valuesTX, response.data.valuesRX, response.data.lastTX, response.data.lastRX];
      document.getElementById('bandtx4').innerHTML = response.data.lastTX;
      document.getElementById('bandrx4').innerHTML = response.data.lastRX;
      refreshChart(chart4, labels, values);
    }).catch(function (error) {
      console.error(error);
    })
    .then(function () {
    });
}

function getStatus() {
  var audio = new Audio('assets/alarm.wav');
  axios
    .get('http://localhost:3005/links')
    .then((response) => {
      let link1 = response.data.link1["Port_X1.110"];
      let link2 = response.data.link2["Port_X2.398"];
      let link3 = response.data.link3["Port_X2.994"];
      let link4 = response.data.link4["Port_X2.995"];

      document.getElementById('status1').innerHTML = link1.status;
      if (link1.status === "up") {
        document.getElementById('status1').style.backgroundColor = '#00F14D';
        lastState1 = 'up';
      }
      else {
        document.getElementById('status1').style.backgroundColor = '#FF2130';
        if (lastState1 === 'up')
          audio.play();
        lastState1 = 'down';
      }
      document.getElementById('latencia1').innerHTML = link1.latency.toFixed(2) + ' ms';
      document.getElementById('jitter1').innerHTML = link1.jitter;
      document.getElementById('loss1').innerHTML = link1.packet_loss;
      if (link1.packet_loss > 0)
        document.getElementById('loss1').style.backgroundColor = '#FF2130';
      else
        document.getElementById('loss1').style.backgroundColor = '#585858';
      document.getElementById('sent1').innerHTML = link1.packet_sent;
      document.getElementById('received1').innerHTML = link1.packet_received;
      document.getElementById('sessions1').innerHTML = link1.session;
      document.getElementById('state1').innerHTML = new Date(link1.state_changed).toLocaleDateString();

      document.getElementById('status2').innerHTML = link2.status;
      if (link2.status === "up") {
        document.getElementById('status2').style.backgroundColor = '#00F14D';
        lastState2 = 'up';
      } else {
        document.getElementById('status2').style.backgroundColor = '#FF2130';
        if (lastState2 === 'up')
          audio.play();
        lastState2 = 'down';
      }
      document.getElementById('latencia2').innerHTML = link2.latency.toFixed(2) + ' ms';
      document.getElementById('jitter2').innerHTML = link2.jitter;
      document.getElementById('loss2').innerHTML = link2.packet_loss;
      if (link2.packet_loss > 0)
        document.getElementById('loss2').style.backgroundColor = '#FF2130';
      else
        document.getElementById('loss2').style.backgroundColor = '#585858';
      document.getElementById('sent2').innerHTML = link2.packet_sent;
      document.getElementById('received2').innerHTML = link2.packet_received;
      document.getElementById('sessions2').innerHTML = link2.session;
      document.getElementById('state2').innerHTML = new Date(link2.state_changed).toLocaleDateString();
      document.getElementById('status3').innerHTML = link3.status;
      if (link3.status === "up") {
        document.getElementById('status3').style.backgroundColor = '#00F14D';
        lastState3 = 'up';
      } else {
        document.getElementById('status3').style.backgroundColor = '#FF2130';
        if (lastState3 === 'up')
          audio.play();
        lastState3 = 'down';
      }
      document.getElementById('latencia3').innerHTML = link3.latency.toFixed(2) + ' ms';
      document.getElementById('jitter3').innerHTML = link3.jitter;
      document.getElementById('loss3').innerHTML = link3.packet_loss;
      if (link3.packet_loss > 0)
        document.getElementById('loss3').style.backgroundColor = '#FF2130';
      else
        document.getElementById('loss3').style.backgroundColor = '#585858';
      document.getElementById('sent3').innerHTML = link3.packet_sent;
      document.getElementById('received3').innerHTML = link3.packet_received;
      document.getElementById('sessions3').innerHTML = link3.session;
      document.getElementById('state3').innerHTML = new Date(link3.state_changed).toLocaleDateString();

      document.getElementById('status4').innerHTML = link4.status;
      if (link4.status === "up") {
        document.getElementById('status4').style.backgroundColor = '#00F14D';
        lastState4 = 'up';
      } else {
        document.getElementById('status4').style.backgroundColor = '#FF2130';
        if (lastState4 === 'up')
          audio.play();
        lastState4 = 'down';
      }
      document.getElementById('latencia4').innerHTML = link4.latency.toFixed(2) + ' ms';
      document.getElementById('jitter4').innerHTML = link4.jitter;
      document.getElementById('loss4').innerHTML = link4.packet_loss;
      if (link4.packet_loss > 0)
        document.getElementById('loss4').style.backgroundColor = '#FF2130';
      else
        document.getElementById('loss4').style.backgroundColor = '#585858';
      document.getElementById('sent4').innerHTML = link4.packet_sent;
      document.getElementById('received4').innerHTML = link4.packet_received;
      document.getElementById('sessions4').innerHTML = link4.session;
      document.getElementById('state4').innerHTML = new Date(link4.state_changed).toLocaleDateString();
    }).catch(function (error) {
      console.error(error);
    })
    .then(function () {
    });
}

function refreshChart(chart, labels, values) {
  removeData(chart);
  addData(chart, labels, values)
  chart.update();
}

function addData(chart, labels, values) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = values[0];
  chart.data.datasets[0].label = `Tráfego de Saída\n ${values[2]} Mbps`
  chart.data.datasets[1].data = values[1];
  chart.data.datasets[1].label = `Tráfego de Entrada\n ${values[3]} Mbps`
}

function removeData(chart) {
  chart.data.labels = [''];
  chart.data.datasets[0].data = [];
  chart.data.datasets[1].data = [];
}