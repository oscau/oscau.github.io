const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    volume: 1.0,
    autoplay: true,
    video: {
        url: 'https://dwz.cn/YKGFuWPc',
        type: 'flv',
        },
        pluginOptions: {
            flv: {
                // flv config
            },
        },
    });
console.log(dp.plugins.flv);