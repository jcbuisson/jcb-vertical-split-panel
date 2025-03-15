import { LitElement, html, css } from 'lit';

export class JCBVerticalSplitPanel extends LitElement {

   static styles = css`
      .split-container {
         display: flex;
         width: 100%;
         height: 100%; /* Adjust height as needed */
         position: relative;
      }

      .left-panel, .right-panel {
         height: 100%;
         overflow: auto;
      }

      .splitter {
         width: 3px;
         background-color: #ccc;
         cursor: col-resize;
         height: 100%;
      }
   `

   static properties = {
      leftWidth: { type: Number },
      isResizing: { type: Boolean },
   }

   constructor() {
      super();
      this.leftWidth = 300 // Initial width of the left panel
      this.isResizing = false
   }

   startResize(e) {
      this.isResizing = true
      window.addEventListener('mousemove', this.resize.bind(this))
      window.addEventListener('mouseup', this.stopResize.bind(this))
   }

   resize(e) {
      if (this.isResizing) {
         this.leftWidth = e.clientX
         this.requestUpdate() // Trigger a re-render
      }
   }

   stopResize() {
      this.isResizing = false
      window.removeEventListener('mousemove', this.resize.bind(this))
      window.removeEventListener('mouseup', this.stopResize.bind(this))
   }

   render() {
      return html`
         <div class="split-container">
         
            <!-- Left Panel with Slot -->
            <div class="left-panel" style="width: ${this.leftWidth}px">
               <slot name="left-panel"></slot>
            </div>

            <!-- Draggable Splitter -->
            <div class="splitter" @mousedown=${this.startResize}></div>

            <!-- Right Panel with Slot -->
            <div class="right-panel" style="width: calc(100% - ${this.leftWidth}px)">
               <slot name="right-panel"></slot>
            </div>
         </div>
      `
   }
}

customElements.define('jcb-vertical-split-panel', JCBVerticalSplitPanel)
