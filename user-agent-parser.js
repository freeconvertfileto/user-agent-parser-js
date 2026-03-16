(function() {
    var inputEl = document.getElementById('uaInput');
    var btnEl = document.getElementById('uaParse');
    var cardsEl = document.getElementById('uaCards');
    var rawEl = document.getElementById('uaRaw');

    function parseUA(ua) {
        var result = { browser: '', browserVersion: '', engine: '', os: '', osVersion: '', device: '' };

        // Browser detection
        if (/Edg[e\/](\d[\d.]*)/i.test(ua)) { result.browser = 'Microsoft Edge'; result.browserVersion = RegExp.$1; }
        else if (/OPR\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Opera'; result.browserVersion = RegExp.$1; }
        else if (/Vivaldi\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Vivaldi'; result.browserVersion = RegExp.$1; }
        else if (/YaBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Yandex Browser'; result.browserVersion = RegExp.$1; }
        else if (/SamsungBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Samsung Internet'; result.browserVersion = RegExp.$1; }
        else if (/UCBrowser\/(\d[\d.]*)/i.test(ua)) { result.browser = 'UC Browser'; result.browserVersion = RegExp.$1; }
        else if (/Firefox\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Firefox'; result.browserVersion = RegExp.$1; }
        else if (/Chrome\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Chrome'; result.browserVersion = RegExp.$1; }
        else if (/Safari\/(\d[\d.]*)/i.test(ua) && /Version\/(\d[\d.]*)/i.test(ua)) { result.browser = 'Safari'; result.browserVersion = RegExp.$1; }
        else if (/MSIE\s(\d[\d.]*)/i.test(ua)) { result.browser = 'Internet Explorer'; result.browserVersion = RegExp.$1; }
        else if (/Trident.*rv:(\d[\d.]*)/i.test(ua)) { result.browser = 'Internet Explorer'; result.browserVersion = RegExp.$1; }
        else { result.browser = 'Unknown'; }

        // Engine detection
        if (/Gecko\/\d/i.test(ua) && /Firefox/i.test(ua)) { result.engine = 'Gecko'; }
        else if (/AppleWebKit\/(\d[\d.]*)/i.test(ua)) { result.engine = 'WebKit/Blink'; }
        else if (/Trident\/(\d[\d.]*)/i.test(ua)) { result.engine = 'Trident'; }
        else if (/Presto\/(\d[\d.]*)/i.test(ua)) { result.engine = 'Presto'; }
        else { result.engine = 'Unknown'; }

        // OS detection
        if (/Windows NT 10\.0/i.test(ua)) { result.os = 'Windows'; result.osVersion = '10/11'; }
        else if (/Windows NT 6\.3/i.test(ua)) { result.os = 'Windows'; result.osVersion = '8.1'; }
        else if (/Windows NT 6\.2/i.test(ua)) { result.os = 'Windows'; result.osVersion = '8'; }
        else if (/Windows NT 6\.1/i.test(ua)) { result.os = 'Windows'; result.osVersion = '7'; }
        else if (/Windows/i.test(ua)) { result.os = 'Windows'; result.osVersion = ''; }
        else if (/Mac OS X (\d[_\d.]*)/i.test(ua)) { result.os = 'macOS'; result.osVersion = RegExp.$1.replace(/_/g, '.'); }
        else if (/Android (\d[\d.]*)/i.test(ua)) { result.os = 'Android'; result.osVersion = RegExp.$1; }
        else if (/iPhone OS (\d[_\d.]*)/i.test(ua) || /iPad.*OS (\d[_\d.]*)/i.test(ua)) { result.os = 'iOS'; result.osVersion = RegExp.$1.replace(/_/g, '.'); }
        else if (/CrOS/i.test(ua)) { result.os = 'Chrome OS'; result.osVersion = ''; }
        else if (/Linux/i.test(ua)) { result.os = 'Linux'; result.osVersion = ''; }
        else { result.os = 'Unknown'; }

        // Device detection
        if (/Mobile|Android.*Mobile|iPhone/i.test(ua)) { result.device = 'Mobile'; }
        else if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) { result.device = 'Tablet'; }
        else if (/bot|crawl|spider|slurp|Googlebot/i.test(ua)) { result.device = 'Bot/Crawler'; }
        else { result.device = 'Desktop'; }

        return result;
    }

    function render(ua) {
        var parsed = parseUA(ua);
        var cards = [
            ['Browser', parsed.browser, parsed.browserVersion ? 'v' + parsed.browserVersion : ''],
            ['Engine', parsed.engine, ''],
            ['Operating System', parsed.os, parsed.osVersion || ''],
            ['Device Type', parsed.device, '']
        ];
        var html = '';
        for (var i = 0; i < cards.length; i++) {
            html += '<div class="ua-card">';
            html += '<div class="ua-card-title">' + cards[i][0] + '</div>';
            html += '<div class="ua-card-value">' + cards[i][1] + '</div>';
            if (cards[i][2]) html += '<div class="ua-card-sub">' + cards[i][2] + '</div>';
            html += '</div>';
        }
        cardsEl.innerHTML = html;
        rawEl.textContent = ua;
    }

    // Auto-detect on load
    inputEl.value = navigator.userAgent;
    render(navigator.userAgent);

    btnEl.addEventListener('click', function() { render(inputEl.value.trim()); });
    inputEl.addEventListener('keydown', function(e) { if (e.key === 'Enter') render(inputEl.value.trim()); });
})();
