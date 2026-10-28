
let currentHls = null;
let isPoweredOn = true;
let currentVolume = 1;
let channelInputTimeout = null;
let currentChannelInput = "";
let currentChannelIndex = 0;

const channelListElement = document.getElementById('channel-list-items');
const CHANNEL_ORDER_KEY = 'tvChannelOrder';

function getChannelOrder() {
    return Array.from(
        channelListElement.querySelectorAll('li[data-channel]')
    )
        .map(item => item.dataset.channel)
        .filter(id => channels[id]);
}

function getChannelNumber(channelId) {
    return getChannelOrder().indexOf(channelId) + 1;
}

function refreshChannelNumbers() {
    Array.from(
        channelListElement.querySelectorAll('li[data-channel]')
    ).forEach((item, index) => {
        const channel = channels[item.dataset.channel];

        if (channel) {
            item.textContent = `${index + 1}. ${channel.name}`;
        }
    });
}

function setupDraggableChannelList() {
    try {
        const savedOrder = JSON.parse(
            localStorage.getItem(CHANNEL_ORDER_KEY) || '[]'
        );

        savedOrder.forEach(id => {
            const item = channelListElement.querySelector(
                `li[data-channel="${id}"]`
            );

            if (item) {
                channelListElement.appendChild(item);
            }
        });
    } catch (error) {
        console.warn('Kanal sırası yüklenemedi:', error);
    }

    refreshChannelNumbers();

    let draggedItem = null;

    channelListElement
        .querySelectorAll('li[data-channel]')
        .forEach(item => {
            item.addEventListener('dragstart', event => {
                draggedItem = item;
                item.classList.add('dragging');

                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData(
                    'text/plain',
                    item.dataset.channel
                );
            });

            item.addEventListener('dragend', () => {
                item.classList.remove('dragging');

                channelListElement
                    .querySelectorAll('.drag-over')
                    .forEach(el => el.classList.remove('drag-over'));

                draggedItem = null;
            });

            item.addEventListener('dragover', event => {
                event.preventDefault();

                if (draggedItem && draggedItem !== item) {
                    item.classList.add('drag-over');
                }
            });

            item.addEventListener('dragleave', () => {
                item.classList.remove('drag-over');
            });

            item.addEventListener('drop', event => {
                event.preventDefault();
                item.classList.remove('drag-over');

                if (!draggedItem || draggedItem === item) return;

                const rect = item.getBoundingClientRect();
                const insertAfter =
                    event.clientY > rect.top + rect.height / 2;

                channelListElement.insertBefore(
                    draggedItem,
                    insertAfter ? item.nextSibling : item
                );

                refreshChannelNumbers();

                localStorage.setItem(
                    CHANNEL_ORDER_KEY,
                    JSON.stringify(getChannelOrder())
                );
            });
        });
}


function showVolumeIndicator(volume) {
    const indicator = document.getElementById('volume-indicator');
    indicator.textContent = `Vol: ${Math.round(volume * 100)}%`;
    indicator.style.display = 'block';

    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}

function adjustVolume(change) {
    if (!isPoweredOn) return;

    const video = document.getElementById('video-player');

    currentVolume = Math.max(
        0,
        Math.min(1, currentVolume + change)
    );

    video.volume = currentVolume;
    showVolumeIndicator(currentVolume);
}

function inputChannel(number) {
    if (!isPoweredOn) return;

    currentChannelInput += number;

    const channelInput = document.getElementById('channel-input');
    channelInput.textContent = currentChannelInput;
    channelInput.style.display = 'block';

    if (channelInputTimeout) {
        clearTimeout(channelInputTimeout);
    }

    channelInputTimeout = setTimeout(() => {
        channelInput.style.display = 'none';

        const requestedNumber = parseInt(currentChannelInput, 10);
        const requestedChannelId = getChannelOrder()[requestedNumber - 1];

        if (requestedChannelId) {
            changeChannel(requestedChannelId);
        }

        currentChannelInput = "";
    }, 1000);
}

function togglePower() {
    const screen = document.getElementById('tv-screen');
    const video = document.getElementById('video-player');
    const powerBtn = document.querySelector('.remote-power');
    const ytEmbed = document.getElementById('youtube-embed');

    isPoweredOn = !isPoweredOn;

    if (!isPoweredOn) {
        screen.classList.add('off');
        powerBtn.classList.add('off');

        if (currentHls) {
            try {
                video.pause();
                video.removeAttribute('src');
                video.load();

                currentHls.detachMedia();
                currentHls.destroy();
                currentHls = null;
            } catch (e) {
                console.warn('HLS kapatma hatası:', e);
            }
        }

        ytEmbed.src = '';
        ytEmbed.style.display = 'none';
        video.style.display = 'none';
        document.getElementById('channel-iframe-container').style.display = 'none';
        document.getElementById('channel-iframe').src = '';
        const siteUrl = document.getElementById('site-url');
siteUrl.textContent = 'TV oynatıcı';
siteUrl.title = 'TV kapalı';
    } else {
        screen.classList.remove('off');
        powerBtn.classList.remove('off');
        video.style.display = 'block';

        setTimeout(() => changeChannel('trt1'), 100);
    }
}



function handlePlaybackError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}


function changeChannel(channelId) {
    if (!isPoweredOn) return;

    const channel = channels[channelId];
    if (!channel) return;

    currentChannelIndex = getChannelOrder().indexOf(channelId);

channelListElement.querySelectorAll('li[data-channel]').forEach(item => {
    item.classList.toggle(
        'active-channel',
        item.dataset.channel === channelId
    );
});

    const video = document.getElementById('video-player');
    const channelInfo = document.getElementById('channel-info');
    const errorMessage = document.getElementById('error-message');
    const ytEmbed = document.getElementById('youtube-embed');
    const siteUrl = document.getElementById('site-url');
    const iframeContainer = document.getElementById('channel-iframe-container');
    const channelIframe = document.getElementById('channel-iframe');

    if (currentHls) {
        currentHls.stopLoad();
        currentHls.detachMedia();
        currentHls.destroy();
        currentHls = null;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();

    errorMessage.style.display = 'none';

    // Önce TV8 iframe'ini gizle
    iframeContainer.style.display = 'none';
    channelIframe.src = '';

    
    // TV8 seçildiyse web sayfasını göster
    

if (channel.type === 'iframe') {
    video.style.display = 'none';
    ytEmbed.style.display = 'none';
    channelInfo.style.display = 'block';

    channelInfo.textContent = channel.name;
    document.title = channel.name + ' - Zapper';

    if (siteUrl) {
        siteUrl.textContent = channel.url;
    }

    iframeContainer.style.display = 'block';
    channelIframe.title = channel.name + ' Canlı Yayın';


channelIframe.src = channel.url;


    
const settings = channel.iframeSettings || {};

channelIframe.style.position = 'absolute';
channelIframe.style.width = settings.width || '100%';
channelIframe.style.height = settings.height || '100%';
channelIframe.style.left = settings.offsetX || '0';
channelIframe.style.top = settings.offsetY || '0';
channelIframe.style.transform = settings.scale != null
    ? `scale(${settings.scale})`
    : '';
channelIframe.style.transformOrigin = 'top left';
return;
}



    channelInfo.textContent =
        `${getChannelNumber(channelId)}. ${channel.name}`;
    channelInfo.style.display = 'block';

    document.title = `${channel.name} - Türk TV`;

    siteUrl.textContent =
        channel.url || 'Bu kanal için doğrudan yayın adresi yok';

    siteUrl.title = channel.url
        ? 'Yayın adresini kopyalamak için tıkla'
        : 'Doğrudan yayın adresi bulunmuyor';

if (channel.type === 'youtube' || channelId === 'youtube') {
    video.style.display = 'none';
    iframeContainer.style.display = 'none';

    const videoId = channel.type === 'youtube'
        ? channel.url
        : prompt(
            'YouTube video ID girin.\n\n' +
            'Örnek: https://youtube.com/watch?v=dQw4w9WgXcQ\n' +
            'Girilecek ID: dQw4w9WgXcQ'
        );

    if (videoId) {
        ytEmbed.src =
            `https://www.youtube.com/embed/${videoId.trim()}?autoplay=1&controls=1`;
        ytEmbed.style.display = 'block';
        channelInfo.style.display = 'none';
    } else {
        ytEmbed.src = '';
        ytEmbed.style.display = 'none';

        errorMessage.textContent =
            'Geçerli bir YouTube video ID girilmedi.';
        errorMessage.style.display = 'block';

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }

    return;
}

    
    

    ytEmbed.style.display = 'none';
    ytEmbed.src = '';
    video.style.display = 'block';

    if (!channel.url) {
        handlePlaybackError();
        return;
    }

    if (Hls.isSupported()) {
        const hls = new Hls({
            debug: false,
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
        });

        currentHls = hls;

        hls.loadSource(channel.url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            video.play().catch(error => {
                console.warn('Yayın başlatılamadı:', error);
                handlePlaybackError();
            });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            if (!data.fatal) return;

            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                hls.startLoad();
            } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                hls.recoverMediaError();
            } else {
                console.error('Yayın hatası:', data);
                handlePlaybackError();
                hls.destroy();

                if (currentHls === hls) {
                    currentHls = null;
                }
            }
        });
    } else if (
        video.canPlayType('application/vnd.apple.mpegurl')
    ) {
        video.src = channel.url;

        video.addEventListener('loadedmetadata', () => {
            video.play().catch(error => {
                console.warn('Yayın başlatılamadı:', error);
                handlePlaybackError();
            });
        }, { once: true });
    } else {
        handlePlaybackError();
    }

    setTimeout(() => {
        channelInfo.style.display = 'none';
    }, 3000);
}

function changeChannelRelative(direction) {
    if (!isPoweredOn) return;

    const order = getChannelOrder();
    if (!order.length) return;

    const currentId = order[currentChannelIndex] || order[0];
    const currentIndex = order.indexOf(currentId);

    const nextIndex =
        (currentIndex + direction + order.length) % order.length;

    changeChannel(order[nextIndex]);
}


function playTestUrl() {
    if (!isPoweredOn) return;

    const url = document.getElementById('test-url').value.trim();
    if (!url) return;

    const video = document.getElementById('video-player');
    const ytEmbed = document.getElementById('youtube-embed');
    const errorMessage = document.getElementById('error-message');
    const channelInfo = document.getElementById('channel-info');

    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();

    ytEmbed.style.display = 'none';
    ytEmbed.src = '';
    document.getElementById('channel-iframe-container').style.display = 'none';
    document.getElementById('channel-iframe').src = '';
    errorMessage.style.display = 'none';
    channelInfo.style.display = 'none';
    video.style.display = 'block';

    if (Hls.isSupported()) {
        const hls = new Hls({
            debug: false,
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
        });

        currentHls = hls;
        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            video.play().catch(error => {
                console.warn('Test yayını başlatılamadı:', error);
                handlePlaybackError();
            });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                console.error('Test URL hatası:', data);
                handlePlaybackError();
            }
        });
    } else if (
        video.canPlayType('application/vnd.apple.mpegurl')
    ) {
        video.src = url;

        video.addEventListener('loadedmetadata', () => {
            video.play().catch(error => {
                console.warn('Test yayını başlatılamadı:', error);
            });
        }, { once: true });
    } else {
        handlePlaybackError();
    }

    const siteUrl = document.getElementById('site-url');
    siteUrl.textContent = url;
    siteUrl.title = 'Test yayın adresi';
}

function setupSiteUrlCopy() {
    const siteUrl = document.getElementById('site-url');

    siteUrl.addEventListener('click', async () => {
        const order = getChannelOrder();
        const channelId = order[currentChannelIndex];
        const url = channels[channelId]?.url;

        const addressToCopy = siteUrl.textContent === url
            ? url
            : siteUrl.textContent;

        if (!addressToCopy || addressToCopy.includes('adres bulunmuyor')) {
            return;
        }

        try {
            await navigator.clipboard.writeText(addressToCopy);

            const originalText = siteUrl.textContent;
            siteUrl.textContent = 'Adres kopyalandı!';

            setTimeout(() => {
                siteUrl.textContent = originalText;
            }, 1000);
        } catch (error) {
            console.error('Adres kopyalanamadı:', error);
        }
    });
}

window.addEventListener('beforeunload', () => {
    if (currentHls) {
        try {
            currentHls.destroy();
            currentHls = null;
        } catch (error) {
            console.warn('Yayın kapatılırken hata:', error);
        }
    }
});

window.addEventListener('load', () => {
    setupDraggableChannelList();
    setupSiteUrlCopy();

    setTimeout(() => {
        const firstChannel = getChannelOrder()[0] || 'trt1';
        changeChannel(firstChannel);
    }, 100);
});

document.addEventListener('keydown', event => {
    if (!isPoweredOn && event.key.toLowerCase() !== 'p') return;

    if (event.key.toLowerCase() === 'p') {
        togglePower();
    }
});
