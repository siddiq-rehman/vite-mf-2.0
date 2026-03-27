import { loadRemote, registerRemotes } from '@module-federation/enhanced/runtime';

  registerRemotes([
    {
      entry: "http://localhost:4174/remoteEntry.js",
      entryGlobalName: "my-vite-mfe",
      name: "my-vite-mfe",
      shareScope: "default",
      type: "module"
    }
  ]);

  async function loadMFERemote() {
    const mfeModule = await loadRemote('my-vite-mfe/dynamic');
    const mfeDynamicElement = document.createElement('p');
    mfeDynamicElement.textContent = `MFE says: ${mfeModule.dynamicContent}`;
    document.querySelector('#app').appendChild(mfeDynamicElement);
  }

  loadMFERemote();
