
export default class ViewportDiagnostics {
    constructor(game = null) {
        this.game = game;
        this.probe = document.createElement("div");

        Object.assign(this.probe.style, {
            position: "fixed",
            visibility: "hidden",
            pointerEvents: "none",
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingRight: "env(safe-area-inset-right, 0px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
            paddingLeft: "env(safe-area-inset-left, 0px)"
        });

        document.body.appendChild(this.probe);

        this.update = this.update.bind(this);

        window.addEventListener("resize", this.update);
        window.visualViewport?.addEventListener(
            "resize",
            this.update
        );
        window.visualViewport?.addEventListener(
            "scroll",
            this.update
        );

        this.update();
    }

    getSafeInsets() {
        const style = getComputedStyle(this.probe);

        return {
            top: parseFloat(style.paddingTop) || 0,
            right: parseFloat(style.paddingRight) || 0,
            bottom: parseFloat(style.paddingBottom) || 0,
            left: parseFloat(style.paddingLeft) || 0
        };
    }

    update() {
        const canvas = this.game?.canvas
            ?? document.querySelector("#main canvas");

        const rect = canvas?.getBoundingClientRect();
        const safeInsets = this.getSafeInsets();

        const viewportWidth =
            document.documentElement.clientWidth;

        const viewportHeight =
            document.documentElement.clientHeight;

        const metrics = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,

            clientWidth: viewportWidth,
            clientHeight: viewportHeight,

            visualWidth: window.visualViewport?.width ?? null,
            visualHeight: window.visualViewport?.height ?? null,
            visualOffsetTop: window.visualViewport?.offsetTop ?? null,

            devicePixelRatio: window.devicePixelRatio,

            canvasLeft: rect?.left ?? null,
            canvasTop: rect?.top ?? null,
            canvasWidth: rect?.width ?? null,
            canvasHeight: rect?.height ?? null,

            safeTop: safeInsets.top,
            safeRight: safeInsets.right,
            safeBottom: safeInsets.bottom,
            safeLeft: safeInsets.left,

            safeContentWidth: Math.max(
                0,
                viewportWidth - safeInsets.left - safeInsets.right
            ),

            safeContentHeight: Math.max(
                0,
                viewportHeight - safeInsets.top - safeInsets.bottom
            ),

            gameWidth: this.game?.scale?.gameSize?.width ?? null,
            gameHeight: this.game?.scale?.gameSize?.height ?? null,
            
            canvasWidth: canvas?.getBoundingClientRect().width ?? null,
            canvasHeight: canvas?.getBoundingClientRect().height ?? null,
            
        };

        console.table(metrics);

        return metrics;
    }

    destroy() {
        window.removeEventListener("resize", this.update);

        window.visualViewport?.removeEventListener(
            "resize",
            this.update
        );

        window.visualViewport?.removeEventListener(
            "scroll",
            this.update
        );

        this.probe.remove();
    }
}

/*

import ViewportDiagnostics from "./src/debug/ViewportDiagnostics.js";

// After creating the Phaser game:
const viewportDiagnostics = new ViewportDiagnostics(game);

// Optional: inspect measurements on demand.
window.inspectViewport = () =>
    viewportDiagnostics.update();

    */