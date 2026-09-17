// ../data/functions.js

export async function getRandomKJVVerse() {

    const response = await fetch(
        'https://bible-api.com/data/kjv/random'
    );

    if (!response.ok) {
        throw new Error(`Bible API error: ${response.status}`);
    }

    const data = await response.json();

    const verseData = [];
    
    verseData.push({
        ref: data.random_verse.book + ' ' + data.random_verse.chapter + ':' + data.random_verse.verse,
        verse: data.random_verse.text
    });

    return verseData;
}

// ==================================================
// FUNCTIONS
// ==================================================

// BROWSER EXTERNAL PAGE
export function openExternalPage(url) {

    // Android APK
    if (window.Android?.openUrl) {
        window.Android.openUrl(url);
        return;
    }

    // Browser
    openBrowserOverlay(url);
}

// HELPER ^
function openBrowserOverlay(url) {

    // Don't create another popup if one is already open.
    if (document.getElementById('external-page-overlay')) {
        return;
    }

    // --------------------------------------------------
    // Backdrop
    // --------------------------------------------------

    const overlay =
        document.createElement('div');

    overlay.id =
        'external-page-overlay';

    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.45)',
        zIndex: '99999',

        // Prevent the Phaser canvas underneath
        // from receiving touch interaction.
        touchAction: 'none'
    });

    // --------------------------------------------------
    // Popup
    // --------------------------------------------------

    const popup =
        document.createElement('div');

    popup.id =
        'external-page-popup';

    Object.assign(popup.style, {
        position: 'absolute',

        width: '80vw',
        height: '80vh',

        left: '50%',
        top: '50%',

        transform: 'translate(-50%, -50%)',

        background: '#fff',

        overflow: 'hidden',

        boxSizing: 'border-box',

        borderRadius: '4px',

        boxShadow:
            '0 4px 20px rgba(0, 0, 0, 0.5)',

        touchAction: 'auto'
    });

    // --------------------------------------------------
    // Web page
    // --------------------------------------------------

    const iframe =
        document.createElement('iframe');

    iframe.src = url;

    iframe.setAttribute(
        'allowfullscreen',
        ''
    );

    Object.assign(iframe.style, {
        display: 'block',

        width: '100%',
        height: '100%',

        border: 'none',

        margin: '0',
        padding: '0'
    });

    // --------------------------------------------------
    // Close button
    // --------------------------------------------------

    const closeButton =
        document.createElement('button');

    closeButton.type =
        'button';

    closeButton.textContent =
        '×';

    closeButton.setAttribute(
        'aria-label',
        'Close'
    );

    Object.assign(closeButton.style, {
        position: 'absolute',

        top: '0',
        right: '0',

        width: '50px',
        height: '50px',

        padding: '0',
        margin: '0',

        border: 'none',

        background: '#333',
        color: '#fff',

        fontSize: '32px',
        lineHeight: '50px',

        textAlign: 'center',

        cursor: 'pointer',

        zIndex: '2',

        touchAction: 'manipulation'
    });

    // --------------------------------------------------
    // Close
    // --------------------------------------------------

    function closePopup() {
        overlay.remove();
    }

    closeButton.addEventListener(
        'click',
        closePopup
    );

    // --------------------------------------------------
    // Optional: tap backdrop to close
    // --------------------------------------------------

    overlay.addEventListener(
        'pointerdown',
        (event) => {

            if (event.target === overlay) {
                closePopup();
            }
        }
    );

    // --------------------------------------------------
    // Escape key
    // --------------------------------------------------

    document.addEventListener(
        'keydown',
        function handleEscape(event) {

            if (event.key !== 'Escape') {
                return;
            }

            closePopup();

            document.removeEventListener(
                'keydown',
                handleEscape
            );
        }
    );

    // --------------------------------------------------
    // Build popup
    // --------------------------------------------------

    popup.appendChild(iframe);
    popup.appendChild(closeButton);

    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}