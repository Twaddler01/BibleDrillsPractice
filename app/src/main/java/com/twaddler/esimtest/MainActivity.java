package com.twaddler.bdp;

import android.app.Activity;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ImageButton;

import androidx.webkit.WebViewAssetLoader;

public class MainActivity extends Activity {

    private FrameLayout rootLayout;
    private WebView webView;

    // External page popup
    private FrameLayout externalContainer;
    private WebView externalWebView;
    private ImageButton externalCloseButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        );

        rootLayout = new FrameLayout(this);

        // ==================================================
        // MAIN PHASER WEBVIEW
        // ==================================================

        webView = new WebView(this);

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);

        webView.getSettings().setAllowFileAccess(false);
        webView.getSettings().setAllowContentAccess(false);

        webView.getSettings().setBuiltInZoomControls(false);
        webView.getSettings().setDisplayZoomControls(false);

        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setLoadWithOverviewMode(false);

        webView.setWebChromeClient(
                new WebChromeClient()
        );

        WebViewAssetLoader assetLoader =
                new WebViewAssetLoader.Builder()
                        .addPathHandler(
                                "/assets/",
                                new WebViewAssetLoader.AssetsPathHandler(this)
                        )
                        .build();

        webView.setWebViewClient(
                new WebViewClient() {

                    @Override
                    public WebResourceResponse shouldInterceptRequest(
                            WebView view,
                            WebResourceRequest request
                    ) {
                        return assetLoader.shouldInterceptRequest(
                                request.getUrl()
                        );
                    }

                    @Override
                    public WebResourceResponse shouldInterceptRequest(
                            WebView view,
                            String url
                    ) {
                        return assetLoader.shouldInterceptRequest(
                                Uri.parse(url)
                        );
                    }
                }
        );

        // ==================================================
        // JAVASCRIPT BRIDGE
        // ==================================================

        webView.addJavascriptInterface(
                new AndroidBridge(),
                "Android"
        );

        // ==================================================
        // ADD MAIN WEBVIEW
        // ==================================================

        rootLayout.addView(
                webView,
                new FrameLayout.LayoutParams(
                        FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.MATCH_PARENT
                )
        );

        setContentView(rootLayout);

        // ==================================================
        // LOAD PHASER
        // ==================================================

        webView.loadUrl(
                "https://appassets.androidplatform.net/assets/index.html"
        );
    }

    // ==================================================
    // EXTERNAL WEB PAGE
    // ==================================================

    private void openExternalPage(String url) {

        // Don't create another popup if one is already open.
        if (externalWebView != null) {
            return;
        }

        // --------------------------------------------------
        // Validate URL
        // --------------------------------------------------

        if (!isAllowedUrl(url)) {
            return;
        }

        // --------------------------------------------------
        // Popup container
        // --------------------------------------------------

        externalContainer =
                new FrameLayout(this);

        externalContainer.setBackgroundColor(
                Color.WHITE
        );

        int margin = dp(30);

        FrameLayout.LayoutParams containerParams =
                new FrameLayout.LayoutParams(
                        FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.MATCH_PARENT
                );

        containerParams.setMargins(
                margin,
                margin,
                margin,
                margin
        );

        // --------------------------------------------------
        // External WebView
        // --------------------------------------------------

        externalWebView =
                new WebView(this);

        externalWebView.setBackgroundColor(
                Color.WHITE
        );

        externalWebView.getSettings().setJavaScriptEnabled(true);
        externalWebView.getSettings().setDomStorageEnabled(true);

        externalWebView.getSettings().setAllowFileAccess(false);
        externalWebView.getSettings().setAllowContentAccess(false);

        externalWebView.getSettings().setBuiltInZoomControls(false);
        externalWebView.getSettings().setDisplayZoomControls(false);

        externalWebView.getSettings().setUseWideViewPort(true);
        externalWebView.getSettings().setLoadWithOverviewMode(false);

        externalWebView.setWebChromeClient(
                new WebChromeClient()
        );

        externalWebView.setWebViewClient(
                new WebViewClient()
        );

        externalContainer.addView(
                externalWebView,
                new FrameLayout.LayoutParams(
                        FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.MATCH_PARENT
                )
        );

        // --------------------------------------------------
        // Close button
        // --------------------------------------------------

        externalCloseButton =
                new ImageButton(this);

        externalCloseButton.setImageResource(
                android.R.drawable.ic_menu_close_clear_cancel
        );

        externalCloseButton.setBackgroundColor(
                Color.DKGRAY
        );

        externalCloseButton.setColorFilter(
                Color.WHITE
        );

        externalCloseButton.setOnClickListener(
                v -> closeExternalPage()
        );

        FrameLayout.LayoutParams closeParams =
                new FrameLayout.LayoutParams(
                        dp(50),
                        dp(50)
                );

        closeParams.gravity =
                Gravity.TOP | Gravity.RIGHT;

        externalContainer.addView(
                externalCloseButton,
                closeParams
        );

        // --------------------------------------------------
        // Add popup above Phaser
        // --------------------------------------------------

        rootLayout.addView(
                externalContainer,
                containerParams
        );

        // --------------------------------------------------
        // Load page
        // --------------------------------------------------

        externalWebView.loadUrl(url);
    }

    // ==================================================
    // URL VALIDATION
    // ==================================================

    private boolean isAllowedUrl(String url) {

        if (url == null || url.isEmpty()) {
            return false;
        }

        try {

            Uri uri = Uri.parse(url);

            return "https".equalsIgnoreCase(
                    uri.getScheme()
            );

        } catch (Exception e) {

            return false;
        }
    }

    // ==================================================
    // CLOSE EXTERNAL PAGE
    // ==================================================

    private void closeExternalPage() {

        if (externalContainer == null) {
            return;
        }

        if (externalWebView != null) {

            externalWebView.stopLoading();

            externalWebView.loadUrl(
                    "about:blank"
            );

            externalWebView.clearHistory();

            externalWebView.destroy();

            externalWebView = null;
        }

        rootLayout.removeView(
                externalContainer
        );

        externalContainer = null;
        externalCloseButton = null;
    }

    // ==================================================
    // JAVASCRIPT BRIDGE
    // ==================================================

    private class AndroidBridge {

        @JavascriptInterface
        public void openUrl(String url) {

            runOnUiThread(
                    () -> openExternalPage(url)
            );
        }
    }

    // ==================================================
    // DP HELPER
    // ==================================================

    private int dp(int value) {

        return Math.round(
                value *
                getResources()
                        .getDisplayMetrics()
                        .density
        );
    }

    // ==================================================
    // BACK BUTTON
    // ==================================================

    @Override
    public void onBackPressed() {

        // External popup is currently open.
        if (externalWebView != null) {

            // First go backward within the external page.
            if (externalWebView.canGoBack()) {

                externalWebView.goBack();

            } else {

                // No history -> close popup.
                closeExternalPage();
            }

            return;
        }

        // Otherwise handle the main WebView.
        if (webView != null && webView.canGoBack()) {

            webView.goBack();

        } else {

            super.onBackPressed();
        }
    }

    // ==================================================
    // CLEANUP
    // ==================================================

    @Override
    protected void onDestroy() {

        closeExternalPage();

        if (webView != null) {

            webView.stopLoading();
            webView.destroy();
            webView = null;
        }

        super.onDestroy();
    }
}