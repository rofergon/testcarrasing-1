import { useEffect } from 'react';

export function UnityWebGL() {
  useEffect(() => {
    const loadUnity = async () => {
      try {
        const script = document.createElement('script');
        script.src = '/Build/main.loader.js';
        script.async = true;

        const loadPromise = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = (e) => {
            console.error('Error loading Unity script:', e);
            reject(new Error('Failed to load Unity loader script'));
          };
        });

        document.body.appendChild(script);
        await loadPromise;

        // @ts-ignore - Unity's createUnityInstance is injected globally
        window.createUnityInstance(document.querySelector("#unity-canvas"), {
          dataUrl: "/Build/main.data.br",
          frameworkUrl: "/Build/main.framework.js.br",
          codeUrl: "/Build/main.wasm.br",
          streamingAssetsUrl: "/StreamingAssets",
          companyName: "DefaultCompany",
          productName: "My project",
          productVersion: "0.1.0",
          showBanner: (msg: string, type: string) => {
            console.log(`Unity Banner: ${type} - ${msg}`);
          }
        }, (progress: number) => {
          const progressBar = document.querySelector("#unity-progress-bar-full");
          if (progressBar) {
            (progressBar as HTMLElement).style.width = `${100 * progress}%`;
          }
        }).then((unityInstance: any) => {
          window.unityInstance = unityInstance;
          const loadingBar = document.querySelector("#unity-loading-bar");
          if (loadingBar) {
            loadingBar.remove();
          }
        });

      } catch (error) {
        console.error('Error loading Unity:', error);
      }
    };

    loadUnity();

    return () => {
      const script = document.querySelector('script[src="/Build/main.loader.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-12rem)]">
      <div id="unity-container" className="absolute inset-0">
        <canvas id="unity-canvas" width={960} height={600} tabIndex={-1}></canvas>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-logo-title-footer"></div>
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title">My project</div>
        </div>
      </div>
    </div>
  );
} 