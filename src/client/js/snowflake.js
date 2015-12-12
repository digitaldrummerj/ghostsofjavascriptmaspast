module.exports = drawSnowflake;
function drawSnowflake(ctx) {
ctx.save();
//ctx.fillStyle = "#000000";
ctx.translate(0,0);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(256,0);
ctx.lineTo(256,256);
ctx.lineTo(0,256);
ctx.closePath();
ctx.clip();
ctx.translate(0,0);
ctx.translate(0,0);
//ctx.scale(6.384995261136329,6.384995261136329);
ctx.translate(0,0);
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.save();
ctx.beginPath();
ctx.moveTo(35.135,14.044);
ctx.lineTo(37.464,12.705);
ctx.lineTo(37.464,10.025);
ctx.lineTo(35.135,8.682);
ctx.lineTo(32.809,10.025);
ctx.lineTo(32.809,12.104000000000001);
ctx.lineTo(30.29,13.553);
ctx.lineTo(30.29,11.766000000000002);
ctx.bezierCurveTo(30.29,11.478000000000002,30.055,11.245000000000001,29.769,11.245000000000001);
ctx.bezierCurveTo(29.482,11.245000000000001,29.247999999999998,11.478000000000002,29.247999999999998,11.766000000000002);
ctx.lineTo(29.247999999999998,14.150000000000002);
ctx.lineTo(27.401999999999997,15.213000000000003);
ctx.lineTo(27.401999999999997,10.532000000000004);
ctx.bezierCurveTo(27.401999999999997,10.244000000000003,27.168999999999997,10.011000000000003,26.880999999999997,10.011000000000003);
ctx.bezierCurveTo(26.592999999999996,10.011000000000003,26.359999999999996,10.244000000000003,26.359999999999996,10.532000000000004);
ctx.lineTo(26.359999999999996,15.811000000000003);
ctx.lineTo(24.029999999999994,17.154000000000003);
ctx.lineTo(24.564999999999994,12.220000000000002);
ctx.lineTo(20.569999999999993,15.147000000000002);
ctx.lineTo(20.569999999999993,12.304000000000002);
ctx.lineTo(25.000999999999994,9.744000000000002);
ctx.bezierCurveTo(25.248999999999995,9.600000000000001,25.334999999999994,9.283000000000001,25.190999999999995,9.032000000000002);
ctx.bezierCurveTo(25.046999999999997,8.784000000000002,24.729999999999997,8.697000000000001,24.479999999999997,8.842000000000002);
ctx.lineTo(20.568,11.1);
ctx.lineTo(20.568,8.968);
ctx.lineTo(22.485000000000003,7.861);
ctx.bezierCurveTo(22.733000000000004,7.717,22.819000000000003,7.3999999999999995,22.676000000000002,7.1499999999999995);
ctx.bezierCurveTo(22.531000000000002,6.8999999999999995,22.214000000000002,6.813999999999999,21.964000000000002,6.959);
ctx.lineTo(20.568,7.763);
ctx.lineTo(20.568,5.061);
ctx.lineTo(22.376,4.019);
ctx.lineTo(22.376,1.341);
ctx.lineTo(20.047,0);
ctx.lineTo(17.718,1.34);
ctx.lineTo(17.718,4.019);
ctx.lineTo(19.526,5.061);
ctx.lineTo(19.526,7.851);
ctx.lineTo(17.981,6.96);
ctx.bezierCurveTo(17.732000000000003,6.815,17.413,6.899,17.270000000000003,7.151);
ctx.bezierCurveTo(17.124000000000002,7.3999999999999995,17.209000000000003,7.718,17.460000000000004,7.862);
ctx.lineTo(19.526000000000003,9.056000000000001);
ctx.lineTo(19.526000000000003,11.188);
ctx.lineTo(15.466000000000005,8.843);
ctx.bezierCurveTo(15.220000000000004,8.699,14.898000000000005,8.782,14.755000000000004,9.033);
ctx.bezierCurveTo(14.609000000000004,9.282,14.694000000000004,9.600999999999999,14.945000000000004,9.745);
ctx.lineTo(19.526000000000003,12.389999999999999);
ctx.lineTo(19.526000000000003,15.146999999999998);
ctx.lineTo(15.529000000000003,12.220999999999998);
ctx.lineTo(16.064000000000004,17.153999999999996);
ctx.lineTo(13.581000000000003,15.723999999999997);
ctx.lineTo(13.579000000000002,10.532999999999998);
ctx.bezierCurveTo(13.579000000000002,10.244999999999997,13.345000000000002,10.011999999999997,13.058000000000002,10.011999999999997);
ctx.bezierCurveTo(12.771,10.011999999999997,12.537,10.244999999999997,12.537,10.532999999999998);
ctx.lineTo(12.539000000000001,15.125999999999998);
ctx.lineTo(10.692000000000002,14.062999999999997);
ctx.lineTo(10.692000000000002,11.767999999999997);
ctx.bezierCurveTo(10.692000000000002,11.478999999999997,10.459000000000001,11.246999999999996,10.171000000000001,11.246999999999996);
ctx.bezierCurveTo(9.885000000000002,11.246999999999996,9.65,11.478999999999996,9.65,11.767999999999997);
ctx.lineTo(9.65,13.464999999999996);
ctx.lineTo(7.2860000000000005,12.103999999999996);
ctx.lineTo(7.2860000000000005,10.024999999999995);
ctx.lineTo(4.96,8.682);
ctx.lineTo(2.63,10.025);
ctx.lineTo(2.63,12.705);
ctx.lineTo(4.96,14.044);
ctx.lineTo(6.766,13.005);
ctx.lineTo(9.132,14.366000000000001);
ctx.lineTo(7.659,15.218000000000002);
ctx.bezierCurveTo(7.41,15.361000000000002,7.325,15.679000000000002,7.468,15.929000000000002);
ctx.bezierCurveTo(7.564,16.096000000000004,7.739,16.189000000000004,7.92,16.189000000000004);
ctx.bezierCurveTo(8.007,16.189000000000004,8.097,16.168000000000003,8.18,16.120000000000005);
ctx.lineTo(10.176,14.970000000000004);
ctx.lineTo(12.025,16.033000000000005);
ctx.lineTo(8.032,18.338000000000005);
ctx.bezierCurveTo(7.783,18.483000000000004,7.698,18.799000000000003,7.842,19.051000000000005);
ctx.bezierCurveTo(7.938,19.218000000000007,8.113,19.311000000000007,8.293,19.311000000000007);
ctx.bezierCurveTo(8.380999999999998,19.311000000000007,8.472,19.28900000000001,8.552999999999999,19.242000000000008);
ctx.lineTo(13.068999999999999,16.63600000000001);
ctx.lineTo(15.535,18.05300000000001);
ctx.lineTo(11.012,20.04600000000001);
ctx.lineTo(15.536000000000001,22.04100000000001);
ctx.lineTo(13.107000000000001,23.43800000000001);
ctx.lineTo(8.555000000000001,20.81400000000001);
ctx.bezierCurveTo(8.308000000000002,20.66900000000001,7.987000000000002,20.75200000000001,7.844000000000001,21.00200000000001);
ctx.bezierCurveTo(7.699000000000002,21.25300000000001,7.784000000000002,21.57000000000001,8.034,21.71500000000001);
ctx.lineTo(12.062000000000001,24.04000000000001);
ctx.lineTo(10.214,25.10300000000001);
ctx.lineTo(8.182,23.92900000000001);
ctx.bezierCurveTo(7.934,23.78500000000001,7.615,23.86900000000001,7.470000000000001,24.120000000000008);
ctx.bezierCurveTo(7.325000000000001,24.370000000000008,7.4110000000000005,24.68700000000001,7.6610000000000005,24.832000000000008);
ctx.lineTo(9.171000000000001,25.70500000000001);
ctx.lineTo(6.766000000000002,27.08900000000001);
ctx.lineTo(4.9620000000000015,26.04900000000001);
ctx.lineTo(2.6320000000000014,27.39000000000001);
ctx.lineTo(2.6350000000000016,30.07000000000001);
ctx.lineTo(4.9620000000000015,31.411000000000012);
ctx.lineTo(7.290000000000001,30.07000000000001);
ctx.lineTo(7.290000000000001,27.99);
ctx.lineTo(9.656,26.631999999999998);
ctx.lineTo(9.656,28.285999999999998);
ctx.bezierCurveTo(9.656,28.572,9.889000000000001,28.807,10.177000000000001,28.807);
ctx.bezierCurveTo(10.464000000000002,28.807,10.698000000000002,28.572999999999997,10.698000000000002,28.285999999999998);
ctx.lineTo(10.698000000000002,26.031);
ctx.lineTo(12.543000000000003,24.968999999999998);
ctx.lineTo(12.543000000000003,29.519);
ctx.bezierCurveTo(12.543000000000003,29.808,12.776000000000003,30.04,13.064000000000004,30.04);
ctx.bezierCurveTo(13.351000000000004,30.04,13.585000000000004,29.808999999999997,13.585000000000004,29.519);
ctx.lineTo(13.585000000000004,24.369);
ctx.lineTo(16.068000000000005,22.939);
ctx.lineTo(15.533000000000005,27.873);
ctx.lineTo(19.530000000000005,24.947000000000003);
ctx.lineTo(19.530000000000005,27.659000000000002);
ctx.lineTo(14.950000000000005,30.305000000000003);
ctx.bezierCurveTo(14.700000000000005,30.450000000000003,14.615000000000004,30.767000000000003,14.759000000000004,31.019000000000002);
ctx.bezierCurveTo(14.904000000000003,31.264000000000003,15.220000000000004,31.351000000000003,15.471000000000004,31.207);
ctx.lineTo(19.530000000000005,28.863);
ctx.lineTo(19.530000000000005,30.997);
ctx.lineTo(17.465000000000003,32.19);
ctx.bezierCurveTo(17.215000000000003,32.332,17.130000000000003,32.647999999999996,17.274000000000004,32.9);
ctx.bezierCurveTo(17.417000000000005,33.147999999999996,17.733000000000004,33.235,17.986000000000004,33.092);
ctx.lineTo(19.530000000000005,32.199999999999996);
ctx.lineTo(19.530000000000005,35.032);
ctx.lineTo(17.723000000000006,36.074);
ctx.lineTo(17.723000000000006,38.753);
ctx.lineTo(20.051000000000005,40.092);
ctx.lineTo(22.379000000000005,38.753);
ctx.lineTo(22.379000000000005,36.074);
ctx.lineTo(20.572000000000006,35.027);
ctx.lineTo(20.572000000000006,32.28);
ctx.lineTo(21.968000000000007,33.085);
ctx.bezierCurveTo(22.049000000000007,33.132,22.139000000000006,33.154,22.22800000000001,33.154);
ctx.bezierCurveTo(22.40800000000001,33.154,22.58400000000001,33.06,22.68000000000001,32.893);
ctx.bezierCurveTo(22.82500000000001,32.645,22.73900000000001,32.326,22.48900000000001,32.181);
ctx.lineTo(20.57200000000001,31.075999999999997);
ctx.lineTo(20.57200000000001,28.943999999999996);
ctx.lineTo(24.48300000000001,31.201999999999995);
ctx.bezierCurveTo(24.56400000000001,31.248999999999995,24.65400000000001,31.269999999999996,24.743000000000013,31.269999999999996);
ctx.bezierCurveTo(24.923000000000012,31.269999999999996,25.099000000000014,31.175999999999995,25.195000000000014,31.008999999999997);
ctx.bezierCurveTo(25.336,30.765,25.25,30.444,25,30.3);
ctx.lineTo(20.567999999999998,27.746000000000002);
ctx.lineTo(20.567999999999998,24.945);
ctx.lineTo(24.566,27.873);
ctx.lineTo(24.029,22.939);
ctx.lineTo(26.36,24.282);
ctx.lineTo(26.36,29.52);
ctx.bezierCurveTo(26.36,29.807,26.592,30.041,26.881,30.041);
ctx.bezierCurveTo(27.167,30.041,27.402,29.808,27.402,29.52);
ctx.lineTo(27.402,24.88);
ctx.lineTo(29.247,25.944);
ctx.lineTo(29.247,28.285999999999998);
ctx.bezierCurveTo(29.247,28.572,29.48,28.807,29.768,28.807);
ctx.bezierCurveTo(30.056,28.807,30.289,28.572999999999997,30.289,28.285999999999998);
ctx.lineTo(30.289,26.541999999999998);
ctx.lineTo(32.806000000000004,27.99);
ctx.lineTo(32.806000000000004,30.072);
ctx.lineTo(35.13400000000001,31.410999999999998);
ctx.lineTo(37.46000000000001,30.072);
ctx.lineTo(37.46200000000001,27.392);
ctx.lineTo(35.13400000000001,26.049);
ctx.lineTo(33.330000000000005,27.088);
ctx.lineTo(30.848000000000006,25.66);
ctx.lineTo(32.281000000000006,24.831);
ctx.bezierCurveTo(32.53000000000001,24.688,32.61600000000001,24.37,32.47200000000001,24.121);
ctx.bezierCurveTo(32.327000000000005,23.871,32.010000000000005,23.785,31.76000000000001,23.929);
ctx.lineTo(29.805000000000007,25.058);
ctx.lineTo(27.955000000000005,23.996);
ctx.lineTo(31.910000000000004,21.714);
ctx.bezierCurveTo(32.158,21.570999999999998,32.24400000000001,21.255,32.099000000000004,21.003);
ctx.bezierCurveTo(31.956000000000003,20.753,31.637000000000004,20.669,31.389000000000003,20.811);
ctx.lineTo(26.910000000000004,23.394);
ctx.lineTo(24.558000000000003,22.040999999999997);
ctx.lineTo(29.082000000000004,20.044999999999998);
ctx.lineTo(24.558000000000003,18.049999999999997);
ctx.lineTo(26.947000000000003,16.674999999999997);
ctx.lineTo(31.388,19.237);
ctx.bezierCurveTo(31.469,19.285999999999998,31.559,19.307,31.648000000000003,19.307);
ctx.bezierCurveTo(31.828000000000003,19.307,32.002,19.212,32.098000000000006,19.046);
ctx.bezierCurveTo(32.24400000000001,18.797,32.159000000000006,18.479,31.909000000000006,18.335);
ctx.lineTo(27.990000000000006,16.073);
ctx.lineTo(29.839000000000006,15.01);
ctx.lineTo(31.759000000000007,16.117);
ctx.bezierCurveTo(31.841000000000008,16.164,31.932000000000006,16.186,32.019000000000005,16.186);
ctx.bezierCurveTo(32.199000000000005,16.186,32.37500000000001,16.092,32.471000000000004,15.926);
ctx.bezierCurveTo(32.61600000000001,15.677,32.53,15.358,32.28,15.213000000000001);
ctx.lineTo(30.884,14.408000000000001);
ctx.lineTo(33.328,13.002);
ctx.lineTo(35.135,14.044);
ctx.closePath();
ctx.moveTo(22.844,21.66);
ctx.lineTo(22.91,22.293);
ctx.lineTo(23.274,25.633);
ctx.lineTo(20.568,23.654);
ctx.lineTo(20.048000000000002,23.274);
ctx.lineTo(19.526000000000003,23.654);
ctx.lineTo(16.818000000000005,25.635);
ctx.lineTo(17.184000000000005,22.292);
ctx.lineTo(17.251000000000005,21.657);
ctx.lineTo(16.655000000000005,21.394);
ctx.lineTo(13.594000000000005,20.043999999999997);
ctx.lineTo(16.655000000000005,18.693999999999996);
ctx.lineTo(17.251000000000005,18.429999999999996);
ctx.lineTo(17.184000000000005,17.794999999999995);
ctx.lineTo(16.820000000000004,14.453999999999994);
ctx.lineTo(19.526000000000003,16.432999999999993);
ctx.lineTo(20.047000000000004,16.81299999999999);
ctx.lineTo(20.568000000000005,16.432999999999993);
ctx.lineTo(23.274000000000004,14.452999999999992);
ctx.lineTo(22.910000000000004,17.79499999999999);
ctx.lineTo(22.844000000000005,18.429999999999993);
ctx.lineTo(23.440000000000005,18.693999999999992);
ctx.lineTo(26.502000000000006,20.043999999999993);
ctx.lineTo(23.440000000000005,21.393999999999995);
ctx.lineTo(22.844,21.66);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.restore();
};